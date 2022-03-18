<script setup>
import { ref, computed,getCurrentInstance} from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const router = useRouter()
const store = useStore()

const username = ref("")
const umid = ref("")
const password = ref("")
const cpassword = ref("")

const a = getCurrentInstance()
const http = a.appContext.config.globalProperties.$axios

const onSubmit = (e) => {
  if(username && password){ 
    let data = {"username":username.value,
                "umId":umid.value,
                "password":password.value,
                "usertype":"teacher"};
    http.post('http://175.178.111.161:8888/api/user',data).then((response => {
         console.log(response.data)
         router.push("/teacher/login")
    }))
   
  }
}

</script>

<template>
<form @submit.prevent="onSubmit" class="flex-col algin-center justify-between">
    <section id="heading" class="text-center">
      <h1 class="tx-weight-900 mb-none text-primary">Welcome to MACAS!</h1>
      <h1 class="tx-weight-400 margin-none text-primary">Sign up and get prepared now!</h1>
    </section>
    <section id="center"> 
      <section id="username" class="flex-col mb-1">
        <label class="tx-xs text-gray-light" for="uname">Username</label>
        <input v-model="username" class="text-cyan-600 tx-md bg-cyan-light br-10 border-none input-primary" type="text" id="uname" name="uname"/>
      </section>
       <section id="umid" class="flex-col mb-1">
        <label class="tx-xs text-gray-light" for="umid">Umid</label>
        <input v-model="umid" class="text-cyan-600 tx-md bg-cyan-light br-10 border-none input-primary" type="text" id="umid" name="umid"/>
      </section>
      <section id="password" class="flex-col mt-1 mb-1">
        <label class="tx-xs text-gray-light" for="pwd">Password</label>
        <input v-model="password" class="text-cyan-600 tx-md bg-cyan-light br-10 border-none input-primary" type="password" id="pwd" name="pwd"/>
      </section>
      <section id="cpassword" class="flex-col mt-1 mb-1">
        <label class="tx-xs text-gray-light" for="cpwd"> Confirm your password</label>
        <input v-model="cpassword" class="text-cyan-600 tx-md bg-cyan-light br-10 border-none input-primary" type="password" id="cpwd" name="pwd"/>
      </section>
      <input type="submit" value="Sign Up " id="bnr-signup" class="tx-lg mx-auto my-0 w-fc btn br-15 text-white bg-primary tx-weight-900" />
    </section> 
    </form>
</template>

<style>
html,body{
  height:100%;
  width:100%;
  margin:0;
  padding:0;
  overflow: hidden;
}
#heading{
  width: 100%;
  height:0px;
  margin: 0px auto;
}

#center{
  position:absolute;
  width: 400px;
  height: 400px;
  top:250px;
  right:0;
  left:0;
  margin: 0px auto;
}
a {
  text-decoration: none;
}

#bnr-signup {
  font-family: Optima;
  width:400px;
  height:40px;
  margin-top: 20px;
}

#bnr-signup:hover {
  font-family: Optima;
  color: white;
  background-color: #87ABB3;
}

</style>
