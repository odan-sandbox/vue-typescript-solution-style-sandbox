<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// ここが型エラーにならないので、Vuter は app-a の tsconfig の中身を見てなさそう
// そもそも Vuter の内部で tsserver が内部で動いているわけではないので、solution style の tsconfig を書いても意味がないか
// eslint-disable-next-line no-undef
test.todo("a");

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    this.$myInjectedFunction("aaa");
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
