<template>
  <div>
    <h1>v-model : 양방향 데이터 바인딩 처리를 위해 사용</h1>

    <!-- 사용자가 값을 바꿀 수 있는 태그에만 사용 가능 -->
    <!-- 사용자가 값을 바꾸면 바뀐 값이 바로 반영되고, 반대도 마찬가지임 -> 어느 한 쪽을 변경해도 양쪽에 동일하게 적용 -->
    <!-- 사용자가 어떤 값을 입력하고 변경했는지 별도의 코드 작성 없이도 key값을 읽음으로써 해당 값을 불러올 수 있음 -->
    <input type="text" v-model="userId" />
    <button @click="myFunction">click</button>
    <button @click="changeData">change</button>
    <br />
    <br />
    <h3>{{ userId }}</h3>

    <h1>값을 변경함에 따라 별도 코드 작성 없이 확인 가능</h1>
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <br />

    <h1>v-model.number로 숫자로 파싱 가능</h1>
    <!-- .number를 붙여 숫자로 파싱 가능 -->
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    // 화면 상에 쓸 모든 데이터 정의
    return {
      userId: 'eunbiKo',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },

  created() {},
  mounted() {},
  unmounted() {},
  updated() {},

  methods: {
    myFunction() {
      // this : 오브젝트 안에 정의된 함수에서 오브젝트 안에 있는 특정 키 값에 접근할 경우 this 키워드 필수
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'sariKo'
    }
  }
}
</script>

<style scoped></style>
