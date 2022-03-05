import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue"

import Login from "./views/teacher/Login.vue"
import Dashboard from "./views/teacher/Dashboard.vue"
import DQuizzes from "./views/teacher/DQuizzes.vue"
import DRoom from "./views/teacher/DRoom.vue"

import SignUp from "./views/teacher/SignUp.vue"
import Join from "./views/student/Join.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: Home},
    {path: "/teacher/login", component: Login},
    {path: "/teacher/dashboard", component: Dashboard},
    {path: "/teacher/quizzes", component: DQuizzes},
    {path: "/teacher/rooms", component: DRoom},
    {path: "/student/join", component: Join},
    {path: "/teacher/signup", component: SignUp},
  ],
});

export default router
