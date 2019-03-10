<template>
    <div id="app">
        <article class="nav-title">
            <mt-header title="赠课给好友">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </article>
        <div class="mobile_content">
            
                <!--书法课-->
                <article class="Book fl publicPadding">
                    <h3 class="fz24 c30">书法课</h3>
                    <div class="">
                        <div class="pos_r">
                            <img src="../../../static/mobile_img/live-ico.png" alt="" class="pos_a">

                            <span class="pos_a fz12">报名截止日期：2019-02-02</span>
                            <img src="../../../static/mobile_img/book.png" alt="">
                            <div>
                                <h2 class="fz18">林曦老师的零基础书法课</h2>
                                <h4 class="fz15">《从书法之美到生活之美》共60课</h4>
                                <output class="c5"><s>原价 12980元</s></output>
                                <strong class="fz18 c097 dis_block">3280元</strong>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <!-- //已节课 HaveClass       -->
                                <!-- //开课中 ongoing     -->
                                <!-- //时间课程 timeClass     -->
                                <!-- //尚未开课 NoClass       -->

                                <span class="pos_a fz12 HaveClass">已结课</span>

                                <img src="../../../static/mobile_img/book_list1.png" alt="">
                                <p class="c30">
                                    <samp>第一阶 | <span>篆隶筑基</span></samp>
                                </p>
                                <h4 class="c30">《从书法之美到生活之美》</h4>
                                <p class="c30">
                                    <span class="">￥3280.00</span>
                                    <small>共20次课</small>

                                </p>
                            </li>
                            <li>
                                <span class="pos_a fz12 ongoing">开课中</span>
                                <img src="../../../static/mobile_img/book_list2.png" alt="">
                                <p class="c30">
                                    <samp>第二阶 | <span>楷书精进</span></samp>
                                </p>
                                <h4 class="c30">《从书法之美到生活之美》</h4>
                                <p class="c30">
                                    <span class="">￥3280.00</span>
                                    <small>共20次课</small>

                                </p>
                            </li>
                            <li>
                                <span class="pos_a fz12 timeClass">报名截止日期:2019-09-12</span>
                                <img src="../../../static/mobile_img/book_list3.png" alt="">
                                <p class="c30">
                                    <samp>第三阶 | <span>小楷写经</span></samp>
                                </p>
                                <h4 class="c30">《从书法之美到生活之美》</h4>
                                <p class="c30">
                                    <span class="">￥3280.00</span>
                                    <small>共20次课</small>

                                </p>
                            </li>
                            <li>
                                <span class="pos_a fz12 NoClass">尚未开课</span>
                                <img src="../../../static/mobile_img/book_list4.png" alt="">
                                <p class="c30">
                                    <samp>第四阶 | <span>自在行草</span></samp>
                                </p>
                                <h4 class="c30">《从书法之美到生活之美》</h4>
                                <p class="c30">
                                    <span class="">￥3280.00</span>
                                    <small>共20次课</small>

                                </p>
                            </li>
                        </ul>


                    </div>
                </article>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    @import url('../../sass/template.css');
</style>


