<template>
    <div>
        <div class="" v-if='data.courseSingleResponseVos.length > 1'>
            <div class="pos_r">
                <img  v-if='data.courseTypeId == 1' 
                    src="../../static/mobile_img/live-ico.png" alt="" class="pos_a">

                <img  v-else src="../../static/mobile_img/recorded-ico.png" alt="" class="pos_a">

                <span class="pos_a fz12">报名截止日期：2019-02-02</span>
                <img src="../../static/mobile_img/book.png" alt="" :data-src='data.coursePictureUri'>
                
                <div>
                    <h2 class="fz18">{{data.courseName}}</h2>
                    <h4 class="fz15">《{{data.courseTitle}}》共{{data.courseSingleCount}}课</h4>
                    <output class="c5"><s>原价{{data.courseFullPrice}}元</s></output>
                    <strong class="fz18 c097 dis_block" v-if='data.courseDiscountPrice'>{{data.courseDiscountPrice}}元</strong>
                </div>
            </div>
            <ul>
                <li v-for='(item, index) in data.courseSingleResponseVos' :key='index'>
                    <span class="pos_a fz12 HaveClass">已结课</span>

                    <img src="../../static/mobile_img/book_list1.png" alt="" 
                    :data-src='item.coursePictureUri'>
                    <p class="c30">
                        <samp>第{{index+1}}阶 | <span>{{item.courseName}}</span></samp>
                    </p>
                    <h4 class="c30">《{{item.courseSubtitle}}》</h4>
                    <p class="c30">
                        <span class="">￥{{item.courseFullPrice}}</span>
                        <small>共{{item.classHourCount}}次课</small>

                    </p>
                </li>
            </ul>
        </div>
        <div v-else>
            <div class="pos_r">
                <img  v-if='data.courseSingleResponseVos[0].courseType == 1' 
                    src="../../static/mobile_img/live-ico.png" alt="" class="pos_a">
                <img  v-else src="../../static/mobile_img/recorded-ico.png" alt="" class="pos_a">

                <span class="pos_a fz12">报名截止日期：2019-02-02</span>
                <img src="../../static/mobile_img/book.png" alt="" 
                :data-src='data.courseSingleResponseVos[0].coursePictureUri'>
                
                <div>
                    <h2 class="fz18">{{data.courseSingleResponseVos[0].courseName}}</h2>
                    <h4 class="fz15">《{{data.courseSingleResponseVos[0].courseSubtitle}}》
                        共{{data.courseSingleResponseVos[0].classHourCount}}课</h4>
                    <!-- <output class="c5"><s>原价{{data.courseSingleResponseVos[0].courseFullPrice}}元</s></output> -->
                    <strong class="fz18 c097 dis_block">{{data.courseSingleResponseVos[0].courseFullPrice}}元</strong>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'courserecommend',
    props:{
        data:{
            type:null,
            require:true
        }
    },
    methods: {
    }
}
</script>
<style lang='scss' scoped>
    @import url('../sass/template.css');
</style>