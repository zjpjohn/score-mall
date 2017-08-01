<template>
  <div class="app-wrapper sure-order">
    <router-view></router-view>

    <div class="sticky-footer">
      <!--状态二选一-->
      <button class="sureBtn" @click="sureToast">确认兑换</button>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'sorder',
    data () {
      return {
      }
    },
    computed: {
      orderType () {
        const typeNav = this.$route.name
        return typeNav
      }
    },
    methods: {
      sureToast () {
        var _this = this
        this.$mui.confirm('是否确认使用“2000”积分兑换此商品？', '确认兑换？', ['取消', '确认'], function (e) {
          if (e.index === 1) {
            _this.sureNav()
          }
        })
      },
      sureNav () {
        const orderType = this.orderType
        if (orderType === 'matter') {
          this.$router.push('/order/OrderDeal/mgoods')
        } else if (orderType === 'code') {
          this.$router.push('/order/OrderDeal/cgoods')
        } else if (orderType === 'egoods') {
          this.$router.push('/order/OrderDeal/egoods')
        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/scss/index";
  .sure-order{

  }
</style>
