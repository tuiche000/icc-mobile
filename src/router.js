import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/goods'
  },
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
    component: () => import('./view/goods'),
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
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
