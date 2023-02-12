// 모듈화 확인용 store
// 회원 관리를 위한 store

export const memberStore = {
  namespace: true,
  state: {
    // 컴포넌트에서 state.**moduleName**.stateName 형식으로 호출
    name: 'userName'
  },
  getters: {
    // 컴포넌트에서 computed(() => store.getters["**moduleName**/getterName"])로 호출
    getUserInfo(state) {
      return 'name : ' + state.name
    }
  },
  mutations: {
    // 컴포넌트에서 state.commit("**moduleName**/mutaionName", params)로 호출
    setUserInfo(state, name) {
      state.name = name
    }
  },
  actions: {
    // 컴포넌트에서 store.dispatch("**moduleName**/actionName", params)로 호출
    test() {
      console.log(state.name)
    }
  }
}
