<template>
  <div>
    <h1>@change : onchange 이벤트</h1>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <!-- 현재 일어나는 이벤트를 $event를 통해 보낼 수 있음  -->
      <!-- <select name="" id="" @change="changeCity($event)" v-model="selectedCity"> -->
      <option value="">=== 도시 선택 ===</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <div>{{ selectedCity }}</div>

    <br />
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>

    <br />
    <br />
    <div>filter함수를 다이렉트로도 넣을 수 있음 == 이벤트 없이 구현 가능</div>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter(
          (dong) => dong.cityCode === selectedCity
        )"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: 'seoul' },
        { cityCode: '051', title: 'busan' },
        { cityCode: '064', title: 'jeju' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주 1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' }
      ],
      selectedDongList: []
    }
  },

  created() {},
  mounted() {},
  unmounted() {},
  updated() {},

  methods: {
    changeCity() {
      // dongList 배열의 한 객체의 cityCode
      // === cityList에서 선택된 도시의 cityCode와 같은 경우
      // 그 cityCode를 가진 dong만을 보여준다.
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>

<style scoped></style>
