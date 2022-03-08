const list = [
    {
        title:'闭包是什么',
        content:`有权访问一个函数内部变量的函数就叫做闭包（要能手写一个简单的闭包）
        闭包的应用场景
        函数防抖
        函数节流
        变量持久化（闭包中的变量不会被回收）`,
        img:'',
    },
    {
        title:'跨域是什么？怎么解决跨域',
        content:`跨域是指浏览器为了安全做的同源策略，协议，端口，域名三者其中一种不同都是跨域
        解决跨域的办法有
        JSONP（缺点：只支持get）
        利用script标签没有跨域限制的特性，并提供一个回调函数，回调函数的名称为callback
        CORS（需要后端配合）
        vue中集成了跨域的解决，添加代理
        在vue.config.js中添加 devServer:{ proxy:’xxx代理地址’}`,
        img:'',
    },
    {
        title:'垂直居中的办法有哪些？',
        content:`弹性布局 align-items:center
        Line-height 等于height (行高等于高度，一般用于文字垂直居中)
        Position:absolute （绝对定位+偏移值 top:50% margin-top:-50%）
        Position:absolute（绝对定位+偏移值0 + margin:0 auto）
        transform：translate(-50%,-50%)`,
        img:'',
    },
    {
        title:'清除浮动的方法有哪些？',
        content:`在浮动元素下方添加一个空标签 ，设置属性为clear:both
        使用伪元素
        父元素使用overflow：hidden ，必须有 zoom:1
        给父元素固定的高度`,
        img:'',
    },
    {
        title:'你做过哪些性能优化？',
        content:`减少HTTP请求
        图片/路由使用懒加载
        外部资源使用CDN引入
        功能相似的组件与逻辑抽离并复用
        长列表数据使用懒加载
        函数防抖 函数节流
        减少js代码中的全局变量，html标签语义化`,
        img:'',
    },
]

export default list