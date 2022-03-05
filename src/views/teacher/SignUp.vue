<script setup>
import SignUpForm from "../../components/LoginForm.vue"
</script>

<template>
  <section id="signup" class='flex-col justify-center'>
    <div id="return">
      <router-link to="/teacher/login">
      <h4 class="text-primary ">&lt; Return to Sign In</h4>
      </router-link>
    </div>
    <div class="flex-row login-card bg-white ">
      <LoginForm class="flex-1"/>
    </div>
  </section>
</template>

<style>
#signup {
  width: 100%;
  background-image: url(/login-bg.png);
  background-size: 100% 100%;
  padding: 0;
  height: 100%;
  margin: 0 auto;
}

#signup > div{
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
