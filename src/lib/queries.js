export const queries = {
    home: `query MyQuery {
        homepageEntries {
          ... on homepage_homepage_Entry {
            id
            header
            heroImage {
              url
              alt
            }
            description
          }
        }
      }`,

    about: `query MyQuery {
        aboutEntries {
            ... on about_about_Entry {
            id
            header
            description
            heroImage {
                url
                alt
            }
            }
        }
    }`,
    interests: `query MyQuery {
      interestsEntries {
        ... on interests_default_Entry {
          id
          interestContent
          title
        }
      }
    }`
}