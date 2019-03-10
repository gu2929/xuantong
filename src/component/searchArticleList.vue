<template>
    <ul>
        <li v-for="(item,index) in data" :key='index' @click='goArticleLink(item.articleUrl)'>
            <div>
                <img src="../../static/mobile_img/Classroom_teacher1.png" alt="" 
                :data-src='item.thumbUrl'>
            </div>
            <div>
                <h4 class="fz15 c30">{{item.articleTitle}}</h4>
                <p class="fz12 c5">
                    {{item.articleIntroduction}}
                </p>
                <time class="fz12 c9" v-if='typeString=="search" '>{{item.publishTime}}</time>
            </div>
        </li>
    </ul>  
</template>
<script>
export default {
    name:'articles',
    props:{
        data:{
            type:null,
            required:true
        },
        typeString:{
            type:null,
            required:true
        }
    },
    methods: {
        goArticleLink (url) {
            this.$router.push({
                path:url
            })
        }
    }
}
</script>
<style lang='scss' scoped>
@import url('../sass/template.css');
</style>