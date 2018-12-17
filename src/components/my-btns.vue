<template>
  <div style="display:flex; width:100%;">
    <div class="item" v-for="(item,index) in btnList" :key='index' @click="toPath(item.url)">
        <img slot="icon" :src="item.img">
        <mt-badge size="small" color="#e6554a" class="badge" v-if="item.badge" v-html="item.badge"></mt-badge>
        <span v-html="item.title"></span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "my-btns",
      props:{
        btnList: {
          type: Array,
          required: true
        }
      },
      methods:{
        toPath:function (url) {
          if(!url){
            return null
          }
          !/^http/.test(url) && !!url
            ? this.$router.push(url)
            : location.href = url;
        }
      }
    }
</script>

<style scoped>
  .first-cont .item{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 0.24rem;
    text-align: center;
    position: relative;
    color: #000;
  }
  .badge{
    position: absolute;
    font-size: 0.2rem;
    top: -0.2rem;
    right: 0.05rem;
  }
  .first-cont .item img{
    width: 23%;
    display: block;
    margin: 0 auto 0.24rem ;
  }
  .other-cont.item img{ width: 28%; }
  .mint-badge.is-size-small{ padding: 0.02rem 0.04rem }
  .mint-header{ max-width: 75rem; margin: 0 auto }
</style>
