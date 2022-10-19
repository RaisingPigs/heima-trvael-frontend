<template>
  <div class="search-bar">
    <div @click="onBack" class="back-btn">返回</div>
    <div class="search-input">
      <van-search
          v-model="keyword"
          show-action
          placeholder="请输入搜索关键词"
          @search="changeKeyword"
          @clear="changeKeyword"
          shape="round"
          clearable
          autofocus
      />
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
            keyword: ''
        }
    },
    methods: {
        onBack() {
            alert('返回');
        },
        changeKeyword() {
            this.pageRequest.keyword = this.keyword;
            this.onSearch();
        },
        onSearch() {
            this.$store.dispatch('search/changePageRequest', this.pageRequest);
            this.$store.dispatch('search/refreshHotelList');
            this.$store.dispatch('search/getHotelList');
        }
    },
}
</script>

<style scoped lang="less">
.search-bar {
  display: flex;
  align-items: center;
  background-color: #fff;

  .back-btn {
    font-size: 3.73vw;
    padding-left: 2.67vw;
  }

  .search-input {
    flex: 1;
  }
}
</style>
