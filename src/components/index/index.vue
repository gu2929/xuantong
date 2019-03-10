<template>
    <div class="index_wrap">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="Home_menu">
                <p class='ipt_p' @click='goSearch'>
                    <input type="text" placeholder="写字是一种生活">
                    <i class="iconfont">&#xe618;</i>
                </p>
                <div class="mobile_content">
                  <!--swipe-->
                    <article class="swipe_height">
                        <Banner :data='bannerList'/>
                    </article>
                  <!--课程菜单-->
                    <article class="mobile_ XT_menu">
                        <ul class="m-auto flex text-center">
                            <li>
                                <router-link to='/xtmenulist1'>
                                    <img src="../../../static/img/图层 81@2x.png" alt="">
                                    <span class="dis_block">赠课给好友</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to='/xtmenulist2'>
                                    <img src="../../../static/img/图层 79@2x.png" alt="">
                                    <span class="dis_block">报名</span>
                                </router-link>
                            </li>
                        </ul>
                    </article>
                              
                <!-- //已节课 HaveClass       -->
                <!-- //开课中 ongoing     -->
                <!-- //时间课程 timeClass     -->
                <!-- //尚未开课 NoClass       -->
                    <article v-for="(item,index) in courseRecommendList" :key='index'
                        :class="item.courseFullResponseVo && 
                        item.courseFullResponseVo.courseSingleResponseVos.length > 1
                        ? 'Book fl bgfaf9 publicPadding' : 'Book fl publicPadding' ">
                        <h3 class="c097 text-center">{{item.courseFullResponseVo.courseTypeName}}</h3>
                        <CourseRecommendList :data='item.courseFullResponseVo'/>
                    </article>
                  <!-- 文房商城 Four_stores -->
                    <article class="Book fl Four_stores publicPadding border_bottom">
                        <h3 class="c4a5 text-center">文房商城
                            <router-link to="##" class="fr fz14 c6">更多</router-link></h3>
                        <ShopList :data='commodityRecommendList'/>
                    </article>
                    <article v-for="(item,index) in coursefreeRecommendList" :key='index+10'
                        class="Book fl publicPadding Chairclass border_bottom" v-if='item!=null'>
                        <h3 class="c097 text-center" >{{item.courseName}}
                            <router-link to="##" class="fz14 c6 fr">更多</router-link></h3>
                        <p class="c30 fz15 text-center">{{item.courseAbstract}}</p>
                        <CoursefreeRecommendList :data='item'/>
                    </article>

                  <!--写字的人-->
                    <article class="Book fl publicPadding border_bottom pb-0 People_write ">
                      <h3 class="c4a5 text-center">写字的人 
                          <router-link to="/peoplewrite" class="fz14 c6 fr">更多</router-link></h3>
                      <div class="Chairclass-content">
                          <img src="../../../static/mobile_img/People_write.png" alt="">
                          <h3 class="fz18 c30">我喜欢石头和云</h3>
                          <p class="fz15 c5">
                              工作的时候，走着走着就会有天花板。我的外语就是全部在工作中学的，仅限于沟通.....
                          </p>
                      </div>

                    </article>

                  <!--写字的事-->
                    <article class="Book fl publicPadding border_bottom pb-0 ">
                      <h3 class="c097 text-center">写字的事 <a href="##" class="fz14 c6 fr">更多</a></h3>
                      <div class="Chairclass-content">
                          <img src="../../../static/mobile_img/Work_write.png" alt="">
                          <h3 class="fz18 c30">有一种生活，只生欢喜不生愁</h3>
                          <p class="fz15 c5">
                              工作的时候，走着走着就会有天花板。我的外语就是全部在工作中学的，仅限于沟通.....
                          </p>
                      </div>

                    </article>

                  <!--同学作业-->
                    <article class="Book fl publicPadding border_bottom homework pb-0 ">
                        <h3 class="c4a5 text-center">同学作业 
                            <router-link to="/homework" class="fz14 c6 fr">更多</router-link></h3>
                        <ProductionRecommendList :data='productionRecommendList' ref='ipt'/>
                    </article>

                  <!--教室与老师-->
                    <article class="Book fl publicPadding  Classroom_teacher pb-0">
                        <h3 class="c097 text-center">教室与老师 
                            <router-link to="/classroomteacher" class="fz14 c6 fr">更多</router-link></h3>
                        <ArticleList :data='articleRecommendList' :typeString='types'/>
                    </article>
                </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="Haveclass_menu">
                    <!-- <mt-cell v-for="n in 5" :title="'订单 ' + n" /> -->
                    222222

            </mt-tab-container-item>

            <mt-tab-container-item id="Store_menu">
                    <!-- <mt-cell v-for="n in 7" :title="'发现 ' + n" /> -->
                    3333333333
                
            </mt-tab-container-item>

            <mt-tab-container-item id="My_menu">
                    <div class="page-part">
                        <!-- cell -->
                        <!-- <mt-cell v-for="n in 12" :title="'我的 ' + n" /> -->
                        44444444
                    </div>

            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar v-model="selected" fixed>
            <!-- class="menu-tab"-->
            <mt-tab-item id="Home_menu">
                <img slot="icon" src="../../../static/img/checkPoint_head1.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="Haveclass_menu">
                <img slot="icon" src="../../../static/img/checkPoint_head2.png">
                上课
            </mt-tab-item>
            <mt-tab-item id="Store_menu">
                <img slot="icon" src="../../../static/img/checkPoint_head3.png">
                商店
            </mt-tab-item>
            <mt-tab-item id="My_menu">
                <img slot="icon" src="../../../static/img/checkPoint_head4.png">
                我的
            </mt-tab-item>

        </mt-tabbar>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import Banner from '../../component/indexBannerList.vue'
    import CourseRecommendList from '../../component/indexCourseRecommendList.vue'
    import ShopList from '../../component/searchShopList'
    import CoursefreeRecommendList from '../../component/indexCoursefreeRecommendList.vue'
    import ProductionRecommendList from '../../component/indexProductionRecommendList.vue'
    import ArticleList from '../../component/searchArticleList.vue'
  export default {
    name: 'index',
    data () {
      return {
          selected: 'Home_menu',
          Haveclass_menuList: '1',
          value: '',
          types: 'index'
      }
    },
    computed:{
        ...mapState({
            bannerList:state=>state.indexStore.bannerList,
            courseRecommendList:state=>state.indexStore.courseRecommendList,
            commodityRecommendList:state=>state.indexStore.commodityRecommendList,
            coursefreeRecommendList:state=>state.indexStore.coursefreeRecommendList,
            productionRecommendList:state=>state.indexStore.productionRecommendList,
            articleRecommendList:state=>state.indexStore.articleRecommendList
        })
    },
    watch: {
        selected: function (val, oldVal) {
            console.log(val)
            // click后打印出当前mt-tab-item的id
        },
        Haveclass_menuList: function (val, oldVal) {
            console.log(val)
            // click后打印出当前mt-tab-item的id
        }
    },
    created () {
    //    this.$nextTick(()=>{
    //        this.imgLocation(homework_content,homework_content)
    //    })
    },
    async mounted() {
        this.getIndexBannerAction();
        this.getIndexCourseRecommendAction();
        this.getIndexCommodityRecommendAction();
        this.getIndexCoursefreeRecommendAction();
        await this.getIndexProductionRecommendAction();
        await this.imgLocation("homework_content", "homework_box");
        this.getIndexArticleRecommendAction();
    },
    components: {
        Banner,
        CourseRecommendList,
        ShopList,
        CoursefreeRecommendList,
        ProductionRecommendList,
        ArticleList
    },
    methods:{
        ...mapActions({
            getIndexBannerAction:'indexStore/getIndexBannerAction',
            getIndexCourseRecommendAction:'indexStore/getIndexCourseRecommendAction',
            getIndexCommodityRecommendAction:'indexStore/getIndexCommodityRecommendAction',
            getIndexCoursefreeRecommendAction:'indexStore/getIndexCoursefreeRecommendAction',
            getIndexProductionRecommendAction:'indexStore/getIndexProductionRecommendAction',
            getIndexArticleRecommendAction:'indexStore/getIndexArticleRecommendAction'
        }),
        getChildElement(parent, content) {
            var contentArr = [];
            var allcontent = parent.getElementsByTagName("*");
            for (var i = 0; i < allcontent.length; i++) {
                if (allcontent[i].className == content) {
                    contentArr.push(allcontent[i]);
                }
            }
            return contentArr;
        },
        getMinIndex(heightArr, minHeight) {
            for (var i = 0; i < heightArr.length; i++) {
                if (heightArr[i] == minHeight) {
                    return i;
                }
            }
        },
        imgLocation(parent,child) {
            var cparent = document.getElementById(parent);
            var ccontent = this.getChildElement(cparent, child);
            var imgwidth = ccontent[0].offsetWidth;
            var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
            cparent.style.cssText = "width:" + imgwidth * cols + "px;margin:30px auto";
            var heightArr = [];
            for (var i = 0; i < ccontent.length; i++) {
                if (i < cols) {
                    heightArr.push(ccontent[i].offsetHeight);
                } else {
                    var minHeight = Math.min.apply(null, heightArr);
                    var minIndex = this.getMinIndex(heightArr, minHeight);
                    ccontent[i].style.position = "absolute";
                    ccontent[i].style.top = minHeight + "px";
                    ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
                    heightArr[minIndex] += ccontent[i].offsetHeight;
                }
            }
        },
        checkFlag() {
            var cparent = document.getElementById("homework_content");
            var ccontent = this.getChildElement(cparent, "homework_box");
            var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
            var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
            var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
            console.log(lastContentHeight + ":" + scrollHeight + ":" + pageHeight);
            if (lastContentHeight < scrollHeight + pageHeight) {
                return true;
            }
        },
        handleClick: function () {
            this.$toast('Hello world!')
        },
        goSearch () {
            this.$router.push({
                path:'/search'
            })
        }
    }
  }
</script>


<style lang ='scss' scoped>
    @import url('../../sass/template.css');
    .ipt_p{
        width:100%;
        background:#fff;
        box-sizing: border-box;
        padding: 0 1.43rem;
        position: fixed;
        z-index:10;
        margin:0.625rem 0;
        i{
            position:absolute;
            left:6.5rem;
            z-index:10;
            top:0.63rem;
            color:#ccc;
        }
    }
    .ipt_p > input{
        box-sizing: border-box;
        padding-left:7.3rem;
        width:100%;
        height:2.25rem;
        background:#EEEEEE;
        border-radius: 1rem;
        outline: none;
        border:none;
        text-align: left;
        line-height: 2.25rem;
        color:#ccc;
    }
    .ipt_p > input::-webkit-input-placeholder{
           color:#ccc;
    }
   .homework_box {
        padding: 5px;
        /* float: left; */
        width: 45%;
        display: inline-block;
        vertical-align: top;
        clear: both;

    }

    .homework_box:last-child{
        position: static !important;
        /* top: 0rem !important; */
    }

    .homework_content {
        position: relative;

    }

    .homework_box>div {
        /* padding: 5px; */
        /* border: 1px solid #cccccc; */
        /* box-shadow: 0 0 5px #cccccc; */
        border-radius: 5px;
    }
    .mobile_content{
        margin-top:3.6rem;
    }
</style>
