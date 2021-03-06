import Vue from 'vue'
import * as user from './user'
import * as role from './role'
import * as menu from './menu'

// api返回结果，正确的状态
export const STATUS_OK = 200

const api = {
  // api返回结果，正确的状态
  STATUS_OK: STATUS_OK,
  ...user,
  ...role,
  ...menu
}

Vue.prototype.$api = api
export default api
