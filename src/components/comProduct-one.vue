<template>
<div>
  <div v-for="(item,index) in productList" :key="index" style="position: relative;">
    <div class="com-product" @click="pathUrl(item.url)">
        <i class="product-icon"><img src="../assets/icon.png" alt=""></i>
        <div class="product-desc">
            <h6>贞子之幽灵庭院恐怖主题密室逃脱<span>11.8km</span></h6>
            <p class="product-address">[昌平区]单人密室逃脱90分钟体验券</p>
            <p class="money-detail">
                <span class="money-symbol">￥</span>
                <em class="product-money">88</em>
                <span class="sellout">已售34</span>
            </p>
        </div>
    </div>
    <span class="delete-btn" @click="removeItem(item)">x</span>
  </div>
</div>

</template>
<script>
export default {
    props:{
      productList: {
            type: Array,
            required: true
        }
    },
    methods: {
        pathUrl: function (url) {
            !!url ? (
            !/^http/.test(url)
            ? this.$router.push(url)
            : location.href = url ) : '';
        },
        removeItem: function (index) {
            this.productList.splice(index, 1);
        }
    }
}
</script>
<style scoped>
.com-product{ position: relative; display: block; padding: .1rem .2rem; box-sizing: border-box; overflow: hidden; }
.product-icon{ width: 25%; float: left; }
.product-desc{ width: 75%; float: left; }
.product-icon img{ width: 1.5rem; }
.product-desc h6{ width: 100%; height: .3rem; line-height: .3rem; padding: .1rem 0; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: .3rem; font-weight: normal; }
.product-address{ padding: .1rem 0; }
.money-detail{ position: relative; width: 100%; height: .4rem; padding-right: .8rem; box-sizing: border-box; }
.money-symbol{ position: absolute; bottom: 0; font-size: .24rem; color: yellowgreen; }
.product-money{ position: absolute; left: .3rem; bottom: 0; height: .4rem; line-height: .4rem; font-size: .4rem; color: yellowgreen; }
.sellout{ position: absolute; right: .8rem; bottom: 0; float: right; }
.delete-btn{ position: absolute; right: .2rem; top: 1.22rem; line-height: .18rem; border-radius: .1rem; padding: 0 .2rem; border: 1px solid #ccc; }
</style>
