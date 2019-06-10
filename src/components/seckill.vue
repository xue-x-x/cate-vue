<template>
  <div class="seckillMain">
    <div class="seckill-list" v-for="(item,key) in seckillList" :key="key">
      <p class="seckill-img">
        <img :src="item.imgSrc" alt="">
      </p>
      <p class="seckill-title">{{item.title}}</p>
      <p class="seckill-rice clearfix">
        <span class="fl">￥{{item.rice}}</span>
        <span class="fr">剩余{{item.number}}件</span>
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
      seckillList: Array,
      required: true
    },
  }
</script>
<style>
  .seckillMain{
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y:hidden;
  }
  .seckill-list{
    padding: 20px 0;
    margin-left: 20px;
    text-align: center;
  }
  .seckillMain .seckill-list:last-child{
    padding-right: 20px;
  }
  .seckill-list p{
    width: 290px;
  }
  .seckill-img{
    height: 290px;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .seckill-title{
    margin: 20px 0;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;

  }
  .seckill-rice{
    padding: 0 10px;
  }
  .seckill-rice .fl{
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
