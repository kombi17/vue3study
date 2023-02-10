<template>
  <div>
    <h1>v-text : 문자열 바인딩</h1>
    <!-- v-pre : vuejs가 컴파일 하지 않도록 함 -->
    <div v-pre>{{ 문자열 }} 형식으로 표현 가능</div>

    <br />
    <br />
    <h1>Hello {{ userName }}</h1>

    <br />
    <br />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome!'
    }
  }
}
</script>
<style scoped>
.text-red {
  color: red;
}
</style>
