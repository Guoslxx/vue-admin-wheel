<template>
  <div class='layout'>
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-section">
      <div class="layout-inner">
         <Dropdown>
            <a href="javascript:void(0)">下拉菜单
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
      </div>
    </div>
    <div class="layout-footer">
      <div class="layout-inner">
        主内容
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "BaseLayout",
  components: {
    Header
  }
};
</script>
<style lang="less">
@import "../assets/less/variables.less";
ol,ul {
    list-style: none;
    margin: 0;
    padding: 0
}

li {
    margin-left: 0
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(46, 50, 63, .8);
  background-size: 100%;
  background-repeat: no-repeat;
}
.layout-section {
  flex: 1 1 auto;
}

.layout-inner {
  width: @mainWidth;
  margin: 0 auto;
}
</style>
