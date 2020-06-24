import axios from '@/axios.js'

var api = {
  searchHotWords: function (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params);
  },
  getSearchList: function (params) {
    return axios.get('/api/meituan/header/search.json', params);
  },
  getMenuList() {
    return axios.get('/api/meituan/index/nav.json');
  },
  resultsByKeywords() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  getProductsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getClassifyList() {
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList() {
    return axios.get('/api/meituan/list/areaList.json')
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity() {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition() {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList() {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login(params) {
    return axios.get('/api/meituan/login', params)
  },
  register(params){
    return axios.get('/api/meituan/register',params)
  }
}

export default api
