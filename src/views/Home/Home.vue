<template>
    <div class="page">
      <div class="container index-wrapper">
        <div class="sign-block">
          <div class="score">
            <a herf="##"><strong>23</strong>积分&nbsp; </a>
          </div>
          <div class="sign-btn" onclick="slideDownThis()">
            签到
            <!--连签 <span>3</span> 天-->
          </div>
          <div class="nav-block">
            <div class="nav-item"><router-link to="/hello">兑换记录 <i class="mui-icon mui-icon-arrowright"></i></router-link></div>
          </div>
        </div>
        <div class="score-game">
          <a class="game-item" href="##">
            <img src="" alt="">
            <h4>抽奖</h4>
          </a>
          <a href="##" class="game-item">
            <img src="../../assets/images/btn_lottery.png" alt="">
            <h4>周周乐</h4>
          </a>
          <a href="##" class="game-item">
            <img src="../../assets/images/btn_indiana.png" alt="">
            <h4>夺宝</h4>
          </a>
          <a href="##" class="game-item">
            <img src="../../assets/images/btn_renwu@2x.png" alt="">
            <h4>做任务</h4>
          </a>
        </div>

      </div>
    </div>


</template>
<script type="text/ecmascript-6">
export default {

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
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
  }
</style>
