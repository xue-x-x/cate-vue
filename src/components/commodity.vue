<template>
  <div class="commodityMain">
    <div class="commodity-list" v-for="(item,key) in commodityList" :key="key">
      <p class="commodity-img">
        <img :src="item.imgSrc" alt="">
      </p>
      <p class="commodity-title">{{item.title}}</p>
      <p class="commodity-rice clearfix">
        <span class="fl">￥{{item.rice}}</span>
        <span class="fr">已售{{item.number}}件</span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    props:{
      commodityList: Array,
      required: true
    },
  }
</script>
<style>
  .commodityMain{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .commodity-list{
    margin: 20px;
    text-align: center;
  }
  .commodity-list p{
    width:330px;
  }
  .commodity-img{
    height: 290px;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .commodity-title{
    margin: 20px 0;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;

  }
  .commodity-rice{
    padding: 0 10px;
  }
  .commodity-rice .fl{
    color: red;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
  .clearfix { *zoom:1; }
</style>
