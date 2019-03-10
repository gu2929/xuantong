<template>
    <ul class="homework_content" id="homework_content" ref='homework_content'>
        <li class="homework_box" v-for='(item,index) in data' :key='index' ref='homework_box'>
            <div>
                <img src="../../static/mobile_img/homework1.png" alt=""
                    :data-src='item.thumbUrl'
                >
                <h3 class="fz15 c30">{{item.author}}</h3>
                <p class="fz12">
                    <span class="c4a5">{{item.introduction}}</span>
                    <span class="c9"><i></i>{{item.likeNum}}</span>
                </p>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props:{
        data:{
            type:null,
            require:true
        }
    },
}
</script>
<style lang='scss' scoped>
@import url('../sass/template.css');
</style>


