<template>
  <div>
    <h1>v-bind : html의 속성에 데이터 바인딩 == :(콜론)으로 생략 가능</h1>
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <br />
    <!-- 값이 하나라도 입력 되어야 조회할 수 있도록 -->
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt1: ''
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
