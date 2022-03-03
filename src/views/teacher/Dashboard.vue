<script setup>
import { ref } from "vue"
import UserBanner from "../../components/UserBanner.vue"
import DashboardNav from "../../components/DashboardNav.vue"
import Panelheader from "../../components/Panelheader.vue"
import ColorCard from "../../components/ColorCard.vue"

import { Icon } from "@vicons/utils"
import { MenuFilled } from "@vicons/material"
import { Triangle32Filled } from "@vicons/fluent"

const show = ref(false);
const openSidebar = () => { show.value = true };
const closeSidebar = () => { show.value = false };
</script>

<template>
  <section id="dash-app">
    <div class="flex-col w-85 h-full mt-2em">
      <router-link to="/">
        <h1 class="text-white ml-1 my-0">MACAS.</h1>
      </router-link>
      <div class="w-full flex-1">
        <div id="dashboard" class="btr-15">
          <div class="sidebar btl-radius-15" :class="{'bg-near-white': !show}">
            <button @click="openSidebar" v-if="!show" class="hamburger">
              <Icon size="48" class="tx-weight-900" color="#5f7b88">
                <MenuFilled />
              </Icon>
            </button>
            <button v-if="show" class="hamburger-exit" @click="closeSidebar">
              <Icon size="24" class='rot270 tx-weight-900' color="#c8c8c8">
                <Triangle32Filled />
              </Icon>
            </button>
            <UserBanner v-if="show"/>
            <h4 v-if="show" class="mx-2 mt-1 tx-weight-400 text-gray-light mt-none">Teacher's Edition</h4>
            <DashboardNav v-if="show"/>
          </div>
          <div 
            class="panel btr-radius-15" 
            :class="{'w-85': !show}"
          >
            <Panelheader/>
            <ColorCard
              bgColor="#ccdfdf"
              :heading="{
                value: 'Welcome back user!',
                color: '#2e5c6e'
              }"
            >
              <em class="tx-weight-300">
                Wish you have a nice day!<br/>
                What about starting your day with a cup of latte?
              </em>
            </ColorCard>
            <div class="grid">
              <ColorCard
                bgColor="#b6c7d9"
                :heading="{
                  value: 'Recent Quizzes',
                  color: '#fff'
                }"
              >
                <span>
                  Lorem ipsum dolor sit amet <br/>
                  Lorem ipsum dolor sit amet <br/>
                  Lorem ipsum dolor sit amet <br/>
                  Lorem ipsum dolor sit amet <br/>
                </span>
              </ColorCard>
              <ColorCard
                bgColor="#fff"
                :heading="{
                  value: 'Chats',
                  color: '#08192d'
                }"
              >
                <span>
                  Lorem ipsum dolor sit amet <br/>
                  Lorem ipsum dolor sit amet <br/>
                  Lorem ipsum dolor sit amet <br/>
                  Lorem ipsum dolor sit amet <br/>
                </span>
              </ColorCard>
            </div>
            <ColorCard
              bgColor="#eee4c1"
              :heading="{
                value: 'Reminders',
                color: '#2e5c6e'
              }"
            >
              <span>
                Lorem ipsum dolor sit amet <br/>
                Lorem ipsum dolor sit amet <br/>
                Lorem ipsum dolor sit amet <br/>
              </span>
            </ColorCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
#dash-app {
  background-image: url(/bg-dash.png);
  background-size : 100% 100%;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
}

#dash-app > div{
  flex: 1;
}

#dashboard {
  margin : 0 auto;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
}

.sidebar {
  background: white;
  width: fit-content;
  height: 100%;
  display:flex;
  flex-direction: column;
  flex: 1;
}

.bg-near-white {
  background: #f6fdfd !important;
}

.panel {
  background: #f6fdfd;
  width: 75%;
}

.btn-icon {
  font-size: 2em;
  padding: 5px;
}

.bg-skin {
  background: #eccece
}

.hamburger {
  background: none;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  border: none;
}

.hamburger-exit {
  background: none;
  width: fit-content;
  height: fit-content;
  margin: 1em 0 0 85%;
  border: none;
}

.rot90 {
  transform: rotate(90deg);
}

.rot270 {
  transform: rotate(270deg);
}
</style>
