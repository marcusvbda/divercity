import { getFreeDates } from './functions';

export async function GET(req: any) {
	const query = new URL(req.url).searchParams;
	const result = await getFreeDates({ query });
	return Response.json(result);
}
