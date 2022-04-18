import { createRouter, createWebHistory } from "vue-router";
import PAGES from "@/pages/PAGES"
import Foo from "@/pages/Foo"
import Bar from "@/pages/Bar"
import HOME from "@/pages/HOME";
import MyComponent from "@/components/MyComponent"
import PostPageVuex from "@/components/PostPageVuex"
// import PagesVuex from "@/pages/PagesVuex"


const routes = [
  { path: '/',             component: HOME },
  { path: '/pages/:id',    component: PAGES },
  // { path: '/pagesVuex/:id',component: PagesVuex },
  { path: '/foo',          component: Foo },
  { path: '/bar',          component: Bar },
  { path: '/myComponent',  component: MyComponent },
  { path: '/vuex',         component: PostPageVuex },
]

const router = createRouter({
  routes, 
  history: createWebHistory(),
});

export default router;
