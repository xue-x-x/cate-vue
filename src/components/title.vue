<template>
  <div>
    <div class="titleList">
      <span></span>{{title}}<span></span>
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
  .titleList{
    border-top: 0.266667rem solid #f1f1f1;
    text-align: center;
    font-size: 28px;
    padding-top: 20px;
  }
  .titleList span{
    color: #ffca00;
    position: relative;
    top:-8px;
    display: inline-block;
    width: 20px;
    height: 3px;
    background-color: #ffca00;
  }
  .titleList span:first-child{
    right: 15px;
  }
  .titleList span:last-child{
    left: 15px;
  }
</style>
