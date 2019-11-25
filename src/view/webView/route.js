export default {
  name: 'webView',
  component: () => import('@/view/webView'),
  children: [
    {
      name: 'webView-tibi',
      path: 'tibi/choose',
      meta: { title: '' },
      component: () => import('@/view/webView/tibi/choose')
    },
    {
      name: 'webView-tibi',
      path: 'tibi/tibi',
      meta: { title: '' },
      component: () => import('@/view/webView/tibi/tibi')
    },
    {
      name: 'webView-tibi-success',
      path: 'tibi/success',
      meta: { title: '' },
      component: () => import('@/view/webView/tibi/success')
    },
  ]
}