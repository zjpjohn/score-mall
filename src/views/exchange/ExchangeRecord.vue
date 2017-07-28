<template>
  <div class="container deal-record">
    <ul>
      <li>
        <a class="record-item" href="./shopping/e-order-detail.html">
          <div class="img-wrapper">
            <img src="static/img/record4.png" alt="">
          </div>
          <div class="deal-info">
            <h4>中国移动20M元流量劵</h4>
            <p><span>兑换数量：</span>2</p>
            <p><span>兑换总价：</span>1000积分</p>
            <p><span>兑换号码：</span>134****6895</p>
          </div>
        </a>
      </li>
      <li>
        <a class="record-item" href="./shopping/e-order-detail.html">
          <div class="img-wrapper">
            <img src="static/img/record.png" alt="">
          </div>
          <div class="deal-info">
            <h4>饿了么20元抵扣劵</h4>
            <p><span>兑换数量：：</span>2</p>
            <p><span>兑换总价：</span>2000积分</p>
            <p><span>兑换码：</span><strong class="goodsCode">1234556</strong></p>
          </div>
          <button class="copyBtn">复制</button>
        </a>
      </li>
      <li>
        <a class="record-item" href="./shopping/order-detail.html">
          <div class="img-wrapper">
            <img src="static/img/record2.png" alt="">
          </div>
          <div class="deal-info">
            <h4>米家压力IH电饭煲 智能烹饪灰铸铁粉</h4>
            <p><span>兑换数量：</span>2</p>
            <p><span>兑换总价：</span>2000积分</p>
          </div>
        </a>
      </li>
      <li>
        <a class="record-item" href="##">
          <div class="img-wrapper">
            <img src="static/img/record3.png" alt="">
          </div>
          <div class="deal-info">
            <h4>美团外卖10元抵扣劵</h4>
            <p><span>兑换数量：</span>2</p>
            <p><span>兑换总价：</span>2000积分</p>
            <p><span>兑换码：</span><strong class="goodsCode">1567328</strong></p>
          </div>
          <button class="copyBtn">复制</button>
        </a>
      </li>
      <li>
        <a class="record-item" href="##">
          <div class="img-wrapper">
            <img src="static/img/img_indiana_goods.png" alt="">
          </div>
          <div class="deal-info">
            <h4>小米笔记本Air 13.3英寸 全金属机身独立显卡</h4>
            <p><span>兑换数量：</span>1</p>
            <p><span>兑换总价：</span>2000积分</p>
          </div>
        </a>
      </li>

    </ul>
    <div class="exchange-footer" onclick="loadMore()"><a href="javascript:void(0)" class="text-blue">点击加载更多</a></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'ExchangeRecord',
    data () {
      return {
        msg: '数据'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .deal-record{
    background: #F5F4F9;
    li{
      background: #fff;
      margin-bottom:0.2rem ;
      padding:0.4rem 0.3rem;
      .record-item{
        display: flex;
        align-items: center;
        justify-content:flex-start;
        .img-wrapper{
          width:1.6rem;
          min-width:1.6rem;
          height:1.6rem;
          border:1px solid #E7E7E7;
          border-radius: 0.08rem;
          overflow: hidden;
          text-align: center;
          margin-right:0.3rem ;
          img{
            width:100%;
            height:100%;
          }
        }
        .deal-info{
          min-width: 3.6rem;
          text-align: left;
          margin-right: 0.2rem;
          h4{
            font-size: 0.3rem;
            color: #333333;
            margin-bottom: 0.12rem;
          }
          p{
            font-size: 0.3rem;
            color: #151515;
            margin-bottom: 0.12rem;
            span{
              color: #666666;
              margin-right: 0.12rem;
            }
            .goodsCode{
              font-weight: normal;
            }
          }
        }
        .copyBtn{
          width:1.2rem;
          height:0.6rem;
          padding:0;
          background:#3C6DF8;
          border:0;
          color: #fff;
          font-size: 0.3rem;
          border-radius: 0.08rem;
          line-height: 0.6rem;
        }
      }
    }
    .exchange-footer{
      padding:0.2rem 0;
      text-align: center;
      font-size: 0.3rem;
    }
  }

</style>
