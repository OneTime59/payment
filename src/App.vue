<template>
  <RouterView />
</template>
 
<script>
export default {
  name: 'App',
};
</script>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box; /* 使元素的宽高包含其内边距和边框 */
}
/* 设置默认字体和背景 */
body {
    line-height: 1;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    background: white;
    color: black;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.global_css{
  margin: 0;
  padding: 0;
}
.main {
  /* height: calc(70vh - 80px); */
  width: 100vw;
}

.footer {
  height: 30vh;
  width: 100vw;
}
.el-header {
  padding: 0px !important; /* 使用 !important 可以确保覆盖其他样式 */
}
</style>
