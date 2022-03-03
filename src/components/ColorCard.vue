<script setup>

const props = defineProps({
  bgColor: String,
  heading: Object,
})
const {bgColor, heading} = props;
</script>

<template>
  <div class="card br-15" :style="{backgroundColor: bgColor}">
    <h2 class="card-heading" :style="{color: heading.color}">
      {{heading.value}}
    </h2>
    <div class="mx-2">
      <slot></slot>
    </div>
  </div>
</template>

<style>

.card {
  padding: 1em;
  margin: 1.25em;
}

.card-heading{
  margin: 0rem 1.25rem 1rem 1.25rem ;
}
</style>
