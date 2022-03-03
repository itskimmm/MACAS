<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from "../components/Navbar.vue"
import LoginModal from "../components/LoginModal.vue"
import {ref} from "vue"

const bnrImg = new URL("/bnr-img.png", import.meta.url).href

const showModal = ref(false);

function show() {
  showModal.value = true
}

function close() {
  showModal.value = false
}

</script>

<template>
  <div id="hm-container">
    <NavBar @showModal="show"/>
    <main id="banner" class="flex-row">
      <section id="banner-text" class="flex-col">
        <h1 class="text-deepblue">Connect Teaching & Learning <br/>on MACAS</h1>
        <h5 class="text-secondary-lg tx-weight-300">Mentoring. Academy. Connection. Action. Succession.</h5>
        <div class="flex-row align-center">
          <router-link to="/student/join">
          <button id="bnr-slogin" class="btn br-10 mr-1 text-white bg-primary"><b>Student Sign In</b></button>
          </router-link>
          <router-link to="/teacher/login">
          <button id="bnr-tlogin" @click="show" class="btn br-10 ml-1 text-primary bg-secondary"><b>Teacher Sign In</b></button>
          </router-link>
        </div>
      </section>
      <section id="banner-img">
        <img alt="MACAS interactive teaching" :src="bnrImg"/>
      </section>
    </main>
  </div>
  <footer id="hm-footer" class="text-primary">
    <b>Mobile-Assisted Classroom Activity System.</b>
  </footer>
  <LoginModal v-if="showModal" />
</template>

<style>
body {
  margin : 0;
  height: 100vh;
  width: 100vw;
}

#app {
  font-family: 'Optima';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height : 100%;
  width : 100%;
  background: #B7DFE7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#hm-container, #hm-footer {
  width: 85%;
  margin: 0 auto;
}

#hm-container {
  background: #d9eef2;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 0.5em 2em 0em 2em;
}

#banner {
  flex-wrap: nowrap;
  height: fit-content;
  width: 100%;
}

#banner-text{
  justify-content: center;
  width:60%
}

#banner-img {
  width: 40%;
}

#banner-img img{
  max-width: 101%;
  max-height: 101%;
}

#banner-text h1 {
  text-shadow: 1px 1px 3px #000000;
}

#banner-text h5 {
  margin-top : 0;
  margin-bottom: 3em;
}

#bnr-slogin, #bnr-tlogin {
  font-family: Optima;
}

#bnr-slogin:hover, #bnr-tlogin:hover {
  filter: opacity(0.75);
  font-family: 'Optima';
}


#hm-footer {
  background: white;
  height: fit-content;
  text-align: center;
  padding: 0em 2em 0em 2em;
  line-height: 70px;
  height: 70px;
  border-radius: 0 0 20px 20px;
}

.flex-row {
  display:flex;
  flex-direction : row;
}

.flex-wrap {
  flex-wrap: wrap;
}


.flex-col {
  display:flex;
  flex-direction: column;
}

.gap-1{
  gap: 1em;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.justify-between{
  justify-content:space-between;
}

.justify-center{
  justify-content:center;
}

.justify-around{
  justify-content:space-around;
}

.justify-evenly{
  justify-content:space-evenly;
}

.justify-end{
  justify-content: end;
}

.mr-1 {
  margin-right: 1em;
}

.ml-1 {
  margin-left: 1em;
} 

.ml-2 {
  margin-left: 1.25em;
} 

.ml-3 {
  margin-left: 1.5em;
} 

.mr-2 {
  margin-right: 1.25em;
}

.bl-raidus-15 {
  border-top-left-radius : 15px;
  border-bottom-left-radius : 15px;
}

.btl-radius-15 {
  border-top-left-radius : 15px;
}

.btr-radius-15 {
  border-top-right-radius : 15px;
}

.btr-15 {
  border-top-left-radius : 15px;
  border-top-right-radius : 15px;
}

.br-raidus-15 {
  border-top-right-radius : 15px;
  border-bottom-right-radius : 15px;
}

.br-raidus-15 {
  border-top-right-radius : 15px;
  border-bottom-right-radius : 15px;
}


.ml-2 {
  margin-left: 1.25em;
} 

.mt-1 {
  margin-top: 1em;
} 

.mt-2 {
  margin-top: 1.25em;
}

.mt-0 {
  margin-top: 0;
}

.mt-2em {
  margin-top: 2em;
} 

.margin-none {
  margin: 0;
}

.m-1 {
  margin: 1em;
}

.px-1 {
  padding-left: 1em;
  padding-right: 1em;
}

.px-2 {
  padding-left: 1.25em;
  padding-right: 1.25em;
}

.px-3 {
  padding-left: 1.5em;
  padding-right: 1.5em;
}

.w-fc {
  width: fit-content;
}

.w-85{
  width: 85% !important;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mx-1 {
  margin-left: 1em;
  margin-right: 1em;
}

.mx-2 {
  margin-left: 1.25em;
  margin-right: 1.25em;
}

.mx-3 {
  margin-left: 1.5em;
  margin-right: 1.5em;
}

.mx-4 {
  margin-left: 1.75em;
  margin-right: 1.75em;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.my-1 {
  margin-top: 1em;
  margin-bottom: 1em;
}

.my-2 {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.mb-none {
  margin-bottom: 0;
}

.mb-1 {
  margin-bottom: 1em;
}

.mb-2 {
  margin-bottom: 1.25em;
}

.mb-3 {
  margin-bottom: 1.5em;
}

.text-primary {
  color: #2e5c6e;
}

.bg-secondary {
  background: #a4d6e0;
}

.bg-cyan-xpale {
  background : #f0fbfb
}

.text-secondary-lg {
  color: #577c8a;
}

.text-deepblue{
  color: #08192d;
}

.bg-cyan-light {
  background-color : #cae8ed;
}

.text-cyan-light {
  color : #cae8ed;
}

.bg-cyan-500 {
  background-color: #b7dfe7;
  
}

.text-gray-light {
  color: #879192;
}

.text-neon-green {
  color: rgb(23, 255, 175);
}

.text-success {
  color: #2ac940;
}

.text-gray-600 {
  color: #7D7975
}

.text-cyan-600 {
  color:#87abb3;
}

.bg-cyan-600 {
  background: #87abb3;
}

.w-full {
  width: 100%;
}

.w-40{
  width: 40%;
}

.w-60 {
  width: 60%;
}

.flex-1 {
  flex: 1;
}

.h-full {
  height: 100%;
}
.text-center {
  text-align: center;
}

.text-it {
  font-style: italic;
}

.tx-xs {
  font-size: 0.8em;
}

.tx-sm {
  font-size: 0.9em;
}

.tx-md {
  font-size: 1em;
}

.tx-lg {
  font-size: 1.25em;
}

.tx-xl {
  font-size: 1.5em;
}

.tx-xxl {
  font-size: 2em;
}

.tx-weight-300 {
  font-weight: 300;
}

.tx-weight-700 {
  font-weight: 700;
}

.tx-weight-400 {
  font-weight: 400;
}

.tx-weight-900 {
  font-weight: 900;
}

.input-primary {
  padding: 0.5em 1em;
}

.border-none {
  border:none;
}

.logo-text {
  font-weight: 700;
  color: #2e5c6e;
  width: 30%
}

.p-1{
  padding: 1em;
}

.p-2{
  padding: 1.25em;
}

.p-3{
  padding: 1.5em;
}

.pt-1 {
  padding-top: 1em
}

.pt-2 {
  padding-top: 1.25em
}

.px-1 {
  padding-left: 1em;
  padding-right: 1em;
}

.px-4 {
  padding-left: 1.75em;
  padding-right: 1.75em;
}

.btn{
  border: none;
  padding: 0.5em 2em;
  cursor:pointer;
}

.br-5{
  border-radius: 5px;
}

.br-10{
  border-radius: 10px;
}

.br-15{
  border-radius: 15px;
}

.br-full{
  border-radius: 999px;
}

.blr-full {
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
.brr-full {
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.bg-primary {
  background: #2e5c6e;
}

.text-white{
  color: white;
}
.bg-white{
  background : #fff;
}

.bg-yellow-light {
  background: #eadcb1;
}
.bg-cyan-500 {
  background: #A5D7E1;
}
.bg-marinegreen-500 {
  background: #abceb0;
}
.bg-pink-500 {
  background: #e4d5f0;
}

.bg-gray-xpale {
    background: #f3f8fd;
}

.bg-none{
  background: none;
}

.grid{
  display: grid;
  grid-gap: 1em;
  grid-template-columns : repeat(2, 1fr);
}

@media only screen and (max-width: 768px) {
  .grid {
    grid-template-columns : repeat(1, 1fr);
  }
}

</style>
