import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以从别的文件引入
import home from './components/home.vue'
import list01 from './components/list01.vue'
import list02 from './components/list02.vue'
import list03 from './components/list03.vue'


// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/list01',
      component: list01 
    },
    {
      path: '/list02',
      component: list02
    },
    {
      path: '/list03',
      component: list03
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')