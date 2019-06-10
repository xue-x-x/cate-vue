<template>
  <div class="menuMain">
    <!--<div v-title>全部分类</div>-->
    <menu-hesder :title="title"></menu-hesder>
    <section class="">
      <all-classify :allClassifyList="allClassifyList"></all-classify>
    </section>
  </div>
</template>
<script>
  import allClassify from '../components/allMenuClassify.vue';
  import menuHesder from '../components/header.vue';
  export default {
    components:{
      allClassify,
      menuHesder,
    },
    data(){
      return{
        allClassifyList:[
          {
            title:'早餐',
            imgScr:require('../assets/images/m17.jpg'),
          },
          {
            title:'面食',
            imgScr:require('../assets/images/m25.jpg'),
          },
          {
            title:'粥',
            imgScr:require('../assets/images/m20.jpg'),
          },
          {
            title:'烘焙',
            imgScr:require('../assets/images/m19.jpg'),
          },
          {
            title:'家常菜',
            imgScr:require('../assets/images/m28.jpg'),
          },
          {
            title:'零食',
            imgScr:require('../assets/images/m22.jpg'),
          },
          {
            title:'西餐',
            imgScr:require('../assets/images/m26.jpg'),
          },
          {
            title:'海鲜',
            imgScr:require('../assets/images/m24.jpg'),
          },
          {
            title:'烧烤',
            imgScr:require('../assets/images/m23.jpg'),
          }
        ],
        title:"全部分类"
      }
    }
  }
</script>
<style src="../assets/css/menu.css"></style>
