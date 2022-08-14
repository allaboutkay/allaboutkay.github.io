import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      isLoading: false,
      isLoaded: false,
      path: '/',
    }
  },
  mutations: {
    setLoading(state,loading){
      state.isLoading = loading.isLoading;
    },
    setLoaded(state,loaded){
      state.isLoaded = loaded.isLoaded;
    },

    setPath(state,path){
      state.path = path.path;
    },
  }
})

export default store