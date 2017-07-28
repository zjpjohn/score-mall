<template>
  <div class="page">
    <div class="container index-wrapper">
      <div class="sign-block">
        <div class="score">
          <a herf="##"><strong>23</strong>积分&nbsp; </a>
        </div>
        <div class="sign-btn" @click="slideSign">
          签到
          <!--连签 <span>3</span> 天-->
        </div>
        <div class="nav-block">
          <div class="nav-item"><router-link to="/exchangeRecord">兑换记录 <i class="mui-icon mui-icon-arrowright"></i></router-link></div>
        </div>
      </div>

      <div class="score-game">
        <a class="game-item" href="##">
          <img src="../../assets/images/btn_lucky_draw.png" alt="">
          <h4>抽奖</h4>
        </a>
        <a href="##" class="game-item">
          <img src="../../assets/images/btn_lottery.png" alt="">
          <h4>周周乐</h4>
        </a>
        <router-link to="/treasure" class="game-item">
          <img src="../../assets/images/btn_indiana.png" alt="">
          <h4>夺宝</h4>
        </router-link>
        <router-link to="/task" class="game-item">
          <img src="../../assets/images/btn_renwu@2x.png" alt="">
          <h4>做任务</h4>
        </router-link>
      </div>
      <!--轮播-->
      <div id="slider" class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="static/img/s4.png">
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="static/img/s1.png">
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="static/img/s2.png">
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="static/img/s3.png">
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="static/img/s4.png">
            </a>
          </div>
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="static/img/s1.png">
            </a>
          </div>
        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
      <div class="score-exchange">
        <h3><span>积分兑物</span> <router-link to="/exchange">MORE</router-link></h3>
        <GoodsLists></GoodsLists>
        <div class="exchange-footer" onclick="loadMore()"><a href="javascript:void(0)" class="text-blue">查看更多兑换物品</a></div>
      </div>

    </div>
    <!--弹窗背景-->
    <div class="bg animated" :class="{fadeIn:modal, fadeOut:!modal }" v-show="modal" ></div>
    <!--签到提醒弹窗-->
    <div class="signIn-containerT" v-show="remindModal" >
      <div class="signIn-remind animated" :class="{slideInDown:remindModal, slideOutUp: !remindModal}" >
        <div class="remind-box">
          <div class="header">签到提醒</div>
          <div class="content">
            <h5>每一天，我都在这里等你</h5>
            <p>已连续签到3天</p>
            <span>今日签到可领取5积分</span>
          </div>
          <div class="sign-Btn">立即签到</div>
          <img src="../../assets/images/btn_close_white.png" alt="" class="close" @click="closeRemindModal" >
        </div>
      </div>
    </div>
    <!--签到下拉弹窗-->
    <SignBlock  :sign-show="sign" @slideBox="slideSign" :sign-loaded="signLoad"></SignBlock>
    <!--签到成功弹窗-->
    <SignSuccess v-if="signSuccess" ></SignSuccess>

  </div>


</template>
<script type="text/ecmascript-6">
  import GoodsLists from '@/components/GoodsLists.vue'
  import SignBlock from './SignBlock.vue'
  import SignSuccess from './SignSuccess.vue'
  import NavHeader from '@/components/NavHeader.vue'
  export default {
    data () {
      return {
        modal: false,
        sign: false,
        signSuccess: false,
        signLoad: 'none',
        remindModal: false
      }
    },
    components: {
      GoodsLists,
      SignBlock,
      NavHeader,
      SignSuccess
    },
    methods: {
      slideSign () {
        this.signLoad = 'block'
        this.sign = !this.sign
        this.modal = this.sign
      },
      closeRemindModal () {
        this.remindModal = false
      }
    },
    mounted () {
      var _this = this
      this.$mui('#slider').slider({
        interval: 4000
      })
      setTimeout(function () {
        _this.remindModal = true
      }, 2000)
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .bg{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
  }
  .index-wrapper{
    background: #f5f5f5;
    .sign-block{
      background: url(../../assets/images/img_home_top.png) no-repeat center 100%;
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
        width:1.6rem;
        height:0.6rem;
        line-height:0.65rem;
        color: #3C6DF8;
        background: #fff;
        font-size: 0.3rem;
        text-align: center;
        border-radius: 0.3rem;
        display: inline-block;
        vertical-align: middle;
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
  }
  .score-game{
    display: flex;
    background: #fff;
    height:2.02rem;
    justify-content: space-around;
    align-items: center;
    margin-bottom:0.2rem ;
    .game-item{
      text-align: center;
      img{
        width:0.8rem;
        height:0.8rem;
        border-radius: 100%;
      }
      h4{
        margin-top: 0.2rem;
        font-size: 0.3rem;
        font-weight: normal;
        color: #333333;
      }
    }
  }
  .score-exchange{
    background: #fff;
    margin-top:0.2rem ;
    h3{
      padding:0.4rem 0.3rem;
      font-size: 0.28rem;
      display: flex;
      color:#333;
      justify-content: space-between;
      span{
        position: relative;
        padding-left: 0.4rem;
        &:before{
          content: '';
          display: block;
          width:0.28rem;
          height:100%;
          background: #000;
          position: absolute;
          top:-0.02rem;
          left:0;
        }
      }
      a{
        color:#C9C9C9;
        font-size: 0.22rem;
      }
    }
    .exchange-footer{
      padding:0.3rem 0;
      text-align: center;
      font-size: 0.3rem;
    }
  }
  .mui-slider-indicator{
    text-align: right;
    bottom:4px;
    .mui-indicator{
      background-color: #fff;
      border-color: #fff;
      width:.12rem;
      height:.12rem;
      margin:0;
      box-shadow:none;
      &.mui-active{
        background-color:#3C6DF8;
        border-color:#3C6DF8;
      }
    }
  }
  .signIn-containerT{
    background: rgba(0,0,0,0.5);
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 9;
    &:before{
      content: '';
      display: block;
      height:2.5rem;
      width:0.06rem;
      background: #fff;
      border-radius: 0.06rem;
      position: absolute;
      left:50%;
      top:0;
    }
    .signIn-remind{
      background: #fff;
      width:5rem;
      height:6rem;
      border-radius: 4px;
      text-align: center;
      margin:0 auto;
      margin-top: 2.5rem;
      position: relative;
      .header{
        background: #3C6DF8;
        color:#fff;
        padding:0.38rem 0 0.24rem 0;
        text-align: center;
        font-size: 0.36rem;
      }
      .content{
        padding-top:0.8rem ;
        color: #333;
        h5{
          font-size: 0.32rem;
          color:#333;
          font-weight: bold;
          margin-bottom:0.72rem ;
        }
        p{
          color: #3C6DF8;;
          font-size: 0.32rem;
          margin-bottom: 0.12rem;
        }
        span{
          color:#C9C9C9;
          font-size: 0.28rem;
        }
      }
      .sign-Btn{
        width:2.4rem;
        height:0.8rem;
        line-height: 0.8rem;
        text-align: center;
        background: #3C6DF8;
        color:#fff;
        box-shadow: 0 0.1rem 10px 0 #3C6DF8;
        border-radius:0.5rem;
        margin:0 auto;
        margin-top: 0.8rem;
      }
      .close{
        width:0.8rem;
        height:0.8rem;
        position: absolute;
        bottom:-1.2rem;
        left:50%;
        margin-left: -0.4rem;
      }
    }
  }
</style>
