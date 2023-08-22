import nProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";
import DashboardIndex from "../views/dashboard/index.vue";
import Index from "../views/index.vue";
import Login from "../views/login/index.vue";
import WriteIndex from "../views/content/article/write/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index/dashboard"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/index",
      name: "Index",
      component: Index,
      children: [
        {
          path: "dashboard",
          name: "DashboardIndex",
          component: DashboardIndex,
          //menuName 应该从后端接收
          meta: {
            menuName: "主页"
          }
        },
        {
          path: "write",
          name: "WriteIndex",
          component: WriteIndex,
          meta: {
            menuName: "写文章"
          }
        }
      ]
    },
  ],
});

/**
 * 前置路由守卫
 */
router.beforeEach((to, from) => {
  //每次切换页面时调用进度条
  nProgress.start();
  //跳转
  return true;
});

/**
 * 后置路由守卫
 */
router.afterEach(() => {
  //页面切换完成关闭进度条
  nProgress.done();
});

export default router;
