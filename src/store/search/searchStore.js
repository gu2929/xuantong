import {searchArticleApi,searchCourseApi,searchShopApi} from '../../api/searchApi.js'
let state={
    articleList:[],
    courseList:[],
    shopList:[]
}
let mutations={
    getArticleListMutations (state, payload) {
        state.articleList=payload.result.searchArticleResponseVos
    },
    getCourseListMutations (state, payload) {
        state.courseList=payload.result.searchCourseResponseVos
        console.log(state.courseList)
    },
    getShopListMutations (state, payload) {
        state.shopList=payload.result.searchCommodityResponseVos
    }
}
let actions={
  async getCourseListAction ({commit}, payload) {
    let data =await searchCourseApi(payload)
    commit('getCourseListMutations',data)
  },
  async getShopListAction ({commit}, payload) {
    let data =await searchShopApi(payload)
    commit('getShopListMutations',data)
  },
  async getArticleListAction ({commit}, payload) {
    let data =await searchArticleApi(payload)
    commit('getArticleListMutations',data)
  }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}