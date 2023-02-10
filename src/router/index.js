import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // 라우팅 : 웹 페이지간 이동하는 방법, 페이지간 이동을 위한 라이브러리
  //          메뉴를 클릭하거나 특정 버튼을 눌러서 사이트 내에서 특정 페이지로 이동할 때
  //          서버에 요청을 하고 새로운 페이지를 받아오는 형식으로 하는데
  //          vue는 SPA이기 때문에 페이지 이동할 때 url이 변경되면 변경된 요소의 영역에 컴포넌트를 갱신
  //          != DOM을 새로 갱신하는 것이 아님

  // SPA의 경우 초기 로딩 때 해당 웹앱의 모든 것을 불러옴
  // -> 초기 로딩 시간 매우 김, 이용하지 않을 수도 있는 페이지의 리소스까지 다 불러오니 사용자 이용 불편
  // --> 코드 스플리팅 (Code Spliting)
  //     : 해당 라우트를 방문했을 때만 관련 모듈 로딩
  //       webpackChunkname을 동일하게 설정하여 하나로 묶임

  // webpackPrefetch:true
  // 다른 페이지의 컴포넌트를 홈 화면에서 미리 받아 캐시에 담아둠
  // 해당 페이지가 열릴 때 시간을 절약할 수 있지만 첫 페이지에서 초기 로딩이 오래 걸릴 수 있음
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: '1_0 DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_0 DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: '1_1 DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_1 DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: '1_2 DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_2 DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: '1_3 DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_3 DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: '1_4 DataBindingRadioView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_4 DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: '1_5 DataBindingCheckboxView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_5 DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/attr',
    name: '1_6 DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_6 DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: '1_7 DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_7 DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: '1_8 DataBindingClassView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_8 DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: '1_9 DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/1_9 DataBindingStyleView.vue'
      )
  },
  {
    path: '/event/click',
    name: '2_1 EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/2_1 EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: '2_2 EventChangeView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/2_2 EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: '2_3 EventKeyView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/2_3 EventKeyView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
