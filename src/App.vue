<template>
  <div id="app">
    <div class="iphone" v-if="isIOS">
      <div class="robosen">
        <img src="../static/logorobosen.png" alt="">
      </div>
      <div class="app">
        <img src="../static/app.png" alt="">
      </div>
      <div class="shape">
        <img src="../static/shap.png" alt="">
      </div>
      <div class="mainImage">
        <img src="../static/APPImage.png" alt="">
      </div>
      <div class="download">
        <img src="../static/iphone.png" alt="" @click="iphoneDownload">
        <img src="../static/android.png" alt="" @click="androidDownload">
      </div>
      <div class="company">
        <img src="../static/company.png" alt="">
      </div>
    </div>
    <!--<div class="iphone" v-if="isIOSWechat">-->
        <!--<div class="robosen">-->
          <!--<img src="../static/logorobosen.png" alt="">-->
        <!--</div>-->
        <!--<div class="app">-->
          <!--<img src="../static/app.png" alt="">-->
        <!--</div>-->
        <!--<div class="shape">-->
          <!--<img src="../static/shap.png" alt="">-->
        <!--</div>-->
        <!--<div class="mainImage">-->
          <!--<img src="../static/APPImage.png" alt="">-->
        <!--</div>-->
        <!--<div class="download">-->
          <!--<img src="../static/iphone.png" alt="" @click="iphoneDownload">-->
          <!--<img src="../static/android.png" alt="" @click="androidDownload">-->
        <!--</div>-->
        <!--<div class="company">-->
          <!--<img src="../static/company.png" alt="">-->
        <!--</div>-->
      <!--</div>-->
    <div class="android" v-if="isAndroid">
        <div class="robosen">
          <img src="../static/logorobosen.png" alt="">
        </div>
        <div class="app">
          <img src="../static/app.png" alt="">
        </div>
        <div class="shape">
          <img src="../static/shap.png" alt="">
        </div>
        <div class="mainImage">
          <img src="../static/APPImage.png" alt="">
        </div>
        <div class="download">
          <img src="../static/iphone.png" alt="" @click="iphoneDownload">
          <img src="../static/android.png" alt="" @click="androidDownload">
        </div>
        <div class="company">
          <img src="../static/company.png" alt="">
        </div>
    </div>
    <!--<div class="android" v-if="isAndroidWechat">-->
      <!--<div class="robosen">-->
        <!--<img src="../static/logorobosen.png" alt="">-->
      <!--</div>-->
      <!--<div class="app">-->
        <!--<img src="../static/app.png" alt="">-->
      <!--</div>-->
      <!--<div class="shape">-->
        <!--<img src="../static/shap.png" alt="">-->
      <!--</div>-->
      <!--<div class="mainImage">-->
        <!--<img src="../static/APPImage.png" alt="">-->
      <!--</div>-->
      <!--<div class="download">-->
        <!--<img src="../static/iphone.png" alt="" @click="iphoneDownload">-->
        <!--<img src="../static/android.png" alt="" @click="androidDownload">-->
      <!--</div>-->
      <!--<div class="company">-->
        <!--<img src="../static/company.png" alt="">-->
      <!--</div>-->
      <!--</div>-->
    <div class="mask" v-if="isWeChat&&isShow" >
      <div class="routerImage">
        <img src="../static/routerImage.png" alt="">
      </div>
      <div class="openInBrowser">
        <img src="../static/openInBrowser.png" alt="">
      </div>
      <div class="Iknow" >
        <img src="../static/Iknow.png" alt="" @click="isShow=!isShow">
      </div>
    </div>
    <div class="pc" v-if="isPC">
      <div class="robosen">
        <img src="../static/logorobosen.png" alt="">
      </div>
      <div class="app">
        <img src="../static/app.png" alt="">
      </div>
      <div class="shape">
        <img src="../static/shap.png" alt="">
      </div>
      <div class="mainImage">
        <img src="../static/APPImage.png" alt="">
      </div>
      <div class="download">
        <img src="../static/iphone.png" alt="" @click="iphoneDownload">
        <img src="../static/android.png" alt="" @click="androidDownload">
      </div>
      <div class="company">
        <img src="../static/company.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      isPC:'',
      isMobile:'',
      isAndroid:'',
      isIOS:'',
      isWeChat:'',
      isShow:true,
      isIOSWechat:'',
      isAndroidWechat:''
    }
  },
  name: 'App',
  mounted(){
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase();
    var isMobile = false;
    for (var i = 0; i < mobileAgent.length; i++) {
      if (browser.indexOf(mobileAgent[i]) != -1) {
        isMobile = true;
        this.isMobile = true;
        // console.log('移动端')
        //Android终端
        let isAndroid = browser.indexOf('Android') > -1 || browser.indexOf('Adr') > -1;
　   //Ios终端
        let isiOS = !!browser.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            //IOS
            this.isIOS = true
            // console.log('ios终端')
            if (isWeixinBrowser()) {
              this.isWeChat = true
              console.log('微信')
              this.isIOSWechat = true
            }
          } else if (/(Android)/i.test(navigator.userAgent)) {
            //Android终端
            this.isAndroid = true
            // console.log('Android终端')
            if (isWeixinBrowser()) {
              this.isWeChat = true
              console.log('微信')
              this.isAndroidWechat = true
            }
          }


        function isWeixinBrowser() {
          return (/micromessenger/.test(browser)) ? true : false;
        }
        break;
      }
    }
    if(!isMobile){
      this.isPC = true
      console.log('pc')
    }
  },
  methods:{
    iphoneDownload(){
      window.location.href =  'https://itunes.apple.com/us/app/%E6%98%9F%E9%99%85%E7%89%B9%E5%B7%A5t9/id1450347240?l=zh&ls=1&mt=8';
    },
    androidDownload(){
      location.href = 'https://globalfies.oss-us-west-1.aliyuncs.com/APk/XJTGBuild.apk';
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import './static/reset.css'
  #app{
    width: 100%
    /*height: 100%*/
    min-height 100%
    position relative
    background-image url("../static/background.png")
  }

  .android{
    /*width: 100%*/
    height:100%
  }
  .app,.shape,.mainImage,.company{
    display flex
    justify-content center
    align-items center
  }
  .robosen img{
    width:22%
    margin-left 8%
    margin-top 8%
  }
  .app img{
    width:77%
    margin-top 9%
  }
  .shape img{
    width:40%
    margin-top 5%
  }
  .mainImage img{
    width:82%
    margin-top 11%
    margin-bottom 13%
  }
  .download img{
    width:75%
    display block
    margin 0 auto
    margin-bottom 2.3%
  }
  .company img{
    width:62%
    margin-top 10%
    margin-bottom 5%
  }
  .iphone{
    width: 100%
    /*height:100%*/
    min-height 100%
  }
  .iphone .robosen img{
    width:22%
    margin-left 8%
    margin-top 8%
  }
  .iphone .app img{
    width:77%
    margin-top 9%
  }
  .iphone .shape img{
    width:40%
    margin-top 5%
  }
  .iphone .mainImage img{
    width:80%
    margin-top 4%
    margin-bottom 4%
  }
  .iphone .download img{
    width:70%
    display block
    margin 0 auto
    margin-bottom 2%
  }
  .iphone .company img{
    width:60%
    margin-top 5%
    margin-bottom 5%
  }
  .mask{
    width: 100%
    height: 100%
    position absolute
    left 0
    top 0
    z-index 2
    background-image url("../static/mask.png")
  }
  .routerImage {
    height:15.6%
    /*background aqua*/
    display flex
    justify-content flex-end
  }
  .routerImage img{
    height:100%
    margin-top 3.6%
    margin-right 7.4%
  }
  .openInBrowser{
    height:6.7%
    text-align center

  }
  .openInBrowser img{
    height:100%
    margin-top 8%
  }
  .Iknow{
    height:5.2%
    text-align center
    margin-top 13%
  }
  .Iknow img{
    height:100%
  }

  .pc{
    width:610px
    height: 100%
    /*background aqua*/
    margin 0 auto
  }
</style>
