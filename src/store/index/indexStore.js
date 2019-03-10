import {indexBannerApi,indexCourseRecommendApi,
    indexCommodityRecommendApi,indexCoursefreeRecommendApi,
    indexProductionRecommendApi,indexArticleRecommendApi} from '../../api/indexApi.js'
let state={
    bannerList:[],
    courseRecommendList:[],
    commodityRecommendList:[],
    coursefreeRecommendList:[],
    productionRecommendList:[],
    articleRecommendList:[]
}
import axios from 'axios';
let mutations={
    getIndexBannerMutations(state,payload) {
        state.bannerList = payload.result;
    },
    getIndexCourseRecommendMutations(state,payload) {
        state.courseRecommendList = payload.courseResponseVos;
    },
    getIndexCommodityRecommendMutations(state,payload) {
        state.commodityRecommendList = payload.result.commodityResponseVos.slice(0,4);
    },
    async getIndexCoursefreeRecommendMutations(state,payload) {
        await axios.post('http://118.190.202.65:8081/utility/getUrl',{key:payload.courseFreeResponseVos[0].courseVideoUri}).then(res=>{
            payload.courseFreeResponseVos[0].courseVideoUri=res.data.result
        })
        state.coursefreeRecommendList = payload.courseFreeResponseVos;
    },
    getIndexProductionRecommendMutations(state,payload) {
        state.productionRecommendList = payload.productionResponseVos;
    },
    getIndexArticleRecommendMutations(state,payload) {
        state.articleRecommendList = payload.artivityResponseVos;
    }
}
// {
//     "appid":"48832f76dc1411e898f900163e048dd6",
//     "pageIndex":"3",
//     "signature":"",
//     "timestamp":"1552041610875",
//     "token":"66dc3f8010095d03ba5c4771a3b0b8e0"
// }
  
let actions={
    async getIndexBannerAction ({commit}, payload) {
        let data = await indexBannerApi();
        commit('getIndexBannerMutations',data)
    },
    async getIndexCourseRecommendAction ({commit}, payload) {
        let data = await indexCourseRecommendApi();
        commit('getIndexCourseRecommendMutations',data)
    }, 
    async getIndexCommodityRecommendAction ({commit}, payload) {
        let data = await indexCommodityRecommendApi();
        commit('getIndexCommodityRecommendMutations',data)
    }, 
    async getIndexCoursefreeRecommendAction ({commit}, payload) {
        let data = await indexCoursefreeRecommendApi();
        commit('getIndexCoursefreeRecommendMutations',data)
    }, 
    async getIndexProductionRecommendAction ({commit}, payload) {
        let data = await indexProductionRecommendApi();
        commit('getIndexProductionRecommendMutations',data)
    }, 
    async getIndexArticleRecommendAction ({commit}, payload) {
        let data = await indexArticleRecommendApi();
        commit('getIndexArticleRecommendMutations',data)
    }      
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}