<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{ item.price }}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">抢光了</span>
                </span>
            </div>
            <div class="price-info" v-else>
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                    <span class="units">/{{item.price_info.units}}均</span>
                </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      resultsData:{

      },
      list: [
        {
          image:
            "https://img.meituan.net/iphoenix/5101be2eb0affdc8d6616b2da20b223e58893.jpg@740w_416h_1e_1c",
          title:
            "【摸小创潮牌驿站】经济优选大床房(无独卫) 紧邻沙河地铁 翠明湖 沙河水库",
          sub_title: "整套7居室·可住2人 | 小汤山温泉度假区",
          price_info: {
            current_price: 180,
            old_price: 60,
            avg_price: null,
            units: null
          },
          address: "天安门",
          rentNum: 0
        },
        {
          image:
            "https://img.meituan.net/phoenix/a87836d8098cfbc78014a9c43f7c241b489514.jpg@740w_416h_1e_1c",
          title:
            "【摸小创潮牌驿站】经济优选大床房(无独卫) 紧邻沙河地铁 翠明湖 沙河水库",
          sub_title: "整套7居室·可住2人 | 小汤山温泉度假区",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 18,
            units: "人均",
          },
          rentNum: 10,
          address: "天安门"
        },
        {
          image:
            "https://img.meituan.net/phoenix/1091713fb8167b6bcad476f55aa19bb9269941.jpg@740w_416h_1e_1c",
          title:
            "【摸小创潮牌驿站】经济优选大床房(无独卫) 紧邻沙河地铁 翠明湖 沙河水库",
          sub_title: "整套7居室·可住2人 | 小汤山温泉度假区",
          price_info: {
            current_price: 180,
            old_price: 60
          },
          rentNum: 10,
          address: "天安门"
        }
      ]
    };
  },
  created(){
    api.resultsByKeywords().then(res=>{
      console.log(res);
      this.resultsData = res.data.data;
    })
  },
  props: ["nav"],
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>