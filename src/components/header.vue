<template>
  <div>
      <div class="header">
        <div class="iconfont icon-xaingzuo" @click="$router.back(-1)"></div>
        <div class="header-title">{{title}}</div>
      </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    props: {
      title: String,
      required: true
    }
  }
</script>
<style>
  .header{
    padding: 10px 20px;
    line-height: 50px;
    position: relative;
  }

.icon-xaingzuo{
  position: absolute;
  left:0;
  display: block;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 40px;
  vertical-align: middle;
}
.header-title{
  padding-left: 50px;
  text-align: center;
  font-size: 32px;
}
</style>
