<template>
  <div class="login-container">
    <div class="overlay" ></div>
    <el-card class="login-card" shadow="hover">
      <div slot="header" class="login-header">
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
          console.log('Login successful with', this.loginForm);
          // Perform login action here (e.g., API call)
        } else {
          console.log('Error in form validation');
          return false;
        }
      });
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
  background-image: -moz-linear-gradient(0deg, rgb(255, 243, 199), rgb(255, 153, 252));

background-image: -webkit-linear-gradient(0deg, rgb(255, 243, 199), rgb(255, 153, 252));

background-image: linear-gradient(0deg, rgb(255, 243, 199), rgb(255, 153, 252));

  z-index: 2000; /* 确保遮罩在其他内容上方 */
}

.login-card {
  width: 400px;
  padding: 20px;
  z-index: 3000;
}

.login-header {
  font-size: 24px;
  text-align: center;
}

.login-form {
  margin-top: 20px;
}
</style>
