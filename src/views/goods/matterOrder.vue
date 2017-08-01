<template>
  <div>
    <div class="order-address">
      <i class="left-icon"></i>
      <div class="center">
        <div class="line-item">
          <span class="title">收货人：</span>
          <h4>杨延嗣 134 1948 8754</h4>
        </div>
        <div class="line-item">
          <span class="title">收货地址：</span>
          <p>四川省成都市武侯区科华北路62号力保大厦北区1502</p>
        </div>
      </div>
    </div>
    <div class="choose-number">
      <div class="goods-img"><img src="static/img/img_goods.png" alt=""></div>
      <div class="goods-info">
        <h4>米家压力IH电饭煲 智能烹饪灰铸铁粉内...</h4>
        <div class="line-item">
          <p>颜色：<span>WFS3018Q/3L合金内胆</span></p>
        </div>
        <div class="line-item">
          <p>单价：<span>200000积分</span></p>
        </div>
        <div class="line-item">
          <p>数量：<span>1</span></p>
        </div>
        <div class="line-item">
          <p>总价：<span class="text-blue">200000积分</span></p>
        </div>
      </div>
    </div>
    <div class="order-info">
      <div class="info-line">
        <span>配送方式：</span>快递 包邮
      </div>
      <div class="info-line">
        <span>成交日期：</span>2017-06-16 11:23:36
      </div>
      <div class="info-line">
        <span>订单号：</span>42213566639
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: '数据'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/index";
  .order-info{
    background: #fff;
    padding-left: 0.3rem;
    border-top: 1px solid #ddd;
    border-bottom:1px solid #ddd;
    .info-line{
      padding:0.3rem 0;
      font-size: 0.3rem;
      color: #666666;
    span{
      margin-right:0.2rem ;
    }
    &+.info-line{
        border-top: 1px solid #ddd;
      }
    }
  }
</style>
