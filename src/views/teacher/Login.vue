<script setup>
import LoginForm from "../../components/LoginForm.vue"
</script>

<template>
  <section id="login" class='flex-col justify-center'>
    <div id="return">
      <router-link to="/">
      <h4 class="text-primary ">&lt; Return to Home</h4>
      </router-link>
    </div>
    <div class="flex-row login-card bg-white ">
      <div class="bg-cyan-500 w-40 bl-raidus-15 flex-col align-center justify-end">
        <router-link to="/student/join">
          <button id="switcht" class="btn br-full bg-white text-cyan-600 tx-lg mb-3">
            Switch to Student's Edition
          </button>
        </router-link>
      </div>
      <LoginForm class="flex-1"/>
    </div>
  </section>
</template>

<style>
#login {
  width: 100%;
  background-image: url(/login-bg.png);
  background-size: 100% 100%;
  padding: 0;
  height: 100%;
  margin: 0 auto;
}

#login > div{
  margin : 0 2em;
}

#switcht {
  font-family: Optima;
  color: #87ABB3;
}

#switcht:hover {
  color: white;
  background-color: #87ABB3;
  font-family: Optima;
}

.login-card {
  border-radius: 15px;
  box-shadow:  0px 3px 2px rgba(0,0,0, 0.4);
  height: 70%;
}

.login-card form{
  margin: 1em 4em 2em 4em;
}
</style>
