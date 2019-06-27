export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-sanity-studio',
                  apiId: '4876ed5f-d026-4668-b75a-ed529db58fdf'
                },
                {
                  buildHookId: '5d14bb6caa27f22ce02783dc',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-sanity',
                  apiId: '8106c8e0-59d3-41d8-91f9-c60396e03686'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ramey1986/sanity-nuxt-events-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
