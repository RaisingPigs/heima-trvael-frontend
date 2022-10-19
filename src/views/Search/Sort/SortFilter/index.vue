<template>
  <div class="filter-area">
      <div class="filter-item">
        <div class="title">城市</div>
        <van-checkbox-group direction="horizontal" v-model="city">
          <van-checkbox v-for="(city, index) in filterData.cityList" :name="city.key" :key="index">
            <template #icon="props">
              <van-button v-if="props.checked" size="mini" type="info" round>{{city.val}}</van-button>
              <van-button v-else size="mini" type="default" round>{{city.val}}</van-button>
            </template>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="filter-item">
        <div class="title">星级</div>
        <van-checkbox-group direction="horizontal" v-model="starName">
          <van-checkbox v-for="(starName, index) in filterData.starNameList" :name="starName.key" :key="index">
            <template #icon="props">
              <van-button v-if="props.checked" size="mini" type="info" round>{{starName.val}}</van-button>
              <van-button v-else size="mini" type="default" round>{{starName.val}}</van-button>
            </template>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="filter-item">
        <div class="title">品牌</div>
        <van-checkbox-group direction="horizontal" v-model="brand">
          <van-checkbox v-for="(brand, index) in filterData.brandList" :name="brand.key" :key="index">
            <template #icon="props">
              <van-button v-if="props.checked" size="mini" type="info" round>{{brand.val}}</van-button>
              <van-button v-else size="mini" type="default" round>{{brand.val}}</van-button>
            </template>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="filter-item last">
        <div class="title">价格</div>
        <van-radio-group direction="horizontal" v-model="price">
          <van-radio v-for="(price, index) in filterData.priceList" :name="price.key" :key="index">
            <template #icon="props">
              <van-button v-if="props.checked" size="mini" type="info" round>{{price.val}}</van-button>
              <van-button v-else size="mini" type="default" round>{{price.val}}</van-button>
            </template>
          </van-radio>
        </van-radio-group>
      </div>


      <div class="footer-btns">
        <van-button @click="onReset" type="danger" round>重置</van-button>
        <van-button @click="onSubmit" type="info" round>完成</van-button>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "index",
    computed: {
        ...mapState('search', ['pageRequest'])
    },
    data() {
        return {
            filterData: {
                cityList: [
                    {key: '上海', val: '上海'},
                    {key: '北京', val: '北京'},
                    {key: '深圳', val: '深圳'},
                    {key: '杭州', val: '杭州'}
                ],
                starNameList: [
                    {key: '四星级', val: '四星级'},
                    {key: '五星级', val: '五星级'},
                    {key: '二钻', val: '二钻'},
                    {key: '三钻', val: '三钻'},
                    {key: '四钻', val: '四钻'},
                    {key: '五钻', val: '五钻'},
                ],
                brandList: [
                    {key: '7天酒店', val: '7天酒店'},
                    {key: '如家', val: '如家'},
                    {key: '速8', val: '速8'},
                    {key: '皇冠假日', val: '皇冠假日'},
                    {key: '华美达', val: '华美达'},
                    {key: '万怡', val: '万怡'},
                    {key: '喜来登', val: '喜来登'},
                    {key: '万豪', val: '万豪'},
                    {key: '和颐', val: '和颐'},
                    {key: '希尔顿', val: '希尔顿'}
                ],
                priceList: [
                    {key: '0-100', val: '100元以下'},
                    {key: '100-300', val: '100~300元'},
                    {key: '300-600', val: '300~600元'},
                    {key: '600-1500', val: '600~1500元'},
                    {key: '1500-', val: '1500元以上'}
                ]
            },
            city: [],
            starName: [],
            brand: [],
            price: ''
        }
    },
    methods: {
        onReset() {
            this.city = [];
            this.starName = [];
            this.brand = [];
            this.price = '';
        },
        onSubmit() {
            let splitArr = this.price.split('-');
            let minPrice = splitArr[0] ? splitArr[0] : undefined;
            let maxPrice = splitArr[1] ? splitArr[1] : undefined;

            this.pageRequest.city = this.city.length !== 0 ? [...this.city] : undefined;
            this.pageRequest.brand = this.brand.length !== 0 ? [...this.brand] : undefined;
            this.pageRequest.starName = this.starName.length !== 0 ? [...this.starName] : undefined;
            this.pageRequest.minPrice = minPrice;
            this.pageRequest.maxPrice = maxPrice;

            this.$store.dispatch('search/changePageRequest', this.pageRequest);
            this.$store.dispatch('search/refreshHotelList');
            this.$store.dispatch('search/getHotelList');

            this.$emit('closeFilterOption');
        }
    }
}
</script>

<style scoped lang="less">
.filter-area {
  .filter-item {
    padding: 2.67vw;

    /deep/ .van-checkbox__icon {
      height: 1.5em;
    }

    /deep/ .van-radio__icon {
      height: 1.5em;
    }

    .title {
      margin-bottom: 2.67vw;
      font-weight: bold;
    }

    .van-button {
      padding: 2.67vw;
      margin-right: 2.67vw;
    }
  }

  .filter-item:nth-child(4) {
    margin-bottom: 14vw;
  }

  .footer-btns {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 2vw;

    .van-button {
      height: 10.2vw;
      padding: 0 16vw;
      margin: 0 2.13vw;
    }
  }
}
</style>
