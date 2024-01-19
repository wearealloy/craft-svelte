import { env } from '$lib/env'
import { error } from '@sveltejs/kit';

const url = env.API_URL;
const apiKey = env.API_TOKEN;

export async function fetchTemplate(fetch, query){
    const response = await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        }
    )

    if (!response.ok) {

        error(404, {
			message: 'Query Error'
		});
    }

    const { data } = await response.json()
    return data;
}


export async function mutationTemplate(fetch, query, variables){
    const response = await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables }),
        }
    )

    if (!response.ok) {

        error(404, {
			message: 'Query Error'
		});
    }

    const { data } = await response.json()
    return data;
}