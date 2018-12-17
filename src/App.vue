<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
(function(doc, win) {
  doc.title = "首页";
  var html = doc.getElementsByTagName("html")[0],
    reEvt = "orientationchange" in win ? "orientationchange" : "resize",
    reFontSize = function() {
      var clientW = doc.documentElement.clientWidth || doc.body.clientWidth;
      if (!clientW) return;
      clientW < 750 ?
        html.style.fontSize = 100 * (clientW / 750) + "px" :
        html.style.fontSize = "100px";
    };
  win.addEventListener(reEvt, reFontSize);
  doc.addEventListener("DOMContentLoaded", reFontSize);
})(document, window);
</script>

<style>
</style>
