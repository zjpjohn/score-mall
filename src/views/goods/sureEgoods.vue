<template>
  <div class="container ">
    <div class="goods">
      <div class="img-wrapper">
        <img src="static/img/50M.png" alt="">
      </div>
      <h3>
        <div class="goods-name">50M元流量劵</div>
        <div class="goods-value"><strong>{{value}}</strong>积分</div>
      </h3>
    </div>
    <div class="order-form">
      <form action="##" class="order">
        <div class="line-item">
          <label >手机号</label>
          <div class="input-group">
            <input type="text" v-model="tel" placeholder="请输入兑换流量的手机号" name="tel" class="input-area" @input="checkPhone">
          </div>

        </div>
        <div class="line-item">
          <label >数量</label>
          <div class="input-group">
            <NumBox :num="goodsNum" @changeNum="computedPrice"></NumBox>
          </div>

        </div>
        <div class="line-item">
          <label >总价</label>
          <div class="input-group goods-value">
            <span>{{totalPrice}}</span>积分
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import NumBox from '@/components/Numbox'
  import Vue from 'vue'
  export default {
    name: 'hello',
    data () {
      return {
        value: this.score,
        goodsNum: 1,
        tel: undefined
      }
    },
    components: {
      NumBox
    },
    props: {
      score: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice () {
        var total = this.value * this.goodsNum
        this.$emit('totalPrice', total)
        return total
      }
    },
    methods: {
      computedPrice (num) {
        this.goodsNum = num
      },
      checkPhone () {
        var telFormate = Vue.filter('tel-formater')
        this.tel = this.tel.replace(/\D/, '')
        var reg = /^1(3|4|5|7|8)\d{9}$/
        if (reg.test(this.tel)) {
          this.$emit('checkTel', true)
          this.tel = telFormate(this.tel)
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/index";
    .goods{
      margin-top: 0.8rem;
      background: #fff;
      height:1.8rem;
      position: relative;
      padding-left: 2.4rem;
      padding-top: 0.5rem;
      border-bottom: 1px solid #E7E7E7;
      .img-wrapper{
        background: #FFFFFF;
        border: 1px solid #E7E7E7;
        border-radius: 0.12rem;
        width:2rem;
        height:2rem;
        position: absolute;
        left:0.3rem;
        top:-0.4rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width:100%;
        }
      }
      h3{
        font-size: 0.26rem;
        font-weight: normal;
        margin-left: 0.2rem;
        .goods-name{
          color: #333;
          font-size: 0.3rem;
          margin-bottom: 0.16rem;
        }
        .goods-value{
          color: #EB0247;
          strong{
            color: #EB0247;
            font-size: 0.4rem;
            margin-right: 0.1rem;
          }
        }

      }
    }
    .order-form{
      background: #fff;
      padding:0.2rem 0.3rem;
      .line-item{
        padding:0.2rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        label{
          font-size: 0.3rem;
          width:1.52rem;
          color: #666666;
        }
        .input-group{
          display: inline-block;
          text-align: right;
          input{
            margin-bottom: 0;
          }
          .input-area{
            height:0.8rem;
            width:5.38rem;
            font-size:0.3rem;
            box-sizing: border-box;
            padding: 0.22rem 0.3rem;
          }
          .mui-numbox{
            height:0.52rem;
            width:auto;
            padding:0 0.52rem;
            .mui-input-numbox{
              width:1.08rem!important;
              line-height: 0.52rem;
            }
            .mui-btn{
              width:0.52rem;
            }
          }
          &.goods-value{
            font-size: 0.3rem;
            color: #3C6DF8;
            letter-spacing: 0.01rem;
          }

        }
      }
    }
</style>
