import { createStore } from "vuex"
import states from "./states"
import mutations from "./mutations"

const store = createStore({
  state() {
    return {
      ...states
    }
  },
  mutations: {
    ...mutations
  }
})

export default store;
