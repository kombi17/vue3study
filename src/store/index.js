import { createStore } from 'vuex'
// 여러 개 만들어서 세분화 가능
// 예를 들어, 회원 관리에서만 쓰는 전역 변수의 경우
// /store/modules/ 하위 폴더를 만들어 관련 내용만 모아둔 스토어를 생성할 수 있고
// 분리한 store 모듈을 index.js에서 합쳐서 사용
// import { 모듈화 한 store 파일명 } from '경로'
import { memberStore } from '@/store/modules/memberStore'
import { testStore } from '@/store/modules/testStore'
// 위와 같이 선언 후 컴포넌트에서 사용 -> /views/StoreTestView.vue에서 확인

export default createStore({
  // 공통 컴포넌트 구현 및 관리 방법

  // Vue : 컴포넌트 기반의 SPA(Single Page Application)을 구축할 수 있게 해주는 프레임워크

  // SPA (Single Page Application) : 단일 페이지 어플리케이션
  //                                 하나의 페이지 안에서 필요한 CSS, JS를 다 로딩한 상태에서
  //                                 페이지가 전환될 때마다 페이지 내에서 변경될 부분만 로딩
  //                                 -> 빠른 페이지 변환, 반응성, 화면전환 애니메이션, 적은 트래픽 양
  //                                 but, 최초 로딩 속도가 느려짐

  // 컴포넌트 : 웹을 구성하는 로고, 메뉴바, 버튼, 모달창 등 웹 페이지 내의 다양한 UI 요소
  //            재사용 가능하도록 구조화 한 것

  // 다양한 UI를 컴포넌트로 만들고 이것을 조립해서 하나의 페이지를 완성하는 방식

  // 컴포넌트는 주로 부모-자식 관계로 구성된다. == 부모 컴포넌트 템플릿에서 자식 컴포넌트를 지정해서 사용
  // --> 서로 간의 정보 소통이 필요!!

  // 1) 부모 -> 자식 : props 데이터 전달
  // prop은 부모 컴포넌트의 정보를 전달, 자식 컴포넌트는 props 옵션을 사용해서 받음

  // 2) 자식 -> 부모 : v-on:eventName을 지정해서 이벤트 전달 및 수신
  // 자식 컴포넌트에서 $emit(eventName)을 호출해서 부모로 전달할 이벤트 작동

  // 3) 동일 컴포넌트간 직접적인 통신 방법은 제공되지 않음

  // vuex: vue 개발에서 상태를 관리해주는 기능 제공
  // 어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리

  // vuex가 없다면 정보를 주고받기가 복잡
  // --> store라는 곳을 통해 관리하고 프로젝트에 존재하는 모든 컴포넌트들이 store를 사용

  state: {
    // State : 데이터 객체, 변수들의 집합
    // 공통으로 참조하기 위한 변수를 정의한 것
    // 프로젝트의 모든 곳에서 이를 참조하고 사용할 수 있음
    // 모든 컴포넌트 들에서 공통된 값을 사용할 수 있다.
    name: 'userName'
  },
  getters: {
    // Getters : 공통 속성, state 변수들을 get 호출
    // 각 컴포넌트의 계산된 속성(computed)의 공통 속성으로 정의
    // 여러 컴포넌트에서 동일한 computed가 사용될 경우 Getters에 정의해서 공통으로 사용
    getUserInfo(state) {
      return '이름 : ' + state.name
    }
  },
  mutations: {
    // Mutations : 동기형 State 변경 처리기, 반드시 mutation 를 통해서만 state 를 변경해야 함
    // 변수들을 조작하는 함수
    // commit(함수명, 전달인자) 방식으로 호출
    // mutations 내에 함수 작성
    setUserInfo(state, name) {
      state.name = name
    }
  },
  actions: {
    // Actions : Mutation 트리거
    // mutation을 실행시키는 역할
    // 비동기 처리 기준
    // dispatch(함수명, 전달인자) 방식으로 호출
    // actions 내에 함수 작성
    // 비동기 기준이기 때문에 주로 콜백 함수로 작성
  },
  modules: {
    // 모듈 사용을 위해 변수명 : 모듈명 형식으로 선언
    memberStore: memberStore
  }
})
