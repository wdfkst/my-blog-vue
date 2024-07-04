<template>
  <el-header class="blog-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="logo">
        <img :src="url" />
      </div>

      <el-menu-item index="1">

        <router-link to="/"> <el-image style="width: 30px; height:30px"
            :src="require('@/assets/home.png')" />主页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">次页</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/login">登录</router-link>
      </el-menu-item>
      <el-menu-item index="4" style="background-color: aqua;">
        <span>{{ this.$store.state.email }}</span>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'BlogHeader',
  data() {
    return {
      activeIndex: '1',
      url: require('@/assets/logo.png'),
      email:'22222',
    };
  },
  mounted() {
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-header {

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  height: 80px;

  /* 显示最高层保证不被覆盖 */
  z-index: 10;

}

.el-menu-demo {
  display: flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */

}

.logo {
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    width: 50px;
    height: 50px;
  }
}

.el-menu-demo {
  display: flex;
  align-items: center;
  /* 将其拉伸到最大可用空间 */
  flex-grow: 1;
  text-decoration: none;
}

.page {
  display: flex;
  margin-left: 100px;
  text-decoration: none;
}

a {
  text-decoration: none;
  /* 取消所有链接的下划线 */
}</style>
