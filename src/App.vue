<template>
  <nav-bar></nav-bar>
  <div id="app">
    <br />
    <router-link to="/">HOME</router-link>
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-link to="/myComponent">Сайт с постами</router-link>
    <router-link to="/vuex">Сайт с постами Vuex</router-link>
    <router-view></router-view>
    <!-- <foo :page="page"/> -->

  </div>
</template>

<script>
// import Foo from "@/pages/Foo"
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: { NavBar },
  data() {
    return {
      posts: [],
      page: 1,
      totalPage: 0,
      limit: 5,
      images:[]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #d6dbe0;
}
a {
  text-decoration: none;
  margin-left: 15px;
  color: black;
}
.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}
</style>
