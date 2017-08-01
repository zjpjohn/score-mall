<template>
  <div class="page deliver-detail">
    <div class="logistics-info">
      <p>物流公司：<strong>顺丰物流</strong></p>
      <p>物流单号：<strong>204847399144</strong></p>
    </div>
    <div class="logistics-detail">
      <h4>快递详情</h4>
      <ul class="logistics-lists">
        <li class="latest">
          <h5>快件已签收，欢迎您再次光临！</h5>
          <p class="time">2017.02.16 23:16</p>
        </li>
        <li>
          <h5>[深圳龙华十部]的【杨少龙】正在派件，电话是：134194887546</h5>
          <p class="time">2017.02.16 18:45</p>
        </li>
        <li>
          <h5>快件已到达[深圳华龙十部]，上一站是[虎门分拨中心]</h5>
          <p class="time">2017.02.15 09:23</p>
        </li>
        <li>
          <h5>快件已到达[深圳华龙十部]，上一站是[虎门分拨中心]</h5>
          <p class="time">2017.02.15 09:23</p>
        </li>
        <li>
          <h5>快件已达到[虎门分拨中心]</h5>
          <p class="time">2017.02.14 19:55</p>
        </li>
        <li>
          <h5>快件已由[天河五部]发往[虎门分拨中心]</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[天河五部]【王虎】已收件</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>
        <li>
          <h5>[深圳龙华十部]的【杨少龙】正在派件，电话是：134194887546</h5>
          <p class="time">2017.02.13 14:22</p>
        </li>

      </ul>
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
  .deliver-detail{
    //.order-statu{
    //
    //  display: flex;
    //  justify-content: space-between;
    //  align-items: center;
    //  padding:0.3rem;
    //  background: url("../img/img_order_top.png") no-repeat center center;
    //  background-size: 100%;
    //  box-sizing: border-box;
    //  .status-info{
    //    font-size: 0.3rem;
    //    color: #FFFFFF;
    //  }
    //  .right-icon{
    //    width:0.4rem;
    //    img{
    //      width:100%;
    //      display: block;
    //    }
    //  }
    //}
    .logistics-info{
      height:1.44rem;
      padding:0.3rem;
      background: #fff;
      margin-bottom: 0.2rem;
      p{
        font-size: 0.3rem;
        color: #3C3C3C;
        &+p{
          margin-top: 0.12rem;
        }
      }
    }
    .logistics-detail{
      background: #fff;
      h4{
        font-size: 0.26rem;
        color: #3C3C3C;
        padding:0.2rem 0.3rem;
        font-weight: normal;
        border-bottom:1px solid #DFE4E6 ;
      }
      .logistics-lists{
        padding-left: 0.86rem;
        position: relative;
        &:before{
          content: '';
          display: block;
          width:0.02rem;
          background: #AAB4BE;
          position: absolute;
          top:0.6rem;
          bottom: 0.6rem;
          left:0.42rem;
        }
        li{
          padding:0.3rem 0;
          &.latest{
            h5{
              color:#3C6DF8;
              &:before{
                background: #fff;
                border:0.08rem solid  #3C6DF8;
                left: -0.58rem;
              }
            }
          }
          &+li{
            border-top:1px solid #DFE4E6;
          }
          h5{
            font-size: 0.3rem;
            color: #3C3C3C;
            margin-bottom: 0.12rem;
            position: relative;
            &:before{
              content: '';
              display: block;
              width:0.14rem;
              height:0.14rem;
              border-radius: 100%;
              background: #AAB4BE;
              position: absolute;
              left:-0.5rem;
              top:0.12rem;
            }
          }
          .item{
            font-size: 0.26rem;
            color: #3C3C3C;
          }
        }
      }
    }
  }
</style>
