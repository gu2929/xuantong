<template>
    <div class='search_wrap' @keydown="searchChange">
        <label for="" class='ipt_label'>
            <input type="text"  placeholder="写字是一种生活" autofocus="autofocus" v-model='iptValue'>
            <i class="iconfont">&#xe618;</i>
            <span @click='spnNone'>取消</span>
        </label>
        <div class="mobile_content" v-if='flag'>
            <mt-navbar v-model="Haveclass_menuList" class="Haveclass_menuList">
                <mt-tab-item id="1" @click.native='getCourse'>课程</mt-tab-item>
                <mt-tab-item id="2" @click.native='getArticle'>文章</mt-tab-item>
                <mt-tab-item id="3" @click.native='getShop'>商店</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="Haveclass_menuList">
                <mt-tab-container-item id="1">
                    <div class="mobile_content">

                        <!--主-->
                        <article class="Book fl publicPadding">

                            <div>
                                <div class="pos_r">
                                    <img src="../../../static/mobile_img/recorded-ico.png" alt="" class="pos_a">

                                    <span class="pos_a fz12">报名截止日期：2019-02-02</span>
                                    <img src="../../../static/mobile_img/Health.png" alt="">
                                    <div>
                                        <h2 class="fz18">从脾妈妈开始的养生课</h2>
                                        <h4 class="fz15">《让我们身体棒棒》共20课</h4>
                                        <output class="c5"><s>原价 12980元</s></output>
                                        <strong class="fz18 c097 dis_block">3280元</strong>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <!--然后you 课程列表-->
                        <article class="Book fl bgfaf9 publicPadding">

                            <div class="">
                                <div class="pos_r">
                                    <img src="../../../static/mobile_img/live-ico.png" alt="" class="pos_a">

                                    <span class="pos_a fz12">报名截止日期：2019-02-02</span>
                                    <img src="../../../static/mobile_img/Reading.png" alt="">
                                    <div>
                                        <h2 class="fz18">林曦老师的零基础书法课</h2>
                                        <h4 class="fz15">《从书法之美到生活之美》共60课</h4>
                                        <output class="c5"><s>原价 12980元</s></output>
                                        <strong class="fz18 c097 dis_block">3280元</strong>
                                    </div>
                                </div>
                                <ul>
                                    <li>
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
                                </ul>
                            </div>
                        </article>

                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="mobile_content Haveclass_menuList-content2">
                        <article class="Book fl publicPadding  Classroom_teacher pb-0">
                            <ArticleList :data='articleList' :typeString='types'/>
                        </article>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <div class="mobile_content">
                        <article class="Book fl Four_stores publicPadding pt-0">
                            <ShopList :data='shopList'/>
                        </article>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
    
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    import ShopList from '../../component/searchShopList.vue'
    import ArticleList from '../../component/searchArticleList.vue'
    import CourseList from '../../component/searchCourseList.vue'
    export default {
        name:'search',
        data () {
            return {
                flag:false,
                iptValue:'',
                Haveclass_menuList: '1',
                types:'search'
            }
        },
        computed: {
            ...mapState({
                articleList:state=>state.searchStore.articleList,
                shopList:state=>state.searchStore.shopList,
                courseList:state=>state.searchStore.courseList
            })
        },
        components: {
            ShopList,
            ArticleList,
            CourseList
        },
        methods: {
            ...mapActions({
                getCourseListAction:'searchStore/getCourseListAction',
                getArticleListAction:'searchStore/getArticleListAction',
                getShopListAction:'searchStore/getShopListAction'
            }),
            spnNone () {
                this.$router.push({
                    path:'/'
                })
            },
            async searchChange (e) {
                if(e.keyCode===13){
                    await this.getCourseListAction(this.iptValue);
                    this.flag=true;
                }
            },
            getCourse () {
                this.getCourseListAction(this.iptValue)
            },
            getArticle () {
               this.getArticleListAction(this.iptValue)
            },
            getShop () {
                this.getShopListAction(this.iptValue)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import url('../../sass/template.css');
    .search_wrap{
        width:100%;
        height:100%;
    }
    .ipt_label{
        width:100%;
        background:#fff;
        box-sizing: border-box;
        padding:0 1.43rem;
        position:relative;
        margin:0.625rem 0;
        display:flex;
        align-items: center;
        input{
            height:2.25rem;
            box-sizing: border-box;
            padding-left:2.35rem;
            flex:1;
            background:#EEEEEE;
            border-radius: 1rem;
            outline: none;
            border:none;
            text-align: left;
            color:#000;
            line-height: 2.25rem;
        }
        i{
            position:absolute;
            left:2rem;
            z-index:10;
             top:0.63rem;
            color:#ccc;
        }
        span{
            display:block;
            margin-left:1rem;
            color:#555555;
            font-size:.8rem;
        }
    }
    .ipt_label > input::-webkit-input-placeholder{
           color:#ccc;
    }
</style>