<template>
  <div class="signIn-Box animated " :class="{slideOutUp: !signShow, slideInDown: signShow}" :style="{display: signLoaded}">
    <div class="signIn-tip">
      <div class="mui-switch mui-switch-blue mui-switch-mini mui-active" @toggle="openTips">
        <div class="mui-switch-handle" ></div>
      </div>
      <span>已{{tipsOn}}签到提醒</span>
    </div>
    <div class="hasSign">
      <div>已连续签到{{signDays}}天</div>
      <div class="sign-count">
        <strong>{{signDays}}</strong>天
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
    <div class="slide-up" @click="slideBox">收起</div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'SignBlock',
      props: ['signShow', 'signLoaded'],
      data () {
        return {
          msg: '数据',
          tipsOn: '开启',
          signDays: 3
        }
      },
      computed: {
      },
      methods: {
        openTips () {
          this.tipsOn = this.tipsOn === '开启' ? '关闭' : '开启'
        },
        slideBox () {
          this.$emit('slideBox')
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .signIn-Box{
      position: fixed;
      top:0.9rem;
      left:0;
      right:0;
      padding-bottom: 0;
      border-top: 1px solid #eee;
      z-index: 9;
      display: none;
      .signIn-tip{
        display: flex;
        padding:0.3rem;
        background: #fff;
        span{
          line-height: 0.6rem;
          margin-left: 0.2rem;
          font-size: 0.36rem;
        }
      }
      .hasSign{
        background: #fff;
        text-align: center;
        font-size: 0.3rem;
        color: #6c6c6c;
        padding:0.3rem;
        padding-top: 0;
        border-bottom: 1px solid #eee;
        .sign-count{
          margin-top: 0.3rem;
          height:1rem;
          line-height: 1.25rem;
          color:#3C6DF8;
          background-image: url("../../assets/images/date.png");
          background-repeat: no-repeat;
          background-position: 47% 50%;
          background-size: auto 100%;
          strong{
            font-size: 0.42rem;
          }
        }
      }
      .sign-week{
        background: #fff;
        overflow: hidden;
        padding:0.3rem 0.39rem;
        display: flex;
        li{
          flex:1;
          font-size: 0.28rem;
          text-align: center;
          div{
            color: #E7E7E7;
          }
          &.active{
            .week-ball{
              background: #3c6df8;
              border-color: #3c6df8;
              color: #fff;
            }
            div{
              color: #3c3c3c;
            }
          }
          .week-ball{
            display: inline-block;
            width:0.7rem;
            height:0.7rem;
            border-radius: 100%;
            border:2px solid #dedede;
            margin-bottom: 0.2rem;
            color: #999999;
            line-height: 0.7rem;
            text-align: center;
          }
        }
      }
      .slide-up{
        display: inline-block;
        color: #3c6df8;
        font-size:0.28rem;
        float: right;
        width: 1.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        background-color: #FFF;
        border-radius: 15px;
        margin-top:0.5rem;
        position: relative;
        margin-right: 0.3rem;
        &:before{
          content: '';
          display: inline-block;
          height: 0.5rem;
          border-right: 2px solid #FFF;
          position: absolute;
          top: -0.5rem;
          left: 0.5rem;
        }
        &:after{
          content: '';
          display: inline-block;
          height: 0.5rem;
          border-right: 2px solid #FFF;
          position: absolute;
          top: -0.5rem;
          left: 1.08rem;
        }
      }
    }
</style>
