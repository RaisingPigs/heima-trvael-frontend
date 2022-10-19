<template>
  <div class="hotel-list">
    <van-pull-refresh
        v-model="refreshLoading"
        success-text="刷新成功"
        @refresh="onRefresh">

      <van-list
          v-if="total"
          v-model="listLoading"
          :finished="listLoadingFinished"
          finished-text="没有更多了"
          @load="onLoad"
          :error.sync="listLoadingError"
          error-text="请求失败，点击重新加载">
        <HotelItem v-for="(hotel, index) in hotelList" :key="index" :hotel="hotel"/>
      </van-list>

      <van-empty v-else description="暂无酒店数据"/>
    </van-pull-refresh>
  </div>
</template>

<script>
import HotelItem from '@/views/Search/HotelList/HotelItem'

export default {
    name: "index",
    components: {
        HotelItem,
    },
    props: ['total', 'hotelList'],
    data() {
        return {
            refreshLoading: false,
            listLoading: false,
            listLoadingError: false,
            listLoadingFinished: false
        }
    },
    methods: {
        onRefresh() {
            try {
                this.$emit('refreshHotelList');
                this.refreshLoading = false;
            } catch (e) {
                console.log(e);
            }
        },
        onLoad() {
            try {
                this.$emit('getHotelList');
                this.listLoading = false;

                if (this.total !== -1 && this.hotelList.length >= this.total) {
                    this.listLoadingFinished = true;
                }
            } catch (err) {
                this.listLoadingError = true;
            }
        },

    },

}
</script>

<style scoped>
.hotel-list {
    margin-top: 5px;
}
</style>
