<script setup>
const props = defineProps({
    label: String,
    to: String
})

const { label, to } = props;
</script>

<template>
  <router-link class="dashboard-btn my-2 mx-2 bg-cyan-xpale status btn br-15" :to="to">
    <slot></slot>
    <h2 class="my-0 status-text text-primary">{{label}}</h2>
  </router-link>
</template>

<style>
.dashboard-btn:hover {
  background: #b7dfe7;
}
</style>
