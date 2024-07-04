import axios from 'axios';

// 创建一个 Axios 实例
const service = axios.create({
 // baseURL: process.env.VUE_APP_API_BASE_URL , // 基础 URL，可以根据环境变量动态设置
 baseURL:"/api",  
timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理，比如添加 token
   // const token = localStorage.getItem('token');
  
    return config;
  },
  error => {
    // 处理请求错误
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据进行处理
    return response.data;
  },
  error => {
    // 处理响应错误
    console.error('Response error:', error);
    if (error.response && error.response.status === 401) {
      // 处理未授权的情况
      // 可以在这里做一些登出操作或者跳转到登录页
    }
    return Promise.reject(error);
  }
);

// 封装 GET 请求方法
export function get(url, params = {}) {
  return service.get(url, { params });
}

// 封装 POST 请求方法
export function post(url, data = {}) {
  return service.post(url, data);
}

// 封装 PUT 请求方法
export function put(url, data = {}) {
  return service.put(url, data);
}

// 封装 DELETE 请求方法
export function del(url, data = {}) {
  return service.delete(url, { data });
}

export default service;
