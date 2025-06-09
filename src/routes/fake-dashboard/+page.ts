import type { PageLoad } from './$types';



export const load = ({ fetch }) => {

    const fetchInvoice = async () => {
        const res = await fetch('/api/recentInvoice')
        const data = await res.json()
        return data.recentInvoice
    }

    return {
        recentInvoice: fetchInvoice()
    };
}