<template>
  <div>
    <h1>v-model을 radio 속성으로 사용하는 경우</h1>
    <!-- 값을 동일하게 설정하면 하나의 그룹으로 묶이고 -->
    <!-- checked 속성과 양방향 바인딩 -->
    <div>
      <input type="radio" id="html" value="HTML" v-model="favLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" id="css" value="CSS" v-model="favLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" id="js" value="JavaScript" v-model="favLang" />
      <label for="js">JavaScript</label>
    </div>
    <div>checked Language : {{ favLang }}</div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      // radio 버튼은 단 한 개만 선택할 수 있기 때문에 문자열로 값을 지정
      favLang: 'JavaScript'
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
