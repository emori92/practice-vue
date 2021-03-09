// module
const sampleModule = {
  state: () => ({
    text: 'moduleのテストです'
  }),
  getters: {
    returnText: state => {
      return  state.text
    }
  },
  mutations: {
    editText (state, text) {
      state.text = text
    }
  }
}


// store
const store = new Vuex.Store({
  // module
  modules: {
    sampleModule: sampleModule
  },
  // state
  state: {
    count: 0,
    // todo
    todos: [
      {id:1, content: 'some todo', done: false},
      {id:2, content: 'some todo', done: true}
    ]
  },
  // mutations: stateを変化
  mutations: {
    add (state) {
      state.count++
    },
    // ペイロード: 特定のmutationに与える引数のこと
    addNum(state, num) {
      state.count += num
    }
  },
  // action: mutationをcommitする。非同期を行える
  actions: {
    add ({ commit }) {
      commit('add')
    }
  },
  // getter: 複数のコンポーネントで再利用する
  getters : {
    // done: true の配列を返す
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // done: true をカウント
    doneTodosCount: (state, getters) => {  // 第2引数にgettersを渡す
      return getters.doneTodos.length
    }
  }
});


// components
Vue.component('counter', {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    },
    doneTodosCount() {
      return this.$store.getters.doneTodosCount
    }
  }
});


// pages
const app = new Vue({
  el: '#app',
  store,
  component: 'counter',
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
});
