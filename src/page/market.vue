<template>
  <div class="marketMain">
    <header>
      <div class="header">
        <div class="iconfont icon-quanbu"></div>
        <div class="search">
          <label for="q" class="label" v-show="!isFocus"><i class="iconfont icon-sousuo1"></i>请输入关键字</label>
          <input id="q" type="text" @focus="focus">
        </div>
        <div class="iconfont icon-gouwuche"></div>
      </div>
    </header>
    <section>
      <image-text :imageTextList="imageTextList"></image-text>
    </section>
    <section>
      <market-title :title="'限时秒杀'"></market-title>
      <market-seckill :seckillList="seckillList"></market-seckill>
    </section>
    <section>
      <market-title :title="'优选好货'"></market-title>
      <market-commodity :commodityList="commodityList"></market-commodity>
    </section>
    <footer>
      <market-footer :footerList="footerList"></market-footer>
    </footer>

  </div>
</template>
<script>
  import imageText from '../components/imageText.vue';
  import marketTitle from '../components/title.vue';
  import marketFooter from '../components/footer.vue';
  import marketSeckill from '../components/seckill.vue';
  import marketCommodity from '../components/commodity.vue';

  export default {
    components:{
      marketFooter,
      marketTitle,
      imageText,
      marketSeckill,
      marketCommodity,
    },
    data(){
      return{
        footerList:[
          {
            iconSrc:require('../assets/images/images/icon_46.png'),
            toHref:'/home',
            title:'精选'
          },
          {
            iconSrc:require('../assets/images/images/icon_43_1.png'),
            toHref:'/market',
            title:'集市'
          },
          {
            iconSrc:require('../assets/images/images/icon_40.png'),
            toHref:'',
            title:'社区'
          },
          {
            iconSrc:require('../assets/images/images/icon_37.png'),
            toHref:'',
            title:'我的'
          }
        ],
        imageTextList:[
          {
            title:"粮油调料",
            imgSrc:require('../assets/images/images/icon_15.png'),
            toSrc:"/marketList/grainOil"
          },
          {
            title:"烘焙厨艺",
            imgSrc:require('../assets/images/images/icon_18.png'),
            toSrc:"/marketList/bake"
          },
          {
            title:"进口商品",
            imgSrc:require('../assets/images/images/icon_24.png'),
            toSrc:"/marketList/import"
          },
          {
            title:"地区特产",
            imgSrc:require('../assets/images/images/icon_21.png'),
            toSrc:"/marketList/grainOil"
          },
          {
            title:"厨房用具",
            imgSrc:require('../assets/images/images/icon_31.png'),
            toSrc:"/marketList/bake"
          },
          {
            title:"生鲜海产",
            imgSrc:require('../assets/images/images/icon_32.png'),
            toSrc:"/marketList/import"
          },
          {
            title:"休闲食品",
            imgSrc:require('../assets/images/images/icon_30.png'),
            toSrc:"/marketList/bake"
          },
          {
            title:"酒水饮料",
            imgSrc:require('../assets/images/images/icon_29.png'),
            toSrc:"/marketList/grainOil"
          },
        ],
        seckillList:[
          {
            title:"云娘食记|三色藜麦400g 纤身必吃，丰富营养餐get",
            imgSrc:require('../assets/images/foot/c_01.png'),
            rice:'39.9',
            number:'364',
            toSrc:'/menu'
          },
          {
            title:"Pic`s|新西兰原装瓶进口颗粒/幼滑花生酱、腰果酱",
            imgSrc:require('../assets/images/foot/j_02.png'),
            rice:'38',
            number:'432',
            toSrc:'/menu'
          },
          {
            title:"贝壳烘焙|爱乐薇铁塔淡奶油 动物性裱花稀奶油原装",
            imgSrc:require('../assets/images/foot/h_03.png'),
            rice:'43.8',
            number:'219',
            toSrc:'/menu'
          },
          {
            title:"贝斯隆|意大利直身面7# 500g*4",
            imgSrc:require('../assets/images/foot/j_04.png'),
            rice:'48',
            number:'296',
            toSrc:'/menu'
          },
          {
            title:"云娘食记|三色藜麦400g 纤身必吃，丰富营养餐get",
            imgSrc:require('../assets/images/foot/c_02.png'),
            rice:'39.9',
            number:'364',
            toSrc:'/menu'
          },
          {
            title:"Pic`s|新西兰原装瓶进口颗粒/幼滑花生酱、腰果酱",
            imgSrc:require('../assets/images/foot/j_01.png'),
            rice:'38',
            number:'432',
            toSrc:'/menu'
          },
          {
            title:"贝壳烘焙|爱乐薇铁塔淡奶油 动物性裱花稀奶油原装",
            imgSrc:require('../assets/images/foot/h_02.png'),
            rice:'43.8',
            number:'219',
            toSrc:'/menu'
          },
        ],
        commodityList:[
          {
            title:"云娘食记|三色藜麦400g 纤身必吃，丰富营养餐get",
            imgSrc:require('../assets/images/foot/c_01.png'),
            rice:'39.9',
            number:'364',
            toSrc:'/menu'
          },
          {
            title:"Pic`s|新西兰原装瓶进口颗粒/幼滑花生酱、腰果酱",
            imgSrc:require('../assets/images/foot/j_02.png'),
            rice:'38',
            number:'432',
            toSrc:'/menu'
          },
          {
            title:"贝壳烘焙|爱乐薇铁塔淡奶油 动物性裱花稀奶油原装",
            imgSrc:require('../assets/images/foot/h_03.png'),
            rice:'43.8',
            number:'219',
            toSrc:'/menu'
          },
          {
            title:"贝斯隆|意大利直身面7# 500g*4",
            imgSrc:require('../assets/images/foot/j_04.png'),
            rice:'48',
            number:'296',
            toSrc:'/menu'
          },
          {
            title:"云娘食记|三色藜麦400g 纤身必吃，丰富营养餐get",
            imgSrc:require('../assets/images/foot/c_02.png'),
            rice:'39.9',
            number:'364',
            toSrc:'/menu'
          },
          {
            title:"Pic`s|新西兰原装瓶进口颗粒/幼滑花生酱、腰果酱",
            imgSrc:require('../assets/images/foot/j_01.png'),
            rice:'38',
            number:'432',
            toSrc:'/menu'
          },
          {
            title:"贝壳烘焙|爱乐薇铁塔淡奶油 动物性裱花稀奶油原装",
            imgSrc:require('../assets/images/foot/h_02.png'),
            rice:'43.8',
            number:'219',
            toSrc:'/menu'
          },
        ],
        isFocus:false,
      }
    },
    methods:{
      focus(){
        let _this=this;
        _this.isFocus=true;
      }
    }
  }
</script>
<style src="../assets/css/market.css">

</style>
