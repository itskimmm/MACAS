let mutations = {
  login(state) {
    return state.loggedIn = true; 
  },
  logout(state) {
    return state.loggedIn = false; 
  }
}

export default mutations;
