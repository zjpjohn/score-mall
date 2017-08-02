<template>
  <div class="app-wrapper sure-order">
    <SureE v-if="orderType ==='egoods'" :score="score" @checkTel = "validBtn" @totalPrice = "totalPrice"></SureE>
    <SureCode v-if="orderType== 'code'" :score="score" @totalPrice = "totalPrice"></SureCode>
    <SureMatter v-if="orderType== 'matter'" :score="score" @totalPrice = "totalPrice"></SureMatter>

    <div class="sticky-footer">
      <!--状态二选一-->
      <button class="sureBtn" @click="sureToast" :disabled="!valid">确认兑换</button>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import SureMatter from '@/views/goods/sureMatter'
  import SureCode from '@/views/goods/sureCode'
  import SureE from '@/views/goods/sureEgoods'
  export default {
    name: 'sorder',
    data () {
      return {
        score: 5000,
        valid: false
      }
    },
    computed: {
      orderType () {
        return this.$route.query.type
      }
    },
    methods: {
      sureToast () {
        var _this = this
        this.$mui.confirm('是否确认使用"' + this.score + '"积分兑换此商品？', '确认兑换？', ['取消', '确认'], function (e) {
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
      },
      validBtn (valid) {
        this.valid = valid
      },
      totalPrice (score) {
        this.score = score
      }
    },
    components: {
      SureMatter,
      SureCode,
      SureE
    },
    mounted () {
      if (this.orderType === 'matter' || this.orderType === 'code') {
        this.valid = true
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/scss/index";
  .sure-order{

  }
</style>
