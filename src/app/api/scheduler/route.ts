export const getFreeDates = async (data: any) => {
	const daysToSchedule = parseInt(process.env.DAYS_TO_SCHEDULE || (2 as any));
	const year = parseInt(data.year || data.query.get('year'));
	const month = parseInt(data.month || data.query.get('month'));
	if (!year || !month) return new Response('Not found', { status: 404 });

	const today = new Date();
	const startDay =
		today.getMonth() + 1 === month && today.getFullYear() === year
			? today.getDate() + daysToSchedule
			: 1;

	const daysInMonth = new Date(year, month, 0).getDate();
	const days = [];
	const daysOptions = [
		'Domingo',
		'Segunda',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta-feira',
		'Sábado',
	];

	for (let day = startDay; day <= daysInMonth; day++) {
		const auxDate = new Date(year, month - 1, day);
		const dayOfWeek = auxDate.getDay();
		const aux = {
			day: auxDate.toDateString().split(' ')[2],
			date: auxDate.toISOString().split('T')[0],
			formatedDate: auxDate.toLocaleDateString('pt-BR'),
			available: true,
			schedule: null,
			isWeekend: [0, 5, 6].includes(dayOfWeek), // 0 = segunda, 5 = sexta, 6 = sabado
			dayOfWeek: daysOptions[dayOfWeek],
			positionInWeek: dayOfWeek,
		};
		days.push(aux);
	}
	return { year, month, today, days };
};

const handler = async (req: any) => {
	const query = new URL(req.url).searchParams;
	const result = await getFreeDates({ query });
	return Response.json(result);
};

export { handler as GET, handler as POST };
