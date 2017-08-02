<template>
  <div class="app-wrapper add-address">
    <div class="container ">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>收货人：</label>
          <input name="userName" v-model="userName" type="text" class="mui-input-clear form-item" placeholder="请输入收货人姓名">
        </div>
        <div class="mui-input-row">
          <label>联系方式：</label>
          <input name="userContact" v-model="userContact" type="text" class="mui-input-clear form-item" placeholder="请输入收货人手机号码" oninput="this.value=this.value.replace(/\D/,'')">
        </div>
        <div class="mui-input-row">
          <label>所在地区：</label>
          <input name="userArea" type="hidden" v-model="userArea">
          <div id="chooseArea" class="district form-item">{{userDist}}<span class="placeholder" v-if="userDist == ''">请选择地区</span></div>
        </div>
        <div class="mui-input-row">
          <label>详细地址：</label>
          <input name="userAddress" v-model="userAddress" type="text" class="mui-input-clear form-item" placeholder="请输入详细地址">
        </div>
      </form>
    </div><!--主内容结束-->

    <!--确认订单-->

    <div class="sticky-footer">
      <!--填写完内容时，按钮disabled属性去除-->
      <button @click="submit" class="save-address" type="submit" :disabled="!formValid">保存地址</button>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import cityData from '../../assets/libs/district'
  import MobileSelect from '../../assets/libs/selectAddress'
  export default {
    name: 'hello',
    data () {
      return {
        userName: '',
        userContact: '',
        userArea: '',
        userAddress: '',
        userDist: ''
      }
    },
    computed: {
      formValid () {
        const userName = this.userName !== ''
        const userContact = this.userContact
        const userArea = this.userArea !== ''
        const userAddress = this.userAddress !== ''
        const telReg = /^1(3|4|5|7|8)\d{9}$/
        var valid = false
        if (userName && userArea && userAddress && telReg.test(userContact)) {
          valid = true
        }
        return valid
      }
    },
    methods: {
      submit () {
        const _this = this
        const form = {
          userName: this.userName,
          userContact: this.userContact,
          userArea: this.userArea,
          userAddress: this.userAddress
        }
//        this.$http.post() //提交
        localStorage.userAdd = JSON.stringify(form)
        this.$mui.toast('保存成功', {duration: 1000})
        setTimeout(() => {
          _this.$router.go(-1)
        }, 1000)
      }
    },
    mounted () {
      var _this = this
      var userAdd
      // 取信息
      if (localStorage.userAdd !== undefined) {
        userAdd = JSON.parse(localStorage.userAdd)
        this.userName = userAdd.userName
        this.userContact = userAdd.userContact
        this.userAddress = userAdd.userAddress
        this.userArea = userAdd.userArea
        this.userDist = userAdd.userArea[0].value + ' ' + userAdd.userArea[1].value + ' ' + userAdd.userArea[2].value
      }
      // 地区选择
      var mobileSelect = new MobileSelect({
        trigger: '#chooseArea',
        title: '请选择地区',
        wheels: cityData,
        callback (indexArr, data) {
          _this.userArea = data
        }
      })
      return mobileSelect
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../assets/scss/index";
  @import "../../assets/scss/mobileSelect.css";
  .mui-input-group:before{
    display: none;
  }
  .add-address{
    form{
      padding-left:0.3rem;
      border-bottom:1px solid #ddd;

      &:after{
        display: none;}
      .mui-input-row{
        font-size: 0.3rem;
        height:auto;
        color: #000000;
        &:after{
          display: none;}
        label{
          font-size: 0.3rem;
          color: #666666;
          padding:0.36rem 0;
        }
        input{
          font-size: 0.3rem;
          text-align: right;
          height:auto;
          color: #000000;
          padding:0.36rem 0.6rem 0.36rem 0;
          line-height: 1em;
          &::-webkit-input-placeholder{
            font-size:0.3rem;
            color: #B9B9B9;
          }
          &::-moz-placeholder{
            font-size:0.3rem;
            color: #B9B9B9;
          }
          &:-ms-input-placeholder{
            font-size:0.3rem;
            color: #B9B9B9;
          }
        }

        .mui-input-clear~.mui-icon-clear{
          font-size: 0.34rem;
          position: absolute;
          z-index: 1;
          top: 0.38rem;
          right: 0;
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          color: #999;
        }
        .district{
          float: right;
          max-width:65% ;
          .placeholder{
            font-size:0.3rem;
            color: #B9B9B9;
          }
          font-size: 0.3rem;
          text-align: left;
          padding:0.36rem 0.5rem 0.36rem 0;
          &:after{
            content: "";
            display: block;
            position: absolute;
            right:0.2rem;
            top:0.4rem;
            width:0.24rem;
            height: 0.24rem;
            background: url("../../assets/images/btn_into_arrow.png") no-repeat right center;
            background-size: 100%;
          }

        }
        .mui-switch{
          margin-top: 0.23rem;
          margin-right: 0.36rem;
          &:before{
            top:0.14rem;
          }
        }
        &+.mui-input-row{
          border-top: 1px solid #ddd;
        }
      }

    }
  }
</style>
