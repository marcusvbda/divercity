import { getFreeDates } from '../../scheduler/route';

const getAllDates = async (data: any) => {
	const currentYear = new Date().getFullYear();
	const year = parseInt(data.year || data.query.get('year') || currentYear);
	const dates = [];

	for (let month = 1; month <= 12; month++) {
		const result = await getFreeDates({ year, month });
		dates.push(result);
	}

	return dates;
};

const handler = async (req: any) => {
	const query = new URL(req.url).searchParams;
	const results = await getAllDates({ query });
	return Response.json(results);
};

export { handler as GET };
