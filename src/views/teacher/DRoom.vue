<script setup>
import OptionPanel from "../../components/OptionPanel.vue"

import { Icon } from "@vicons/utils"
import { Triangle32Filled } from "@vicons/fluent"
import { TrashAltRegular } from "@vicons/fa"
import { IosShareOutlined } from "@vicons/material"

const rooms = [
  {
    status: "Free",
    name : "user1234",
  },
]
</script>

<template>
  <OptionPanel>
    <div class="flex-row justify-between align-center">
      <h1 class="margin-none text-secondary-lg tx-weight-900">Rooms</h1>
      <button class="btn br-full text-white bg-cyan-600">
        <h2 class="margin-none">Add room</h2>
      </button>
    </div>
    <div class="room-item">
      <h2 class="mb-none mt-2">Status</h2>
      <h2 class="mb-none mt-2">Room Name</h2>
      <h2 class="mb-none mt-2 text-center">Share</h2>
      <h2 class="mb-none mt-2 text-center">Delete</h2>
    </div>
    <hr class="gray-divider divider"/>
    <div v-for="room of rooms" class="room-item">
      <h2 
        class="tx-weight-300" 
        :class="{'text-success': room.status === 'Free'}"
      >
        {{ room.status }}
      </h2>
      <h2 class="tx-weight-300">{{ room.name }}</h2>
      <h2 class="text-center">
        <button class="option border-none mx-auto bg-none px-2 br-5">
          <Icon size="32" class='tx-weight-900' color="#87abb3">
            <IosShareOutlined />
          </Icon>
        </button>
      </h2>
      <h2 class="text-center">
        <button class="option border-none mx-auto bg-none px-2 br-5">
          <Icon size="32" class='tx-weight-900' color="#ff0000">
            <TrashAltRegular />
          </Icon>
        </button>
      </h2>
    </div>
  </OptionPanel>     
</template>

<style>
.room-item {  
  display: grid;
  grid-template-columns: 0.65fr 1.35fr repeat(2, 1fr);
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
