export default {
  name: 'static',
  component: () => import('@/view/static'),
  children: [
    {
      name: 'static-strategy',
      path: 'strategy',
      meta: { title: 'Strategy' },
      component: () => import('@/view/static/strategy')
    },
    {
      name: 'static-notice',
      path: 'notice',
      meta: { title: 'notice' },
      component: () => import('@/view/static/notice')
    },
  ]
}