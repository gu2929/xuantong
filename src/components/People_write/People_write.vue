<template>
    <div id="app">
        <article class="nav-title">
            <mt-header title="写字的人">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </article>

        <div class="mobile_content">
            <!--写字的人-->
            <article class="Book fl publicPadding People_write ">

                <div class="Chairclass-content mb-30">
                    <img src="../../../static/mobile_img/People_write.png" alt="">
                    <h3 class="fz18 c30">我喜欢石头和云</h3>
                    <p class="fz15 c5">
                        工作的时候，走着走着就会有天花板。我的外语就是全部在工作中学的，仅限于沟通.....
                    </p>
                    <time class="fz15 c9">2019-01-12</time>
                </div>
                <div class="Chairclass-content mb-30">
                    <img src="../../../static/mobile_img/People_write.png" alt="">
                    <h3 class="fz18 c30">我喜欢石头和云</h3>
                    <p class="fz15 c5">
                        工作的时候，走着走着就会有天花板。我的外语就是全部在工作中学的，仅限于沟通.....
                    </p>
                    <time class="fz15 c9">2019-01-12</time>
                </div>

                <div class="Chairclass-content mb-30">
                    <img src="../../../static/mobile_img/People_write.png" alt="">
                    <h3 class="fz18 c30">我喜欢石头和云</h3>
                    <p class="fz15 c5">
                        工作的时候，走着走着就会有天花板。我的外语就是全部在工作中学的，仅限于沟通.....
                    </p>
                    <time class="fz15 c9">2019-01-12</time>
                </div>
                <div class="Chairclass-content mb-30">
                    <img src="../../../static/mobile_img/People_write.png" alt="">
                    <h3 class="fz18 c30">我喜欢石头和云</h3>
                    <p class="fz15 c5">
                        工作的时候，走着走着就会有天花板。我的外语就是全部在工作中学的，仅限于沟通.....
                    </p>
                    <time class="fz15 c9">2019-01-12</time>
                </div>


            </article>

        </div>
    </div>
</template>
<script>
export default {
    name:'peoplewrite',
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
.Chairclass-content p {
        margin-bottom: 0rem;
    }
    .mobile_content article:last-child{
        margin-bottom: 0rem;
    }
</style>


