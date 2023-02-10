<template>
  <div>
    <!-- h-text {{   }}  문자열 바인딩의 경우 -->
    <h1>
      v-html : jQuery의 innerHTML 과 같은 역할로 html이 적용된 화면이 보임
    </h1>

    <h2>문자열 바인딩 v-text의 경우</h2>
    <div>{{ htmlString }}</div>
    <br />
    <br />
    <br />

    <h2>v-html</h2>
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
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
