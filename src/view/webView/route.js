export default {
  name: 'webView',
  component: () => import('@/view/webView'),
  children: [
    {
      name: 'webView-tibi',
      path: 'tibi/choose',
      meta: { title: 'Withdraw' },
      component: () => import('@/view/webView/tibi/choose')
    },
    {
      name: 'webView-tibi',
      path: 'tibi/tibi',
      meta: { title: 'Withdraw' },
      component: () => import('@/view/webView/tibi/tibi')
    },
    {
      name: 'webView-tibi-success',
      path: 'tibi/success',
      meta: { title: 'success' },
      component: () => import('@/view/webView/tibi/success')
    },
    {
      name: 'webView-notice-success',
      path: 'notice/list',
      meta: { title: 'success' },
      component: () => import('@/view/webView/tibi/success')
    },
  ]
}