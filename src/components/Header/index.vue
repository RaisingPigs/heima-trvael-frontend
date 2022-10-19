<template>
  <div class="header">
    <div class="logo">
      <van-image
          width="5vw"
          height="5vw"
          :src="require('../../assets/logo.png')"
      />
      <h4>黑马旅游</h4>
    </div>

    <div class="title">
      欢迎用户
    </div>
  </div>
</template>

<script>
export default {
    name: "index",
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.73vw;
  padding: 1.33vw;

  .logo {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 3.2vw;
  }
}
</style>
