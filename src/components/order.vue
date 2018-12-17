<template>
  <div class="order">
    <classifyBtn :classifyList="classifyList" />
    <h4 class="order-subtit">最近订单</h4>
    <h4 class="order-subtit is-border">我的收藏</h4>
    <h4 class="order-subtit is-border">最近浏览</h4>
  </div>
</template>

<script>
import classifyBtn from "./classify-btn.vue";
export default {
  components: {
    classifyBtn
  },
  data() {
    return {
      classifyList: [
        { img: require("../assets/icon.png"), title: "待付款" },
        { img: require("../assets/icon.png"), title: "待使用" },
        { img: require("../assets/icon.png"), title: "待评价" },
        { img: require("../assets/icon.png"), title: "退款/售后" },
        { img: require("../assets/icon.png"), title: "全部订单" }
      ]
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.order-subtit{ display: flex; height: .3rem; line-height: .3rem; margin: 0 .2rem; padding: .1rem 0; font-size: .24rem; }
.is-border{ border-bottom: 1px solid #ddd; }
</style>
