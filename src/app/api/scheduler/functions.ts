import db from '@/firestore';

import { collection, getDocs, where, query } from 'firebase/firestore';
const getSchedulesByMonthYear = async (month: number, year: number) => {
	const q = query(
		collection(db, 'schedules'),
		where('month', '==', month),
		where('year', '==', year),
	);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => {
		const data = doc.data();
		return {
			id: doc.id,
			data: data,
			date: `${data.year}-${data.month.toString().padStart(2, '0')}-${data.day.toString().padStart(2, '0')}`,
		};
	});
};

export const getFreeDates = async (data: any) => {
	const daysToSchedule = parseInt(process.env.DAYS_TO_SCHEDULE || (2 as any));
	const year = parseInt(data.year || data.query.get('year'));
	const month = parseInt(data.month || data.query.get('month'));
	const schedules = await getSchedulesByMonthYear(month, year);
	if (!year || !month) return new Response('Not found', { status: 404 });

	const today = new Date();
	const startDay = data?.startDay
		? data.startDay
		: today.getMonth() + 1 === month && today.getFullYear() === year
			? today.getDate() + daysToSchedule
			: 1;

	const daysInMonth = new Date(year, month, 0).getDate();
	const days = [];
	const daysOptions = [
		'Domingo',
		'Segunda-feira',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta-feira',
		'Sábado',
	];

	for (let day = startDay; day <= daysInMonth; day++) {
		const auxDate = new Date(year, month - 1, day);
		const dayOfWeek = auxDate.getDay();
		const date = auxDate.toISOString().split('T')[0];
		const schedule = schedules.find((x: any) => date === x.date);
		const formatedAux = date.split('-');
		const aux = {
			day: formatedAux[2],
			month: formatedAux[1],
			year: formatedAux[0],
			date,
			formatedDate: auxDate.toLocaleDateString('pt-BR'),
			available: schedule ? false : true,
			schedule,
			isWeekend: [0, 5, 6].includes(dayOfWeek), // 0 = segunda, 5 = sexta, 6 = sabado
			dayOfWeek: daysOptions[dayOfWeek],
			positionInWeek: dayOfWeek,
		};
		days.push(aux);
	}
	return { year, month, today, days };
};
