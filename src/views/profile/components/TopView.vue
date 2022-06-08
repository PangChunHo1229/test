<template>
  <div>
    <div class="login-view">
      <h2>我的档案</h2>
      <div class="login">
        <div class="left">
          <!-- <img src="@/assets/images/profile/avatar.jpg" alt="" /> -->
        </div>
        <div class="center">
          <div>登录/注册</div>
          <div>
            <!-- <img src="@/assets/images/profile/phone.png" alt="" /> -->
            <span>暂未绑定手机号</span>
          </div>
        </div>
        <div class="right">
          <!-- <img src="@/assets/images/profile/right.png" alt="" /> -->
        </div>
      </div>
    </div>
    <div class="money">
      <div class="l">
        <div>
          <span class="balance">999.9</span>
          元
        </div>
        <div>我的余额</div>
      </div>
      <div class="m">
        <div>
          <span class="count">999</span>
          个
        </div>
        <div>我的优惠</div>
      </div>
      <div class="r">
        <div>
          <span>999</span>
          积分
        </div>
        <div>我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopView",
};
</script>

<style  scoped>
.login-view {
  height: 100px;
  background-color: #fe647f;
}
.login-view h2 {
  color: #fff;
  text-align: center;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  font-weight: 400;
}

.login {
  height: 80px;
  display: flex;
  background-color: #fe647f;
}
.login .left {
  flex: 1;
  text-align: center;
  /* img {
      margin-top: 10px;
      border-radius: 100px;
      border: 1px solid #ccc;
      width: 60px;
    } */
}
.center {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}
.center div {
  color: #fff;
}
.center div:nth-child(1) {
  font-size: 18px;
}
/* .center     div:nth-child(2) { */
/* img {
        width: 20px;
        vertical-align: middle;
        justify-content: center;
      } */
.center span {
  font-size: 16px;
}

.right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* img {
      width: 30px;
    } */
}

.money {
  margin-top: 20px;
  display: flex;
  height: 100px;
  font-size: 16px;
}
.money div {
  flex: 1;
  text-align: center;
  border-bottom: 20px solid #f2f2f2;
}
.l,
.m,
.r {
  height: 40px;
}
.l,
.m,
.r span {
  color: #ff7e51;
  font-weight: 700;
  font-size: 22px;
}
.l,
.m,
.r div:nth-child(1) {
  line-height: 55px;
}
.l,
.m,
.r div:nth-child(2) {
  line-height: 25px;
}
</style>
