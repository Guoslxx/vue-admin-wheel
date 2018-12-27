<template>
  <div id="app">
    <BaseLayout></BaseLayout>
    <!-- <router-link to='/home'>home</router-link>
    <router-link to='/user'>user</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
import BaseLayout from "./layout/BaseLayout";

export default {
  name: "app",
  components: {
    BaseLayout
  }
};
</script>
<style lang="less" scoped>
  #app{
    background-image: url(https://i0.wp.com/ficedu.org/wp-content/uploads/2016/07/Savin-NY-Website-Background-Web.jpg);
  }
</style>

