<template>
  <div class="app-wrapper goods-page ">
    <div class="container entity-goods">
      <div class="goods-imgs">
        <div class="mui-slider">
          <div class="mui-slider-group  ">
            <div class="mui-slider-item"><a href="#"><img :src="static/img/img_goods.png" /></a></div>
            <div class="mui-slider-item"><a href="#"><img :src="static/img/img_indiana_goods.png" /></a></div>
            <div class="mui-slider-item"><a href="#"><img :src="static/img/img_indiana.png" /></a></div>
            <div class="mui-slider-item"><a href="#"><img :src="static/img/img_goods.png" /></a></div>
            <div class="mui-slider-item"><a href="#"><img :src="static/img/img_indiana.png" /></a></div>
          </div>
          <div class="slider-count">
            <div class="mui-slider-indicator">
              <div class="mui-indicator mui-active">1</div>
              <div class="mui-indicator">2</div>
              <div class="mui-indicator">3</div>
              <div class="mui-indicator">4</div>
              <div class="mui-indicator">5</div>
            </div>
            <span class="total-count">/&nbsp;5</span>
          </div>
        </div>
      </div>
      <div class="goods-detail">
        <h4>米家压力IH电饭煲 智能烹饪灰铸铁粉内胆 煲汤 米饭 熬粥多功能智能电饭煲</h4>
        <div class="goods-value ">
          <p><strong>4000</strong>积分</p>
          <span class="badge">包邮</span>
        </div>
      </div>
      <div class="goods-intro">
        <img :src="static/img/goods.png" alt="">
      </div>
    </div><!--主内容结束-->

    <!--确认订单-->

    <div class="sticky-footer">

      <!--状态二选一-->
      <button class="can-get"><a href="./sure-order.html">立即兑换</a></button>
      <!--<div class="not-get">-->
      <!--<a href="##" class="going-task">做任务，赚取积分 <i class="mui-icon mui-icon-arrowright"></i></a>-->
      <!--所需兑换积分不够-->
      <!--</div>-->
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'goods',
    data () {
      return {
        msg: '数据'
      }
    },
    mounted () {
      this.$mui('.mui-slider').slider({
        interval: 3000
      })
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .goods-page{
    min-height:100%;
    padding-bottom: 1rem;
    overflow: scroll;
    &+.sticky-footer{
      position: fixed;
      bottom:0;
      left:0;
      right:0;
      height:1rem;
      text-align: center;
      line-height: 1rem;
      font-size:0.34rem;
      color: #fff;
      .can-get{
        background: #3C6DF8;
        a{
          color: #fff;
        }
      }
      .not-get{
        background: #E7E7E7;
        position: relative;
        .going-task{
          position: absolute;
          display: block;
          left:0;
          right:0;
          height:0.72rem;
          opacity: 0.5;
          background: #000000;
          font-size: 0.3rem;
          line-height: 0.72rem;
          color: #fff;
          text-align: right;
          padding-right: 0.36rem;
          top:-1.02rem;
          i{
            font-size: 0.3rem;
          }
        }
      }
    }
    //实物商品
    .entity-goods{
      .goods-imgs{
        background: #fff;
        position: relative;
        box-shadow: 0 4px 6px 0 rgba(0,0,0,0.05) ;
        img{
          width:7.5rem;
          height:7.5rem;
        }
        .mui-slider-indicator{
          width:auto;
          font-size:0.28rem ;
          color: #fff;
          position: static;
          display: inline-block;

          .mui-indicator{
            font-size: 0.28rem;
            color: #FFFFFF;
            display: none;
            background: transparent;
            border:none;
            width:auto;
            height:auto;
            box-shadow: none;
            border-radius: 0;
            &.mui-active{
              background: transparent;
              display: inline-block;

            }
          }
        }
        .slider-count{
          opacity: 0.4;
          background: #333333;
          color: #fff;
          font-size:0.28rem ;
          padding:0.18rem;
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
          position: absolute;
          right:0;
          bottom:0.3rem;
        }
      }
      .goods-detail{
        background: #FFFFFF;
        padding:0.3rem 0.4rem;
        margin-bottom: 0.2rem;
        h4{
          font-size: 0.34rem;
          color: #333333;
          letter-spacing: 0;
          line-height: 0.44rem;
          font-weight: normal;

        }
        .goods-value{
          p{
            font-size:0.26rem;
            color: #EB0247;
            display: inline-block;
            padding:0.2rem 0;
            strong{
              font-size: 0.34rem;
            }
            del{
              color: #999999;
              margin: 0.2rem;
            }

          }
          .badge{
            padding:0.04rem 0.1rem;
            font-size: 0.26rem;
            color: #fff;
            background: #999999;
            border-radius: 2px;
          }
        }
      }
      .goods-standards{
        background: #fff;
        padding:0.32rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.2rem;
        .left{
          width:0.6rem;
          margin-right: 0.2rem;

          vertical-align: middle;
          .status{
            font-size:0.3rem;
            line-height: 0.6rem;
            color: #999999;
          }

        }
        .right{
          display: flex;
          flex-grow: 1;
          justify-content: flex-end;
          .info{
            font-size: 0.3rem;
            color: #333333;
            .mui-numbox{
              height:0.6rem;
              width:2.04rem;
              padding:0 0.6rem;
              button{
                width:0.6rem;
              }
              input{
                width: 0.8rem !important;
                padding:0 0.6rem;
              }
            }
          }
          .icon-more{
            margin-top: 0.1rem;
            width:0.46rem;
            height:0.1rem;
          }
        }
      }
      .user-address{
        background: #fff;
        padding:0.32rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.2rem;
        .left{
          width:0.6rem;
          margin-right: 0.2rem;
          vertical-align: middle;
          .status{
            font-size:0.26rem;
            color: #999999;
          }

        }
        .right{
          flex-grow: 1;

          word-break: break-all;
          .line{
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.2rem;
          }
          .info{
            font-size: 0.3rem;
            color: #333333;
          }
          .icon-more{
            margin-top: 0.1rem;
            width:0.46rem;
            height:0.1rem;
          }
          .address-text{
            font-size: 0.3rem;
            color: #666666;
          }
        }
      }
      .goods-intro{
        padding:0 .5%;
        img{
          width:100%;
          display: block;
          margin:0 auto;
        }
      }

    }//实物商品结束
  }
</style>
