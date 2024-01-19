import { fetchTemplate } from '$lib/utilities';
import { queries } from '$lib/queries';

export const load = async ({ fetch }) => {
    try {
      const data = await fetchTemplate(fetch, queries.about);
      return data;

    } catch (error) {
        console.error(error)
    }
}

