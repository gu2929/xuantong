import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import indexStore from './index/indexStore'
import searchStore from './search/searchStore'
export default new Vuex.Store({
    modules:{
        indexStore,
        searchStore
    }
})