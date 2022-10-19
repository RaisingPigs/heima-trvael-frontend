<template>
  <div>
    <van-sticky>
      <SearchBar/>
      <Sort/>
    </van-sticky>

    <HotelList
        :total="total"
        :hotel-list="hotelList"
        @getHotelList="getHotelList"
        @refreshHotelList="refreshHotelList"/>
  </div>
</template>

<script>
import SearchBar from '@/views/Search/SearchBar';
import Sort from '@/views/Search/Sort';
import SortFilter from '@/views/Search/Sort/SortFilter'
import HotelList from '@/views/Search/HotelList'
import {mapGetters, mapState} from "vuex";

export default {
    name: "index",
    components: {
        SearchBar,
        Sort,
        SortFilter,
        HotelList
    },
    computed: {
        ...mapState('search', ['pageRequest']),
        ...mapGetters('search', ['total', 'hotelList'])
    },
    methods: {
        getHotelList() {
            this.$store.dispatch('search/getHotelList');
        },
        refreshHotelList() {
            this.$store.dispatch('search/refreshHotelList');
            this.getHotelList();
        },
        submitFilter(city, brand, starName, minPrice, maxPrice) {
            this.pageRequest.city = city.length !== 0 ? [...city] : undefined;
            this.pageRequest.brand = brand.length !== 0 ? [...brand] : undefined;
            this.pageRequest.starName = starName.length !== 0 ? [...starName] : undefined;
            this.pageRequest.minPrice = minPrice;
            this.pageRequest.maxPrice = maxPrice;

            this.refreshHotelList();
        }
    }
}
</script>

<style scoped lang="less">
/deep/ .van-sticky {
  background-color: #f7f8fa;
}
</style>
