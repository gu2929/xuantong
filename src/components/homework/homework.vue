<template>
    <div id="app">
        <!-- <mt-tab-container class="page-tabbar-container" v-model="selected"> -->             
        <article class="nav-title">
            <mt-header title="同学作业">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </article>
        <div class="mobile_content">
            <!--同学作业-->
            <article class="Book fl publicPadding  homework ">
                <ul class="homework_content" id="homework_content">
                    <li class="homework_box">
                        <div>
                            <img src="../../../static/mobile_img/homework1.png" alt="">
                            <h3 class="fz15 c30">车梅的画</h3>
                            <p class="fz12">
                                <span class="c4a5">张小宅的生活</span>
                                <span class="c9"><i></i>1209</span>
                            </p>
                        </div>

                    </li>
                    <li class="homework_box">
                        <div>
                            <img src="../../../static/mobile_img/homework2.png" alt="">
                            <h3 class="fz15 c30">车梅的画</h3>
                            <p class="fz12">
                                <span class="c4a5">张小宅的生活</span>
                                <span class="c9"><i></i>1209</span>
                            </p>
                        </div>

                    </li>
                    <li class="homework_box">
                        <div>
                            <img src="../../../static/mobile_img/Classroom_teacher1.png" alt="">
                            <h3 class="fz15 c30">车梅的画</h3>
                            <p class="fz12">
                                <span class="c4a5">张小宅的生活</span>
                                <span class="c9"><i></i>1209</span>
                            </p>
                        </div>
                    </li>
                    <li class="homework_box">
                        <div>
                            <img src="../../../static/mobile_img/Classroom_teacher2.png" alt="">
                            <h3 class="fz15 c30">车梅的画</h3>
                            <p class="fz12">
                                <span class="c4a5">张小宅的生活</span>
                                <span class="c9"><i></i>1209</span>
                            </p>
                        </div>
        
                    </li>
                    <li class="homework_box">
                        <div>
                            <img src="../../../static/mobile_img/homework3.png" alt="">
                            <h3 class="fz15 c30">车梅的画</h3>
                            <p class="fz12">
                                <span class="c4a5">张小宅的生活</span>
                                <span class="c9"><i></i>1209</span>
                            </p>
                        </div>

                    </li>
                    <li class="homework_box">
                        <div>
                            <img src="../../../static/mobile_img/homework4.png" alt="">
                            <h3 class="fz15 c30">车梅的画</h3>
                            <p class="fz12">
                                <span class="c4a5">张小宅的生活</span>
                                <span class="c9"><i></i>1209</span>
                            </p>
                        </div>
                    </li>

                    <li class="homework_box">
                        <div>
                            <img src="../../../static/mobile_img/Classroom_teacher3.png" alt="">
                            <h3 class="fz15 c30">车梅的画</h3>
                            <p class="fz12">
                                <span class="c4a5">张小宅的生活</span>
                                <span class="c9"><i></i>1209</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </article>
        </div>    
    </div>
</template>
<script>
window.onload = function () {
    imgLocation("homework_content", "homework_box");
    
}
function checkFlag() {
    var cparent = document.getElementById("homework_content");
    var ccontent = getChildElement(cparent, "homework_box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    console.log(lastContentHeight + ":" + scrollHeight + ":" + pageHeight);
    if (lastContentHeight < scrollHeight + pageHeight) {
        return true;
    }
}
function imgLocation(parent, child) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, child);
    var imgwidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
    cparent.style.cssText = "width:" + imgwidth * cols + "px;margin:0px auto 30px";
    var heightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < cols) {
            heightArr.push(ccontent[i].offsetHeight);
        } else {
            var minHeight = Math.min.apply(null, heightArr);
            var minIndex = getMinIndex(heightArr, minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            heightArr[minIndex] += ccontent[i].offsetHeight;
        }
    }
}
function getMinIndex(heightArr, minHeight) {
    for (var i = 0; i < heightArr.length; i++) {
        if (heightArr[i] == minHeight) {
            return i;
        }
    }
}
function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}
export default {
    name:'homework',
     data() {
            return {
             
                Haveclass_menuList: '1',
                value: '',

            }
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
.homework_box {
        padding: 5px;
        /* float: left; */
        width: 45%;
        display: inline-block;
        vertical-align: top;
        clear: both;

    }

    .homework_box:last-child {
        /* position: static !important; */
        /* top: 0rem !important; */
    }

    .homework_content {
        position: relative;
        /* height: 100vh; */

    }

    .homework_box>div {
        /* padding: 5px; */
        /* border: 1px solid #cccccc; */
        /* box-shadow: 0 0 5px #cccccc; */
        border-radius: 5px;
    }
</style>


