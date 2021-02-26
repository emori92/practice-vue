// tutorial component
Vue.component('sample-list', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

// v-bind, v-on省略
Vue.component('new-num-list', {
  props: ['newList'],
  template: '<li>{{ newList.text }}</li>'
});

// instance.dataを関数にする => 各インスタンスで状態を持つようになる
// 逆に、そのままdataを記述すると、各インスタンスに状態が共有される
Vue.component('click-count', {
  data: function() {
    return  { count: 0 }
  },
  template: '<button @click="count++">{{ count }}回クリック</button>'
});