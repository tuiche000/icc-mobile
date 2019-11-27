export default {
  name: 'webView',
  component: () => import('@/view/webView'),
  children: [
    {
      name: 'webView-notice-list',
      path: 'notice/list',
      meta: { title: 'notice' },
      component: () => import('@/view/webView/notice/list')
    },
    {
      name: 'webView-notice-detail',
      path: 'notice/detail',
      meta: { title: 'notice' },
      component: () => import('@/view/webView/notice/detail')
    },
    {
      name: 'webView-tibi-choose',
      path: 'tibi/choose',
      meta: { title: 'Withdraw' },
      component: () => import('@/view/webView/tibi/choose')
    },
    {
      name: 'webView-tibi-tibi',
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
      name: 'webView-kuang-my',
      path: 'kuang/my',
      meta: { title: 'mine' },
      component: () => import('@/view/webView/kuang/my')
    },
    {
      name: 'webView-kuang-history',
      path: 'kuang/history',
      meta: { title: 'mine-history' },
      component: () => import('@/view/webView/kuang/history')
    },
  ]
}