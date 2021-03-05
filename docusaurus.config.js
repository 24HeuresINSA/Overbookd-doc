config = require('dotenv').config()

module.exports = {
  title: 'Overbookd',
  tagline: 'Event planner',
  url: 'https://overbookd.24heures.org/',
  baseUrl: '/docs/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: '24HeuresINSA',
  projectName: 'overbookd',
  themeConfig: {
    navbar: {
      title: 'Overbookd',
      logo: {
        alt: 'Overbookd Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'overbookd/introduction',
          activeBasePath: 'overbookd',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: "api",
          activeBasePath: "api",
          label: "API",
          position: "left",
        },
        {
          to: "db/introduction",
          activeBasePath: "db",
          label: "Modèle de données",
          position: "left"
        },
        {
          to: 'downloads',
          label: 'Téléchargements',
          position: 'left',
        },
        {
          href: 'https://github.com/24HeuresINSA',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Express',
              href: 'https://expressjs.com/',
            },
            {
              label: 'Keycloak',
              href: 'https://www.keycloak.org/',
            },
            {
              label: 'VueJS',
              href: 'https://vuejs.org/',
            },
            {
              label: 'Docker',
              href: 'https://docs.docker.com/',
            },
            {
              label: 'Sequelize',
              href: 'https://sequelize.org/',
            },
          ],
        },
        {
          title: '24 heures de l\'INSA',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/24heuresinsa'
            },
            {
              label: 'Site',
              href: 'https://24heures.org'
            }
          ]
        },
        {
          title: 'Plus',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/24HeuresINSA',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project A Built with Docusaurus.`,
    },
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME
    }
  },
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      }
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'db',
        path: 'db',
        routeBasePath: 'db',
        include: ['**/*.md', '**/*.mdx'],
        sidebarPath: require.resolve('./sidebars/db.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'overbookd',
        path: 'overbookd',
        routeBasePath: 'overbookd',
        include: ['**/*.md', '**/*.mdx'],
        sidebarPath: require.resolve('./sidebars/overbookd.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}']
      }
    ],
    ["docusaurus-plugin-openapi", {
      openapiPath: require.resolve("./overbookd.json"),
    }],
    "docusaurus2-dotenv",
  ],
};
