import axios from 'axios';

// 创建一个axios实例
const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API, // 根据你的环境变量或配置设置baseURL
  timeout: 5000, // 请求超时时间
  // 你可以在这里添加其他axios配置，如headers、withCredentials等
  headers: { "Content-Type": "multipart/form-data" }
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如，你可以在这里添加token到headers
    // if (localStorage.getItem('token')) {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    // }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    const res = response.data;
    // 如果返回的状态码不是200，则判断为错误
    if (res.msgCode !== 0) {
      // 你可以在这里进行错误处理，比如抛出错误或者进行其他操作
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      // 返回请求结果
      localStorage.getItem('bibikong_access_token', res.access_token)
      return res;
    }
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

// 导出封装好的axios实例
export default service;