// 모듈화 확인용 store
// 회원 관리를 위한 store

export const memberStore = {
  state: {
    name: 'userName'
  },
  mutations: {
    setUserInfo(state, name) {
      state.name = name
    }
  },
  actions: {
    test() {
      console.log(state.name)
    }
  },
  getters: {
    getUserInfo(state) {
      return 'name : ' + state.name
    }
  }
}
