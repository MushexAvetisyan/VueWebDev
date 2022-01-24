<template>

  <div class="inner">
    <input type="text" v-model="message" @keyup.enter="saveMessage">
    <h2 @click="show">Inner Title</h2>
    <ul>
      <li v-for="(pers, index) in people" :key="index">
        {{pers}}
      </li>
    </ul>
    <ul>
      <li v-for="pers in people" :key="pers">{{pers}}</li>
    </ul>
  </div>

</template>




<script>
import { bus } from "@/main";

export default {
  props: {
    people: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      message: ''
    }
  },

  methods: {
    show() {
      console.log(this.people);
    },
    saveMessage() {
      bus.$emit('message', this.message)
      this.message = '';
    }
  }
}
</script>




<style scoped>
h2{
  color: green;
}
</style>
