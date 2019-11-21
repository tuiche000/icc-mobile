export default {
  name: 'webView',
  component: () => import('@/view/webView'),
  children: [
    {
      name: 'webView-tibi',
      path: 'tibi/choose',
      meta: { title: '提币' },
      component: () => import('@/view/webView/tibi/choose')
    },
    {
      name: 'webView-tibi',
      path: 'tibi/tibi',
      meta: { title: '提币' },
      component: () => import('@/view/webView/tibi/tibi')
    },
    {
      name: 'webView-tibi-success',
      path: 'tibi/success',
      meta: { title: '提币成功' },
      component: () => import('@/view/webView/tibi/success')
    },
  ]
}