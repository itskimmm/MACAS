<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div id="menu">
    <router-link to="/">
      <h4>Functions</h4>
    </router-link>
    <router-link to="/">
      <h4>Support</h4>
    </router-link>
     <router-link to="/">
      <h4>About us</h4>
    </router-link>
  </div>
</template>

<style>
#menu {
  display: flex;
  flex-direction : row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}

#menu a {
  text-decoration: none;
}

#menu h4 {
  color: #2e5c6e;
  font-weight: 300;
}

</style>
