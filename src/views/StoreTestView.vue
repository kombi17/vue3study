<!-- store 모듈화 확인을 위한 Vue -->
<template>
  <div>
    <div>{{ testCount }}</div>
  </div>
</template>

<script>
// store의 값을 사용하기 위해 useStore 훅을 사용하여 store에 접근
import { useStore } from 'vuex'

export default {
  name: 'StoreTestView',
  setup() {
    const store = useStore()
    const testCount = store.state.testStore.count
    return testCount
  },

  components: {},

  data() {
    return {}
  },

  created() {},
  mounted() {},
  unmounted() {},
  updated() {},

  methods: {}
}
</script>

<style scoped></style>
