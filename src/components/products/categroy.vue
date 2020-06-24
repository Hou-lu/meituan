<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt >全部</dt>
      <dd v-for="(item,index) in classicList" :key="index">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt >全部</dt>
      <dd v-for="(item,index) in areaList" :key="index">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./select";
import api from '@/api/index.js'
export default {
  data() {
    return {
      classicList: [],
      areaList:[{
        "title": "推荐商圈",
        "subList": [{
            "name": "望京",
            "id": 120000
        }, {
            "name": "昌平",
            "id": 12222
        }]
    }]
    };
  },
  created(){
    api.getClassifyList().then(res=>{
      this.classicList = res.data.data;
    })
  },
  components: {
    MSelect
  }
};
</script>

<style>
</style>