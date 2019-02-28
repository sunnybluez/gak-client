
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  token: "",       //用户身份token验证信息
  user:{}           //用户的账号等信息
};

const getters ={
  getToken() {
    return state.token;
  },
  getUser(){
    return state.user;
  }
}

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  }
}

const actions = {
  setToken(context,token) {
    context.commit('setToken',token)
  },
  setUser(context, user) {
    context.commit('setUser', user);
  }
}
//使用方法
// console.log(this.$store.getters.getToken);
//         this.$store.dispatch("setToken",{
//           name:"asd"
//         });
//           console.log(this.$store.getters.getToken.name)

const store = new Vuex.Store({
  state,getters,mutations,actions
});

export default store;
