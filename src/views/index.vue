<template>
  <div class="app">
    <slider class="slider" interval="3000" auto-play="true" show-indicators="true">
      <div class="frame" v-for="(img,index) in imageList" :key="index">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
      <indicator></indicator>
    </slider>
  </div>
</template>

<script>
import { WxcTabBar, Utils, WxcMinibar } from "weex-ui";
import { linkTo } from "common/service/navigator";
const modal = weex.requireModule("modal");

export default {
  components: {
    WxcTabBar,
    WxcMinibar
  },

  data() {
    return {
      name: "weex",
      imageList: [
        {
          src:
            "https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"
        }
      ],
      tabTitles: [
        {
          title: "首页",
          icon:
            "https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png",
          activeIcon:
            "https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png",
          url: "http://10.33.103.15:8081/index.html"
        },
        {
          title: "特别推荐",
          icon:
            "https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",
          activeIcon:
            "https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png",
          url: "http://10.33.103.15:8081/god.html"
        },
        {
          title: "消息中心",
          icon:
            "https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",
          activeIcon:
            "https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png"
          // badge: 5
        },
        {
          title: "我的主页",
          icon:
            "https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",
          activeIcon:
            "https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png"
          // dot: true
        }
      ],
      tabStyles: {
        bgColor: "#FFFFFF",
        titleColor: "#666666",
        activeTitleColor: "#3D3D3D",
        activeBgColor: "#FFFFFF",
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        textPaddingBottom: 20
      },
      contentStyle: "0px"
    };
  },

  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page;
      // console.log(index);
    },

    minibarLeftButtonClick() {},
    minibarRightButtonClick() {
      modal.toast({ message: "click rightButton!", duration: 1 });
    },

    onClick(e) {
      // let bundleUrl = new String(weex.config.bundleUrl);
      // weex.requireModule("modal").toast({
      //   message: weex.config.bundleUrl,
      //   duration: 0.5
      // });
      // bundle();
      linkTo("god").then(res => {
        weex.requireModule("modal").toast({
          message: res,
          duration: 0.5
        });
      });
      //  return;
      // let navigator = weex.requireModule("navigator");
      // navigator.push(
      //   {
      //     url: targetUrl,
      //     animated: "true"
      //   },
      //   event => {
      //     console.log("callback: ", event);
      //   }
      // );
      // weex.requireModule("modal").toast({
      //   message: `This is a ${this.name}`,
      //   duration: 0.5
      // });
    }
  },

  created() {
    const tabPageHeight = Utils.env.getPageHeight();
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this;
    this.contentStyle = { height: tabPageHeight - tabStyles.height + "px" };
  }
};
</script>

<style scoped>
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}

.image {
  width: 750px;
  height: 200px;
}
.slider {
  width: 750px;
  height: 200px;
  border-width: 2px;
  border-style: solid;
  border-color: #41b883;
}
</style>