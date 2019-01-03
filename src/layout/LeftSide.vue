<template>
<SidebarMenu></SidebarMenu>
</template>
<script>
import SidebarMenu from "../components/SidebarMenu";
export default {
  name: "LeftSide",
  components: {
    SidebarMenu
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
    .ivu-menu-item-selected a,
    .ivu-menu-item a {
      color: @mainColor;
    }
    &::after,
    .ivu-menu-item-active:not(.ivu-menu-submenu):after {
      width: 0 !important;
    }
  }
}
</style>
