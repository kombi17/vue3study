<template>
  <div>
    <div style="color: red; font-size: 30px">
      스타일 바인딩: 글씨는 red, 폰트 크기 30
    </div>

    <!-- 디렉티브를 이용해 :style과 같이 배열 형식으로 정의할 수 있고 -->
    <div :style="style1">스타일 바인딩: 글씨는 green, 폰트 크기 30</div>

    <!-- click 이벤트로 변경할 수도 있음 -->
    <!-- 배열.key 로 변경 가능 -->
    <button @click="style1.color = 'blue'">change color</button>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      style1: {
        color: 'green',
        fontSize: '30px'
      }
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
