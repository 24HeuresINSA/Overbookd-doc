config = require('dotenv').config()

module.exports = {
  title: 'Project A',
  tagline: 'Event planner',
  url: 'https://orgassomakerify.debrej.fr/',
  baseUrl: '/docs/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: '24HeuresINSA', // Usually your GitHub org/user name.
  projectName: 'project_a', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Project A',
      logo: {
        alt: 'Project A Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    ["docusaurus-plugin-openapi", {
      openapiPath: require.resolve("./project_a.json"),
    }],
    "docusaurus2-dotenv",
  ],
};
