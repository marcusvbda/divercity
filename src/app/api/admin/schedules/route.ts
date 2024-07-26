import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore';
import { getFreeDates } from '../../scheduler/functions';
import db from '@/firestore';

const getAllDates = async (data: any) => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;
	const year = parseInt(data.year || data.query.get('year') || currentYear);
	const month = parseInt(data.month || data.query.get('month') || currentMonth);
	const result = await getFreeDates({ year, month, startDay: 1 });
	return result;
};

export async function GET(req: any) {
	const query = new URL(req.url).searchParams;
	const results = await getAllDates({ query });
	return Response.json(results);
}

export async function DELETE(req: any) {
	const body = await req.json();
	if (body?.schedule?.id) {
		await deleteDoc(doc(db, 'schedules', body.schedule.id));
	}
	return Response.json({ success: true });
}

export async function POST(req: any) {
	const body = await req.json();
	const payload = {
		...body,
		day: parseInt(body.day),
		month: parseInt(body.month),
		year: parseInt(body.year),
	};
	await addDoc(collection(db, 'schedules'), payload);
	return Response.json({ success: true });
}
