module.exports = {
    title: '轱辘 UI',
    description: '一个简单实用的 UI 框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: '/https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get_started/',
                ]
            },

            {
                title: '组件',
                children: [ '/components/button']
            },

        ]
    }

}