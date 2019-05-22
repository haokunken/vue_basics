import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './public/mutations'
import actions from './public/actions'
import getters from './public/getters'
Vue.use(Vuex);

const state = {
    test: 1111
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store