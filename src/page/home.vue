<template>
  <div  class="homeMain" id="home">
    <header>
      <div class="header">
        <div>
          <router-link to="/city">
            <span class="city">重庆</span>
          </router-link>
          <span class="iconfont icon-xiangxia1"></span>
        </div>
        <div>
          <label for="">
            <input type="text">
            <span class="iconfont icon-sousuo1"></span>
          </label>
        </div>
      </div>
    </header>
    <section>
      <home-swiper :swiperLists="swiperLists"></home-swiper>
    </section>
    <section>
      <imageText :imageTextList="imageTextList"></imageText>
    </section>
    <section class="selectList">
      <home-title :title="'今日约厨'"></home-title>
      <kitchen :kitchenList="kitchenList" @click="notify"></kitchen>
    </section>
    <section class="selectList">
      <home-title :title="'热门菜谱'"></home-title>
      <ul class="selectMenu">
        <li class="selectMenu-list" v-for="(item,key) in selectMenuLlist"  :key="item.id">
          <img :src="item.cateSrc" alt="">
          <div class="selectMenu-C"></div>
          <div class="selectMenu-introduce">
            <div>
              <span>{{item.title}}</span>
              <img :src="item.portraitSrc" alt="">
            </div>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <home-fonter :footerList="footerList"></home-fonter>
    </footer>
  </div>
</template>
<script>
  import homeSwiper from '../components/swiper.vue';
  import imageText from '../components/imageText.vue';
  import kitchen from '../components/kitchen.vue';
  import homeFonter from '../components/footer.vue';
  import homeTitle from '../components/title.vue';
  export default {
    components:{
      homeSwiper,
      imageText,
      kitchen,
      homeFonter,
      homeTitle,
    },
    name: 'home',
    data(){
      return{
        swiperLists:[
          {
            id:"001",
            'src':require('../assets/images/bn1.jpg')
          },
          {
            id:"002",
            'src':require('../assets/images/bn5.jpg')
          },
          {
            id:"003",
            'src':require('../assets/images/bn3.jpg')
          }
        ],
        imageTextList:[
          {
            title:"菜谱分类",
            imgSrc:require('../assets/images/images/icon_03.png'),
            toSrc:'/menu'
          },
          {
            title:"视频菜谱",
            imgSrc:require('../assets/images/images/icon_05.png'),
            toSrc:'#'
          },
          {
            title:"相约厨房",
            imgSrc:require('../assets/images/images/icon_07.png'),
            toSrc:'#'
          },
          {
            title:"寻味当地",
            imgSrc:require('../assets/images/images/icon_09.png'),
            toSrc:'#'
          }
        ],
        kitchenList:[
          {
            title:"重拾搁浅的梦",
            'cateSrc':require('../assets/images/m4.jpg'),
            'portraitSrc':require('../assets/images/touX/t1.jpg'),
          },
          {
            title:"阳光甚好i",
            'cateSrc':require('../assets/images/m6.jpg'),
            'portraitSrc':require('../assets/images/touX/t2.jpg'),
          },
          {
            title:"开满花的树",
            'cateSrc':require('../assets/images/m7.jpg'),
            'portraitSrc':require('../assets/images/touX/t3.jpg'),
          },
          {
            title:"月朦胧",
            'cateSrc':require('../assets/images/m8.jpg'),
            'portraitSrc':require('../assets/images/touX/t4.jpg'),
          },
          {
            title:"花藻与春风",
            'cateSrc':require('../assets/images/m10.jpg'),
            'portraitSrc':require('../assets/images/touX/t5.jpg'),
          },
          {
            title:"指尖微微、凉",
            'cateSrc':require('../assets/images/m11.jpg'),
            'portraitSrc':require('../assets/images/touX/t6.jpg'),
          }
        ],
        selectMenuLlist:[
          {
            title:'老鸭汤',
            cateSrc:require('../assets/images/m10.jpg'),
            portraitSrc:require('../assets/images/touX/t1.jpg'),
          },{
            title:'黄焖鸡',
            cateSrc:require('../assets/images/m11.jpg'),
            portraitSrc:require('../assets/images/touX/t2.jpg'),
          },{
            title:'樱桃蛋糕',
            cateSrc:require('../assets/images/m12.jpg'),
            portraitSrc:require('../assets/images/touX/t3.jpg'),
          },{
            title:'美味曲奇',
            cateSrc:require('../assets/images/m13.jpg'),
            portraitSrc:require('../assets/images/touX/t4.jpg'),
          }
        ],
        footerList:[
          {
            iconSrc:require('../assets/images/images/icon_46_1.png'),
            toHref:'/home',
            title:'精选'
          },
          {
            iconSrc:require('../assets/images/images/icon_43.png'),
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
      }
    },
    methods:{
      notify: function(){


      }

    }
  }
</script>
<style src="../assets/css/home.css">
  /*@import "../assets/css/login.css";*/
</style>
