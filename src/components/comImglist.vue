<template>
<div class="com-imglist">
    <div class="imgmain" @click="pathUrl(item.url)" v-for="(item,index) in imgList" :key='index'>
        <img :src="item.img" :style="item.style" alt="">
    </div>
</div>

</template>

<script>
export default {
  data(){
        return {
            
        }
    },
    props:{
        imgList: {
            type: Array,
            required: true
        }
    },
    methods: {
        pathUrl: function (url) {
            !/^http/.test(url) && !!url 
            ? this.$router.push(url)
            : location.href = url;
        }
      }
};
</script>

<style scoped>
.com-imglist{ display: flex; }
.imgmain{ flex: 1; box-sizing: border-box; }
.imgmain img{ box-sizing: border-box; }
</style>
