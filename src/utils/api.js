// api.js
import service from './service';

// 封装GET请求
export function getUsers() {
  return service.get('/users');
}

// 注册
export function register(userData) {
  return service.post('/api/register', userData);
}
// 登录
export function login(userData) {
  return service.post('/api/login', userData);
}
// 重置
export function resetpwd(userData) {
  return service.post('/api/resetpwd', userData);
}
// 登出
export function logout(userData) {
  return service.post('/api/logout', userData);
}
// 获取问题
export function getQuestion(userData) {
  return service.post('/api/get_question', userData);
}