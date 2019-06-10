<template>
  <div class="loginMain" id="login">
    <div class="top">
      <div class="img">
        <img src="../assets/images/login/cate1.jpg" alt="">


        <div></div>
      </div>
      <div class="classify">
        <div @click="clicklogin(1)">
          登录
          <div class="triangle_border_up" v-if="isLogin"></div>
        </div>
        <p></p>
        <div @click="clicklogin(0)">
          注册
          <div class="triangle_border_up" v-if="!isLogin"></div>
        </div>
      </div>
    </div>
    <div class="form">
      <div class="formConter" v-if="isLogin">
        <div class="formLabel">
          <label>
            <span class="iconfont icon-shouji1"></span>
            <input type="number" name="phone" maxlength="11">
          </label>
        </div>
        <div class="formLabel">
          <label>
            <span class="iconfont icon-mima"></span>
            <input type="password" name="password" >
          </label>
        </div>
        <div class="button"><router-link to="/home">登录</router-link></div>
        <div class="hint">
          <div>忘记密码</div>
          <div @click="clicklogin(0)">注册</div>
        </div>
      </div>
      <div class="formConter" v-else="">
        <div class="formLabel">
          <label>
            <span class="iconfont icon-shouji1"></span>
            <input type="number" name="phone" maxlength="11">
          </label>
        </div>
        <div class="formLabel">
          <label>
            <span class="iconfont icon-mima"></span>
            <input type="password" name="password" maxlength="11">
          </label>
        </div>
        <div class="formLabel verification">
          <label>
            <span class="iconfont icon-yanzhengma"></span>
            <input type="text" name="verification" >
            <span class="yard">获取验证码</span>
          </label>
        </div>
        <div class="button">注册</div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'login',
    data(){
      return{
        isLogin:true
      }
    },
    methods:{
      clicklogin(n){
        var _this=this;
        if(n){
          _this.isLogin=true;
        }else {
          _this.isLogin=false;
        }
      }
    }
  }
</script>
<style src="../assets/css/login.css">
  /*@import "../assets/css/login.css";*/
</style>


