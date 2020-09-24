<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="menu">
      <router-link v-for="item in menu" :key="item.path" :to="item.path">
        {{item.routerName}}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import {routerList} from '../router/config';
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, setup} from 'vue';
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const menu = reactive(routerList);

    return {
      menu
    }
  }
}
</script>

<style lang="less">
.menu {
  margin: 20px 0;
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  a {
    font-size: 20px;
    display: block;
    font-weight: bold;
    text-align: left;
    text-decoration: none;
  }
}
</style>
