// vue
const app = new Vue({
  el: '#app',
  data: {
    message: 'app.messageを宣言的にレンダリングしてます!'
  }
});

// #app-2のtitle属性を変更する
const app2 = new Vue({
  el: '#app-2',
  data: {
    message: `このページは${new Date().toLocaleString()}に作られました。`
  }
});

// seenをFalseにして非表示
const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

// for
const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '1つ目のテキスト！' },
      { text: '2つ目のテキスト！' },
      { text: '3つ目のテキスト！' }
    ]
  }
});

// reverse
const app5 = new Vue({
  el: '#app-5',
  data: {
    message: '文字を裏返します！'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

// input binding
const app6 = new Vue({
  el: '#app-6',
  data: {
    message: '↓↓文字を入力してください'
  }
});

// component
const app7 = new Vue({
  el: '#app-7',
  data: {
    items: [
      { id: 0, text: 'items: 1つ目' },
      { id: 1, text: 'items: 2つ目' },
      { id: 2, text: 'items: 3つ目' },
      { id: 3, text: 'items: 4つ目' },
      { id: 4, text: 'items: 5つ目' }
    ]
  }
});

// v-bind, v-onの省略
const app11 = new Vue({
  el: '#app-11',
  data: {
    num: 0,
    newLists: []
  },
  // computed: 実行結果がcasheされる。
  // インスタンスに変更ない限り、最後の実行結果を即時に返す
  methods: {
    addList: function() {
      // define key
      const id = this.num;
      this.num ++;
      // add text to newLists
      const newItem = {id: id, text: `${this.num}回リストを作成しました！`};
      this.newLists.push(newItem);
    }
  }
});

// 各インスタンスの状態を独立させる
new Vue({el: '#app-12'});