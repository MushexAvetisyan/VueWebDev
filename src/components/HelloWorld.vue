<template>
  <div class="hello">
    <section class="tobBar topbar">
      <div class="container">

      </div>
    </section>
<!--    <div class="navigation_tab">-->
<!--      <nav>-->
<!--        <ul>-->
<!--          <li><a href="#0">Home</a></li>-->
<!--          <li><a href="#0">About</a></li>-->
<!--          <li>-->
<!--            <a href="#0">Clients</a>-->
<!--            <ul>-->
<!--              <li><a href="#0">Burger King</a></li>-->
<!--              <li><a href="#0">Southwest Airlines</a></li>-->
<!--              <li><a href="#0">Levi Strauss</a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="#0">Services</a>-->
<!--            <ul>-->
<!--              <li><a href="#0">Print Design</a></li>-->
<!--              <li><a href="#0">Web Design</a></li>-->
<!--              <li><a href="#0">Mobile App Development</a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li><a href="#0">Contact</a></li>-->
<!--        </ul>-->
<!--      </nav>-->
<!--    </div>-->
    <h1 class="main_title">{{ msg }}</h1>
    <ol>
      <li v-for="(person, index) in people" :key="index" v-bind:class="{'strike':!person.stillAlive}">
        {{ person.names }}
      </li>
    </ol>

  </div>
</template>




<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Mushex'
    },
  },
  data() {
    return {
      people: [
        {
          names: 'Franky Four Fingers',
          stillAlive: false
        },
        {
          names: 'Bullet Johny',
          stillAlive: false
        },
        {
          names: 'Boris the Blade',
          stillAlive: true
        },
        {
          names: 'Mickey',
          stillAlive: true
        }
      ],
    }
  }
}
</script>







<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/

.main_title{
  margin-top: 100px;
}

.strike{
  text-decoration: line-through;
}

body {
  background: #F9F8FD;
  font-family: "Lexend Exa", sans-serif;
}

nav {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  border: 2px solid #EBECF1;
  border-radius: 30px;
  animation: slide-in 1s ease-out;
  width: 98%;
}

.strike{
  color: red;
}

ul {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  margin: 0;
  padding: 0 30px;
  list-style-type: none;
  justify-content: center;
}
ol{
  list-style-type: none;
}
ul li:not(:last-child) {
  margin-right: 40px;
}
ul li {
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px;
  transition: background 0.2s;
}
ul li a {
  color: #2375D8;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s;
}
ul li ul {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  display: block;
  margin: 12px -12px;
  padding: 0;
  background: #FFA91B;
  border: 2px solid #F7C833;
  border-right: 2px solid #F89329;
  border-bottom: 2px solid #F89329;
  border-radius: 5px;
  transition: opacity 0.2s, visibility 0.2s;
}
ul li ul li {
  margin: -2px 0 0 -2px;
  width: calc(100% - 20px);
  line-height: 1.7;
}
ul li ul li a {
  color: #2375D8;
}
ul li:hover {
  background: #EC4138;
  border: 2px solid #F05749;
  border-right: 2px solid #E02A21;
  border-bottom: 2px solid #E02A21;
}
ul li:hover a {
  color: #F9F8FD;
}
ul li:hover ul {
  visibility: visible;
  opacity: 1;
  box-shadow: 0px 3px 5px 2px #EBECF1;
}
ul li:hover ul li a {
  color: #F9F8FD;
}

@keyframes slide-in {
  0% {
    top: -50px;
  }
  40% {
    top: 20px;
  }
  70% {
    top: 10px;
  }
  100% {
    top: 15px;
  }
}
</style>
