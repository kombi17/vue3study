<template>
  <div>
    <h1>v-model을 select 속성으로 사용하는 경우</h1>
    <h3>사용자가 값을 변경하면 option의 value 값이 바로 변경되고 확인 가능</h3>

    <select name="" id="" v-model="selectedCity">
      <option value=""></option>
      <option value="02">Seoul</option>
      <option value="051">Busan</option>
      <option value="064">Jeju</option>
    </select>
  </div>

  <br />
  <div>{{ selectedCity }}</div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      selectedCity: '02'
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
