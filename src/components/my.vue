<template>
  <div class="my-box">
   <!-- <mt-loadmore :top-method="loadTop">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>-->
    <mt-header fixed class="head-box">
      <router-link to="setup" slot="left">
        <mt-button >设置</mt-button>
      </router-link>

      <div slot="right">
        <mt-button >客服</mt-button>
        <mt-button class="msg-box" style="padding-right: 5px">
          <mt-badge size="small" color="#e6554a" class="badge">5</mt-badge>
          消息
        </mt-button>
      </div>
    </mt-header>
    <div class="cont">
      <div class="user-info">
        <img src="../assets/icon.png" alt="" class="head-img">
        <p class="user-name">姓名</p>
        <div class="circle"></div>
      </div>
      <div class="main-box">
        <div class="main-cont">
          <div class="first-cont">
            <myBtns :btnList="myList" />
          </div>
          <p class="tit">美团钱包</p>
          <div class="first-cont other-cont">
            <myBtns :btnList="serverList" />
          </div>
          <p class="tit">美团服务</p>
          <div class="first-cont other-cont">
            <myBtns :btnList="btnList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import myBtns from './my-btns'
  import setUp from './set-up'

  export default {
    name: "my",
    data() {
      return {
        btnList:[
          { img: require("../assets/icon.png"), title: "美食",badge:"赢现金" ,url:null},
          { img: require("../assets/icon.png"), title: "美食",badge:null,url:null},
          { img: require("../assets/icon.png"), title: "美食",badge:null ,url:null},
          { img: require("../assets/icon.png"), title: "美食",badge:null ,url:null}
        ],
        serverList:[
          { img: require("../assets/icon.png"), title: "收藏", badge:null, url:null},
          { img: require("../assets/icon.png"), title: "收藏", badge:null, url:null},
          { img: require("../assets/icon.png"), title: "收藏", badge:null, url:null},
          { img: require("../assets/icon.png"), title: "收藏", badge:"抢红包", url:null}
        ],
        myList:[
          { img: require("../assets/icon.png"), title: "收藏",badge:null ,url:null},
          { img: require("../assets/icon.png"), title: "收藏" ,badge:null,url:'https://blog.csdn.net/OKherry/article/details/82887919'},
          { img: require("../assets/icon.png"), title: "收藏",badge:null ,url:'home'}
        ]
      }

    },
    components:{
      myBtns,
      setUp
    },
    methods:{
      loadTop(id) {
        this.$broadcast('onTopLoaded', id);
      }
    }
  };
</script>

<style scoped>

  .main-cont{
    width: 88%;
    margin: 0 auto;
  }
  .msg-box{
    position: relative;
  }
  .main-box{background: #fff}
  .first-cont{
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 0.5rem 0;
    display: -webkit-flex; /* Safari */
    border-bottom: 1px solid #fefefe;
  }
  .other-cont{
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 0.4rem 0;
    display: -webkit-flex; /* Safari */
    border-bottom: 1px solid #fefefe;
  }
  .cont{
    margin-top: 0.8rem;
    padding-bottom: 1rem;
  }
  .head-img{
    display: block;
    width: 14%;
    height: 100%;
    margin: 0 auto;
    border-radius: 50%;
    border: 0.05rem #fff solid;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }
  .user-name{
    font-size: 0.26rem;
    text-align: center;
    margin: 0.24rem 0 0;
    font-weight: 600;    position: relative;
    z-index: 1;
  }

  .tit{
    font-size: 0.26rem;
    color: #000;
    font-weight: 600;
  }
  .mint-badge.is-size-small{padding: 0.02rem 0.04rem}

  .user-info{ position: relative; overflow: hidden; background: #26a2ff; }
  .circle{ max-width: 90rem; width: 120%;
    position: absolute;
    background: #fff;
    height: 220%;
    border-radius: 100%;
    top: 25%;
    left: 50%;
    transform: translateX(-50%); z-index: 0 }
  .head-box .badge{
    top: 0.15rem;
    border-radius: 100%;
    right: 0;
    font-size: 0.18rem;
    padding: 0.02rem 0.06rem;
    position: absolute;
  }
  .mint-button{ font-size: 0.18rem; height: 0.8rem }
</style>
