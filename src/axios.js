import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: "lulu_1581597310788"
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

export default axios
