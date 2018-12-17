<template>
  <div class="com-classify-list">
    <div class="com-classify-btn" v-for="(item,index) in classifyList" :key='index'>
      <i><img :src="item.img" alt="" ></i>
      <em>{{item.title}}</em>
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
      classifyList: {
        type: Array,
        required: true
      }
    },
    mounted:function(){
        
    }
};
</script>
<style scoped>
</style>