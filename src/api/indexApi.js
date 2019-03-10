import axios from 'axios';
export let indexBannerApi = ()=> {
    return axios.post('http://118.190.202.65:8081/carouselimg/list').then(res=>{
        return res.data;
    })
}
export let indexCourseRecommendApi = (courseTypeKey=7,token='66dc3f8010095d03ba5c4771a3b0b8e0')=> {
    return axios.post('/course/recommendlist',{
    },{
        courseTypeKey,
        token
    }
).then(res=>{
        return res.data.result;
    })
}
export let indexCommodityRecommendApi = ()=> {
    return axios.post('http://118.190.202.65:8081/commodity/recommendlist',{}).then(res=>{
        return res.data;
    })
}
export let indexCoursefreeRecommendApi = (pageIndex=1)=> {
    return axios.post('http://118.190.202.65:8081/coursefree/recommendlist',{
        pageIndex
    }).then(res=>{
        return res.data.result;
    })
}
export let indexProductionRecommendApi = ()=> {
    return axios.post('/production/recommendlist',{
        appid:'',
        pageIndex:'',
        signature:'',
        timestamp:'',
        token:'',
    }).then(res=>{
        return res.data.result;
    })
}
export let indexArticleRecommendApi = ()=> {
    return axios.post('/article/recommendlist').then(res=>{
        return res.data.result;
    })
}
