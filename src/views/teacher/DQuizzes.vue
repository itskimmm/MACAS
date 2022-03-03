<script setup>
import OptionPanel from "../../components/OptionPanel.vue"
import moment from "moment";

import { Icon } from "@vicons/utils"
import { Triangle32Filled } from "@vicons/fluent"
import { TrashAltRegular } from "@vicons/fa"

const data = [
  {
    name : "Word Fact Quiz 1",
    latest : 1634140800,
  },
  {
    name : "Word Fact Quiz 2",
    latest : 1634227200,
  },
  {
    name : "Word Fact Quiz 3",
    latest : 1634313600,
  },
]

const quizzes = data.map( (elem) => {
  return {
      name: elem.name,
      latest: moment.unix(elem.latest)
    }
});
</script>

<template>
  <OptionPanel>
    <div class="flex-row justify-between align-center">
      <h1 class="margin-none text-secondary-lg tx-weight-900">Quizzes</h1>
      <button class="btn br-full text-white bg-cyan-600">
        <h2 class="margin-none">Create new quiz</h2>
      </button>
    </div>
    <div class="grid-item">
      <h2 class="mb-none mt-2">Quiz Name</h2>
      <h2 class="mb-none mt-2">Last Modified (DD/MM/YYYY)</h2>
      <h2 class="mb-none mt-2 text-center">Launch</h2>
      <h2 class="mb-none mt-2 text-center">Delete</h2>
    </div>
    <hr class="gray-divider divider"/>
    <div v-for="quiz of quizzes" class="grid-item">
      <h3 class="">{{ quiz.name }}</h3>
      <h3 class="">{{ quiz.latest.format("DD/MM/YYYY") }}</h3>
      <h3 class="text-center">
        <button class="option border-none mx-auto bg-none px-2 br-5">
          <Icon size="24" class='rot90 tx-weight-900' color="#87abb3">
            <Triangle32Filled />
          </Icon>
        </button>
      </h3>
      <h3 class="text-center">
        <button class="option border-none mx-auto bg-none px-2 br-5">
          <Icon size="24" class='tx-weight-900' color="#ff0000">
            <TrashAltRegular />
          </Icon>
        </button>
      </h3>
    </div>
  </OptionPanel>     
</template>

<style>
.grid-item{  
  display: grid;
  grid-template-columns: 1.2fr 1.6fr 0.6fr 0.6fr;
  grid-template-rows: 1fr;
  gap: 1em 1em;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . .";
}

.divider {
  border: none;
  margin: 0;
  padding: 0;
  height: 2px;
  width: 100%;
}

.gray-divider {
  color: #eaf0f3;
  background-color: #eaf0f3;
}

.option:hover {
  background-color: #e0e0e0;
}
</style>
