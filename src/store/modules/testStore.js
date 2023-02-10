// 모듈화 확인용 store
export const testStore = {
  // namespace를 true로 설정하여 컴포넌트에서 값을 호출하기 편하도록 한다.
  namespaced: true,
  state: () => ({
    // 컴포넌트에서 state.**moduleName**.stateName 형식으로 호출
    count: 0
  }),
  mutations: {
    // 컴포넌트에서 state.commit("**moduleName**/mutaionName", params)로 호출
    increment(state) {
      state.count++
    }
  },
  getters: {
    // 컴포넌트에서 computed(() => store.getters["**moduleName**/getterName"])로 호출
    doubleCount(state, getters, rootState) {
      return state.count * 2
    }
  },
  actions: {
    // 컴포넌트에서 store.dispatch("**moduleName**/actionName", params)로 호출
    incrementIfOddOnRootSum(state, commit, rootState) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
