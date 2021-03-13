// components
const Home = { template: `<div>Hello Vue!</div>` }
const Foo = { template: `<div>fooコンポネントです。</div>` }
const Bar = { template: `<div>barコンポネントです。</div>` }
const User = { template: `<div>user: {{ $route.params.username }}のコンポーネントです。</div>` }
const UserId = { template: `<div>user id: {{ $route.params.pathMatch }}</div>` }
const ParentObj = {
  template: `
    <div class="user">
      <h2>Parent: {{ $route.params.username }}</h2>
      <router-view></router-view>
    </div>
  `
}
const Profile = { template: `<div>profile: {{ $route.params.username }}</div>` }
const Post = { template:  `<div>post: {{ $route.params.username }}</div>` }
// $router.paramsは、特定のURLでしか使えない
// 汎用性を避けるため、propsを使う
const Buzz = {
  props: ['text'],
  template: `<div>{{ text }}</div>`
}

// nav component
const navAnchors = {
  template: `
    <div>
      <router-link to="/config/email">email</router-link>
      <router-link to="/config/profile">profile</router-link>
    </div>
  `
}

const navBase = {
  template: `
    <div>
      <!-- nav -->
      <navAnchors/>
      <!-- content -->
      <router-view></router-view>
      <router-view name="subContent"></router-view>
    </div>
  `,
  components: { navAnchors }
}

const emailContent = {
  template: `
    <div>
      <h3>Email config</h3>
    </div>
  `
}

const profileContent = {
  template: `
    <div>
      <h3>profile config</h3>
    </div>
  `
}

const profileSubContent = {
  template: `
    <div>
      <h3>profile preview</h3>
    </div>
  `
}


// routes
const routes = [
  { path: '', component: Home , redirect: { name: 'email' } },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar, name: 'bar' },  // URLに名前を追加
  // URLにid
  { path: '/user/:username', component: User, name: 'username' },
  // *: 全てのパターン
  { path: '/user-*', component: UserId },
  // component内でさらにroutingする
  { path: '/parent/:username',
    component: ParentObj,
    children: [
      { path: 'profile', component: Profile },
      { path: 'post', component: Post }
    ]
  },
  // view name: コンポーネント内に複数のviewがある時に便利
  { path: '/views/:username',
    // 複数のview
    components: {
      default: User,
      a: Profile,
      b: Post
    }
  },
  { path: '/buzz/:text', component: Buzz, props: true },
  // nav
  { path: '/config',
    component: navBase,
    children: [{
      path: 'email',
      component: emailContent,
      name: 'email'
    }, {
      path: 'profile',
      components: {
        default: profileContent,
        subContent: profileSubContent
      }
    }]
  }
]
// router
const router = new VueRouter({
  mode: 'history',
  routes
})


// mount VueRouter
new Vue({
  router
}).$mount('#app')
