<template>
  <div class="card">
    <van-cell-group>
      <van-cell>
        <template #default>
          <div class="card-content">
            <div class="hotel-img">
              <van-image
                  width="23vw"
                  height="31vw"
                  fit="fill"
                  :src="hotel.pic"
              />
            </div>
            <div class="hotel-desc">
              <h5>{{hotel.name}}</h5>
              <van-tag type="danger">{{hotel.starName}}</van-tag>
              <p class="location font10">{{hotel.business + hotel.address}}</p>

              <div class="cart-bottom">
                <div class="left">
                  <p class="reservation">1分钟前有人预定了酒店</p>
                  <p class="rate">
                    <span>{{hotel.score}}分</span>
                    <span> / </span>
                    <span>100分</span>
                  </p>
                </div>
                <div class="right">
                  <span>￥</span><span>{{hotel.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
    name: "index",
    props: ['hotel'],
}
</script>

<style scoped lang="less">
.card {
  //margin-bottom: 10px;

  .card-content {
    display: flex;
    justify-content: space-between;

    .hotel-desc {
      flex: 1;
      margin-left: 10px;
      font-size: 10px;

      h5 {
        font-size: 16px;
      }

      .cart-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .left {
          .rate {
            color: #f58708;
            font-weight: bold;
          }
        }

        .right {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
