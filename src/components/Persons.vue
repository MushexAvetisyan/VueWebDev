<template>
  <div id="Persons">

    <div class="main_content">
      <input type="text" v-model="name" class="text_name">
      <h3> My Name Is {{ name }}</h3>
      <input type="text" v-model="job" class="text_name">
      <h3 @click = "hello"> Work At {{ job }}</h3>
    </div>

    <h3>{{ hello }}</h3>

    <input type="text" :value="name">

    <p v-bind:title="message" class="cursor">
      Наведи на меня курсор
    </p>

    <a v-bind:href="link">Learn Vue</a>
    <!--We Can use Without v-bind just write :href-->
    <p v-if="seen">Now You See Me</p>

    <div @click="is_true">
      <h2>Click Event after click now you see me deleting</h2>
    </div>

    <h3>
      {{counter}}
      <button  v-on:click="counter++">+1</button>
      <button  v-on:click="substract">-1</button>
      <button  @dblclick="counter=0">Reset Counter</button>
    </h3>



    <h2>{{name_test}}</h2>
    <label>Name:</label>
    <input type="text" @keyup.113="changeName" v-model="name_test">
    <br>
    <label>Checkbox value: {{checked}}</label>
    <input type="checkbox" v-model="checked" class="checking">

    <br>
    <button @click="a++">Add to A</button>
    <button @click="b++">Add to B</button>
    <p>A - {{ a }}</p>
    <p>B - {{ b }}</p>
    <p>Age + A = {{ addToA }}</p>
    <p>Age + B = {{ addToB }}</p>


    <button @click="error = !error">Toggle Error</button>
    <button @click="success = !success">Toggle Success</button>
    <p v-if="error" class="error_message">Here You Can See Error Message</p>
    <p v-else class="error_message">Default Message</p>
    <p v-show="success" class="error_message">Here You Can See Success Message</p>
<!--    <pre>-->
<!--    {{ $data | json }}-->
<!--    </pre>-->

  </div>
</template>




<script>
export default {
  data() {
    return {
      name: 'John',
      name_test: '',
      checked: false,
      job: 'Developer',
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
      link: 'https://ru.vuejs.org/v2/guide/index.html#%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-Vue-js',
      markup: '<a href="https://ok.ru"> Social</a>',
      seen: true,
      counter: 0,
      a: 0,
      b: 0,
      age: 20,
      error: false,
      success: false
    }
  },



  config: {
    keyCodes: {
      f2: 113
    }
  },




  methods: {
    is_true() {
       let a = 25 < 5
      if (a){
        this.seen = true
      }
      else {
        this.seen = false
      }
    },
    substract(e) {
      e.stopPropagation();
      this.counter--;

    },
    changeName() {
      console.log('Name is Changed!');
    },

  },




  computed: {
    hello(){
      return 'hello my name is ' + this.name;
    },
    addToA() {
      console.log('AddToA');
      return this.a + this.age;
    },
    addToB() {
      console.log('AddToB');
      return this.b + this.age;
    }
  }



}
</script>






<style>
#Persons{
  text-align: center;
  height: auto;
  background-color: #b33939;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.error_message{
  font-size: 20px;
  margin-top: 15px;
  color: black;
  font-weight: bold;
  text-shadow: 0 0 4px white;
}

.checking{
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-top: 15px;
}

button {
  font-weight: 600;
  border: solid 2px black;
  outline: 0;
  padding: 5px 30px;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
  background-color: white;
  border-radius: 0.35rem;
  position: relative;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

button:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

button:active {
  top: 1px;
}

h3{
  margin: 20px 0 20px 0;
}

.text_name{
  height: 25px;
  padding: 2px 40px 2px 10px;
  border-radius: 5px;
  border: none;
}

.main_content{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_content h3{
  margin: 0 20px;
}

.cursor{
  cursor: pointer;
}
</style>
