<template>
  <div class="nearby">
    <div class="nearHead">
     <router-link  to="adress" class="adr l"><span>北京基地北京基地北京基地北京基地北京基地</span> <i class="selectIcon"><img src="../assets/icon.png" alt=""></i></router-link>
      <router-link to="search" class="r search">
        <span><img src="../assets/icon.png" alt="">找附近的吃喝玩乐</span>
      </router-link>
    </div>
    <div class="about-item" style="position:relative;">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/0.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/1.png" /></div>
          <div class="swiper-slide"><img src="../assets/2.jpg" /></div>
        </div>
      </div>
    </div>
    <mt-navbar v-model="selected" class="nav-box">
      <mt-tab-item class="nav-item" :id="index" v-for="(item,index) in list"  @click.native.prevent="clearCont">
        {{item.name}}
        <span class="btm-border"></span>
      </mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" :swipeable="true" class="">
      <mt-tab-container-item :id="index"  v-for="(item,index) in list">
        <div class="nav-list" v-if="item.navList">
          <div style="display: -webkit-box;"><div class="nav-list-item" @click="check(v.name,$event)" :id="index" v-for="(v,index) in item.navList" v-html="v.name"></div></div>
        </div>
        <div class="cont" style="padding-bottom: 32px;position: relative" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
          <ul>
            <li v-for="l in shopList">
              <img src="../assets/icon.png" alt="" class="l shop-img" >
              <div class="l">
               <h3 class="txt t1">
                 <span class="l" style="width:80%;overflow: hidden;text-overflow: ellipsis;">
                   {{l.name}}（{{l.adress}}）
                 </span>
                 <span class="r" v-html="getDisFn(l.distance)">
                    5.3m
                 </span>
               </h3>
                <div class="txt">
                  <!--<span class="star" v-if="i in Number(l.star)">*</span>-->
                  <span>{{l.star}}分</span>
                  <span>人均¥{{l.cost}}</span>
                </div>
                <div class="txt" v-if="l.remarks">备注</div>
                <div class="txt discount" v-if="l.discout.card">
                  <img src="../assets/icon.png" alt="" class="l icon" >
                  <span class="l">{{l.discout.card}}</span>
                </div>
                <div class="txt discount" v-if="l.discout.groupBug">
                  <img src="../assets/icon.png" alt="" class="l icon" >
                  <span class="l">{{l.discout.groupBug}}</span>
                </div>
              </div>
            </li>
          </ul>
          <p v-if="loadFlag" style="text-align: center;position: absolute;bottom: 10px;width: 100%">
            <mt-spinner type="fading-circle"></mt-spinner>
          </p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import '../../static/nearby.css'

  import '../../static/swiper2.7.6.css'
  import Swiper from '../../static/js/swiper2.7.6.js'

export default {
  name: '',
  data() {
    return {
      selected:0,
      loadFlag:false,
      list:[
        {
          "name":"享美食",
          navList:[
            {
              "id":1,
              "name":"热门"
            },{
              "id":1,
              "name":"外卖"
            },{
              "id":1,
              "name":"甜点甜品"
            },{
              "id":1,
              "name":"小吃"
            },{
              "id":1,
              "name":"火锅"
            },{
              "id":1,
              "name":"小吃"
            },{
              "id":1,
              "name":"可乐"
            },{
              "id":1,
              "name":"炸鸡"
            },{
              "id":1,
              "name":"烧烤"
            },{
              "id":1,
              "name":"牛肉面"
            }
          ]
        },
        {
          "name":"惠生活",
          navList:[
            {
              "id":1,
              "name":"健身"
            },{
              "id":1,
              "name":"游泳"
            },{
              "id":1,
              "name":"跳神"
            },{
              "id":1,
              "name":"逛街"
            },{
              "id":1,
              "name":"团购"
            }
          ]

        },
        {
          "name":"爱玩乐",
          navList:[
            {
              "id":1,
              "name":"欢乐谷"
            },{
              "id":1,
              "name":"欢乐谷"
            },{
              "id":1,
              "name":"欢乐谷"
            },{
              "id":1,
              "name":"欢乐谷"
            },{
              "id":1,
              "name":"欢乐谷"
            }
          ]
        },
        {
          "name":"全部",
          navList:null
        }
      ],
      shopList:[]
    };
  },
  methods:{
    clearCont(){
      this.shopList=[];
      for (let i = 1; i <= 5; i++) {
        this.shopList.push({
          "name":"新请求的数据",
          "adress":"北环东路店",
          "star":3.1,
          "cost":100,
          "remarks":null,
          "distance":40,
          "discout":{
            "card":"85代100",
            "groupBug":"100元自助晚餐，80元自助冰淇淋，10元特价海鲜，10元特别凉菜"
          }
        })
      }
    },
    // 获取元素下标
    tabIndex(target,nodeList){
      for(let i=0;i<nodeList.length;i++){
        if(target===nodeList[i]){
          return i;
        }
      }
    },
    loadMore() {
      if(this.shopList.length >= 60) {
        this.loading = false;
        this.loadFlag = false;

        document.getElementsByClassName('mint-tab-container-item')[this.tabIndex(document.getElementsByClassName('is-selected')[0],document.getElementsByClassName('is-selected')[0].parentNode.children)].getElementsByClassName('cont')[0].style.paddingBottom='0px';
        return;
      }else{
        this.loading = true;
        this.loadFlag = true;
        setTimeout(() => {
          for (let i = 1; i <= 5; i++) {
            this.shopList.push({
          "name":"吉野家",
          "adress":"北环东路店",
          "star":3.1,
          "cost":100,
          "remarks":null,
          "distance":40,
          "discout":{
            "card":"85代100",
            "groupBug":"100元自助晚餐，80元自助冰淇淋，10元特价海鲜，10元特别凉菜"
          }
        });
          }
          console.log(document.getElementsByClassName('cont')[0].getElementsByTagName('li').length)
          this.loading = false;
        }, 500);
      }
    },
    getDisFn(num){
      return num>=1000?num/1000+"km":num+'m'
    },
    check(val,e){
      //var el = e.target; //当前元素，可修改（能够用此方法获取到他的子元素等）
      //var el = e.currentTarget;//当前元素，不可修改（不能用此方法获取到他的子元素等）
      this.addClass(event.currentTarget,document.getElementsByClassName('nav-list-item'),'on')
    },
    // 添加类名的方法
    addClass(obj,objList,objClassName){
      for(var i=0;i<objList.length;i++){
        objList[i].classList.remove(objClassName)
      }
      obj.classList.add(objClassName)
    },
    swiper(){
      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1.3,
        loop: true,
        calculateHeight: true,
        // centeredSlides: true,
        autoplay: 2000,
        // speed: 1000,
        tdFlow: {
            rotate: 5,
            stretch: -40,
            depth: 300,
            modifier: 1,
            shadows: true
        }
      })
      mySwiper.slides[0].getHeight();
    }
  },
  mounted(){
    this.swiper();
    for (let i = 1; i <= 5; i++) {
        this.shopList.push({
          "name":"吉野家",
          "adress":"北环东路店",
          "star":3.1,
          "cost":100,
          "remarks":null,
          "distance":40,
          "discout":{
            "card":"85代100",
            "groupBug":"100元自助晚餐，80元自助冰淇淋，10元特价海鲜，10元特别凉菜"
          }
        })
    }
  }
};

</script>

<style lang="css" scoped>
  body{background: #fff;overflow: hidden}
  .nav-box{
    padding: 0 0.35rem;
    margin-top: 0.3rem;
  }
  .mint-navbar .mint-tab-item.is-selected{margin-bottom: 0}
  .nav-list{
    display: -webkit-box;
    width: 7.5rem;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 0.3rem 0;
    padding: 0 0.35rem;
    box-sizing: border-box;
    white-space: nowrap;
  }
  .nav-list-item{
    margin-right: 0.2rem;
    padding:0.15rem 0.2rem ;
    font-size: 0.25rem;
    border-radius: 0.5rem;
  }
  .nav-list-item.on{
    background-color: #fbe1e0;
    color: #ad6c66;
  }
  .mint-navbar .mint-tab-item{position:relative;border: none;padding: 0;height: 0.7rem;line-height: 0.7rem}

  .mint-navbar .mint-tab-item.is-selected .btm-border{
    display: block;
  }
  .btm-border{
    position: absolute;
    bottom: 0;
    border-radius: 0.1rem;
    display: none;
    left: 50%;
    width: 0.4rem;
    height: 0.09rem;
    margin-left: -0.2rem;
    background-color: #f45349;
  }
  .shop-img{
    width: 1.5rem;
    height: 1.1rem;
    margin-right: 0.2rem;
  }
  .cont li{
    padding: 0.3rem 0.25rem;
    overflow: hidden;
  }
  .txt{
    font-size: 0.2rem;
    width: 5.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .icon{
    width: 0.3rem;height: 0.3rem;
    margin-right: 0.1rem;
  }
  .t1{font-size: 0.3rem;}
  .discount{
    line-height: 0.3rem;    margin-bottom: 0.1rem;
  }
  .discount span{
    width: 4.1rem;overflow: hidden;text-overflow: ellipsis;
  }
  .t1 .r{
    font-size: 0.2rem;
    background-color: #f3f2f7;border-radius: 0.5rem;
    color: #bfbec3;
    padding: 0.02rem 0.1rem;
  }
  .about-item{padding: 0.3rem 0 0 .3rem}
  .swiper-slide img{
    border-radius: 0.3rem;
  }
  .swiper-slide-active img{
    box-shadow: 0 0.2rem 0.2rem #f5f5f5;
  }
  .nearHead{
    height: .9rem;
    background: #f8f8f8;
    box-sizing: border-box;
    padding: 0.15rem 0.4rem 0.15rem 0.25rem;font-size: 0.26rem;
    overflow: hidden;
  }
  .adr{overflow: hidden}
  .adr span{
    max-width: 1.9rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
    line-height: 0.6rem;
  }
  .search{
    background: #e3e6ed;
    width:4.25rem;
    color: #a0a0a0;
  }
  .search span{
    width: 2.5rem;
    margin: 0 auto;
    display: block;
    line-height: 0.5rem;
  }
  .adr img{
    width: 0.27rem;
    height: 0.18rem;
  }
  .selectIcon{
    float: left;
    margin-top: 0.2rem;
  }
  .search img{
    width: 0.3rem;
    height: 0.3rem;
    float: left;
    margin-top: 0.1rem;
    border-radius: 50%;
    margin-right: 0.05rem;
  }
</style>
