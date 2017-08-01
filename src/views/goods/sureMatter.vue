<template>
  <div class="container ">
    <router-link to="/address" class="order-address" v-if="userInfo != ''">
      <i class="left-icon"></i>
      <div class="center">
        <div class="line-item">
          <span class="title">收货人：</span>
          <h4>{{userInfo.userName}} {{userInfo.userContact|tel-formater}}</h4>
        </div>
        <div class="line-item">
          <span class="title">收货地址：</span>
          <p>{{userInfo.userDist}} {{userInfo.userAddress}}</p>
        </div>
      </div>
      <i class="right-icon"></i>
    </router-link>
    <router-link class="add-address" to="/address" v-if="userInfo == ''">
      <i class="mui-icon mui-icon-plus"></i>
      添加地址
    </router-link>
    <div class="choose-number">
      <div class="goods-img"><img src="static/img/img_goods.png" alt=""></div>
      <div class="goods-info">
        <h4>米家压力IH电饭煲 智能烹饪灰铸铁粉内</h4>
        <div class="line-item">
          <p>颜色：<span>WFS3018Q/3L合金内胆</span></p>
        </div>
        <div class="line-item">
          <p>单价：<span>{{goodsValue}}积分</span></p>
        </div>
        <div class="line-item">
          <p>数量：<span>{{goodsNum}}</span></p>
          <NumBox :num="goodsNum"></NumBox>
        </div>
        <div class="line-item">
          <p>总价：<span class="text-blue">{{totalPrice}}积分</span></p>
        </div>
      </div>
    </div>
    <div class="goods-transform">
      配送方式：<span>快递&nbsp;包邮</span>
    </div>
  </div><!--主内容结束-->
</template>
<script type="text/ecmascript-6">
  import NumBox from '@/components/Numbox'
  export default {
    name: 'hello',
    data () {
      return {
        userInfo: '',
        goodsValue: 2000,
        goodsNum: 1
      }
    },
    computed: {
      totalPrice () {
        return this.goodsValue * this.goodsNum
      }
    },
    components: {
      NumBox
    },
    created () {
      this.userInfo = JSON.parse(localStorage.userAdd)
      this.userInfo.userDist = this.userInfo.userArea[0].value + this.userInfo.userArea[1].value + this.userInfo.userArea[2].value
    },
    methods: {
      computeTotal () {
        
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .order-address{
    display: flex;
    margin-bottom: 0.22rem;
    align-items: center;
    padding:0.3rem;
    border-top:1px solid #DDDDDD;
    border-bottom:1px solid #DDDDDD;
    background: #fff;
    background-image: url(../../assets/images/img_order_decoration.png);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 0.08rem;
    .left-icon{
      display: block;
      width:0.32rem;
      height:0.32rem;
      margin-right: 0.3rem;
      background: url("../../assets/images/location.png") no-repeat center center;
      background-size: 0.32rem 0.32rem;
    }
    .right-icon{
      display: block;
      width: 0.24rem;
      height: 0.24rem;
      background: url("../../assets/images/btn_into_arrow.png") no-repeat center center;
      background-size: 100% 100%;
    }
    .center{
      .line-item{
        font-size: 0.3rem;
        color: #666666;
        display: flex;
        &+.line-item{
          margin-top: 0.2rem;
        }
        h4{
          display: inline-block;
          font-size: 0.3rem;
          color:#333;
          margin-left: 0.3rem;
        }
        span{
          word-break: keep-all;
        }
        p{
          display: inline-block;
        }
      }
    }

  }
  .add-address{
    display: flex;
    margin-bottom: 0.22rem;
    width:100%;
    height:1rem;
    line-height: 1rem;
    opacity: 0.8;
    background: #000000;
    font-size:0.34rem;
    color: #FFFFFF;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .choose-number{
    margin-bottom: 0.22rem;
    display: flex;
    padding:0.3rem;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .goods-img{
      width:1.2rem;
      height:1.2rem;
      border-radius: 0.1rem;
      border:1px solid #ddd;
      overflow: hidden;
      margin-right: 0.2rem;
      img{
        width:100%;
        height:100%;
        display: block;

      }
    }
    .goods-info{
      h4{
        font-size: 0.3rem;
        width:5.44rem;
        color: #333333;
        font-weight: normal;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .line-item{
        margin-top: 0.2rem;
        font-size:0.28rem;
        color: #666666;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          display: inline-block;
        }
        .mui-numbox{
          border: 1px solid #666666;
          height:0.52rem;
          padding:0 0.52rem;
          width:auto!important;
          button{
            width:0.52rem;
          }
          input{
            width:1.08rem!important;
            border-right: 1px solid #666666!important;
            border-left: 1px solid #666666!important;
          }
        }
      }
    }

  }
  .goods-transform{
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 0.3rem;
    font-size: 0.3rem;
    color: #666666;
  }
</style>
