<template>
  <div>
    <h1>v-model을 checkbox 속성으로 사용하는 경우</h1>
    <!-- 값을 동일하게 설정하면 하나의 그룹으로 묶이고 -->
    <!-- checked 속성과 양방향 바인딩 -->
    <div>
      <input type="checkbox" id="html" value="HTML" v-model="favLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" id="css" value="CSS" v-model="favLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="JavaScript" v-model="favLang" />
      <label for="js">JavaScript</label>
    </div>

    <br />
    <br />
    <br />
    <h3>checked Language : {{ favLang }}</h3>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      // checkbox의 경우 여러 개를 선택할 수 있기 때문에 data 속성에 배열로 값을 지정
      favLang: ['JavaScript', 'CSS']
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
