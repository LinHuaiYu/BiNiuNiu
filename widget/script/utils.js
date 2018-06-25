/**
  加载Frame方法
    name 页面名称
    url  页面路径
    rest{   页面位置
      x: 0,
      y: headerHeight,
      w: 'auto',
      h: '100'
    }
*/
function openFrame(name, url, rect) {
    api.openFrame({
        name: name,
        url: url,
        //页面加载进度配置信息，若不传则无加载进度效果
        progress: {
            type: "default", //加载进度效果类型，默认值为default，取值范围为default|page，default等同于showProgress参数效果；为page时，进度效果为仿浏览器类型，固定在页面的顶部
            title: "加载标题", //type为default时显示的加载框标题
            text: "加载文本", //type为default时显示的加载框内容
            color: "#f8f8f8" //type为page时进度条的颜色，默认值为#45C01A，支持#FFF，#FFFFFF，rgb(255,255,255)，rgba(255,255,255,1.0)等格式
        },
        // 背景颜色
        bgColor:'#f8f8f8',
        //（可选项）页面是否弹动
        bounces: true,
        // 页面已经打开时，是否重新加载页面
        reload:true,
        // （可选项）是否允许长按页面时弹出选择菜单
        allowEdit:true,
        // （可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。
        //  never            永远不显示
        //  always         总是显示
        //  scrolls        只有当页面内容超出设备屏幕大小，发生滚动行为时显示，建议设置为该模式。
        overScrollMode:'scrolls',
        //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件
        // customRefreshHeader：''
        // 是否可以缩放页面
        // scaleEnabled: true,
        //动画
        animation: {
            type: "suck",         //动画类型（详见动画类型常量）
            subType: "from_top",  //动画子类型（详见动画子类型常量）
            duration: 300         //动画过渡时间，默认300毫秒
        },
        // rect: {
        //     x: 0,
        //     y: headerHeight,
        //     w: 'auto',
        //     h: '100'
        // }
        rect:rect
    });
}
/**
  打开frame页面组的方法
  name 名称
  rect frameGroup位置
  frames 页面数据 数组类型
  callback 回调函数
*/
function openFrameGroup(name,scroll,rect,frames,callback){
  api.openFrameGroup({
      // 设置frameGroup的name
      name: name,
      //设置是否可以左右滑动
      scrollEnabled: scroll,
      // frame组的背景颜色
      background:'#f8f8f8',
      // frameGroup 的位置和大小
      rect: rect,
      // 可选项）默认显示的页面索引
      index: 0,
      // （可选项）预加载的 frame 个数，默认加载当前页后面一个
      preload: 0,
      // frame 数组
      frames: frames
  }, function(ret, err) {
      callback(ret);
  });
}
