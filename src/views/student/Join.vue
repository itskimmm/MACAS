<script setup>
import JoinForm from "../../components/JoinForm.vue"
</script>

<template>
  <section id="login" class='flex-col justify-center'>
    <div id="return">
      <router-link to="/">
      <h4 class="text-primary ">&lt; Return to Home</h4>
      </router-link>
    </div>
    <div class="flex-row login-card bg-cyan-500 ">
      <JoinForm class="flex-1"/>
      <div class="bg-white w-40 br-raidus-15 flex-col align-center justify-end">
        <router-link to="/teacher/login">
          <button id="switchs" class="btn br-full bg-cyan text-white tx-lg mb-3">
            Switch to Teacher's Edition
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style>
#switchs {
  font-family: Optima;
  background-color: #87ABB3;
}

#switchs:hover {
  font-family: Optima;
  background-color: #b7dfe7;
  color: #fff;
}

</style>
