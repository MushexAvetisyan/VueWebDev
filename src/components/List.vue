<template>

  <div class="inner">
    <h2>Inner Title</h2>
    <ul>
      <li v-for="(pers, index) in people" :key="index">
        {{pers}}
      </li>
    </ul>
  </div>

</template>




<script>
export default {
  comments: {

  },
  data() {
    return {
      people: ['Max', 'Jack', 'Leo']
    }
  }
}
</script>




<style scoped>
h2{
  color: green;
}
</style>
