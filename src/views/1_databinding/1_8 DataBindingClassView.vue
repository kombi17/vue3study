<template>
  <div>
    <h1>클래스 바인딩</h1>
    <div :class="{ 'text-red': hasError, active: isActive }">클래스 바인딩</div>

    <!-- 배열 형태로도 클래스 속성을 사용할 수 있다. -->
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      // 값이 변화함에 따라 클래스 활성화 여부 발생
      isActive: false,
      hasError: false,
      class2: ['active', 'text-red']
    }
  },

  created() {},
  mounted() {},
  unmounted() {},
  updated() {},

  methods: {}
}
</script>

<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
