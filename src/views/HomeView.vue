<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <!-- 컴포넌트로 데이터(prop) 넘길 때는 속성처럼 작성해주면 된다. -->
    <!-- 데이터 이름 = "보낼 데이터" -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <br />
    <br />
    <br />
    <!-- msg 값을 설정하지 않을 경우 HelloWorld.vue에서 설정한 기본값이 보임 -->
    <HelloWorld />
  </div>
</template>

<script>
// /components/HelloWorld.vue 파일을 import 한 후
// template에서 <HelloWorld>라는 태그로 사용
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
