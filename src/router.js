import Vue from 'vue';
import Router from 'vue-router';
import webView from '@/view/webView/route';
import Static from '@/view/static/route';

Vue.use(Router);
const routes = [
  // {
  //   path: '*',
  //   redirect: '/webView/tibi/choose'
  // },
  {
    name: 'test',
    component: () => import('./view/test'),
    meta: {
      title: '测试'
    }
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('@/view/goods'),
    meta: {
      title: '商品详情'
    }
  },
  {
    name: 'notice/list',
    component: () => import('./view/notice/list'),
    meta: {
      title: '公告列表'
    }
  },
  {
    name: 'notice/detail',
    component: () => import('./view/notice/detail'),
    meta: {
      title: '公告详情'
    }
  },
  {
    name: 'activity',
    component: () => import('./view/activity'),
    meta: {
      title: '邀请活动'
    }
  },
  { ...webView, ...Static }
];

// add route path
// function next(routes) {
//   routes.forEach(route => {
//     if (route.children) {
//       route.path = route.path || '/' + (route.name || '');
//       next(route.children)
//     } else {
//       route.path = route.path || '/' + (route.name || '');
//     }
//   });
// }
// next(routes)
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
})
console.log(routes)

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  console.log('to:', to)
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
