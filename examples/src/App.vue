<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="我是world"/>
    <HelloVue msg="我是vue"/>
  </div>
</template>

<script>
import Vue from 'vue'
// 导入组件库
import { HelloWorld, HelloVue } from 'toolsTest'
// 注册组件库
Vue.use(HelloWorld)
Vue.use(HelloVue)
export default {
  name: 'App',
  components:{
    HelloVue,
    HelloWorld
  }
}
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
