import { getFreeDates } from './functions';

const handler = async (req: any) => {
	const query = new URL(req.url).searchParams;
	const result = await getFreeDates({ query });
	return Response.json(result);
};

export { handler as GET, handler as POST };
