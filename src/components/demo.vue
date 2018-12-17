<template>
  <div class="order">
    <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul v-bind:class="loading == true ? '' : 'load-wrap'" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <p v-show="loading" style="margin-bottom:1.4rem; text-align: center;">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
    </div>
  </div>
</template>

<style>
  .load-wrap{ padding-bottom: 1rem; box-sizing: border-box; }
  .mint-spinner-fading-circle{ left: 50%; transform: translateX(-50%); }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0
      };
    },

    methods: {
      loadMore() {
        if(this.list.length >= 60) {
          this.loading = false;
          return;
        }else{
          this.loading = true;
          setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
          }, 2500);
        }
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  };
</script>
