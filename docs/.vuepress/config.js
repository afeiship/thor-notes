module.exports = {
  base: '/thor-notes/',
  title: 'Thor notes',
  host: '0.0.0.0',
  description: 'Thor notes',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: ['/001-thor-help.md', '/002-hello.md']
      }
    ]
  }
};
