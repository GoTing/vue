<template>
<div>
  <router-view/>
  <comTab />
</div>
</template>

<script>
import comTab from "./comTab";

export default {
    components: {
        comTab
    }
};
</script>

<style scoped>
p{ font-size: .16rem; }
</style>