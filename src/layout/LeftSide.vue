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
  name: "LeftSide",
  methods:{
    handleSelect(name){
      this.$router.push(`/${name}`)
    }
  }
};
</script>
<style lang="less" scope>
@import "../assets/less/variables.less";
.layout-sider {
  .ivu-menu {
    background: transparent;
    color: @mainColor!important;
  }
  .admin-menu {
    border-top: 1px solid;
    padding-top: 8px;
    li.ivu-menu-item-active:not(.ivu-menu-submenu),
    li.ivu-menu-item:hover,
    .ivu-menu-submenu-title:hover {
      background: @blockBgColor;
      color: @mainColor;
      border-radius: 8px;
    }
    .ivu-menu-item-selected a,.ivu-menu-item a{
      color:@mainColor;
    }
    &::after,
    .ivu-menu-item-active:not(.ivu-menu-submenu):after {
      width: 0 !important;
    }
  }
}
</style>
