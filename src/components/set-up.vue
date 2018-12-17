<template>
 <div>
   <mt-header>
     <router-link to="/my" slot="left">
       <mt-button icon="back">设置</mt-button>
     </router-link>
   </mt-header>
   <div class="base-info">
     <mt-cell v-for="item in infoList"  :title="item.title" :to="item.url" is-link :class="classFn(item.status)" :value="item.val"> </mt-cell>
   </div>
   <mt-button type="default" size="large">退出账户</mt-button>
 </div>
</template>
<script>

  import { Header,Button,Cell } from 'mint-ui';
  import '../../static/setup.css'
  export default {
    name: "set-up",
    components:{
      Header,Button,Cell
    },
    data(){
      return {
        infoList:[
          {
            title:'个人信息',
            url:'setmy',
            status:null,
            val:null
          },
          {
            title:'换绑手机',
            url:'setmy',
            status:null,
            val:'18513042868'
          },
          {
            title:'个人信息',
            url:'setmy',
            status:null,
            val:null
          },
          {
            title:'换绑手机',
            url:'setmy',
            status:null,
            val:'18513042868'
          }
        ]
      }
    },
    methods:{
      classFn:function (s) {
        if(s){
          return s==1?'':''
        }
        return ''
      }
    }
  }

</script>

<style scoped>

  .mint-header{
    background-color: #f9f9f9;
    color: #75868f;
    border-bottom: 0.01rem solid #b3b3b3;
  }
  .mint-button--large{width: 94%;margin: 0.5rem auto;background: #fff;box-shadow: 0 0.02rem 0.05rem #c5c5c5}
</style>
