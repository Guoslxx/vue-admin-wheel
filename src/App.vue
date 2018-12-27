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
