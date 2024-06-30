// api.js
import service from './service';

// 封装GET请求
export function getUsers() {
  return service.get('/users');
}

// 封装POST请求
export function createUser(userData) {
  return service.post('/users', userData);
}