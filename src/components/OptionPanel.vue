<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<template>
  <section id="dash-app">
    <div class="flex-col w-85 h-full mt-2em">
      <h1 class="text-white ml-1 my-0">MACAS.</h1>
      <div class="w-full flex-1">
        <div id="option-panel" class="flex-col px-4 h-full btr-15">
          <a @click="router.go(-1)">
            <h4 class="text-grayishblue-300 tx-weight-300"><span>&lt;</span> Back to Dashboard</h4>
          </a>
          <slot>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#option-panel {
  background: linear-gradient(180deg, rgba(255,255,255,0.7959558823529411) 25%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%);
}

#option-panel > h4:hover{
  color : #4d7584;
}

#option-panel > h4 > span{
  font-size: 1.3rem;
}

.text-grayishblue-300 {
  color : #becbd9;
}

.text-grayishblue-700 {
  color : #4d7584;
}
</style>
