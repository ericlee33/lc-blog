const { description } = require('../../package');
const { getChildren } = require('vuepress-sidebar-atuo');

const sortFn = (a, b) => {
    const lastA = a.filename.split('.')[0];
    const lastB = b.filename.split('.')[0];

    return parseInt(lastA) > parseInt(lastB) ? 1 : -1;
};

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Secret Base',

    base: '/lc-blog/',

    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Leetcode',
                link: '/leetcode/',
            },
            {
                text: 'github',
                link: 'https://github.com/ericlee33',
            },
        ],
        // sidebar: [
        //     {
        //         title: 'leetcode',
        //         collapsable: true,
        //         children: getChildren('./leetcode/')
        //     },
        // ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        [
            'vuepress-plugin-auto-sidebar',
            {
                sort: {
                    mode: 'custom',
                    fn: sortFn,
                },
            },
        ],
    ],
};
