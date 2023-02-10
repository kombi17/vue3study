<template>
  <div>
    <h1>v-on: : EventListener와 같은 역할, @로 표현</h1>
    <h3>v-on:click == @click</h3>
    <button @click="increaseCounter">Add 1</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      counter: 0
    }
  },

  created() {},
  mounted() {},
  unmounted() {},
  updated() {},

  methods: {
    increaseCounter() {
      this.counter += 1
    }
  }
}
</script>

<style scoped></style>
