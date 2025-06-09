import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { recentInvoice } from '$lib/data/recentInvoice';

export const GET: RequestHandler = async () => {
    return json(recentInvoice)
};