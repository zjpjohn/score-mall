<template>
  <div class="app-wrapper-no">
    <div class="container index-wrapper exchange-page">
      <div class="score-exchange">
        <!--筛选下拉框-->
        <div class="filter-modal" v-show="modal">
          <div class="filter-box animated" :class="{slideInDown: modal}">
            <div class="filter-item">
              <h5>积分区间</h5>
              <ul class="tag-lists clearfix">
                <li v-for="(score, index) in scoreArr" :data-index="index" @click="chooseScore" :class="index==scoreIndex ? 'active' : ''">{{score}}</li>
              </ul>
            </div>
            <div class="filter-item">
              <h5>分类</h5>
              <ul class="tag-lists clearfix">
                <li :data-index="index" @click="chooseSort" v-for="(sort, index) in classifysArr" :class="index == sortIndex ? 'active' : ''">{{sort}}</li>
              </ul>
            </div>
            <div class="button-groups">
              <button type="button" class="mui-btn" @click="cancleFilter">取消</button>
              <button type="button" class="mui-btn sureBtn" @click="filterSure">确定</button>
            </div>
          </div>
        </div>
        <!--兑换顶栏-->
        <div class="exchange-title">
          <div class="score">我的积分：<strong>{{myScore}}</strong></div>
          <div class="filterBtn" @click="switchFilter">筛选 <i class="mui-icon " :class="{'mui-icon-arrowdown': !modal, 'mui-icon-arrowup': modal}"></i></div>
        </div>
        <GoodsLists></GoodsLists>
        <div class="exchange-footer" onclick="loadMore()"><a href="javascript:void(0)" class="text-blue">点击加载更多</a></div>
      </div>
    </div>
    <Loading v-if="loading"></Loading>
  </div>
</template>
<script type="text/ecmascript-6">
  import GoodsLists from '@/components/GoodsLists'
  import Loading from '@/components/Loading'
  export default {
    name: 'hello',
    data () {
      return {
        myScore: 28,
        modal: false,
        scoreArr: ['0-300', '300-500', '500-1000', '1000以上'],
        scoreIndex: 0,
        classifysArr: ['全部', '电器', '优惠券', '流量', '食品', '服装'],
        sortIndex: 0,
        loading: false
      }
    },
    components: {
      GoodsLists,
      Loading
    },
    methods: {
      switchFilter () {
        this.modal = !this.modal
      },
      chooseScore (event) {
        let target = event.target
        this.scoreIndex = target.dataset.index
      },
      chooseSort (event) {
        let target = event.target
        this.sortIndex = target.dataset.index
      },
      filterSure () {
        this.modal = false
        this.loadingModal()
      },
      cancleFilter () {
        this.modal = false
      },
      loadingModal () {
        var _this = this
        this.loading = true
        setTimeout(function () {
          _this.loading = false
        }, 3000)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .modal-bg{
    position: fixed;
    background: rgba(0,0,0,0.5);
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 2;
  }
  .exchange-page{
    position: relative;
  }
  .score-exchange{
    margin-top: 0;
    .exchange-title{
      position: fixed;
      top:0.91rem;
      width:100%;
      background: #fff;
      display: flex;
      justify-content: space-between;
      height:0.98rem;
      border-bottom: 1px solid #D4D4D4;
      align-items: center;
      font-size:0.3rem;
      color: #666666;
      z-index: 10;
      padding:0 0.3rem;
      i{
        font-size: 0.3rem;
        color: inherit;
        font-weight: bold;
      }
      strong{
        font-weight: 400;
      }
    }
    .filter-modal{
      background: rgba(0,0,0,0.5);
      width:100%;
      position: absolute;
      top:0.98rem;
      bottom:0;
      left:0;
      right:0;
      z-index: 9;
      .filter-box{
        background: #fff;
        position: absolute;
        top:0;
        left:0;
        right:0;
        .filter-item{
          padding:0.3rem;
          position: relative;
          &+.filter-item:before{
            content: "";
            display: block;
            height:0.02rem;
            background: #D4D4D4;
            width:92%;
            position: absolute;
            top:0;
            left:4%;
          }
          h5{
            font-size: 0.26rem;
            margin-bottom: 0.4rem;
            color: #666666;
          }
          .tag-lists{
            li{
              float: left;
              width:1.56rem;
              height:0.6rem;
              box-sizing: border-box;
              border: 1px solid #B9B9B9;
              border-radius:0.04rem;
              font-size: 0.23rem;
              color: #666666;
              margin-right: 0.2rem;
              margin-bottom: 0.2rem;
              text-align: center;
              line-height: 0.6rem;
              &:nth-child(4n){
                margin-right: 0;
              }
              &.active{
                color: #fff;
                background: #3C6DF8;
                border-color: #3C6DF8;
              }

            }
          }
        }
        .button-groups{
          width:100%;
          display: flex;
          margin-top: 0.4rem;
          .mui-btn{
            border-radius: 0;
            height:0.98rem;
            flex:1;
            border:none;
            border-top: 1px solid #D4D4D4;
            border-bottom: 1px solid #D4D4D4;
            font-size:0.34rem;
            color: #999999;
            &.sureBtn{
              background: #3C6DF8;
              border-color:#3C6DF8;
              color: #fff;
            }
          }
        }
      }
    }

  }
  .score-goods{
    padding-top: 1.2rem;
  }
  .exchange-footer{
    padding:0.3rem 0;
    text-align: center;
    font-size: 0.3rem;
  }
</style>
