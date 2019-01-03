<template>
    <aside class="layout-sider">
    <Menu class="admin-menu" :open-names="['1']" @on-select="handleSelect">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper"/>内容管理
        </template>
        <MenuItem name="home">
          控制台
        </MenuItem>
        <MenuItem name="user">
          用户管理
        </MenuItem>
        <MenuItem name="article">
          文章编辑
        </MenuItem>
      </Submenu>
    </Menu>
  </aside>
</template>
<script>
export default {
  name:'SidebarMenu',
  props:{
    routes:{
      type:Object,
      required:true
    }
  },
  methods: {
    handleSelect(name) {
      this.$router.push(`/${name}`);
    }
  }
}
</script>