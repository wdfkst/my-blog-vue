<template>
  <el-container>
    <BlogHeader />
    <router-view class="route" />
    <BlogFooter />
  </el-container>
</template>

<script>
import BlogHeader from './components/BlogHeader.vue';
import BlogFooter from './components/BlogFooter.vue';

export default {
  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style>
@font-face {
  /* font-family: "阿里妈妈数黑体 Bold";font-weight: 700;src: url("//at.alicdn.com/wf/webfont/uUDQ0UryM15V/pRgAmw2z7S0B.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/uUDQ0UryM15V/ZVnVSqr0fL7o.woff") format("woff");
  font-display: swap; */
  font-family: 'AliFont';
  text-decoration: none;
  /* 自定义字体名称 */
  src: url('../fonts/AlimamaShuHeiTi-Bold.woff') format('woff');
  /* 字体文件的路径和格式 */
}


.route {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  /* background-color: #ffffff;
  box-shadow: 0 0 3px #92e7e7; */
}

body,
html,
#app {
  font-family: 'AliFont', Arial, sans-serif;
  margin: 0;
  background-color: #f7f7f7;
 display: flex;
  flex-direction: column;

}
</style>
