<template>
  <div>
    <div>Test Component</div>
    <br />
    <br />
    <div>{{ this.$store.state.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',

  data() {
    // component에서 store 사용하는 방법
    // 1) state 사용 : this.$store.state.변수명
    // 모듈화 한 store 사용하는 경우
    // 컴포넌트에서 state.**moduleName**.stateName 형식으로 호출
    console.log('')
    console.log('이름 : ' + this.$store.state.name)

    // 2) Getters 사용 : this.$store.getters['경로명/함수명']
    // 컴포넌트에서 computed(() => store.getters["**moduleName**/getterName"])로 호출
    console.log('get 정보 : ' + this.$store.getters.getUserInfo)
    console.log('')

    // 3) Actions 사용 : this.$store.commit('경로명/함수명')
    // 컴포넌트에서 store.dispatch("**moduleName**/actionName", params)로 호출
    this.$store.commit('setUserInfo', 'changedUserName')

    console.log('')
    console.log('get 정보 : ' + this.$store.getters.getUserInfo)
    console.log('')
    return {
      data: 'MAIN'
    }
  },

  created() {},
  mounted() {},
  unmounted() {},
  updated() {},

  methods: {}
}
</script>

<style scoped></style>
