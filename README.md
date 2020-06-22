# uni_demo

简单介绍一下, 目前此模板仍然在更新中, 由于本人并非从事h5开发, 仅有移动端开发经验, 所以项目中有可能存在错误, 这个项目呢也是基于目前我的封装思想搭建的
我个人觉得使用起来还是比较舒适的  

首先就来介绍一下目录结构吧

```       

components 存放组件 

=>  custom 存放自定义组件
=>  uni 存放uni原生组件
=>  uview-ui 存放uview组件	  
  
css 存放css样式

=>  global.css 全局样式
=>  m-icon.css 存放icon-font样式

js 存放js文件 

=> service.js 服务类js 目前仅有轻量化存储工具 storage 
=> zykit.js 本项目核心 本人封装的工具类 包括了 ui, storage, str, navi, media, req, api, img 具体使用方法在js文件中均有注释

pages 页面

=> index 跳板页面, 所有逻辑都是从此开始
=> guide 引导页
=> login 登录页
=> mine 个人中心 (主要是个退出登录的逻辑)

static 静态资源 (注意:图片必须存在static, 因为非static路径在 :src中会被拼接相对路径)

=> img 存放图片
=> ttf 存放字体

store vuex存储

=> x_loadData 加载全局数据, 唯一能说的东西, 我的思想是程序初始化时全局加载数据, 使用的时候直接从变量存取, 提升效率

```