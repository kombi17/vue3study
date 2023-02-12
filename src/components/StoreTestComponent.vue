<template>
  <div>
    <div>Store Test Component</div>
    <br />
    <br />
    <div>{{ getinfo }}</div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'StoreTestComponent',
  // component에서 store 사용하는 방법
  // 1) state 사용 : state.**moduleName**.변수명

  // 2) Getters 사용 : computed(() => store.getters["**moduleName**/getterName"])

  // 3) Mutation 사용 : state.commit("**moduleName**/mutaionName", params)

  // 4) actions 사용 : store.dispatch("**moduleName**/actionName", params)
  setup() {
    const store = useStore()
    const getinfo = computed(() => store.getters['memberStore/getUserInfo'])

    return {
      getinfo
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
