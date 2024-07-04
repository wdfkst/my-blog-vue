<template>
  <div class="login-container">
    <!-- 遮蔽层 -->
    <div class="overlay"></div>
    <el-card class="login-card" shadow="always">
      <div slot="header" class="login-header">
        <i class="el-icon-close login-close-icon" @click="closeLoginComponent"></i>
        <span>登 录 页 面</span>
      </div>
      <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="80px" class="login-form">
        <el-form-item label="账户" prop="username">
          <el-input v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { post } from '@/api';
export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {

    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          post('/user/login', this.loginForm).then(res => {
            console.log(res)
            if (res != null && res.code == 200) {
            // 假设你想传递用户ID作为参数
              const email = res.data;
              this.$store.dispatch('login',email)
              // 跳转到主页并携带参数
              this.$router.push({
                path: '/',
                query: { email: email }
              });
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'error',
                offset: 350
              });
            }

          })
        } else {
          console.log('Error in form validation');
          return false;
        }
      });
    },
    created() {
    },
    closeLoginComponent() {
      this.$router.push('/'); // 跳转到主页路由
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgb(255, 243, 199), rgb(255, 153, 252));

  z-index: 12;
  /* 确保遮罩在其他内容上方 */
}

.login-card {
  width: 400px;
  padding: 20px;
  z-index: 13;
  position: relative;
  /* 使关闭按钮相对定位 */
  opacity: 0.8;
  /* 这里的0.5表示50%的透明度 */
}

.login-header {
  font-size: 24px;
  text-align: center;
  position: relative;
  /* 使关闭按钮相对定位 */
}

.login-close-icon {
  display: flex;
  /* 鼠标小手 */
  cursor: pointer;
  margin-left: 365px;
  margin-top: -33px;
}

.login-form {
  margin-top: 20px;
}
</style>
