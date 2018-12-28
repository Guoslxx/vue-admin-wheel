<template>
  <Row type="flex" justify="space-between" class="layout-inner">
    <Col class="logo">
      <a href="/" alt="vue-admin-wheel">
        <!-- <img src=".././assets/image/logo.png"> -->
        <span class="logo-text">管理中心</span>
      </a>
    </Col>
    <Col>
      <nav class="header-nav">
        <ul>
          <li>
            <a href="javascript:;" class="header-nav-item">
              <Icon type="md-home" size='16'/>首页
            </a>
          </li>
          <li>
            <a href="javascript:;" class="header-nav-item">
              <Icon type="md-help-circle" size='16'/>帮助
            </a>
          </li>
          <li>
            <a href="javascript:;" class="header-nav-item">
              <Icon type="md-help-circle" size='16'/>反馈
            </a>
          </li>
        </ul>
        <div class="nav-user">
          <Dropdown>
            <img height="40" width="40" src="https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png" class="user-avatar">
            <div class="nav-user-text">
              <span>Mr.Guosl</span>
              <br>
              <span>管理员</span>
            </div>
            <Icon type="ios-arrow-down"></Icon>

            <DropdownMenu slot="list">
              <DropdownItem>我的主页</DropdownItem>
              <DropdownItem>设置</DropdownItem>
              <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>
    </Col>
  </Row>
</template>
<script>
export default {
  name: "LayoutHeader"
};
</script>
<style lang="less" scope>
@import "../assets/less/variables.less";
.layout-header {
  .layout-inner {
    padding: 20px 0;
    .logo{
      width:240px;
    }
    .logo-text {
      display: block;
      width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 28px;
      color: #5584ff;
      font-weight: 700;
      font-family: Helvetica, sans-serif;
    }
    .header-nav {
      display: flex;
      justify-content: flex-end;
      & > ul {
        display: flex;
        justify-content: space-around;
        margin-right: 15px;
        li {
          padding: 0 20px;
          line-height: 42px;
        }
        .header-nav-item {
          color: @mainColor;
          &>i{
              margin-top: -2px;
              margin-right: 4px;
          }
        }
      }
      .nav-user {
        color: @mainColor;
        cursor: pointer;
        .ivu-dropdown-rel {
          display: flex;
          align-items: center;
          .user-avatar {
            background: #bebebe;
            color: #e8e8e8;
            border-radius: 4px;
            margin-right: 12px;
          }
          .nav-user-text {
              text-align: center;
              margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
