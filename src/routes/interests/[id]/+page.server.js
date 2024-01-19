import { fetchTemplate, mutationTemplate } from "$lib/utilities"

export const load = async ({ fetch, params }) => {

    const query = `query MyQuery {
        interestsEntries(id: "${params.id}") {
          ... on interests_default_Entry {
            id
            title
          }
        }
      }`

    const data = await fetchTemplate(fetch, query);
    return data;

}

export const actions = {
    edit: async ({ request, fetch }) => {
        const formData = await request.formData();

        const mutationQuery = `
            mutation MyMutation($id: ID!, $title: String!) {
                save_interests_default_Entry(id: $id, title: $title) {
                title
                }
            }
        `;

        const variables = {
            id: formData.get('id'),
            title: formData.get('title'),
        };

        const data = await mutationTemplate(fetch, mutationQuery, variables);
        console.log(data)
    }
}