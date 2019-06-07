<template>
  <div class="phone_type">
    phone_type
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  mounted(){
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase();
    var isMobile = false;
    for (var i = 0; i < mobileAgent.length; i++) {
      if (browser.indexOf(mobileAgent[i]) != -1) {
        isMobile = true;
        console.log('移动端')
        location.href = 'http://www.baidu.com';
        break;
      }else{
        console.log('pc端')
        location.href = 'http://www.jd.com';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
html,body{
  width:100%;
  height:100%;
  padding: 0px;
  margin: 0px;

}
  .phone_type{
    width:100%;
    height:100%;
    background-color: #05AFFE;
  }
</style>
