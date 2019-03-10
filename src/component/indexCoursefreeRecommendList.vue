<template>
    <div class="Chairclass-content">
        <embed>
        <video :src="data.courseVideoUri" controls="controls"
            :data-src='data.courseVideoUri'
        >
            your browser does not support the video tag
        </video>
        </embed>
        <p class="Chairclass_icon text-center">

            <router-link to="##">
                <span class="c9">
                    <i class="iconfont more" icon="more">&#xe667;</i><span>{{data.clickVolume}}</span>
                </span>
            </router-link>
            <router-link to="##">
                <span class="c9">
                    <i class="iconfont more" icon="more">&#xe63d;</i> <span>{{data.commentNum}}</span>
                </span>
            </router-link>
            <router-link to="##">
                <span class="c9">      
                   <i class="iconfont more" icon="more">&#xe607;</i><span>{{data.likeNum}}</span>
                </span>
            </router-link>
        </p>
    </div>
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
video{
    width:20rem;
    height:11.25rem;
}
.Chairclass_icon text-center{
    display:flex;
    a{
        flex:1;
    }
}
.c9{
    display:flex;
    justify-content: center;
    i{
        width:1.5rem;
        height:1rem;
        margin-right:.25rem;
    }
}

</style>


