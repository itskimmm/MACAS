<script setup>
import { UserCircle } from "@vicons/fa"
import { Icon } from "@vicons/utils"
import { DotMark } from "@vicons/carbon"
import { Triangle32Filled } from "@vicons/fluent"
</script>

<template>
  <div class="user-banner">
    <Icon class="user-icon">
      <UserCircle />
    </Icon>
    <div class="user-info">
      <h2 class="margin-none">Username</h2>
      <div class="user-status">
        <div class="status status-green tx-weight-900">
          <Icon>
            <DotMark />
          </Icon>
          <span class="status-text">online</span>
        </div>
        <div class="status text-secondary-lg tx-weight-900">
          <Icon class="invertY">
            <Triangle32Filled />
          </Icon>
          <span class="status-text">EN</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.user-icon {
  font-size: 4em;
}

.user-banner {
  display:flex;
  flex-direction: row;
  align-items: center;
  margin: 0em 1.25em 0em 1.25em;
}

.user-banner .user-info {
  margin: 0em 1em;
  flex: 1;
}

.user-status {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
}

.status {
  display:flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}

.status-green {
  color: green;
}

.status-text {
  margin-left: 0.3em;
}

.invertY {
  transform: scaleY(-1);
}

</style>
