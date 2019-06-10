<template>
  <div class="kitchenMain">
    <div class="kitchen-list" v-for="(item,key) in kitchenList" :key="item.id">
      <div class="kitchen-img">
        <img class="kitchen-cate" :src="item.cateSrc" alt="">
        <img class="kitchen-portrait" :src="item.portraitSrc" alt="">
      </div>
      <div class="kitchen-title">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{

      }
    },
    props:{
      kitchenList: Array,
      required: true
    },
    methods:{
      skip:function(){
        console.log('11111');
      }
    }
  }
</script>
<style>

  .kitchenMain{
    display: flex;
    flex-direction: row;
    overflow: auto;
  }
  .kitchen-list{
    padding: 20px 0;
    margin-left: 20px;
    text-align: center;
  }
  .kitchenMain .kitchen-list:last-child{
    padding-right: 20px;
  }
  .kitchen-img{
    position: relative;
    width: 290px;
    height: 225px;
  }
  .kitchen-cate{
    width: 100%;
    height: 200px;
  }
  .kitchen-portrait{
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .kitchen-title{
    margin-top: 20px;
  }
</style>
