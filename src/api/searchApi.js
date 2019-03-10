import axios from 'axios';
export let searchArticleApi = (val)=> {
    return axios.post('/search/articlelist',{
        searchKeyword:val
    },).then(res=>{
        return res.data;
    })
}
export let searchCourseApi = (val)=> {
    return axios.post('/search/courselist',{
        searchKeyword:val
    },).then(res=>{
        return res.data;
    })
}
export let searchShopApi = (val)=> {
    return axios.post('/search/commoditylist',{
        searchKeyword:val
    },).then(res=>{
        return res.data;
    })
}