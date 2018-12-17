<template>
<div class='home'>
  <div class="search-wrap"><mt-search cancel-text="取消" placeholder="搜索"></mt-search><span class="home-menu" @click="homeMenu()">+</span></div>
  <div class="home-menu-list" v-if="homeMenuList">
    <a href="javascript:;"><i><img src="../assets/icon.png" alt=""></i><em>11111</em></a>
    <a href="javascript:;"><i><img src="../assets/icon.png" alt=""></i><em>11111</em></a>
    <a href="javascript:;"><i><img src="../assets/icon.png" alt=""></i><em>11111</em></a>
    <a href="javascript:;"><i><img src="../assets/icon.png" alt=""></i><em>11111</em></a>
  </div>
  <mt-swipe :auto="4000">
    <mt-swipe-item><img src="../assets/0.jpg" style="max-width:100%" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../assets/1.png" style="max-width:100%" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../assets/2.jpg" style="max-width:100%" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../assets/3.jpg" style="max-width:100%" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../assets/4.png" style="max-width:100%" alt=""></mt-swipe-item>
  </mt-swipe>
  <div class="classify-wrap">
    <classifyBtn :classifyList="classifyList" />
    <classifyBtn :classifyList="classifyList" />
  </div>
  <imgList :imgList="imgActivity" style="padding:0;" />
  <imgList :imgList="imgList" style="padding:.1rem;" />
  <imgList :imgList="imgActivity" style="padding:0;" />
  <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <ul v-bind:class="loading == true ? '' : 'load-wrap'" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <comProduct :productList="productList" />
    </ul>
    <p v-show="loading" style="margin-bottom:1.4rem; text-align: center;">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
  </div>
</div>
</template>

<script>
import '../../static/home.css'
import classifyBtn from "./classify-btn.vue";
import imgList from "./comImglist"
import comProduct from "./comProduct-one"
export default{
  data(){
    return{
      loading: false,
      allLoaded: false,
      wrapperHeight: 0,
      homeMenuList: false,
      search: "搜",
      imgList: [
        { img: 'http://img.mall.juzifenqi.com/180903/371b12f2-4d51-447f-b810-189269b32c06.png', url: 'http://www.baidu.com', style: 'padding: .1rem;' },
        { img: 'http://img.mall.juzifenqi.com/181105/09545c98-b77a-42ad-ab6a-260334bceb8f.jpg', url: './my', style: 'padding: .1rem;' }
      ],
      imgActivity: [
        { img: "http://img.mall.juzifenqi.com/181130/8b800350-d983-48bc-8bdc-30bc5a79e201.jpg", url: '', style: '' }
      ],
      productList: [],
      classifyList: [
        { img: require("../assets/icon.png"), title: "美食" },
        { img: require("../assets/icon.png"), title: "美食" },
        { img: require("../assets/icon.png"), title: "美食" },
        { img: require("../assets/icon.png"), title: "美食" }
      ]
    }
  },
  components:{
    classifyBtn,
    imgList,
    comProduct
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    for (let i = 1; i <= 10; i++) {
      this.productList.push(i);
    }
  },
  methods: {
    homeMenu(){
      this.homeMenuList = !this.homeMenuList;
    },
    loadMore() {
      if(this.productList.length >= 60) {
        this.loading = false;
        return;
      }else{
        this.loading = true;
        setTimeout(() => {
          let last = this.productList[this.productList.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.productList.push(last + i);
          }
          this.loading = false;
        }, 500);
      }
    }
  }
}
</script>

<style scoped>
.home{ padding: .68rem 0 1rem; position: relative; transform: translateX(0); }
.search-wrap{ position: fixed; top: 0; width: 100%; max-width: 750px; z-index: 100; padding-right: 1rem; box-sizing: border-box; background: #d9d9d9; }
.mint-search{ width: 100%; height: 100%; }
.classify-wrap{ margin: .2rem 0; }
.home-menu{ position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 1rem; height: .68rem; line-height: .68rem; text-align: center; font-size: .4rem; }
.home-menu-list{ position: fixed; right: .2rem; top: .68rem; z-index: 100; background: #d9d9d9; }
.home-menu-list a{ display: flex; margin: 0 .2rem; padding: .1rem 0; border-bottom: 1px solid #fcfcfc; color: #fcfcfc; }
.home-menu-list a:nth-last-of-type(1){ border: none; }
.home-menu-list a img{ width: .4rem; }
.home-menu-list a em{ line-height: .4rem; padding-left: .1rem; }
.load-wrap{ padding-bottom: 1rem; box-sizing: border-box; }
</style>
