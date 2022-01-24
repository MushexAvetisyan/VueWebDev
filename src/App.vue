<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Create Your Own Project" msg2="Rubik"/>-->
<!--    <Aut />-->
<!--    <Reg />-->
    <button class="reg" type="button" @click="component='Reg'">Registration</button>
    <button class="log" type="button" @click="component='Aut'">Login</button>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Persons />
    <Slot>
      <h2 slot="title">Test Title for slot component</h2>
      <p slot="text">Test Text for slot Component</p>
    </Slot>
    <h2>Outer title</h2>
    <List />
  </div>
</template>





<script>
import HelloWorld from './components/HelloWorld.vue';
import Persons from '@/components/Persons';
import Aut from "@/components/Aut";
import Reg from "@/components/Reg";
import Slot from "@/components/Slot";
import List from "@/components/List";


export default {
  name: 'App',
  components: {
    HelloWorld,
    Persons,
    Aut,
    Reg,
    Slot,
    List
  },
  data() {
    return {
      component: 'Aut'
    }
  }
}
</script>






<style scoped>
*{
  margin: 0 ;
  padding: 0 ;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin: 0 ;
  padding: 0 ;
}

.log{
  width: 300px;
}

.reg{
  width: 300px;
}
h2{
  color: red;
}
</style>
