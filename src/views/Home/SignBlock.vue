<template>
  <div class="signIn-container">
    <div class="signIn-Box">
      <div class="signIn-tip">
        <div class="mui-switch mui-switch-blue mui-switch-mini  mui-active" >
          <div class="mui-switch-handle" ></div>
        </div>
        <span>已开启签到提醒</span>
      </div>
      <div class="hasSign">
        <div>已连续签到3天</div>
        <div class="sign-count">
          <strong>3</strong>天
        </div>
      </div>
      <ul  class="sign-week">
        <li class="active" >
          <span class="week-ball ">+3</span>
          <div>第一天</div>
        </li>
        <li class="active" >
          <span class="week-ball ">+4</span>
          <div>第二天</div>
        </li>
        <li class="active" >
          <span class="week-ball ">+5</span>
          <div>第三天</div>
        </li>
        <li>
          <span class="week-ball">+5</span>
          <div>第四天</div>
        </li>
        <li>
          <span class="week-ball">+5</span>
          <div>第五天</div>
        </li>
        <li>
          <span class="week-ball">+5</span>
          <div>第六天</div>
        </li>
        <li>
          <span class="week-ball">+5</span>
          <div>第七天</div>
        </li>
      </ul>
      <div class="slide-up" onclick="slideUpThis()">收起</div>
    </div>
    <div class="signIn-success">
      <img src="./img/btn_close_01.png" alt="" class="close">
      <div class="remind-content">
        <img src="./img/img_jifen.png" alt="">
        <div>积分+5</div>
        <p>明日签到将获得5积分</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'SignBlock',
        data () {
            return {
                msg: '数据'
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .sign-block{
    background: url(../img/img_home_top.png) no-repeat center 100%;
    background-size: 100% 100%;
    padding: 0.3rem;
    padding-top: 0.66rem;
    position: relative;
    .score{
      font-size: 0.24rem;
      display: inline-block;
      line-height:1.5em;
      padding-top: 0.2rem;
      a{
        color:#fff;
        display: block;
        font-size: 0.3rem;
        i{
          font-size: 0.28rem;
        }
        strong{
          font-size: 0.72rem;
          margin-bottom: 0.24rem;
          font-weight: normal;
        }
      }
      p{
        color:#fff;
        mark{
          color: #ed1c24;
          background: transparent;
        }
      }
    }
    .nav-block{
      margin-top: 0.4rem;
      color: #FF6000 ;
      font-size:0.34rem;
      display: flex;
      justify-content: space-between;
      .nav-item{
        a{
          color: #fff;
          font-size: 0.34rem;
          margin-bottom: 0.4rem;
        }
        i.mui-icon-arrowright{
          font-size: 0.34rem;
        }
      }
    }
    .sign-btn{
      float: right;
      margin-top: 0.2rem;
      color: @blue-text;
      width:1.6rem;
      //height:0.6rem;
      line-height:0.6rem;
      background: #fff;
      font-size: 0.28rem;
      text-align: center;
      border-radius: 0.3rem;
      position: relative;
      top:-0.36rem;
      span{
        font-size: 0.3rem;
      }
      &:before{
        content: '';
        display: inline-block;
        height: 25px;
        border-right: 2px solid #FFF;
        position: absolute;
        top: -25px;
      }
      &:after{
        content: '';
        display: inline-block;
        height: 25px;
        border-right: 2px solid #FFF;
        position: absolute;
        top: -25px;
      }
    }
  }
</style>
