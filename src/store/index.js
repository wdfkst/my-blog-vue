import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex)
//准备actions -响应组件中的动作
const actions = {
  // 点击按钮，触发action
  login(context,value){
    context.commit('LOGIN',value)
  }
}
//准备mutations -改变状态
 const mutations = {
  // 点击按钮，触发action
    LOGIN(state,value){
      state.email = value
    }
  }
//准备state -用于存储数据
const state = {
  email: '',

}

const store = new Vuex.Store({
  actions : actions,
  mutations : mutations,
  state : state
})

//暴露store
export default store
