<template>
  <el-footer class="el-footer">
   <div> © 2024 My Blog</div>
  
  
  </el-footer>
  
</template>

<script>
export default {
  name: 'BlogFooter',
};
</script>

<style  scoped>
.el-footer{
  color: rgb(17, 16, 16);
  background-color: #ffffff;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  margin-top: auto; /* 确保它在页面底部 */
}
</style>
