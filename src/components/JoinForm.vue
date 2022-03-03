<script setup>
</script>

<template>
  <form class="flex-col algin-center justify-between">
    <section id="heading" class="text-center">
      <h1 class="tx-weight-900 mb-none text-primary">Welcome to MACAS</h1>
      <h4 class="tx-weigth-400 margin-none text-primary">Student's Edition</h4>
    </section>
    <section> 
      <section id="roomname" class="flex-col mb-1">
        <label class="tx-xs text-gray-dark" for="rname">Enter Room Name</label>
        <input class="text-cyan-600 tx-md bg-white br-10 border-none input-primary" type="text" id="rname" name="rname"/>
      </section>
      <section id="sname" class="flex-col mt-1 mb-1">
        <label class="tx-xs text-gray-dark" for="pwd">Your Name Here</label>
        <input class="text-cyan-600 tx-md bg-white br-10 border-none input-primary" type="text" id="sname" name="sname"/>
      </section>
    </section> 
    <input type="submit" value="Enter" id="bnr-join" class="tx-lg mx-auto my-0 w-fc btn br-15 text-white bg-primary tx-weight-900" />
  </form>
</template>
