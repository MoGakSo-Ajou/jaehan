// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MoGakso Study',
  tagline: `모각소 모임에서 공부한 내용을 정리해보았습니다`,
  url: 'https://wisesaturn.github.io',
  baseUrl: '/MoGakso-TIL/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wisesaturn', // Usually your GitHub org/user name.
  projectName: 'MoGakso-TIL', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['en', 'ko'],
  },

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    'docusaurus-plugin-sass',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/global.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/1789.png',
      navbar: {
        title: 'MoGakso Study',
        logo: {
          alt: 'Site Logo',
          src: 'img/Mogakso.png',
          href: 'https://wisesaturn.github.io/MoGakso-TIL',
          target: '_self',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Study',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          { 
            to: 'https://github.com/wisesaturn', 
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Mogakso 1789 Teams Logo',
          src: 'img/1789.png',
          href: 'https://github.com/MoGakSo-Ajou',
          width: 113,
          height: 64,
        },
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Personal TIL',
                to: 'https://wisesaturn.github.io/TIL',
              },
              {
                label: 'Blog',
                to: 'https://wisesaturn.github.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wisesaturn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MoGakso TIL`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
