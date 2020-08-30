import axios from '@/axios.js'

var api = {
  SearchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList() {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList(params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  resultsByKeywords(params) {
    return axios.get('api/meituan/index/resultsByKeywords.json', params)
  },
  getProductsList(params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  getClassifyList(params) {
    return axios.get('/api/meituan/list/classify.json', params)
  },
  getAreaList(params) {
    return axios.get('/api/meituan/list/areaList.json', params)
  },
  getRecommend(params) {
    return axios.get('/api/meituan/list/recommend.json', params)
  },
  getHotCity(params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  getRecentCity(params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  getProvince(params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  getCurPosition(params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  getCityList(params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  login(params) {
    return axios.get('/api/meituan/login', params)
  },
  register(params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
