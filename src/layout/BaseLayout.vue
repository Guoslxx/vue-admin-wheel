<template>
  <div class="layout">
    <div class="layout-header">
      <Header></Header>
    </div>
    <Row type="flex" justify="space-between" class="layout-body">
      <LeftSide/>
      <div class="layout-content">
        <Card class="ivu-breadcrumb-wrapper">
          <Breadcrumb>
            <BreadcrumbItem to="/">
              <Icon type="ios-home-outline"></Icon>Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">
              <Icon type="logo-buffer"></Icon>Components
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Icon type="ios-cafe"></Icon>Breadcrumb
            </BreadcrumbItem>
          </Breadcrumb>
        </Card>
        <Card class="layout-view" >
          <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
          </transition>
        </Card>
      </div>
    </Row>
    <div class="layout-footer">
      <div class="layout-inner">asdf</div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import LeftSide from "./LeftSide";
export default {
  name: "BaseLayout",
  components: {
    Header,
    LeftSide
  },
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>
<style lang="less">
@import "../assets/less/variables.less";

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 0;
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-image: url(https://img.alicdn.com/tfs/TB1_YvwXTtYBeNjy1XdXXXXyVXa-1680-370.png);
  background-color: #2e323f;
  background-size: 100%;
  background-repeat: no-repeat;
}
.layout-content {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
}
.layout-body,
.layout-content {
  flex: 1 1 auto;
}
.layout-view {
  flex: 1 1 auto;
}
.layout-header,
.layout-body,
.layout-footer {
  width: @mainWidth;
  margin: 0 auto;
}
.ivu-breadcrumb-wrapper {
  margin-bottom: 25px;
}
</style>
