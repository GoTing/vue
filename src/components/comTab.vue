<template>

  <mt-tabbar v-model="selected" class="nav-com">
    <mt-tab-item id="home">
      <img slot="icon" src="../assets/icon.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="nearby">
      <img slot="icon" src="../assets/icon.png">
      附近
    </mt-tab-item>
    <mt-tab-item id="order">
      <img slot="icon" src="../assets/icon.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="my">
      <img slot="icon" src="../assets/icon.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
		name: "com-tab",
		data(){
			return { selected: 'home'}
    },
    computed: {

    },
    mounted () {
      // 取地址栏的参数 赋值
      this.selected = this.$route.path.split('/')[1]
    },
		watch: {
			$route( to , from ){
        // 监听router变化
				this.selected = to.path.split('/')[1]
			},
        // 根据选中项id，push对应路由
			selected: function (val, oldVal) {
				this.$router.push({
					path: val
				})
			}
		}
  }
</script>

<style scoped>
.mint-tabbar{ position: fixed; max-width: 750px; height: 1rem; margin: 0 auto; background: #fff}
</style>
