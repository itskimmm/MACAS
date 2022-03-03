<script setup>
import DashboardNavBTN from "./DashboardNavBTN.vue"
import { Icon } from "@vicons/utils"
import { Heart } from "@vicons/fa"
import { Timer } from "@vicons/carbon"
import { GroupsRound, SettingsSharp } from "@vicons/material"
import { ClipboardTaskListLtr24Regular } from "@vicons/fluent"
</script>

<template>
  <DashboardNavBTN label="Favourite questions" to="#">
    <Icon class="bg-skin text-white btn-icon br-10">
      <Heart />
    </Icon>
  </DashboardNavBTN>
  <DashboardNavBTN label="Quizzes" to="/teacher/quizzes">
    <Icon class="bg-yellow-light text-white btn-icon br-10">
      <Timer />
    </Icon>
  </DashboardNavBTN>
  <DashboardNavBTN label="Room" to="/teacher/rooms">
    <Icon class="bg-cyan-500 text-white btn-icon br-10">
      <GroupsRound />
    </Icon>
  </DashboardNavBTN>
  <DashboardNavBTN label="Results" to="#">
    <Icon class="bg-marinegreen-500 text-white btn-icon br-10">
      <ClipboardTaskListLtr24Regular />
    </Icon>
  </DashboardNavBTN>
  <DashboardNavBTN label="Settings" to="#">
    <Icon class="bg-pink-500 text-white btn-icon br-10">
      <SettingsSharp />
    </Icon>
  </DashboardNavBTN>
</template>

<style>

</style>
