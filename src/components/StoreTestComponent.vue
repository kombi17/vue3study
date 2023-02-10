<template>
  <div>
    <div>Store Test Component</div>
    <br />
    <br />
    <div>{{ this.$store.state.name }}</div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'StoreTestComponent',

  data() {
    // component에서 store 사용하는 방법
    // 1) state 사용 : state.**moduleName**.변수명
    console.log('')
    console.log('이름 : ' + state.memberStore.name)

    // 2) Getters 사용 : computed(() => store.getters["**moduleName**/getterName"])
    console.log(
      'get 정보 : ' + computed(() => store.getters['memberStore/getUserInfo'])
    )
    console.log('')

    // 3) Mutation 사용 : state.commit("**moduleName**/mutaionName", params)
    this.$store.commit('setUserInfo', 'changedUserName')

    // 4) actions 사용 : store.dispatch("**moduleName**/actionName", params)

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
