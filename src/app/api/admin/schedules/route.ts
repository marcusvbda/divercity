import { getFreeDates } from '../../scheduler/functions';

const getAllDates = async (data: any) => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;
	const year = parseInt(data.year || data.query.get('year') || currentYear);
	const month = parseInt(data.month || data.query.get('month') || currentMonth);
	const result = await getFreeDates({ year, month });
	return result;
};

const handler = async (req: any) => {
	const query = new URL(req.url).searchParams;
	const results = await getAllDates({ query });
	return Response.json(results);
};

export { handler as GET };
