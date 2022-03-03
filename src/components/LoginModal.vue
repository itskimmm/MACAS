<script setup>
</script>

<template>
  <div class="overlay justify-center align-center">
    <div class="center-card br-10 flex-col align-center justify-evenly">
      <h4>Which version do you want to sign in?</h4>
      <router-link to="/teacher/login">
        <button id="bnr-join" class="btn br-10 text-white bg-primary"><b>Teacher's Edition</b></button>
      </router-link>
      <router-link to="/student/join">
        <button id="bnr-login" class="btn br-10 text-primary bg-secondary"><b>Student's Edition</b></button>
      </router-link>
    </div>
  </div>
</template>

<style>
.overlay {
  position: absolute;
  background: rgba(0,0,0, 0.4);
  height: 100%;
  width: 100%;
  padding: 1em;
  display:flex;
  top:0;
  left:0;
}

.center-card {
  margin: auto;
  height: 200px;
  width: 600px;
  background: white;
  z-index: 1000;
  text-align: center;
}
</style>
