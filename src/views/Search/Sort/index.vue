<template>
  <div class="sort-bar">
    <van-dropdown-menu active-color="#f00">
      <van-dropdown-item
          @change="sortByChange"
          v-model="sortBy"
          :options="menu.sortMenu"
      />
      <van-dropdown-item
          @change="distanceChange"
          v-model="distance"
          :options="menu.distanceMenu"
      />
      <van-dropdown-item title="筛选" ref="filterOptionRef">
        <van-cell>
          <template #default>
            <SortFilter @closeFilterOption="closeFilterOption"/>
          </template>
        </van-cell>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import SortFilter from '@/views/Search/Sort/SortFilter'
import {mapState} from "vuex";

export default {
    name: "index",
    components: {
        SortFilter,
    },
    data() {
        return {
            menu: {
                sortMenu: [
                    {
                        text: '默认排序',
                        value: 'default'
                    },
                    {
                        text: '距离优先',
                        value: 'location'
                    },
                    {
                        text: '低价优先',
                        value: 'price'
                    }
                ],
                distanceMenu: [
                    {
                        text: '直线距离',
                        value: 0
                    },
                    {
                        text: '1公里内',
                        value: 1
                    },
                    {
                        text: '10公里内',
                        value: 10
                    },
                    {
                        text: '20公里内',
                        value: 20
                    },
                    {
                        text: '30公里内',
                        value: 30
                    },
                ]
            },
            sortBy: 'default',
            distance: 0
        }
    },
    computed: {
        ...mapState('search', ['pageRequest'])
    },
    methods: {
        sortByChange() {
            this.pageRequest.sortBy = this.sortBy !== 'default' ? this.sortBy : undefined;
            this.$store.dispatch('search/changePageRequest', this.pageRequest);
            this.$store.dispatch("search/refreshHotelList");
            this.$store.dispatch("search/getHotelList");
        },
        distanceChange() {
            this.pageRequest.distance = this.distance !== 0 ? this.distance : undefined;

            this.$store.dispatch('search/changePageRequest', this.pageRequest);
            this.$store.dispatch("search/refreshHotelList");
            this.$store.dispatch("search/getHotelList");
        },
        closeFilterOption() {
            this.$refs.filterOptionRef.toggle(false);
        }
    }
}
</script>

<style scoped lang="less">
.sort-bar {
  padding: 10px 0 5px;

  /deep/ .van-dropdown-menu__bar {
    box-shadow: none;
    //height: 45px;
  }

  /deep/ .van-ellipsis {
    font-size: 14px;
  }
}
</style>
