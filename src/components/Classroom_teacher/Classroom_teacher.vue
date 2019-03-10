<template>
    <div id="app">
        <article class="nav-title">
            <mt-header title="教室与老师">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </article>
        <div class="mobile_content">
            <mt-navbar v-model="Classroom_teacher" class="Haveclass_menuList">
                    <mt-tab-item id="1">关于暄桐</mt-tab-item>
                    <mt-tab-item id="2">关于林曦</mt-tab-item>       
            </mt-navbar>
                <!-- tab-container -->
            <mt-tab-container v-model="Classroom_teacher">
                <mt-tab-container-item id="1">
                    <div class="mobile_content">

                        <!--主-->
                        <article class="Book fl publicPadding Classroom_teacher">

                            <div class="fr user_ClassroomHeader">
                                <img src="../../../static/mobile_img/Classroom_teacher1.png" alt="" class="">                                                
                            </div>
                            <div class="fl user_ClassroomContent">
                                <h3 class="fz18 c5">授课老师<br/>林曦</h3>
                                <p>
                                        林曦，水墨画家，1983年生于重庆，暄桐教室的创办人与授课老师。
                                </p>
                                <p>
                                        毕业于中央美术学院，擅长描绘当下的生活，笔墨师法古人，有朴拙天真的样子，也细腻灵动，尤其喜画花朵、孩童、案头玩意等美好小景。
                                </p>
                            </div>
                        </article>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="mobile_content Haveclass_menuList-content2">

                        <article class="Book fl publicPadding  Classroom_teacher pb-0">

                            <ul class="">
                                <li>
                                    <div>
                                        <img src="../../../static/mobile_img/Classroom_teacher1.png" alt="">
                                    </div>
                                    <div>
                                        <h4 class="fz15 c30">书法之美</h4>
                                        <p class="fz12 c5">
                                            林曦，水墨画家，1983年生于重庆，暄桐教室的创....
                                        </p>
                                        <time class="fz12 c9">2019-01-12</time>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="../../../static/mobile_img/Classroom_teacher2.png" alt="">
                                    </div>
                                    <div>
                                        <h4 class="fz15 c30">暄桐教室</h4>
                                        <p class="fz12 c5">
                                            暄桐教室是一间书法教室，皆在以书法为起点。
                                        </p>
                                        <time class="fz12 c9">2019-01-12</time>

                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="../../../static/mobile_img/Classroom_teacher3.png" alt="">
                                    </div>
                                    <div>
                                        <h4 class="fz15 c30">暄桐线上课</h4>
                                        <p class="fz12 c5">
                                            线上课直播是专门为零基础的成年人而精心设计的。
                                        </p>
                                        <time class="fz12 c9">2019-01-12</time>

                                    </div>
                                </li>
                            </ul>
                        </article>
                    </div>
                </mt-tab-container-item>
                
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
    name:'classroomteacer',
     data() {
            return {

                Classroom_teacher: '1',
                value: '',

            }
        },
        watch: {
           
            Classroom_teacher: function (val, oldVal) {
                console.log(val)
                // click后打印出当前mt-tab-item的id
            }
        },
        methods: {
            handleClick: function () {
                this.$toast('Hello world!')
            },

            // handleChange(index) {}
        }
}
</script>
<style lang='scss' scoped>
@import url('../../sass/template.css');
</style>


