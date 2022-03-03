<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RightMenu from "./RightMenu.vue"

const props = defineProps({
  onShowModal: Function
})

const emit = defineEmits(['showModal'])

function handler() {
  emit("showModal")
}
</script>

<template>
  <nav class="header">
    <h2 class="logo-text">MACAS</h2>
    <RightMenu />
    <!--<button @click="handler" class="btn br-10 bg-primary text-white">Teacher Sign In</button>}}-->
  </nav>
</template>

<style>
.header {
  width: 100%;
  height: fit-content;
  background-color: rgba(0,0,0,0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: Optima;
}

</style>
