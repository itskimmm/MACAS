<script setup>
import { ref, computed} from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const router = useRouter()
const store = useStore()

const username = ref("")
const password = ref("")
const cpassword = ref("")

</script>

<template>
    <section id="heading" class="text-center">
      <h1 class="tx-weight-900 mb-none text-primary">Welcome to MACAS!</h1>
      <h1 class="tx-weight-400 margin-none text-primary">Sign up and get prepared now!</h1>
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
      <section id="cpassword" class="flex-col mt-1 mb-1">
        <label class="tx-xs text-gray-light" for="cpwd"> Confirm your password</label>
        <input v-model="cpassword" class="text-cyan-600 tx-md bg-cyan-light br-10 border-none input-primary" type="password" id="cpwd" name="pwd"/>
      </section>
    </section> 
    <input type="submit" value="Sign Up " id="bnr-signup" class="tx-lg mx-auto my-0 w-fc btn br-15 text-white bg-primary tx-weight-900" />
</template>

<style>
a {
  text-decoration: none;
}

#bnr-signup {
  font-family: Optima;
}

#bnr-signup:hover {
  font-family: Optima;
  color: white;
  background-color: #87ABB3;
}

</style>
