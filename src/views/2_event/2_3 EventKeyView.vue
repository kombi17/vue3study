<template>
  <div>
    <!-- <input
      type="search"
      name=""
      id=""
      v-model="searchText"
      @keyup="checkEnter($event)"
    /> -->

    <h1>@keyup.xxx : 주요 키에서 바로 이벤트를 실행할 수 있게끔 제공해줌</h1>
    <input
      type="search"
      name=""
      id=""
      v-model="searchText"
      @keyup.enter="doSearch"
    />

    <!-- click 이벤트로도 실행 가능 -->
    <button @click="doSearch">조회</button>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      searchText: ''
    }
  },

  created() {},
  mounted() {},
  unmounted() {},
  updated() {},

  methods: {
    doSearch() {
      console.log(this.searchText)
    }
    // checkEnter(event) {
    //   if (event.keyCode === 13) {
    //     this.doSearch()
    //   }
    // }
  }
}
</script>

<style scoped></style>
