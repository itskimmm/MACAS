<script setup>
import { ref, computed} from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const router = useRouter()
const store = useStore()

const username = ref("")
const password = ref("")

const onSubmit = (e) => {
  if(username && password){
    store.commit("login")
    router.push("/teacher/dashboard")
  }
}

const loggedIn = computed(() => store.state.loggedIn)
console.log(loggedIn.value)

if(loggedIn.value){
  console.log("Triggered")
  router.push("/teacher/dashboard")
} 
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex-col algin-center justify-between">
    <section id="heading" class="text-center">
      <h1 class="tx-weight-900 mb-none text-primary">Sign in to MACAS</h1>
      <h4 class="tx-weigth-400 margin-none text-primary">Teacher's Edition</h4>
    </section>
    <section> 
      <section id="username" class="flex-col mb-1">
        <label class="tx-xs text-gray-light" for="uname">Username</label>
        <input v-model="username" class="text-cyan-600 tx-md bg-cyan-light br-10 border-none input-primary" type="text" id="uname" name="uname"/>
      </section>
      <section id="password" class="flex-col mt-1 mb-1">
        <label class="tx-xs text-gray-light" for="pwd">Password</label>
        <input v-model="password" class="text-cyan-600 tx-md bg-cyan-light br-10 border-none input-primary" type="password" id="pwd" name="pwd"/>
      </section>
      <router-link to="/">
        <h5 class="mt-1 mb-1 text-gray-light text-center">Forgot your password?</h5>
      </router-link>
      <h5 class="mt-1 mb-1 text-gray-light text-center">Do not have an account? <router-link to="/"><u>Sign up here.</u></router-link></h5>
    </section> 
    <input type="submit" value="Sign In" id="bnr-join" class="tx-lg mx-auto my-0 w-fc btn br-15 text-white bg-primary tx-weight-900" />
  </form>
</template>

<style>
a {
  text-decoration: none;
}

#bnr-join {
  font-family: Optima;
}

#bnr-join:hover {
  font-family: Optima;
  color: white;
  background-color: #87ABB3;
}

</style>
