
<template>
  <div class="Aut_div">
    <form method="post">
      <h2>Login form</h2>
      <div class="inputbox">
        <input type="text" id="password" value="" required>
        <span>Your password:</span>
      </div>
      <div class="inputbox">
        <input type="text" id="mail" value="" required>
        <span>Your email:</span>
      </div>

      <div class="inputbox">
<!--        <input type="button" value="Login">-->
        <button type="button" name="button">Login</button>
      </div>
    </form>
  </div>
</template>




<script>
export default {
  data() {
    return {

    }
  }
}
</script>




<style>
/*.Aut_div{*/
/*  !*width: 400px;*!*/
/*  height: auto;*/
/*  background-color: black;*/
/*  color: white;*/
/*  text-align: center;*/
/*  padding: 15px;*/
/*}*/

.Aut_div {
  position: relative;
  padding: 50px 50px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.Aut_div h2 {
  font-size: 2em;
  border-left: 5px solid dodgerblue;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
}
.Aut_div .inputbox {
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 50px;
}
.Aut_div .inputbox input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
}
.Aut_div .inputbox:last-child {
  margin-bottom: 0;
}
.Aut_div .inputbox span {
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
}
.Aut_div .inputbox input:focus ~ span,
.Aut_div .inputbox input:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
  font-size: 1em;
}
.Aut_div .inputbox button {
  width: 50%;
  background: dodgerblue;
  color: #fff;
  border: #fff;
}
.Aut_div .inputbox:hover button {
  background: linear-gradient(45deg, greenyellow, dodgerblue);
}
</style>
