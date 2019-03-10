<template>
    <ul>
        <li v-for="(item,index) in data" :key='index'
            @click='goShopLink(item.commodityUrl)'
        >
            <img :src="item.commodityCoverUrl" alt="" 
            :data-src='item.commodityCoverUrl'>
            <p class="c30 fz15">{{item.commodityName}}</p>
            <span class="c4a5 fz15">{{item.commodityPrice}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    name:'shop',
    props:{
        data:{
            type:null,
            require:true
        }
    },
    methods: {
        goShopLink (url) {
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