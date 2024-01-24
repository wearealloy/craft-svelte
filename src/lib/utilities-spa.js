import { error } from '@sveltejs/kit';

const API_URL='http://svelte-craft.test/api/';
const CMS_URL='http://svelte-craft.test/';
const API_TOKEN='Bearer ry4yuUJ9qjUaptTTu1xyOhnpSKzc5hmv';

const url = API_URL;
const apiKey = API_TOKEN;

export async function fetchTemplate(query){
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