<template>
  <div class="app-wrapper">
    <div class="container treasure-detail">
      <div class="mui-slider banner-slider">
        <div class="mui-slider-group">
          <div class="mui-slider-item">
            <img src="../../img/img_indiana_complete_goods.png" alt="">
          </div>
          <div class="mui-slider-item">
            <img src="../../img/img_indiana_complete_goods2.png" alt="">
          </div>
        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
      <div class="treasure-intro">
        <h3><span class="status-tag">进行中</span> 折叠无线蓝牙键盘</h3>
        <div class="treasure-info">
          <p class="details">
            凭质保证书及京东商城发票，可享受全国联保服务 （奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场
            选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
          </p>
          <div class="progress2">
            <span class="progress-bar" style="width: 26%;"></span>
          </div>
          <div class="join-users">
            <p class="text-grey">总需人次2000</p>
            <p>剩余<strong>1300</strong>人次</p>
          </div>
        </div>

      </div>
      <div class="user-join">
        <!--没参与显示-->
        <!--<p class="not-join">【期号D70407YSY0001】您没有参与本期夺宝</p>-->
        <!--参与了显示-->
        <div class="joined ">
          <p>您参与了： <span class="text-blue">100</span>人次</p>
          <div class="joined-num collapse">
            <h5>夺宝号码：</h5>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span>10010123</span>
            <span class="text-blue show-all" data-collapse="true">查看全部</span>
          </div>
        </div>
        <!--已揭晓显示-->
        <!--<p class="not-join">【期号D70407YSY0001】 幸运号：<span class="text-blue">10010123</span></p>-->
      </div>
      <div class="more-option">
        <a href="##"><img src="../../img/icon_graphic_details.png" alt="">图文详情</a>
        <a href="./treasure-latest.html"><img src="../../img/icon_phase_out.png" alt="">往期揭晓</a>
      </div>
      <div class="current-join">
        <div class="current-header">
          <h4>本期所有参与记录</h4>
          <p>2017-04-12 10:00:00 开始</p>
        </div>
        <ul class="join-lists">
          <li>
            <div class="left">
              <img src="../../img/img_participants.png" alt="">
              <div>
                <p>思慕雪</p>
                <p>2017-04-12  11:04  IP:61.148.244.166</p>
              </div>
            </div>
            <div class="right">参与 <strong>10</strong>人次</div>
          </li>
          <li>
            <div class="left">
              <img src="../../img/img_participants.png" alt="">
              <div>
                <p>思慕雪</p>
                <p>2017-04-12 11:04 IP:61.148.244.166</p>
              </div>
            </div>
            <div class="right">参与 <strong>10</strong>人次</div>
          </li>
          <li>
            <div class="left">
              <img src="../../img/img_participants.png" alt="">
              <div>
                <p>思慕雪</p>
                <p>2017-04-12   11:04  IP:61.148.244.166</p>
              </div>
            </div>
            <div class="right">参与 <strong>10</strong>人次</div>
          </li>
          <li>
            <div class="left">
              <img src="../../img/img_participants.png" alt="">
              <div>
                <p>思慕雪</p>
                <p>2017-04-12   11:04  IP:61.148.244.166</p>
              </div>
            </div>
            <div class="right">参与 <strong>10</strong>人次</div>
          </li>
        </ul>
      </div>
      <!--选择参与次数弹窗-->
      <div class="modal">
        <div class="modal-content animated">
          <div class="modal-header">
            <h4>请选择参与次数 <span class="text-red">参与次数越多，中奖几率越大哦~</span></h4>
            <i class="closeModal mui-icon mui-icon-closeempty"></i>
          </div>
          <div class="modal-body">
            <div class="num-box">
              <div class="mui-numbox" data-numbox-min='1' data-numbox-max='19'>
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" readonly value="5"/>
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
              </div>
            </div>
            <div class="tags-wrapper">
              <span class="num-tag choosed">5</span>
              <span class="num-tag">10</span>
              <span class="num-tag">15</span>
              <span class="num-tag not-enough">20</span>
            </div>
            <button class="join-btn">立即参与 (消耗<span>1000</span>积分)</button>
          </div>
        </div>
      </div>

    </div>
    <div class="sticky-footer shadow-footer">
      <!--非本人获奖时，添加disabled属性-->
      <button class="order-btn blue-btn" ><a href="##">立即兑换</a></button>
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
  .treasure-detail{
    .banner-slider{
      height:4.5rem;
      width:100%;
      .mui-slider-indicator{
        right:4px;
      }
    }
    .treasure-intro{
      .status-tag{
        display: inline-block;
        width:0.8rem;
        height:0.34rem;
        text-align: center;
        line-height:0.34rem;
        color:#fff;
        font-size:0.24rem;
        border-radius:0.06rem;
        font-weight:400;
        background:#FA9904;
      }
      h3{
        background:#fff;
        padding:0.3rem;
        font-size:0.3rem;
        color: #3c3c3c;
        border-bottom:1px solid #dedede;
        .status-tag{
          margin-right:0.2rem;
        }
      }
      .treasure-info{
        background:#fff;
        padding:0.3rem;
        color: #3c3c3c;
        font-size:0.24rem;
        .details{
          margin-bottom:0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: box;
          display: -webkit-box;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #3c3c3c;
          line-height:1.2em;
        }
        .progress2{
          margin-bottom:0.2rem;
        }
        .join-users{
          font-size:0.22rem;
          display:flex;
          justify-content:space-between;
          p{
            font-size:inherit;
            color:inherit;
            &.text-grey{
              color: #b9b9b9;
            }
          }
          strong{
            color:#3C6DF8;
            font-weight:normal;
          }
        }
      }

    }
    .user-join{
      background:#F5F5F5;
      .not-join{
        padding:0.3rem;
        font-size: 0.22rem;
        font-weight:600;
        text-align:center;
        color:#3C3C3C;
      }
      .joined{
        padding:0.3rem;
        padding-right: 0.25rem;
        font-size:0.28rem;
        color:#6c6c6c;
        p{margin-bottom:0.24rem}
        h5{display:inline-block;}
        .joined-num{
          span{
            width:1.2rem;
            display: inline-block;
            margin-bottom:0.24rem;
            margin-right:0.1rem;
          }
          &.collapse{
            height:1.04rem;
            overflow: hidden;
            position:relative;
            .show-all{
              position:absolute;
              background:#F5F5F5;
              width:1.3rem;
              right:0.04rem;
              bottom:0;
            }
          }
        }

      }
    }
    .more-option{
      display:flex;
      height:0.98rem;
      margin-bottom:0.1rem;
      background:#fff;
      a{
        flex:1;
        align-self: center;
        text-align:center;
        font-size:0.3rem;
        color:#3c3c3c;

        &:first-child{
          position: relative;
          &:after{
            content:"";
            display:block;
            height:0.98rem;
            width: 0.02rem;
            background: #DEDEDE;
            position: absolute;
            right: 0;
            top:-0.3rem;
          }
        }
        img{
          width:0.4rem;
          height:0.4rem;
          margin-right:0.1rem;
          vertical-align:middle;
        }
      }
    }
    .current-join{
      background:#fff;
      .current-header{
        padding:0 0.3rem;
        height:0.88rem;
        line-height:0.88rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom: 1px solid #dedede;
        h4{
          font-size:0.3rem;
          font-weight: normal;
        }
        p{
          font-size:0.24rem;
        }
      }
      .join-lists{
        padding:0 0.3rem;
        li{
          display: flex;
          justify-content: space-between;
          padding-top:0.3rem;
          padding-bottom:0.28rem;
          &+li{
            border-top:1px solid #DEDEDE;
          }
          .left{
            display: flex;
            img{
              width:0.5rem;
              height:0.5rem;
              border-radius: 100%;
              margin-right:0.2rem;
              display:inline-block;
              vertical-align:top;
            }
            &>div{
              display:inline-block;
              max-width:5rem;
              overflow:hidden;
              vertical-align:top;
            }
            p{
              font-size:0.24rem;
              line-height: 1.2em;
              color: #8c8c8c;
            }
          }
          .right{
            align-self: center;
            font-size:0.24rem;
            color:#8c8c8c;
            strong {
              color:#3C6DF8;
              font-weight: normal;
            }
          }
        }
      }
    }
    .modal{
      position: fixed;
      top: 0;
      bottom:0;
      left:0;
      right:0;
      background: rgba(0,0,0,0.5);
      z-index: 99;
      display: none;
      .modal-content{
        background:#fff;
        position: absolute;
        bottom: 0;
        left:0;
        right:0;
      }
      .modal-header{
        padding:0.11rem 0;
        display:flex;
        justify-content:space-between;
        align-items:center;
        i{color:#ccc;font-size:0.6rem;}
        h4{
          font-size:0.3rem;
          line-height:0.6rem;
          padding-left:0.2rem;
          font-weight:600;
          color:#3C3C3C;
          height:0.6rem;
          border-left:0.08rem solid #3c6df8;
          .text-red{
            font-size:0.24rem ;
            font-weight: 400;
            margin-left:0.1rem;
          }
        }
      }
      .modal-body{
        background:#f5f5f5;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .mui-numbox{
          width:4.72rem;
          margin-top:0.5rem;
          margin-bottom: 0.4rem;
          height:0.88rem;
          border-color:#dedede;
          input{
            font-size:0.6rem;
            color:#3c3c3c;
            font-weight: bold;
            width:3rem;
            border-color: #dedede !important;
          }
          button{
            font-size:0.6rem;
            color:#3c3c3c;
          }
        }
        .num-tag{
          display:inline-block;
          width: 1rem;
          height:.5rem;
          font:0.3rem bold;
          text-align: center;
          line-height: .5rem;
          border-radius:.08rem;
          background:#fff;
          border:.02rem solid #dedede;
          color:#3c3c3c;
          margin-right:.25rem;
          &.choosed{
            background: #3c6df8;
            border-color: #3c6df8;
            color:#fff;
          }
          &.not-enough{
            color: #dedede;;
          }
        }

        .join-btn{
          background: #3c6df8;
          width:6.9rem;
          height:0.89rem;
          border-radius:.08rem;
          color:#fff;
          margin-top: 0.4rem;
          border:none;
          margin-bottom: 0.25rem;
          font-size:0.3rem;
        }
      }
    }

  }
</style>
