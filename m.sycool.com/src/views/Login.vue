<template>
  <div class="login-view">
    <!-- 导航栏 -->
    <van-nav-bar :title="text.title[status]" left-arrow @click-left="onClickLeft" />
    <!-- 表单 -->
    <van-cell-group>
      <van-field v-model="username" :placeholder="text.userholder[status]" />
      <van-field v-model="password" type="password" placeholder="密码" v-show="status" />
      <van-field v-model="checkcode" placeholder="验证码" v-show="!status">
        <van-button slot="button" size="normal" type="primary" :disable="geticode">发送验证码</van-button>
      </van-field>
      <van-field v-model="icode" placeholder="图形验证码">
        <van-button class="code" slot="button" size="small" type="primary" @click="refreshCode">
          <sidentify :identifyCode="identifyCode"></sidentify>
        </van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button type="primary" size="large" @click="userlogin">登录</van-button>
    </div>
    <div class="plus-options">
      <span @click="change">{{text.changedes[status]}}</span>
      <span>{{text.plusdes[status]}}</span>
    </div>
    <div class="third-party">
      <div>
        <img src="@/assets/icon_okvc34he0lr/wechat.png" alt />
        <p>微信登录</p>
      </div>
      <div>
        <img src="@/assets/icon_okvc34he0lr/qq.png" alt />
        <p>QQ登录</p>
      </div>
      <div>
        <img src="@/assets/icon_okvc34he0lr/baidu.png" alt />
        <p>百度登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import sidentify from '@/components/identify';
export default {
  name: "login",
  components: {
    sidentify
  },
  data() {
    return {
      username: "",
      password: "",
      checkcode: "",
      icode: "",
      geticode: true,
      identifyCodes: "abcdefghijklmnopqrstuvwxyz1234567890",
      identifyCode: "",
      status: 0,
      text: {
        title: ["短信快捷登录", "账号密码登录"],
        userholder: ["手机号", "用户名/手机号/邮箱"],
        changedes: ["账号密码登录", "短信快捷登录"],
        plusdes: ["收不到验证码？", "忘记密码"]
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    userlogin() {
      if (this.icode === this.identifyCode) {
        if (this.status === 0) {
          // 短信快捷登录
          this.status = 1;
        } else {
          // 账号密码登录
          this.$axios({
            method: 'post',
            url: "http://10.3.132.244:12345/login",
            data: this.$qs.stringify({
              username: this.username,
              password: this.password
            })
          }).then((res) => {
            if (res.data.status) {
              localStorage.setItem("loginToken", res.data.token);
              sessionStorage.setItem("isLogin", true);
              sessionStorage.setItem("username", res.data.username);
              sessionStorage.setItem("uid", res.data.uid);
              this.$router.push({
                name: 'home4'
              });
            } else {
              alert("用户名或密码错误！");
            }
          }).catch(function (err) {
            console.log(err);
          });
        }
      } else {
        alert("验证码错误");
      }
    },
    change() {
      if (this.status) {
        this.status = 0;
      } else {
        this.status = 1;
      }
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
}
</script>


<style scoped>
.van-nav-bar {
  margin-bottom: 2rem;
}

.code {
  width: 2.986667rem;
  height: 1.013333rem;
  border: 0.026667rem solid red;
}

.van-button--primary {
  background: #1a191e;
  color: white;
}

.van-button--small {
  padding: 0;
}

.van-button--large {
  width: 8rem;
  margin: 0.266667rem;
}

.login-btn {
  text-align: center;
}

.plus-options {
  padding: .3rem 0;
  display: flex;
  justify-content: space-between;
}

.plus-options > span {
  display: block;
  margin: 0 0.533333rem 0 0.533333rem;
  font-size: 0.32rem;
}

.third-party {
  margin-top: 0.533333rem;
  padding-bottom: .5rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.third-party div img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 auto;
}
</style>
