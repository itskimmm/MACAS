<script setup>
import { useStore } from "vuex"
import moment from "moment"

import { Icon } from "@vicons/utils";
import { IosSearch } from "@vicons/ionicons4"
import { MenuFilled, LogOutOutlined} from "@vicons/material"

const store = useStore();
console.log(store.state.loggedIn)
const today = moment().format("D MMMM YYYY, dddd");
const logout = () => {store.commit("logout")}
</script>

<template>
  <div class="flex-row justify-between mt-1 align-start w-full flex-wrap">
    <h5 class="mx-4 text-gray-light margin-none tx-weight-400 text-it w-fc">{{today}}</h5>
    <div class="flex-row justify-between gap-1">
      <div class="flex-row align-center flex-1 bg-gray-xpale br-full input-primary">
        <input type="text" class="search-input bg-gray-xpale flex-1 blr-full text-gray-600 border-none" placeholder="Search question/quiz"/>
        <Icon class="tx-xl text-gray-600 brr-full">
          <IosSearch />
        </Icon>
      </div>
      <router-link id="shorten" class="flex-row align-center br-full text-primary px-1 mx-1 bg-cyan-light" to="/" @click="logout">
        <Icon class="tx-xl text-primary brr-full">
          <LogOutOutlined />
        </Icon>
        <span class="text-primary" id="logout">Log out</span>
      </router-link>
    </div>
  </div>
</template>

<style>
.search-input {
  font-size: 1.25em;
}

#logout {
  display:block;
  visibility: visible;
}

@media only screen and (max-width: 660px){
  .search-input {
    font-size: 1em;
  }

  #shorten, .input-primary{
    padding: 0.2em;
  }

  #logout {
    display:none;
    visibility: hidden;
  }
}

</style>
