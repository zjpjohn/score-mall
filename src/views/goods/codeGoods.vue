<template>
  <div class="app-wrapper e-goods">
    <div class="container">
      <div class="goods-content">
        <!--电子券商品-->
        <div class="ticket">
          <img src="static/img/123@2x.png" alt="">
        </div>
      </div>
      <div class="goods-name">
        <h4>7天优酷黄金会员</h4>
        <p><strong>700</strong>积分</p>
      </div>
      <div class="goods-detail">
        <h4>详情说明</h4>
        <div class="detail">
          <p>商品简介：优酷7天黄金会员兑换码</p>
          <p>商品面值：10元</p>
          <p>商品类型：虚拟商品</p>
          <p>使用门槛：优酷视频会员</p>
          <div class="detail-step">
            <h5>兑换流程：</h5>
            <ul>
              <li>1.点击【立即兑换】</li>
              <li>2.选择兑换数量</li>
              <li>3.兑换成功</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--确认订单-->

    <div class="sticky-footer">
      <!--状态二选一-->
      <router-link class="btn can-get" to="/order/codeOrderSure">立即兑换</router-link>
      <!--<div class="not-get">-->
      <!--<a href="##" class="going-task">做任务，赚取积分 <i class="mui-icon mui-icon-arrowright"></i></a>-->
      <!--所需兑换积分不够-->
      <!--</div>-->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'hello',
      data () {
        return {
          msg: '数据'
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/index";
  .e-goods{
    .goods-content{
      height:3.4rem;
      background: #fff;
      text-align: center;
      margin-bottom: 0.2rem;
      overflow: hidden;
      .ticket{
        width:100%;
        height:100%;
        img{
          width:100%;
          height:100%;
        }

      }

    }
    .goods-name{
      background: #fff;
      box-shadow: 0 4px 6px 0 rgba(0,0,0,0.05);
      margin-bottom: 0.2rem;
      padding:0.3rem;
      h4{
        font-size: 0.34rem;
        color: #333333;
        margin-bottom: 0.12rem;
        font-weight: normal;
      }
      p{
        color: #EB0247;
        font-size:0.26rem;
        strong{
          font-size: 0.34rem;
        }
      }
    }
    .goods-detail{
      padding:0.3rem;
      background: #fff;
      margin-bottom: 0.2rem;
      h4{
        padding:0.3rem;
        padding-top: 0;
        font-size: 0.3rem;
        border-bottom: 1px solid #F5F4F9;
        color: #999999;
        position: relative;
        font-weight: normal;

        &:before{
          content: '';
          display: block;
          border-top: 0.1rem solid transparent;
          border-left: 0.1rem solid #D8D8D8;
          border-bottom: 0.1rem solid transparent;
          height:0;
          width:0;
          position: absolute;
          left:0;
          top:0.04rem;
        }
      }
      .detail{
        padding-top: 0.3rem;
        font-size: 0.26rem;
        p{
          color: #333333;
          padding-bottom: 0.2rem;
        }
        .detail-step{
          h5{
            font-size: 0.26rem;
            color: #333333;
            font-weight: bold;
          }
          li{
            font-size: 0.26rem;
            color: #333333;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
</style>
