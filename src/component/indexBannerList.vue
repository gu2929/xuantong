<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in data" :key='index' 
        @click.native='goBannerLink(item.pictureJumpUrl)'>
            <img :src="item.pictureUri" alt=""
                :data-src='item.pictureUri'
            >
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'banner',
    props:{
        data:{
            type:null,
            require:true
        }
    },
    methods: {
        goBannerLink (url) {
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