<template>
  <div class="app-wrapper">
    <div class="container task-progress">
      <div class="shadow"></div>
      <div class="progress-block">
        <ul class="progress-line">
          <!--active样式 确定进度-->
          <li class="active">
            领取任务
          </li>
          <li >
            提交审核
          </li>
          <li>
            审核通过
          </li>
          <!--已过期时显示，并隐藏‘提交审核，审核通过’-->
          <!--<li class="out-date">-->
          <!--已过期-->
          <!--</li>-->
        </ul>
        <!--状态一-->
        <div class="progress-intro">
          <h4>进行中</h4>
          <p>请按照任务指引完成操作并按时提交审核</p>
        </div>
      </div>
      <div class="task-block">
        <div class="task-name">
          <div class="task-icon">
            <img src="../../img/task/icon_others@2x.png" alt="">
          </div>
          <div class="task-intro">
            <div class="task-line">
              <p >一生约APP下载</p>
              <a class="more" href="./task-detail.html">详情 <i class="mui-icon mui-icon-arrowright"></i></a>
            </div>
            <div class="task-line">
              <p class="task-value">800积分</p>
            </div>
          </div>
        </div>
        <div class="introduce-block">
          <h4 >任务介绍</h4>
          <div class="intro-des">
            <p>通过任务链接跳转相对应的应用市场，下载一生约APP，并注册登录使用。</p>
            <p>PS：所有报名活动并下载使用的同学都能获得一生约800积分。快快下载吧。</p>
          </div>
        </div>
        <div class="introduce-block">
          <h4>审核时间</h4>
          <div class="time-intro">
            <p>提交审核后120小时内</p>
          </div>
        </div>
        <div class="task-link">
          <a class="btn-link" ><i class="task-icon"></i>任务链接</a>
        </div>
      </div>




    </div>
    <div class="sticky-footer">
      <a  class="order-btn" href="./submit-check.html">提交审核&nbsp;(03:59:59)</a>
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
  .task-progress{
    .progress-block{
      padding: 0.3rem;
      padding-top: 0.56rem;
      background: #fff;
      margin-bottom: 0.2rem;
      .progress-line{
        margin-bottom: 0.4rem;
        text-align: center;
        li{
          display: inline-block;
          width:32%;
          text-align: center;
          padding-top: 0.5rem;
          font-size: 0.26rem;
          color: #000000;
          position: relative;
          &:after{
            content: '';
            display: block;
            width:0.3rem;
            height:0.3rem;
            background: url("../img/task/3@2x.png") no-repeat center center;
            background-size: 100% 100%;
            position: absolute;
            top:0;
            left:50%;
            margin-left: -0.15rem;
            z-index: 2;
          }
          &:before{
            content: '';
            display: block;
            height:0.02rem;
            width:90%;
            background: #D4D4D4;
            position: absolute;
            top:0.14rem;
            left:auto;
            right:57%;
            z-index: 1;
          }
          &.active{
            &:after{
              background: url("../img/task/1@2x.png") no-repeat center center;
              background-size: 100% 100%;
            }
            &:before{
              background: #3C6DF8;
            }
          }
          &:first-child{
            &:before{
              display: none;
            }
          }
          &.out-date{
            &:after{
              background: url("../img/task/2@2x.png") no-repeat center center;
              background-size: 100% 100%;
            }

          }
        }
      }
      .progress-intro{
        text-align: center;
        padding:0 0.15rem;
        h4{
          font-size:0.3rem;
          margin-bottom: 0.2rem;
          color: #333333;
        }
        p{
          font-size: 0.28rem;
          line-height: 1.2em;
          color: #666666;
        }
      }
    }
    .task-block{
      background: #fff;
      padding:0 0.3rem;
      .task-name{
        border-bottom: 1px solid #E7E7E7;
        padding:0.3rem 0;
        display: flex;
        .task-icon{
          width:1.2rem;
          height:1.2rem;
          border-radius: 100%;
          margin-right: 0.3rem;
          img{
            width:100%;
            height:100%;
          }
        }
        .task-intro{
          padding:0.1rem 0;
          flex:1;
          display: flex;
          flex-direction:column;
          justify-content: space-between;
          .task-line{
            font-size: 0.3rem;
            color: #666666;
            display: flex;
            justify-content: space-between;
            .task-value{
              color: #333;
              font-weight: bold;
            }
            p,a{
              font-size: 0.3rem;
              color: #666666;
              i{
                font-size: 0.28rem;
              }
            }

          }
        }

      }
    }
    .introduce-block{
      padding:0.3rem 0;
      border-bottom: 1px solid #E7E7E7;
      h4{
        font-size: 0.3rem;
        margin-bottom: 0.2rem;
        color: #333333;
      }
      .intro-des{
        font-size:0.3rem;
        color: #666666;
        line-height: 1.2em;
      }
    }
    .task-link{
      padding:0.3rem 0;

      .btn-link{
        width:100%;
        height:1rem;
        line-height: 1rem;
        display: block;
        background: rgba(60,109,248,0.05);
        border-radius: 0.08rem;
        font-size: 0.3rem;
        color: #3C6DF8;
        text-align: center;
        i{
          display: inline-block;
          width:0.3rem;
          height:0.3rem;
          margin-right: 0.15rem;
          background: url("../img/task/icon_link@2x.png") no-repeat center center;
          background-size: 100% 100%;
        }
      }

    }
  }
</style>
