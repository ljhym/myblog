<template>
    <div>
        <div id="div1"></div>
        <textarea  hidden cols="30" v-model="data.htmltxt" rows="10"></textarea>
        <a-button block type="primary" size="large" @click="showhtml">获取值</a-button>
        <div class="markdown-body editormd-preview-container" previewcontainer="true" style="padding: 20px;"><h3 id="h3-1-"><a name="1.闭包是什么" class="reference-link"></a><span class="header-link octicon octicon-link"></span>1.闭包是什么</h3><ul>
<li>有权访问一个函数内部变量的函数就叫做闭包（要能手写一个简单的闭包）</li><li>闭包的应用场景<ul>
<li>函数防抖 </li><li>函数节流</li><li>变量持久化（闭包中的变量不会被回收）</li></ul>
</li></ul>
<h3 id="h3-2-"><a name="2.跨域是什么？怎么解决跨域" class="reference-link"></a><span class="header-link octicon octicon-link"></span>2.跨域是什么？怎么解决跨域</h3><ul>
<li>跨域是指浏览器为了安全做的同源策略，协议，端口，域名三者其中一种不同都是跨域</li><li>解决跨域的办法有<ul>
<li>JSONP（缺点：只支持get）<ul>
<li>利用<code>script</code>标签没有跨域限制的特性，并提供一个回调函数，回调函数的名称为callback</li></ul>
</li><li>CORS（需要后端配合）</li><li>vue中集成了跨域的解决，添加代理<ul>
<li>在vue.config.js中添加 devServer:{ proxy:’xxx代理地址’}</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-3-"><a name="3.垂直居中的办法有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>3.垂直居中的办法有哪些？</h3><ul>
<li>弹性布局 align-items:center</li><li>Line-height 等于height (行高等于高度，一般用于文字垂直居中)</li><li>Position:absolute （绝对定位+偏移值 top:50%  margin-top:-50%）</li><li>Position:absolute（绝对定位+偏移值0 + margin:0 auto）</li><li>transform：translate(-50%,-50%)</li></ul>
<h3 id="h3-4-"><a name="4.清除浮动的方法有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>4.清除浮动的方法有哪些？</h3><ul>
<li>在浮动元素下方添加一个空标签 ，设置属性为clear:both</li><li>使用伪元素</li><li>父元素使用overflow：hidden ，必须有 zoom:1</li><li>给父元素固定的高度</li></ul>
<h3 id="h3-5-"><a name="5.你做过哪些性能优化？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>5.你做过哪些性能优化？</h3><ul>
<li>减少HTTP请求</li><li>图片/路由使用懒加载</li><li>外部资源使用CDN引入</li><li>功能相似的组件与逻辑抽离并复用</li><li>长列表数据使用懒加载</li><li>函数防抖 函数节流</li><li>减少js代码中的全局变量，html标签语义化</li></ul>
<h3 id="h3-6-vue-"><a name="6.Vue中的传值方法有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>6.Vue中的传值方法有哪些？</h3><ul>
<li>父组件传给子组件：子组件通过props方法接受数据</li><li>子组件传给父组件：$emit 方法传递参数</li><li>非父子组件间的数据传递，兄弟组件传值：eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适，也可以用vuex</li></ul>
<h3 id="h3-7-"><a name="7.你知道数组的常用方法有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>7.你知道数组的常用方法有哪些？</h3><ul>
<li>filter map sort splice slice </li><li>push shift unshift pop </li><li>indexOf concat join </li></ul>
<h3 id="h3-8-h5-"><a name="8.H5的新特性有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>8.H5的新特性有哪些？</h3><ul>
<li>语义化标签（nav header footer aside section）</li><li>audio video  canvas svg </li><li>LocalStorage SessionStorage</li><li>新的表单类型<ul>
<li>emali number url search color tel date</li></ul>
</li><li>新的表单属性<ul>
<li>placehoder required min max height width autofocus</li></ul>
</li></ul>
<p>新增了一些api,如地理定位</p>
<h3 id="h3-9-c3-"><a name="9.C3的新特性有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>9.C3的新特性有哪些？</h3><ul>
<li>圆角 边框背景 盒子阴影 字体阴影</li><li>渐变 过渡 循转 帧动画 </li><li>弹性布局</li></ul>
<h3 id="h3-10-"><a name="10.登陆保持是怎么实现的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>10.登陆保持是怎么实现的？</h3><ul>
<li>利用locaStorage把服务端返回的token保存在本地，在接下来的请求的请求头中都携带上token，并在路由响应中判断，如果响应码为401则是token失效，在根据对应的逻辑做处理</li></ul>
<h3 id="h3-11-promise-"><a name="11.Promise是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>11.Promise是什么？</h3><ul>
<li>Promise是一种异步编程的解决方案，它是一个容器，保存着某个未来才会结束的事情的结果（通常是异步操作）</li><li>Promise的作用是解决回调地狱</li><li>Promise创建之后就会立即执行（这里指的是new Promise），.then方法只有2个参数 成功resolve和失败reject</li><li>Promise常用的方法有哪些？<ul>
<li>.then .catch .all .finally</li></ul>
</li></ul>
<h3 id="h3-12-"><a name="12.你是怎么理解盒子模型的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>12.你是怎么理解盒子模型的？</h3><ul>
<li>每个HTML元素都是一个盒子，这个盒子中可能又会包裹着其他的盒子，这就是盒子模型</li><li>盒子模型分为 【标准盒模型】与【IE盒模型】</li><li>标准盒模型：<ul>
<li>外边距 + 边框 + 内边距 + 内容（宽高）</li></ul>
</li><li>IE盒模型：<ul>
<li>外边距+内容（宽高 + 内 边距 +  边框）</li></ul>
</li><li>设置盒子模型的方式：<ul>
<li>Box-sizing:content-box 设置标注盒模型 默认</li><li>Box-sizing:border-box 设置IE盒模型</li></ul>
</li></ul>
<h3 id="h3-13-ajax-"><a name="13.Ajax的工作原理是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>13.Ajax的工作原理是什么？</h3><ul>
<li>Ajax是一种异步获取数据的技术，它的原理是通过XmlHttpRequest对象来向服务器发送异步请求，类似一个中间层，负责请求数据，而不影响浏览器其他事件执行，等到数据回来之后再通知浏览器，浏览器再进行处理</li><li>Ajax的使用步骤<ul>
<li>1·新建一个XMLHttpRequest对象 let xhr = new XMLHttpRequest()</li><li>2·使用open 和send方法发送请求 xhr.open(url:xxx,methods:xxx)  xhr.send()</li><li>3·使用onload注册回调 ，xhr.onload=function(){}</li><li>4·根据服务器返回的结果做响应的处理 xhr.responseText</li></ul>
</li></ul>
<h3 id="h3-14-http-"><a name="14.Http请求状态码有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>14.Http请求状态码有哪些？</h3><ul>
<li>1** 信息，服务器收到请求，需要请求者继续执行操作</li><li>2** 成功，操作被成功接收并处理</li><li>3** 重定向，需要进一步的操作 </li><li>4** 客户端错误，请求包含语法错误或无法完成请求</li><li>5** 服务器错误，服务器在处理请求的过程中发生了错误<ul>
<li>200 - 请求成功</li><li>301 - 资源或网页等被永久转移到其他的URL</li><li>404 - 请求的资源或网页不存在</li><li>401 - 权限不足</li><li>403 - 服务器拒绝</li><li>500 - 服务器内部错误</li></ul>
</li></ul>
<h3 id="h3-15-"><a name="15.对象深拷贝你是怎么做的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>15.对象深拷贝你是怎么做的？</h3><ul>
<li>使用JSON.parse(JSON.stringify(obj))</li><li>递归遍历 ，判断是否是Object</li></ul>
<h3 id="h3-16-bfc-"><a name="16.BFC是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>16.BFC是什么？</h3><ul>
<li>BFC是块级格式上下文</li></ul>
<h3 id="h3-17-bfc-"><a name="17.什么情况下会创建BFC？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>17.什么情况下会创建BFC？</h3><ul>
<li>根元素HTML ，最大的BFC</li><li>float值不为none</li><li>position值为absolute 或 fixed</li><li>display值为inline-block 行内快</li><li>display值为flex 弹性盒子</li></ul>
<h3 id="h3-18-"><a name="18.什么是声明式导航？什么是编程式导航？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>18.什么是声明式导航？什么是编程式导航？</h3><p>-共同点:都能进行导航，都可以触发路由，实现组件切换</p>
<ul>
<li>区别：写法不同<br>-声明式导航：<ul>
<li>声明式导航一般是写在组件的template中，使用router-link 来触发路由跳转，会解析成a标签，可以通过tag属性修改</li></ul>
</li><li>编程式导航：<ul>
<li>一般写在JS代码中，使用this.$router.push()来触发路径跳转</li></ul>
</li></ul>
<h3 id="h3-19-router-route-"><a name="19.router和&ZeroWidthSpace;route的区别是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>19.router和&ZeroWidthSpace;route的区别是什么？</h3><ul>
<li>$router对象</li><li><p>router是VueRouter的实例方法，相当于一个全局的路由器对象，作用是进行路由跳转的！就像jQuery里的 window.location一样，起到的是导航的作用。里面含有很多属性和子对象，例如history对象，导航到不同- url，可以使用this.，router.back()就会回退之前的url。</p>
<p>-route 获取当前匹配路由参数，包括path，params，hash，query，fullPath，matched，name等路由信息参数。</p>
</li></ul>
<h3 id="h3-20-addeventlistener-"><a name="20.addEventListener的作用是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>20.addEventListener的作用是什么？</h3><ul>
<li>addEventListener的作用是事件监听，它可以在一个元素上注册多个事件</li><li>addEventLIstener(‘click’,callback,true)<ul>
<li>参数1:事件类型   参数2:触发事件执行的回调函数   参数3:是否允许事件捕捉</li></ul>
</li></ul>
<h3 id="h3-21-mvc-mvp-mvvm-"><a name="21.MVC ，MVP ， MVVM 是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>21.MVC ，MVP ， MVVM 是什么？</h3><ul>
<li>MVC<ul>
<li>传统的MVC是指，用户操作会请求服务端路由，路由会调用对应的控制器来处理，控制器会获取数据，再将结果返回给前端，前端手动进行页面重新进行渲染，通信是单向的</li><li>M（Model模型【后端数据库】），V（view视图），C（controller控制器）</li><li>主要是基于分层目的，让彼此的职责分开</li><li>View通过controller来联系Model，controller是View和Model的协调者，View和Model不直接联系，所以基本上通信都是单向的</li></ul>
</li><li>MVP<ul>
<li>M（Model模型），V（view视图），P（Presenter主持？）</li><li>MVP是从MVC模式演变过来的，都是通过controller / presenter负责逻辑的处理 + Model提供数据 + View负责显示</li><li>在MVP中，Presenter完全把Model与View进行了分离，主要的程序逻辑在presenter中实现，并且presenter与view是没有直接关联的，是通过定义好的接口进行交互，从而使得view变更的时候可以保持presenter不变</li><li>MVP模式的框架<ul>
<li>Riot.js</li></ul>
</li></ul>
</li><li>MVVM<ul>
<li>传统的前端会将数据手动渲染到页面上，MVVM模式下不需要用户手动操作DOM元素，而是将数据绑定到ViewModel层上，会自动将数据渲染到页面中，视图变化会通知ViewModel层更新数据，ViewModel就是MVVM模式的桥梁</li><li>M（Model模型），V（view视图），VM（ViewModel）</li><li>MVVM是双向的</li><li>MVVM是把MVC里的Controller和MVP里的Presenter改成了ViewModel。Model+View+ViewModel</li><li>View的变化会自动更新到ViewModel,ViewModel的变化也会自动同步到View上显示</li><li>这种自动同步是因为ViewModel中的属性实现了Observer，当属性变更时都能触发对应的操作。</li><li>MVVM模式的框架<ul>
<li>AngularJS</li><li>Vue</li><li>React</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-22-vue-"><a name="22.Vue的优缺点有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>22.Vue的优缺点有哪些？</h3><ul>
<li>优点<ul>
<li>轻量 双向数据绑定 指令 插件化 渐进式灵活 组件系统 自底向上灵活应用 只关心数据 第三方整合 Vue全家桶</li></ul>
</li><li>缺点<ul>
<li>vue应用是单页面应用，不利于seo优化，需要在服务端做seo</li><li>前进后退功能需要使用程序进行处理</li><li>初次加载耗时比较多，因为第一次加载就需要把所有的html css js加载完成</li></ul>
</li></ul>
<h3 id="h3-23-spa-mpa-"><a name="23.单页面应用（SPA）与多页面应用（MPA）的区别有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>23.单页面应用（SPA）与多页面应用（MPA）的区别有哪些？</h3><ul>
<li>单页面应用：<ul>
<li>只有一个html页面 ，比如vue ，只有一个index.html</li></ul>
</li><li>多应用页面：<ul>
<li>由多个html组成</li></ul>
</li><li>区别<ul>
<li>多页面应用：    <ul>
<li>每次页面跳转，服务器都会返回一个新的html文档</li><li>首次加载快</li><li>利于seo优化</li><li>页面切换慢，因为每次跳转都需要发送一个http请求</li></ul>
</li><li>单页面应用<ul>
<li>页面切换快</li><li>首次加载慢</li><li>不利于seo</li><li>前进后退管理需要插件处理</li><li>可以减轻服务器压力</li><li>前后端工作分离</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-24-"><a name="24.你是怎么做小程序优化的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>24.你是怎么做小程序优化的？</h3><ul>
<li>避免频繁的操作setData，如果不需要更新视图，直接使用this</li><li>分页懒加载，避免使用setData传输大数据</li><li>除开tabBar之外，其他的图片都从服务器加载</li><li>清理没有用到的代码和资源，减少包的大小</li></ul>
<h3 id="h3-25-"><a name="25.编译型语言和解释型语言有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>25.编译型语言和解释型语言有什么区别？</h3><ul>
<li>编译型语言在编译的时候编译器会把源文件处理一遍，生成一个目标文件再执行<ul>
<li>c ， c++</li></ul>
</li><li>解释型语言则是边处理源文件，边执行。所以解释型语言执行的效率会低一些<ul>
<li>js，python，php</li></ul>
</li></ul>
<h3 id="h3-26-"><a name="26.动态语言与静态语言有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>26.动态语言与静态语言有什么区别？</h3><ul>
<li>动态语言在运行的时候允许改变结构，例如新的变量，对象，函数都可以增加，旧的也可以删除<ul>
<li>c# ， js， php ， ptyhon </li></ul>
</li><li>静态语言则是相对的，运行的时候结构不允许改变<ul>
<li>java ，c ，c++</li></ul>
</li></ul>
<h3 id="h3-27-"><a name="27.动态类型语言与静态类型语言有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>27.动态类型语言与静态类型语言有什么区别？</h3><ul>
<li>动态类型语言，是指在运行时才会做数据类型的检查语言<ul>
<li>python， js ， php</li></ul>
</li><li>静态类型语言，是指在编译时就确定数据类型，在代码编写时要求明确声明变量的类型<ul>
<li>c ， c++ ， java</li></ul>
</li></ul>
<h3 id="h3-28-"><a name="28.强类型语言与弱类型语言有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>28.强类型语言与弱类型语言有什么区别？</h3><ul>
<li>强类型语言是指，一旦某个变量被指定为某个数据类型，如果不经过强制转换，那么它永远都是这个固定的数据类型，不能把number改为string<ul>
<li>java ， c# ， python</li></ul>
</li><li>弱类型语言是指，数据类型可以被忽略，同一个变量可以赋不同的数据类型的值<ul>
<li>js ， php</li></ul>
</li></ul>
<h3 id="h3-29-es6-"><a name="29.Es6的新特性有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>29.Es6的新特性有哪些？</h3><ul>
<li>箭头函数</li><li>模版字符串</li><li>解构赋值</li><li>展开运算符</li><li>let const 变量声明</li><li>Promise</li><li>class 类</li><li>for of </li></ul>
<h3 id="h3-30-vue-pc-"><a name="30.Vue中如何判断是pc端还是移动端？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>30.Vue中如何判断是pc端还是移动端？</h3><ul>
<li><p>可以使用 <code>navigator.userAgent.match</code>这个api配合正则来判断，这个方法会返回一个只读字符串</p>
</li><li><p>在methods中封装一个方法，并且把结果返回，最后在mouted中判断这个结果，根据结果来执行路由跳转</p>
</li><li><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="pln">methods</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code class="lang-js"><span class="pln">  </span><span class="com">// 添加判断方法</span></code></li><li class="L2"><code class="lang-js"><span class="pln">  isMobile</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code class="lang-js"><span class="pln">    let flag </span><span class="pun">=</span><span class="pln"> navigator</span><span class="pun">.</span><span class="pln">userAgent</span><span class="pun">.</span><span class="pln">match</span><span class="pun">(</span><span class="str">/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/</span><span class="pln">i</span><span class="pun">);</span></code></li><li class="L4"><code class="lang-js"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> flag</span><span class="pun">;</span><span class="pln">     </span></code></li><li class="L5"><code class="lang-js"><span class="pln">   </span><span class="pun">}</span></code></li><li class="L6"><code class="lang-js"><span class="pun">},</span></code></li><li class="L7"><code class="lang-js"><span class="pln">mounted</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code class="lang-js"><span class="pln">  </span><span class="kwd">if</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">isMobile</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code class="lang-js"><span class="pln">    alert</span><span class="pun">(</span><span class="str">"移动端"</span><span class="pun">);</span></code></li><li class="L0"><code class="lang-js"><span class="pln">    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$router</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="str">'/pc_index'</span><span class="pun">);</span></code></li><li class="L1"><code class="lang-js"><span class="pln">  </span><span class="pun">}</span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code class="lang-js"><span class="pln">    alert</span><span class="pun">(</span><span class="str">"pc端"</span><span class="pun">);</span></code></li><li class="L3"><code class="lang-js"><span class="pln">    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$router</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="str">'/m_index'</span><span class="pun">);</span></code></li><li class="L4"><code class="lang-js"><span class="pln">  </span><span class="pun">}</span></code></li><li class="L5"><code class="lang-js"><span class="pun">}</span></code></li></ol></pre>
</li></ul>
<h3 id="h3-31-"><a name="31.什么是模块化？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>31.什么是模块化？</h3><ul>
<li>将一些独立的功能封装成单独的块（文件），并组合在一起</li><li>块的内部数据是私有的，只是向外部暴露一些接口来进行通讯</li></ul>
<h3 id="h3-31-"><a name="31.模块化开发的好处有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>31.模块化开发的好处有哪些？</h3><ul>
<li>避免命名冲突</li><li>更好的分离，按需载入</li><li>更好的可维护性</li><li>更高的复用性</li></ul>
<h3 id="h3-32-"><a name="32.模块化的语法有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>32.模块化的语法有哪些？</h3><ul>
<li>暴露模块<ul>
<li>Module.exports = { …}</li><li>export …</li><li>export default</li><li>import xxx from ‘./xxx’</li></ul>
</li><li>引入模块<ul>
<li>require(xxx)</li></ul>
</li></ul>
<h3 id="h3-33-"><a name="33.模块化规范你了解吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>33.模块化规范你了解吗？</h3><ul>
<li>CommonJS <ul>
<li>主要用于服务端，加载模块是同步的，不适合在浏览器上使用，CommonJS输出的是值的拷贝<ul>
<li>暴露模块：module.exports  , exports</li><li>引入模块：require</li></ul>
</li></ul>
</li><li>AMD<ul>
<li>在浏览器中一步加载模块，而且可以并行加载多个模块，但是开发成本高</li></ul>
</li><li>ES6<ul>
<li>浏览器与服务端通用的模块解决方案 ，ES6输出的是值的引用<ul>
<li>导出：export</li><li>引入：import</li></ul>
</li></ul>
</li><li>CMD<ul>
<li>与AMD规范相似，都用于浏览器编程，依赖SPM包，模块加载逻辑偏重</li></ul>
</li></ul>
<h3 id="h3-34-v-if-v-for-"><a name="34.v-if与v-for谁的优先级更高？如何正确使用避免性能浪费？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>34.v-if与v-for谁的优先级更高？如何正确使用避免性能浪费？</h3><ul>
<li>v-for的优先级更高，在指令解析源码中v-for优先于v-if编译</li><li>可以将v-if条件判断写在template上，先判断条件，再执行循环，这样就解决了性能浪费的问题</li><li>如果必须在同一个位置使用v-if v-for ，那么可以使用计算属性过滤掉不需要不符合条件的项，往往for循环中的数据都是可以渲染的</li></ul>
<h3 id="h3-35-vue-data-app-vue-"><a name="35.vue组件中的data为什么是一个函数？而App.vue却是一个对象？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>35.vue组件中的data为什么是一个函数？而App.vue却是一个对象？</h3><ul>
<li>vue组件中的data是函数是因为，vue中的组件是多个的，如果多个组件使用同一个对象，就会造成数据共用，只要其中一个组件修改了数据，必然会影响另一个组件，这是不合理的。把data写成函数式，在data选项加载时（initData）就会通过一个工厂函数getData(vm,vm)，处理函数中的数据，这样每个实例的data数据都是独立的，避免了互相污染。</li><li>App.vue是唯一的，所以不需要担心数据共用，并且在vue处理合并选项时，根实例会多一个vm实例参数，不会走data类型检测。如果是一个普通的组件，就必须走data类型检测了。</li></ul>
<h3 id="h3-36-vue-key-"><a name="36.vue中的key有什么作用？说一下你的理解" class="reference-link"></a><span class="header-link octicon octicon-link"></span>36.vue中的key有什么作用？说一下你的理解</h3><ul>
<li>key的主要作用是为了让vue更高效的进行虚拟DOM的更新。原理是vue在patch过程中可以通过key精准的对比两个节点是否是同一个节点，从而避免频繁更新不同的元素，使整个patch过程更高效，减少dom的操作，提高性能。</li><li>另外，如果不设置key，会导致一些隐蔽的bug，比如该更新的不更新，不更新的却更新了。</li></ul>
<h3 id="h3-37-vue-diff-"><a name="37.你是怎么理解vue的diff算法的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>37.你是怎么理解vue的diff算法的？</h3><ul>
<li>diff算法是虚拟DOM技术的必然产物，通过对比两颗新旧虚拟DOM树（diff），将变化的地方更新在真实dom上，就必须使用diff，降低时间的复杂度。不使用diff，时间复杂度为O(n)的3次方，使用diff，时间复杂度为O(n)</li><li>在vue2.x中，降低了watcher的粒度，一个组件只有一个对应的watcher，那么在变化更新的时候怎么找到哪里变化了呢？这里就必须使用diff算法了</li><li>diff算法的过程整体遵循：深度优先，同层比较（因为我们开发的时候不会将dom跨层级操作）</li><li>vue中的diff算法添加了4个邮标，会进行首尾比较，所以在使用vue的时候绑定唯一的key，可以增加vue的工作效率</li></ul>
<h3 id="h3-38-vue-"><a name="38.谈一谈你对vue组件化的理解" class="reference-link"></a><span class="header-link octicon octicon-link"></span>38.谈一谈你对vue组件化的理解</h3><ul>
<li>组件是独立可复用的代码块。组件系统是vue的核心特性之一</li><li>组件化开发可以大幅度的提高开发效率，测试性，复用性等等，开发团队也比较易于协调</li><li>组件分类有<ul>
<li>页面组件<ul>
<li>用路由导航的页面，复用性不高</li></ul>
</li><li>业务组件<ul>
<li>登陆注册，购物车等等，具有很强的业务性，同时又具有复用性</li></ul>
</li><li>通用组件<ul>
<li>按钮，表单，输入框等等</li></ul>
</li></ul>
</li><li>高内聚<ul>
<li>分治思想的落地，一个组件只负责自己该干的事，单一独立，更易于复用</li></ul>
</li><li>低耦合<ul>
<li>不与其他组件有过多的关联</li></ul>
</li></ul>
<h3 id="h3-39-"><a name="39.你常用的组件化技术有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>39.你常用的组件化技术有哪些？</h3><ul>
<li>属性props</li><li>自定义事件$emit</li><li>插槽slot</li><li>混入mixing</li><li>渲染Render</li></ul>
<h3 id="h3-40-vue-"><a name="40.vue中是如何定义组件的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>40.vue中是如何定义组件的？</h3><ul>
<li>全局注册<ul>
<li>vue.component()</li><li>Vue.extends()   组件构造器    ？？？</li></ul>
</li><li>局部注册. 父组件中使用<ul>
<li>Components</li></ul>
</li></ul>
<h3 id="h3-41-vue-"><a name="41.请谈一下你对vue设计原则的理解" class="reference-link"></a><span class="header-link octicon octicon-link"></span>41.请谈一下你对vue设计原则的理解</h3><ul>
<li>vue是渐进式框架，自底向上逐层应用。<ul>
<li>vue的核心库是 ，声明式渲染，组件系统，只关注视图层，容易上手</li></ul>
</li><li>易用性<ul>
<li>vue提供数据响应化，声明式模版语法和基于配置的组件系统核心特性，这些使开发者只关心核心业务</li></ul>
</li><li>灵活性<ul>
<li>随着应用的规模扩大，我们才可能引入vue-router  ， vuex ， vue-cli等等工具，不管是应用还是学习难度，都是逐渐增加的</li></ul>
</li><li>高效性<ul>
<li>虚拟dom和diff算法应用拥有最佳的性能表现</li><li>vue3中引入了proxy对数据响应式进行了改进，以及编译器对静态内容的编译改进都会让vue更加高效</li></ul>
</li></ul>
<h3 id="h3-42-vue3-0-"><a name="42.你对vue3.0新特性有了解吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>42.你对vue3.0新特性有了解吗？</h3><ul>
<li>虚拟dom重写</li><li>基于Proxy的响应式系统</li><li>使用ts重写</li></ul>
<h3 id="h3-43-git-"><a name="43.你在工作中常用的git命令有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>43.你在工作中常用的git命令有哪些？</h3><ul>
<li>git add.</li><li>git commit -m </li><li>git push</li><li>git checkout -b </li><li>git merge</li><li>git pull</li></ul>
<h3 id="h3-44-css-"><a name="44.CSS选择器有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>44.CSS选择器有哪些？</h3><ul>
<li>id选择器 ，class类选择器，标签选择器，属性选择器，后代选择器，子代选择器，并集选择器</li><li>伪类选择器，伪元素选择器</li></ul>
<h3 id="h3-45-css-"><a name="45.CSS的样式权重优先级是怎么计算的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>45.CSS的样式权重优先级是怎么计算的？</h3><ul>
<li>!iimportant &gt; 行内样式 &gt; id &gt; class = 伪类 = 属性 &gt; 标签 &gt; * &gt; 继承</li></ul>
<h3 id="h3-46-js-"><a name="46.JS的执行机制是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>46.JS的执行机制是什么？</h3><ul>
<li>JS是单线程语言，一次只能执行一个任务，所有的任务都需要排队，排队的队列叫做：事件循环Event Loop，所以Event Loop就是js的执行机制</li><li>js单线程<ul>
<li>js作为浏览器脚本语言，主要用来与用户进行交互，需要进行dom操作，为了避免了同时操作DOM的矛盾，所以js是单线程的</li></ul>
</li></ul>
<h3 id="h3-47-js-"><a name="47.JS为什么需要异步？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>47.JS为什么需要异步？</h3><ul>
<li>因为js是单线程语言，所有任务都需要排队，一次只能执行一个任务，如果上一个任务执行事件很长，后面的任务就必须一直处于等待状态，。</li><li>如果js不存在异步，只能从上往下执行，如果任务执行时间长，就会造成线程阻塞，对于用户而言，就以为这卡死，会导致用户体验很差。所以需要js异步</li></ul>
<h3 id="h3-48-js-"><a name="48.JS任务队列是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>48.JS任务队列是什么？</h3><ul>
<li>任务队列就是一个事件队列，其中最重要的是异步任务事件和定时任务事件<ul>
<li>异步任务事件（在某一个时刻才会被触发）<ul>
<li>点击事件的回调函数</li></ul>
</li><li>定时任务事件<ul>
<li>setInterval setTimeout</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-49-js-"><a name="49.JS的同步任务和异步任务你是怎么理解的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>49.JS的同步任务和异步任务你是怎么理解的？</h3><ul>
<li>同步任务<ul>
<li>在主线程执行栈上排队执行的任务，只有前一个执行完毕，才能执行后一个</li></ul>
</li><li>异步任务<ul>
<li>不进入主线程执行栈，而是进入“任务队列”中的任务，只有在同步任务执行完之后，才会执行异步任务</li></ul>
</li></ul>
<h3 id="h3-50-"><a name="50.你是怎么理解宏任务和微任务的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>50.你是怎么理解宏任务和微任务的？</h3><ul>
<li>宏任务与微任务都是异步任务，都是在同一个任务队列中，主要区别在于它们的执行顺序</li><li>在异步任务队列下 ，又分为宏任务队列与微任务队列</li><li>当一个宏任务执行结束之前，会在微任务队列执行栈中查找是否有微任务，如果有则执行，没有则开启一个新的宏任务，所以微任务总是在宏任务结束之前执行的</li><li>宏任务<ul>
<li>整体script，setTimeout，setInterval，setImmediate</li><li>微任务promise  MutationObserver</li></ul>
</li></ul>
<h3 id="h3-51-vue-"><a name="51.你是怎么理解vue的单向数据流的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>51.你是怎么理解vue的单向数据流的？</h3><ul>
<li>单向数据流是指，在父子组件使用prop传值时，父组件的状态变更，数据会流向子组件，但是反过来则不行，不可以直接在子组件直接变更传递的props，这样会导致数据流不清晰，如果子组件可以修改props，那么就可能会出现无法分辨是哪一个子组件修改的这个状态了</li><li>如果子组件需要修改，可以在自己的data中定义保存props</li></ul>
<h3 id="h3-52-computed-watch-"><a name="52.computed与watch有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>52.computed与watch有什么区别？</h3><ul>
<li>computed是计算属性，依赖于某个值而产生新的值，例如数值运算时就可以使用computed，并且computed有缓存机制，如果依赖的值不发生改变，就不需要重新计算</li><li>watch是监听器，起的是观察的作用，类似于数据监听的回调函数，一旦这个数据发生改变都会触发监听的回调，在数据发生变化时需要执行异步或开销比较大的操作时，就可以使用watch</li><li>computed与watch的实现原理都是新增一个watcher ，并且computed是惰性求值的，默认没有set</li></ul>
<h3 id="h3-53-vue-"><a name="53.vue的父组件和子组件的生命周期钩子执行顺序？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>53.vue的父组件和子组件的生命周期钩子执行顺序？</h3><ul>
<li>父加载-&gt;子加载-&gt;子渲染-&gt;父渲染-&gt;<ul>
<li>父beforeCreate -&gt; 父created -&gt; 父beforeMount -&gt; 子beforCreate -&gt; 子created -&gt; 子beforMount -&gt; 子mouted -&gt; 父mouted</li></ul>
</li><li>父更新之前 -&gt; 子更新之前 -&gt; 子更新 -&gt; 父更新<ul>
<li>父beforUpdate -&gt; 子beforUpdate -&gt; 子updated -&gt; 父updated</li></ul>
</li><li>父销毁之前 -&gt; 子销毁之前 -&gt; 子销毁 -&gt; 父销毁<ul>
<li>父beforDestroy -&gt; 子beforDestroy -&gt; 子destroyed -&gt; 父destroyed</li></ul>
</li></ul>
<h3 id="h3-54-"><a name="54.你一般在哪个声明周期里调用异步请求？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>54.你一般在哪个声明周期里调用异步请求？</h3><ul>
<li>可以在created ，beforMount ，mounted 这3个钩子中调用异步请求</li><li>created是最早可以访问data的钩子，mouted是最早可以访问dom的钩子</li><li>我一般在mouted里调用异步请求，如果团队有要求可以按照团队来执行</li></ul>
<h3 id="h3-55-keep-alive-"><a name="55.谈一谈你对keep-alive的理解" class="reference-link"></a><span class="header-link octicon octicon-link"></span>55.谈一谈你对keep-alive的理解</h3><ul>
<li>keep-alive是vue内置的一个组件，用来缓存组件，避免在组件重新激活后再次渲染</li><li>一般是结合动态组件来使用，有两个对应的生命钩子，activated（当组件激活时调用），deactivated（当组件失活时调用）</li><li>提供 include 与 exclude 属性，exclude的优先级比include高<ul>
<li>include ： 匹配名称的组件才会被缓存</li><li>exclude： 匹配名称的组件都不会被缓存</li></ul>
</li></ul>
<h3 id="h3-55-v-model-"><a name="55.v-model的原理是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>55.v-model的原理是什么？</h3><ul>
<li>v-model的原理是 ： input事件与value属性的绑定<ul>
<li>当input事件触发，就会修改data中的值，data中的值发生改变就会渲染视图上</li></ul>
</li><li>如果不是input元素，可以使用model:{}来修改 <ul>
<li>Prop:修改绑定的值，例如input修改为checked</li><li>event：修改事件名，例如value修改为change</li></ul>
</li></ul>
<h3 id="h3-56-vue-"><a name="56.vue组件通信方式有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>56.vue组件通信方式有哪些？</h3><ul>
<li>props  $emit 父子通信</li><li>ref $parent children 父子通信</li><li>bus事件总线 vuex状态管理 兄弟组件</li><li>provide inject  祖孙跨代通信</li></ul>
<h3 id="h3-57-vuex-"><a name="57.vuex你了解吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>57.vuex你了解吗？</h3><ul>
<li>vuex是专门为vue开发的状态管理工具，类似于一个仓库，仓库中存储着应用中的状态</li><li>vuex的状态存储是响应式的</li><li>改变状态的唯一方法就是提交commit（mutation），符合vue的单向数据流思想</li><li>vuex的模块<ul>
<li>state ：保存状态</li><li>mutation：修改状态的方法，必须是同步</li><li>action：用于提交mutatiom ，不是直接改变状态，而是异步操作，或者一些比较复杂的逻辑都可以使用action提交dispatch   ，dispatch就是commit</li><li>module：保存特定的模块，例如用户模块，允许将单一的store拆分为多个并且各自保存</li></ul>
</li></ul>
<h3 id="h3-58-vue-ssr-"><a name="58.你使用过vue的ssr吗？你是怎么理解的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>58.你使用过vue的ssr吗？你是怎么理解的？</h3><ul>
<li>ssr即服务端渲染，简单的来说就是将vue在客户端渲染html的工作放在了服务端处理，在服务端处理结束后将结果返回，这个过程就叫做ssr</li><li>ssr的优点<ul>
<li>利于seo</li><li>首次加载快</li></ul>
</li><li>ssr的缺点<ul>
<li>开发成本高</li><li>服务器负载大</li></ul>
</li></ul>
<h3 id="h3-59-vue-router-vue-router-"><a name="59.vue-router有几种模式？vue-router的实现原理是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>59.vue-router有几种模式？vue-router的实现原理是什么？</h3><ul>
<li>3种， hash（哈希模式），history（历史模式），abstract（抽象模式）</li><li>hash<ul>
<li>使用url中的哈希值来做路由跳转路径，#号之后的都是哈希值</li></ul>
</li><li>history<ul>
<li>没有#号，需要后端配合，否则可能会出现静态资源无法加载的情况</li></ul>
</li><li>实现原理<ul>
<li>hashchange监听url的变化，映射指定的组件并渲染</li><li>history是通过H5提供的History API 来实现路由变化的</li></ul>
</li></ul>
<h3 id="h3-60-vue-"><a name="60.vue是如何实现双向绑定的？（双向绑定原理）" class="reference-link"></a><span class="header-link octicon octicon-link"></span>60.vue是如何实现双向绑定的？（双向绑定原理）</h3><ul>
<li>核心是使用了Object.definProperty()  vue3.0改为proxy</li><li>在初始化data(initData)时，会将data作为对象传递给监听器Observer，Observer会遍历data中的每一个key，包括深层嵌套的key（对象中的对象），在遍历的过程中会使用Object.definProperty为每一个key做数据拦截，设置get于set，当初次渲染时会触发get ， 在get中收集依赖，数据变更时会触发set，set中会调用dep通知依赖（watcher）进行更新（update）</li><li>采用的是发布订阅的设计模式</li></ul>
<h3 id="h3-61-vue-"><a name="61.vue是如何实现对数组的数据监听的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>61.vue是如何实现对数组的数据监听的？</h3><ul>
<li>数组无法使用Object.definProperty， vue的方法是将可改变数组的7个方法进行劫持，并且重写了数组的原型</li><li>在每次触发这7个方法时，都会执行重写的原型，进行通知依赖更新 </li><li>push shift unshift pop splice sort reverse </li></ul>
<h3 id="h3-62-proxy-object-definproperty-"><a name="62.proxy对比Object.definProperty的优势是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>62.proxy对比Object.definProperty的优势是什么？</h3><ul>
<li>Proxy可以直接监听整个对象，而Object.definProperty需要递归遍历对象中的每一个成员</li><li>Proxy可以直接监听数组，而Object.definProperty需要劫持数组的7个方法做数据响应和更新通知</li></ul>
<h3 id="h3-63-vue-set-"><a name="63.vue中的$set是如何实现添加数据并进行响应化的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>63.vue中的$set是如何实现添加数据并进行响应化的？</h3><ul>
<li>首先判断是数组还是对象<ul>
<li>如果是数组，使用splice变异方法触发数组的响应化处理</li><li>如果是对象，使用definReactive(本质上也是Object.definProperty)进行响应化处理</li></ul>
</li></ul>
<h3 id="h3-64-dom-"><a name="64.虚拟DOM的优缺点有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>64.虚拟DOM的优缺点有哪些？</h3><ul>
<li>优点<ul>
<li>提高渲染性能</li><li>无需操作DOM</li><li>跨平台</li></ul>
</li><li>缺点<ul>
<li>无法性能极致化</li></ul>
</li></ul>
<h3 id="h3-65-dom-"><a name="65.虚拟DOM是怎么实现的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>65.虚拟DOM是怎么实现的？</h3><ul>
<li>虚拟DOM就是普通的js对象，这个js对象用来描述DOM，对真实的DOM进行抽象化</li><li>vue中使用了diff算法进行新旧虚拟DOM树的比对，找出不同处，只针对不同处做处理</li><li>patch算法将两颗虚拟DOM树的差异应用的真正的DOM树中</li></ul>
<h3 id="h3-66-slot-slot-scope-"><a name="66.slot和slot-scope的原理是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>66.slot和slot-scope的原理是什么？</h3><ul>
<li>在父组件的渲染函数中，会将子组件的插槽内容解析成节点，然后传递给子组件的渲染函数<ul>
<li>slot会在父组件编译渲染阶段生成了Vnodes，所以slot数据的作用域是父组件，子组件渲染的时候直接拿这些渲染好的Vnodes</li><li>子组件的渲染函数会把Vnodes传递给子组件实例的$slot </li><li>slot占位符会被解析成一个函数 _t， _t执行从子组件的$slot上拿到Vnodes节点并把结果返回，最后替换slot占位符</li></ul>
</li><li>而对于slot-scope 作用域插槽，父组件在编译和渲染阶段并不会直接生成Vnodes，而是在父组件Vnode的data中保留一个scopedSlots对象，存储着不同名称的插槽以及插槽对应的渲染函数，只有在编译和渲染子组件的时候才会执行对应的渲染函数生成Vnodes，由于渲染函数是在子组件中执行的，所以作用域是子组件</li></ul>
<h3 id="h3-67-new-vue-vm-destory-"><a name="67.在new vue 到vm.$destory的过程中经历了什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>67.在new vue 到vm.$destory的过程中经历了什么？</h3><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="pun">当</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Vue</span><span class="pun">()后，首先会初始化事件和生命周期，接着会执行</span><span class="pln">beforeCreate</span><span class="pun">生命周期钩子，在这个钩子里面还拿不到</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$el</span><span class="pun">和</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$data</span><span class="pun">;接着往下走会初始化</span><span class="pln">inject</span><span class="pun">和将</span><span class="pln">data</span><span class="pun">的数据进行侦测也就是进行双向绑定；接着会执行</span><span class="pln">create</span><span class="pun">钩子函数，在这个钩子里面能够拿到</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$data</span><span class="pun">还拿不到</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$el</span><span class="pun">;到这里初始化阶段就走完了。然后会进入一个模版编译阶段，在这个阶段首先会判断有没有</span><span class="pln">el</span><span class="pun">选项如果有的话就继续往下走，如果没有的话会调用</span><span class="pln">vm</span><span class="pun">.</span><span class="pln">$mount</span><span class="pun">(</span><span class="pln">el</span><span class="pun">);接着继续判断有没有</span><span class="pln">template</span><span class="pun">选项，如果有的话，会将</span><span class="pln">template</span><span class="pun">提供的模版编译到</span><span class="pln">render</span><span class="pun">函数中；如果没有的话，会通过</span><span class="pln">el</span><span class="pun">选项选择模版；到这个编译阶段就结束了。（温馨提示：这个阶段只有完整版的</span><span class="typ">Vue</span><span class="pun">.</span><span class="pln">js</span><span class="pun">才会经历，也是就是通过</span><span class="pln">cmd</span><span class="pun">引入的方式；在单页面应用中，没有这个编译阶段，因为</span><span class="pln">vue</span><span class="pun">-</span><span class="pln">loader</span><span class="pun">已经提前帮编译好，因此，单页面使用的</span><span class="pln">vue</span><span class="pun">.</span><span class="pln">js</span><span class="pun">是运行时的版本）。模版编译完之后（这里说的是完整版，如果是运行时的版本会在初始化阶段结束后直接就到挂载阶段），然后进入挂载阶段，在挂在阶段首先或触发</span><span class="pln">beforeMount</span><span class="pun">钩子，在这个钩子里面只能拿到</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$data</span><span class="pun">还是拿不到</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$el</span><span class="pun">;接着会执行</span><span class="pln">mounted</span><span class="pun">钩子，在这个钩子里面就既能够拿到</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$el</span><span class="pun">也能拿到</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$data</span><span class="pun">；到这个挂载阶段就已经走完了，整个实例也已经挂载好了。当数据发生变更的时候，就会进入更新阶段，首先会触发</span><span class="pln">beforeUpdate</span><span class="pun">钩子，然后触发</span><span class="pln">updated</span><span class="pun">钩子，这个阶段会重新计算生成新的</span><span class="typ">Vnode</span><span class="pun">,然后通过</span><span class="pln">patch</span><span class="pun">函数里面的</span><span class="pln">diff</span><span class="pun">算法,将新生成的</span><span class="typ">Vnode</span><span class="pun">和缓存中的旧</span><span class="typ">Vnode</span><span class="pun">进行一个比对，最后将差异部分更新到视图中。当</span><span class="pln">vm</span><span class="pun">.</span><span class="pln">$destory</span><span class="pun">被调用的时候，就会进入卸载阶段，在这个阶段，首先触发</span><span class="pln">beforeDestory</span><span class="pun">钩子接着触发</span><span class="pln">destoryed</span><span class="pun">钩子，在这个阶段</span><span class="typ">Vue</span><span class="pun">会将自身从父组件中删除，取消实例上的所有追踪并且移除所有的事件监听。到这里</span><span class="typ">Vue</span><span class="pun">整个生命周期就结束了。</span></code></li><li class="L1"><code class="lang-js"></code></li><li class="L2"><code class="lang-js"><span class="pun">作者：时樾</span><span class="lit">1998</span></code></li><li class="L3"><code class="lang-js"><span class="pun">链接：</span><span class="pln">https</span><span class="pun">:</span><span class="com">//juejin.im/post/5e80a179f265da47e84e5c06</span></code></li></ol></pre>
<h3 id="h3-68-vue-"><a name="68.vue的模版编译过程是怎样的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>68.vue的模版编译过程是怎样的？</h3><ul>
<li>1·将template模版通过解析器解析成AST抽象语法树</li><li>2·通过优化将AST抽象语法树中的静态节点打上标志（不绑定任何变量或指令的节点），避免diff重复对比，提高性能</li><li>3·将AST编译成render渲染函数</li><li>4·render渲染函数执行会返回Vnode</li></ul>
<h3 id="h3-69-code-vm-on-vm-off-vm-once-vm-emit-code-"><a name="69.<code>vm.$on，vm.$off,vm.$once,vm.$emit</code>?实现原理是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>69.<code>vm.$on，vm.$off,vm.$once,vm.$emit</code>?实现原理是什么？</h3><ul>
<li>发布订阅</li></ul>
<h3 id="h3-70-nexttick-"><a name="70.$nextTick的实现原理是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>70.$nextTick的实现原理是什么？</h3><ul>
<li>nextTick主要是通过js事件循环（Event Loop）的执行机制原理，使用Promise微任务来实现的</li><li>vue会判断当前浏览器是否支持Promise，如果不支持则使用mutationobserver，如果还不支持则调用setImmediate，如果还不支持最后调用setTimeout</li></ul>
<h3 id="h3-71-v-for-index-key-"><a name="71.为什么在v-for循环时，不建议使用index作为key？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>71.为什么在v-for循环时，不建议使用index作为key？</h3><ul>
<li>因为key是唯一的，可以是后端返回的数据中的id，或者其他的唯一数据</li><li>如果使用index作为key，那么顺序是不会变化的，即便重排了元素，也是会按照顺序来算，这样就不利于diff算法进行虚拟DOM节点比对</li></ul>
<h3 id="h3-72-"><a name="72.你一般是怎么做路由参数解藕的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>72.你一般是怎么做路由参数解藕的？</h3><ul>
<li>通过props解藕<ul>
<li>将路由的props属性设置为true之后，组件内可以通过props接收到路由的params参数</li></ul>
</li></ul>
<h3 id="h3-73-watch-"><a name="73.watch如何进行深度监听？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>73.watch如何进行深度监听？</h3><ul>
<li>添加deep:true，即便数据没有改变也会进行监听</li></ul>
<h3 id="h3-74-"><a name="74.前端框架的好处是什么？你为什么要用前端框架？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>74.前端框架的好处是什么？你为什么要用前端框架？</h3><ul>
<li>组件化：易维护，易开发</li><li>分层明确：代码容易阅读</li><li>生态：vue全家桶</li><li>提高用户体验</li></ul>
<h3 id="h3-75-http-"><a name="75.http请求方法有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>75.http请求方法有哪些？</h3><ul>
<li>get ， post ， put ， delete ， head ， trace</li></ul>
<h3 id="h3-76-get-post-"><a name="76.get和post有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>76.get和post有什么区别？</h3><ul>
<li>参数传输方式不同<ul>
<li>get通过url传输参数</li><li>post通过请求体传输参数</li></ul>
</li><li>安全性不同<ul>
<li>post通过请求体传输参数，安全性比较高</li><li>get通过url传输参数，在历史记录，浏览器缓存很容易查到数据信息，所以安全性偏低</li></ul>
</li><li>可传输参数大小不同<ul>
<li>post可以传输任意格式的参数</li><li>get因为是在url中传输，有长度限制</li></ul>
</li></ul>
<h3 id="h3-77-js-"><a name="77.js是由什么组成的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>77.js是由什么组成的？</h3><ul>
<li>ECMAScript + DOM + BOM</li></ul>
<h3 id="h3-78-dom-3-"><a name="78.DOM事件流的3个阶段分别是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>78.DOM事件流的3个阶段分别是什么？</h3><ul>
<li>从上到下再从下到上<ul>
<li>捕获阶段-&gt;目标阶段-&gt;冒泡阶段</li></ul>
</li></ul>
<h3 id="h3-79-"><a name="79.面向对象的特征是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>79.面向对象的特征是什么？</h3><ul>
<li>1·封装性 </li><li>2·继承性</li><li>3·多态性</li></ul>
<h3 id="h3-80-apply-call-"><a name="80.apply与call的区别是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>80.apply与call的区别是什么？</h3><ul>
<li>apply与call的作用都是用来改变this指向的</li><li>区别在于传递参数的方式，apply传递参数为一个数组，数组中可以放多个元素，call传递参数是单个的</li><li>applay与call都会立即执行函数，bind不会，bind改变this指向之后需要再次调用函数才会执行</li></ul>
<h3 id="h3-81-js-"><a name="81.你知道哪些js继承方式？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>81.你知道哪些js继承方式？</h3><ul>
<li>构造函数继承 ，原型继承，寄生继承，组合继承</li><li>一般使用组合继承<ul>
<li>通用属性写在构造函数中，通用方法写在原型中</li></ul>
</li></ul>
<h3 id="h3-82-vue-"><a name="82.vue中如何关闭特性继承" class="reference-link"></a><span class="header-link octicon octicon-link"></span>82.vue中如何关闭特性继承</h3><ul>
<li>InteritAttrs:false</li></ul>
<h3 id="h3-83-native-listeners-"><a name="83.native和$listeners你有使用过吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>83.native和$listeners你有使用过吗？</h3><ul>
<li>native：为子组件注册一个原生事件。相当于给组件解析之后的根标签注册一个原生事件<ul>
<li>在使用eleui的时候有些组件没有input事件，又有需求，就可以在组件标签上native修饰符，会利用事件冒泡触发 <a href="https://github.com/input" title="@input" class="at-link"></a><a href="https://github.com/input" title="@input" class="at-link">@input</a>.native=’handleInput’</li></ul>
</li><li>$listeners ：配合native修饰符使用，解决多个元素都触发事件冒泡</li></ul>
<h3 id="h3-84-"><a name="84.请求报文与响应报文你了解吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>84.请求报文与响应报文你了解吗？</h3><ul>
<li>请求报文： 3部分组成<ul>
<li>请求行 ：包含请求方法，请求地址URL，协议版本</li><li>请求头：包含请求的附加信息，键值对的形式 ，Authorization</li><li>请求体：浏览器发送给服务器的数据（参数）</li></ul>
</li><li>响应报文：3部分组成<ul>
<li>响应行：包含协议版本，状态码，状态描述</li><li>响应头：content-type </li><li>响应体：服务器返回的数据 xhr.responseText</li></ul>
</li></ul>
<h3 id="h3-85-http-https-"><a name="85.HTTP与HTTPS有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>85.HTTP与HTTPS有什么区别？</h3><ul>
<li>HTTP是网络上应用最广泛的一种网络协议，是客户端与服务端通信的标准（TCP），HTTP是明文传输的</li><li>HTTPS是以安全为目标的HTTP通道，简单来讲HTTPS就是HTTP的安全版，即在HTTP下加入了SSL协议，用于对HTTP协议传输进行加密</li><li>主要区别是<ul>
<li>HTTPS需要申请证书，需要收费</li><li>HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的SSL加密传输协议</li><li>HTTP使用的端口是80 ，HTTPS使用的端口是443</li><li>HTTP是无状态链接的，HTTPS则需要进行身份认证</li></ul>
</li></ul>
<h3 id="h3-86-xss-csrf-"><a name="86.XSS攻击与CSRF攻击你了解吗？如何防范？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>86.XSS攻击与CSRF攻击你了解吗？如何防范？</h3><ul>
<li><p>xss攻击（跨站脚本攻击）：</p>
<ul>
<li>是一种代码注入攻击，攻击者通过在目标网站上注入恶意脚本，使之在用户浏览器上执行，利用这些恶意的脚本，可以获取用户的敏感信息，cooke，token，sessionID等，进而危害数据安全</li><li>XSS常见的注入方法<ul>
<li>在 HTML 中内嵌的文本中，恶意内容以 script 标签形成注入</li><li>在内联的 JavaScript 中，拼接的数据突破了原本的限制（字符串，变量，方法名等）</li><li>在标签属性中，恶意内容包含引号，从而突破属性值的限制，注入其他属性或者标签</li><li>在标签的 href、src 等属性中，包含 <code>javascript:</code> (伪协议)等可执行代码</li><li>在 onload、onerror、onclick 等事件中，注入不受控制代码</li></ul>
</li><li>防范XSS<ul>
<li>输入过滤：进行输入内容格式检查</li><li>转义HTML</li><li>富文本添加白名单</li></ul>
</li></ul>
</li><li><p>CSRF攻击（跨站点请求伪造）</p>
<ul>
<li><p>是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。如:攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的</p>
</li><li><p>防范CSRF</p>
<ul>
<li>验证码<ul>
<li>强制用户与应用进行交互，最后才能完成请求</li></ul>
</li><li>token<ul>
<li>token令牌验证，设置权限</li></ul>
</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-81-"><a name="81.手写一个冒泡排序算法" class="reference-link"></a><span class="header-link octicon octicon-link"></span>81.手写一个冒泡排序算法</h3><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="kwd">function</span><span class="pln"> sort </span><span class="pun">(</span><span class="pln">arr</span><span class="pun">){</span></code></li><li class="L1"><code class="lang-js"><span class="pln">  let len </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">length </span></code></li><li class="L2"><code class="lang-js"><span class="pln">  </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">len </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code class="lang-js"><span class="pln">    </span><span class="kwd">for</span><span class="pun">(</span><span class="pln">let i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> len </span><span class="pun">-</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code class="lang-js"><span class="pln">      </span><span class="kwd">for</span><span class="pun">(</span><span class="pln">let j </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> j </span><span class="pun">&lt;</span><span class="pln"> len </span><span class="pun">-</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> i</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">++</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code class="lang-js"><span class="pln">        </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">[</span><span class="pln">j</span><span class="pun">]</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln"> arr</span><span class="pun">[</span><span class="pln">j</span><span class="pun">+</span><span class="lit">1</span><span class="pun">])</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code class="lang-js"><span class="pln">          let temp </span><span class="pun">=</span><span class="pln"> arr </span><span class="pun">[</span><span class="pln">j </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">]</span></code></li><li class="L7"><code class="lang-js"><span class="pln">          arr</span><span class="pun">[</span><span class="pln">j </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">]=</span><span class="pln"> arr</span><span class="pun">[</span><span class="pln">j</span><span class="pun">]</span></code></li><li class="L8"><code class="lang-js"><span class="pln">          arr</span><span class="pun">[</span><span class="pln">j</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> temp</span></code></li><li class="L9"><code class="lang-js"><span class="pln">        </span><span class="pun">}</span></code></li><li class="L0"><code class="lang-js"><span class="pln">      </span><span class="pun">}</span></code></li><li class="L1"><code class="lang-js"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code class="lang-js"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code class="lang-js"><span class="pln">  </span><span class="kwd">return</span><span class="pln"> arr</span></code></li><li class="L4"><code class="lang-js"><span class="pun">}</span></code></li></ol></pre>
<h3 id="h3-82-vue-"><a name="82.你在使用vue进行开发时有什么收获？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>82.你在使用vue进行开发时有什么收获？</h3><ul>
<li>为所有的组件属性定义明确的顺序<ul>
<li>使代码结构更容易阅读</li></ul>
</li><li>使用混入mixins<ul>
<li>把重复的逻辑混入某个钩子函数中</li></ul>
</li><li>谨慎使用$set <ul>
<li>因为在大多数情况下，数据都应该在data中定义，并进行数据响应化处理</li></ul>
</li><li>使用插槽构建公共组件</li><li>使用keep-alive避免组件多次切换渲染浪费性能</li></ul>
<h3 id="h3-83-"><a name="83.你是如何实现用户权限控制的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>83.你是如何实现用户权限控制的？</h3><ul>
<li>使用路由元信息meta，配合路由导航守卫来实现用户的权限管理<ul>
<li>在meta中配置好路由的权限，并且在路由跳转之前判断用户身份是否符合访问权限</li></ul>
</li><li>使用addRoutes动态挂载路由 ，在全局路由守卫中调用</li></ul>
<h3 id="h3-84-vue-router-"><a name="84.vue-router的导航守卫有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>84.vue-router的导航守卫有哪些？</h3><ul>
<li>路由导航守卫分为3种<ul>
<li>全局路由导航守卫<ul>
<li>BeforeEach(to,from,next) 全局前置守卫 ，路由跳转之前触发</li><li>BeforeResolve(to,from,next) 全局解析守卫，<strong>在所有组件内守卫和异步路由组件被解析之后</strong>调用</li><li>AfterEach(to,from)</li></ul>
</li><li>路由独享守卫<ul>
<li>beforeEnter(to,from,next) </li></ul>
</li><li>组件级路由守卫<ul>
<li>beforeRutoerEnter() 在渲染该组件的对应路由被 confirm 前调用 ，不能使用this 获取组件实例</li><li>beforeRouterUpdate() 在当前路由改变，但是该组件被复用时调用 ， 可以使用this获取组件实例</li><li>BeforeRouterLeave() 导航离开该组件的对应路由时调用，可以使用this获取组件实例</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-85-vue-router-"><a name="85.你知道哪些vue-router属性？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>85.你知道哪些vue-router属性？</h3><ul>
<li>router.beforeEach , router.beforeResolve , router.afterEach</li><li>router.push , router.replace , router.go , router.back , router.addRoutes</li></ul>
<h3 id="h3-86-vue-"><a name="86.vue动画你了解吗？是怎么应用的" class="reference-link"></a><span class="header-link octicon octicon-link"></span>86.vue动画你了解吗？是怎么应用的</h3><ul>
<li><p>vue提供了内置的过渡动画封装组件，用于包裹要实现的过渡效果的组件，通过name属性来控制效果</p>
<ul>
<li><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="pun">&lt;</span><span class="pln">transition name </span><span class="pun">=</span><span class="pln"> </span><span class="str">"fade"</span><span class="pun">&gt;</span></code></li><li class="L1"><code class="lang-js"><span class="pln">    </span><span class="pun">&lt;</span><span class="pln">p v</span><span class="pun">-</span><span class="pln">show </span><span class="pun">=</span><span class="pln"> </span><span class="str">"show"</span><span class="pln"> v</span><span class="pun">-</span><span class="pln">bind</span><span class="pun">:</span><span class="pln">style </span><span class="pun">=</span><span class="pln"> </span><span class="str">"styleobj"</span><span class="pun">&gt;动画实例&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L2"><code class="lang-js"><span class="pun">&lt;/</span><span class="pln">transition</span><span class="pun">&gt;</span></code></li></ol></pre>
</li></ul>
</li><li><p>过渡类名参数</p>
<ul>
<li><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="pln">v</span><span class="pun">-</span><span class="pln">enter</span><span class="pun">：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。</span></code></li><li class="L1"><code class="lang-js"></code></li><li class="L2"><code class="lang-js"><span class="pln">v</span><span class="pun">-</span><span class="pln">enter</span><span class="pun">-</span><span class="pln">active</span><span class="pun">：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。</span></code></li><li class="L3"><code class="lang-js"></code></li><li class="L4"><code class="lang-js"><span class="pln">v</span><span class="pun">-</span><span class="pln">enter</span><span class="pun">-</span><span class="pln">to</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2.1</span><span class="pun">.</span><span class="lit">8</span><span class="pun">版及以上</span><span class="pln"> </span><span class="pun">定义进入过渡的结束状态。在元素被插入之后下一帧生效</span><span class="pln"> </span><span class="pun">(与此同时</span><span class="pln"> v</span><span class="pun">-</span><span class="pln">enter </span><span class="pun">被移除)，在过渡/动画完成之后移除。</span></code></li><li class="L5"><code class="lang-js"></code></li><li class="L6"><code class="lang-js"><span class="pln">v</span><span class="pun">-</span><span class="pln">leave</span><span class="pun">:</span><span class="pln"> </span><span class="pun">定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。</span></code></li><li class="L7"><code class="lang-js"></code></li><li class="L8"><code class="lang-js"><span class="pln">v</span><span class="pun">-</span><span class="pln">leave</span><span class="pun">-</span><span class="pln">active</span><span class="pun">：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。</span></code></li><li class="L9"><code class="lang-js"></code></li><li class="L0"><code class="lang-js"><span class="pln">v</span><span class="pun">-</span><span class="pln">leave</span><span class="pun">-</span><span class="pln">to</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2.1</span><span class="pun">.</span><span class="lit">8</span><span class="pun">版及以上</span><span class="pln"> </span><span class="pun">定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效</span><span class="pln"> </span><span class="pun">(与此同时</span><span class="pln"> v</span><span class="pun">-</span><span class="pln">leave </span><span class="pun">被删除)，在过渡/动画完成之后移除。</span></code></li><li class="L1"><code class="lang-js"></code></li><li class="L2"><code class="lang-js"><span class="pun">作者：</span><span class="typ">Zero</span><span class="pun">游戏人生丶</span></code></li><li class="L3"><code class="lang-js"><span class="pun">链接：</span><span class="pln">https</span><span class="pun">:</span><span class="com">//juejin.im/post/5b460af95188251af45eeafb</span></code></li></ol></pre>
</li></ul>
</li><li><p>多个元素要做过渡动画处理可以使用<code>transition-group</code>组件包裹，与上方的transition用法一致</p>
<ul>
<li>注意：被包裹的子节点必须有独立的key</li></ul>
</li></ul>
<h3 id="h3-87-mixin-"><a name="87.你对mixin了解多少？说一下你的理解" class="reference-link"></a><span class="header-link octicon octicon-link"></span>87.你对mixin了解多少？说一下你的理解</h3><ul>
<li>vue提供了一种非常灵活的功能复用方式，就是mixins混入。当页面不同，但是执行的方法和数据类似时，就可以使用mixins混入</li><li>而且当组件使用mixin时，这个mixin的所有信息也会混合到这个组件里，这个组件就能够访问到所有mixin的属性就像生命在自己对象中一样</li><li>合并<ul>
<li>当组件数据对象与混入数据对象有重名时，以组件数据对象优先</li><li>同名钩子函数，会存放到同一个数组，优先执行混入的钩子</li></ul>
</li></ul>
<h3 id="h3-88-"><a name="88.微信小程序有几个文件？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>88.微信小程序有几个文件？</h3><ul>
<li>4个 <ul>
<li>WXML ：结构   WXSS：样式   JS：逻辑处理 网络请求  json：小程序设置</li></ul>
</li></ul>
<h3 id="h3-89-"><a name="89.微信小程序怎么传值？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>89.微信小程序怎么传值？</h3><ul>
<li><p>data- xxx </p>
<ul>
<li>给HTML元素添加data-xxx 属性 ，绑定的是需要传递的值。然后通过e.currentTarget.dataset或者params参数来获取</li></ul>
</li><li><p>Navigator 标签的url传值</p>
</li></ul>
<h3 id="h3-90-"><a name="90.微信小程序的生命周期有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>90.微信小程序的生命周期有哪些？</h3><ul>
<li>onLoad：页面加载时触发，一个页面只会调用一次</li><li>onShow：页面显示时触发</li><li>onReady：页面初次渲染时触发，一个页面只会调用一次</li><li>onHide：页面隐藏时触发</li><li>onUnload：页面卸载时触发</li></ul>
<h3 id="h3-91-websocket-"><a name="91.什么是WebSocket？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>91.什么是WebSocket？</h3><ul>
<li>webSocket是H5的一个新协议，它允许服务端向客户端传递信息，实现浏览器和客户端的双向通信</li><li>HTTP协议只能通过客户端发起通信，但是WebSocket可以由服务端发起通信</li><li>WebSocket的特点<ul>
<li>服务端可以主动向客户端推送信息，客户端也可以主动向服务端发送信息，是真正的双向对话</li><li>与HTTP协议兼容良好</li><li>数据格式轻量，性能开销小，通信高效</li><li>可以发送文本，也可以发送二进制内容</li><li>没有同源限制</li></ul>
</li><li>跨平台性的通信库有socket.io</li></ul>
<h3 id="h3-92-websocket-"><a name="92.WebSocket如何实现断线重连？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>92.WebSocket如何实现断线重连？</h3><ul>
<li>核心是使用Websocket.readState这个属性 <ul>
<li>0：正在连接中</li><li>1：已经链接并且可以通信</li><li>2：链接正在关闭</li><li>3：链接已关闭或者没有链接成功</li></ul>
</li><li>除了第一次链接都必须考虑当前链接的状态，所以可以定义定时器每隔一段时间就向服务器发送一次数据，服务器接收到后返回一次信息，说明一切正常，否则就开启新的定时器尝试重新链接。</li></ul>
<h3 id="h3-93-tcp-3-4-"><a name="93.为什么TCP 3次握手和4次挥手你了解吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>93.为什么TCP 3次握手和4次挥手你了解吗？</h3><ul>
<li>建立TCP链接需要3次握手，是为了防止浪费无效的请求，占用资源和性能<ul>
<li>第一次：客户端发送给服务器，确认服务器是否存在能正常工作</li><li>第二次：服务器答应客户端，告诉客户端它存在并且可以正常工作</li><li>第三次：客户端发送请求</li></ul>
</li><li>断开TCP链接需要4次挥手，因为计算机的端口是有限的，每次请求之后都要关闭<ul>
<li>第一次：客户端发送给服务器，告诉服务器它要关闭链接通信了</li><li>第二次：服务器收到客户端的信息，反馈给客户端已经收到关闭链接通知，并且可以关闭</li><li>第三次：服务器关闭与客户端的通信链接，并发送消息给客户端说链接已经关闭</li><li>第四次：客户端收到关闭信息</li></ul>
</li></ul>
<h3 id="h3-94-url-"><a name="94.从输入URL到页面加载发生了什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>94.从输入URL到页面加载发生了什么？</h3><ul>
<li>一共发生了6件事<ul>
<li>1·用户在地址栏输入URL后，浏览器会在缓存中寻找是否有该url的ip缓存(先找浏览器缓存 ，再找系统缓存 ，再找host文件)，没有则会向服务端发送DNS请求查询IP地址</li><li>2· 获取IP地址后向服务器发起TCP链接，其中会经过3次握手环节</li><li>3· 建立通信后向服务器发起HTTP请求</li><li>4· 服务器收到请求后返回请求结果</li><li>5· 浏览器根据结果开始解析并渲染页面</li><li>6· 关闭链接</li></ul>
</li></ul>
<h3 id="h3-95-dns-"><a name="95.什么是DNS？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>95.什么是DNS？</h3><ul>
<li>DNS是互联网的一项服务，它将域名和IP地址互相映射，使用户更方便的访问互联网</li></ul>
<h3 id="h3-96-vue-"><a name="96.为什么Vue采用异步渲染？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>96.为什么Vue采用异步渲染？</h3><ul>
<li>因为Vue是组件级更新，如果不采用异步渲染，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能考虑，Vue会在本轮数据更新后，再去异步更新视图</li><li>当数据更新，会触发数据劫持set方法中的dep.notify()通知依赖进行更新操作，watcher（依赖）收到通知后会调用update更新函数</li><li>在dep.notify通知时并不是立即让watcher进行更新，而是将watcher放入queueWatcher（更新队列），并且queueWatcher会过滤相同的wathcer</li><li>最后再使用nextTick异步调用wathcer的更新函数</li></ul>
<h3 id="h3-97-"><a name="97.函数防抖与函数节流的原理是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>97.函数防抖与函数节流的原理是什么？</h3><ul>
<li>闭包<ul>
<li>在闭包外部函数中声明标志位，在闭包内部函数添加定时器或计时器，根据标志位的值来判断是否开启或清除新的计时器</li></ul>
</li></ul>
<h3 id="h3-98-vue-cli3-webpack-"><a name="98.vue cli3 如何配置webpack？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>98.vue cli3 如何配置webpack？</h3><ul>
<li>vue cli3在初始化时已经帮我们配置好了80%的webpack配置，如果开发过程中需要特别的配置，可以在根目录下新建 vue.config.js文件 ，在vue.config.js文件中编写需要的webpack配置</li></ul>
<h3 id="h3-99-vue-dom-"><a name="99.vue中如何获取DOM？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>99.vue中如何获取DOM？</h3><ul>
<li>在模板元素上定义ref属性，在methods中使用this.$refs.xxx来获取</li></ul>
<h3 id="h3-100-"><a name="100.你是如何做屏幕适配的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>100.你是如何做屏幕适配的？</h3><ul>
<li>1·通过<strong>Media Queries</strong> 媒体查询，通过查询设备的宽度来执行不同的css代码</li><li>2·使用弹性布局</li><li>3·根据屏幕宽度设置rem ，需要适配的元素都使用rem为单位</li></ul>
<h3 id="h3-101-vue-"><a name="101.在vue中如果更新了数据，但是视图没有更新，用什么办法处理？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>101.在vue中如果更新了数据，但是视图没有更新，用什么办法处理？</h3><ul>
<li>this.$set<ul>
<li>如果是未定义在data，新添加属性导致不能触发双向绑定更新视图，可以使用this.$set</li></ul>
</li><li>This.$forceUpdate()<ul>
<li>如果是使用了某些组件，影响了双向绑定的功能，可以使用this.$forceUpdate强制更新页面</li></ul>
</li></ul>
<h3 id="h3-102-"><a name="102.谈谈垃圾回收机制及内存管理？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>102.谈谈垃圾回收机制及内存管理？</h3><ul>
<li>垃圾回收机制<ul>
<li>js具有自动回收垃圾机制，也就是说，执行环境会负责管理代码执行过程中使用的内存，每创建一个变量都会在栈中开辟一个新的区域，存放这个变量，当这个变量不再被使用，垃圾回收机制就会收回这个栈中的内存区域（释放内存），但是这个过程不是实时的，而是周期性的<ul>
<li>标记清除<ul>
<li>当变量进入执行环境时，会将这个变量标记为“进入环境”，当变量离开执行环境时，则将这个变量标记为“离开环境”，当执行完毕之后就会自动回收被标记为“离开环境”的变量</li></ul>
</li><li>引用计数<ul>
<li>引用计数的含义是跟踪每个值被引用的次数，当这个值的引用次数变为0的时候，说明没有办法再访问这个值了，这样当垃圾回收运行的时候就会把这个值自动回收掉</li></ul>
</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-103-"><a name="103.谈一谈你对浏览器缓存机制的理解？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>103.谈一谈你对浏览器缓存机制的理解？</h3><ul>
<li>浏览器缓存一般都是针对静态资源，比如js，css，图片等等 </li><li>缓存是一种简单高效的性能优化方式，可以显著的减少网络传输造成的影响，浏览器缓存一般会在  发起网络请求和浏览响应的时候进行性能优化<ul>
<li>发起网络请求时：<ul>
<li>浏览器会先查询请求头中对应的缓存数据，如有存在，就会拦截本次网络请求并且返回缓存数据的副本，并且结束本次网络请求</li></ul>
</li><li>浏览器响应时：<ul>
<li>如果命中缓存，但是缓存已经过期了，那么浏览器会继续发送本次请求，但是会在请求头中加上if-none-match字段，让服务端判断请求的数据有没有变化，如果没有变化服务端就会返回304 not modified ，浏览器刷新缓存，然后将缓存的副本返回</li></ul>
</li></ul>
</li><li>缓存策略<ul>
<li>强制缓存<ul>
<li>强制缓存不需要重新发送请求（浏览器缓存中存在请求的数据）</li></ul>
</li><li>协商缓存<ul>
<li>发送请求验证请求资源是否需要更新（浏览器里有缓存，但是请求过期了，问一下服务器要不要更新数据）<ul>
<li>如果没有更新服务器返回304 ，浏览器刷新缓存并返回缓存副本</li><li>如果需要更新，服务端直接返回最新的数据给浏览器</li></ul>
</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-104-typeof-instanceof-"><a name="104.比较typeof与instanceof？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>104.比较typeof与instanceof？</h3><ul>
<li>相同点<ul>
<li>typeof与instanceof都是用来判断一个变量是否为空，或者判断是什么数据类型</li></ul>
</li><li>不同点<ul>
<li>typeof返回一个字符串，用来说明变量的数据类型</li><li>instanceof返回一个布尔值，用来判断一个变量是否属于某个对象的实例</li></ul>
</li><li>typeof一般用来检测基本数据类型，instanceof一般用来检测引用数据类型</li></ul>
<h3 id="h3-105-js-"><a name="105.你在使用JS的时候遇到了什么坑？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>105.你在使用JS的时候遇到了什么坑？</h3><ul>
<li>1· 获取DOM的时候提示无法获取<ul>
<li>原因是：我把JS文件放在了head标签中，而HTML是从上到下顺序执行，所以就拿不到DOM</li><li>解决办法是：在script标签中添加defer=‘true’属性，延迟加载，或者把JS放到body之后</li></ul>
</li><li>2· 在使用new Data设置日期格式的时候，发现无论怎么设置月份都会+1<ul>
<li>原因是：JS中的月份从0开始</li><li>解决办法：把月份-1</li></ul>
</li></ul>
<h3 id="h3-106-"><a name="106.块元素，内联元素，空元素有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>106.块元素，内联元素，空元素有哪些？</h3><ul>
<li>块元素：<ul>
<li>ul ， ol ， li ， dl ，dt ， dd ， h1～h6 ，p ， div ， </li></ul>
</li><li>行内元素：<ul>
<li>a ， b ， span ， img ， input ， select ，em ， strong </li></ul>
</li><li>空元素：<ul>
<li>br ， hr ， link ， meta</li></ul>
</li><li>区别：块元素独占一行，内联元素一行排列多个，并且内联元素无法设置margin</li></ul>
<h3 id="h3-107-cookies-sessionstorage-localstorage-"><a name="107.说一说cookies ，sessionStorage , localStorage的区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>107.说一说cookies ，sessionStorage , localStorage的区别？</h3><ul>
<li>cookies发送请求会自动携带cookies ，sessionStorage和localStorage则只会保存在本地</li><li>大小不同<ul>
<li>cookies数据大小不能超过4k，sessionStorage和localStorage也有大小限制，但是比cookies更大，可以达到5M或者更大</li></ul>
</li><li>时效不同<ul>
<li>cookies在设置的过期时间一直有效，sessionStoreage在浏览器窗口关闭后销毁，localStoreage则是持久保存，只要不手动删除都会一直存在</li></ul>
</li></ul>
<h3 id="h3-108-cookies-"><a name="108.如何让cookies浏览器关闭就失效？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>108.如何让cookies浏览器关闭就失效？</h3><ul>
<li>不对cookies设置任何过期时间 ，不是任何正 ，负或者0的时间即可 </li></ul>
<h3 id="h3-109-localstoreage-cookie-"><a name="109.如何让localStoreage与cookie一样设置失效时间" class="reference-link"></a><span class="header-link octicon octicon-link"></span>109.如何让localStoreage与cookie一样设置失效时间</h3><ul>
<li>在存储数据时，也存储一个时间戳，在get获取localStoreage中的value时，拿当前时间戳与首次存入的时间戳做比较即可</li></ul>
<h3 id="h3-110-html-"><a name="110.说一下你对HTML语义化的理解？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>110.说一下你对HTML语义化的理解？</h3><ul>
<li>语义化是指根据内容的类型，在指定的地方用指定的标签，头部用herader，尾部用footer，导航用nav</li><li>HTML语义化让页面的结构更清晰，有助于浏览器和搜索引擎解析对内容的抓取</li><li>语义化的HTML在没有CSS的情况下也能保持很清晰的内容结构与代码结构</li><li>更利于SEO</li></ul>
<h3 id="h3-111-0-5px-"><a name="111.移动端的边框0.5px，你怎么实现？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>111.移动端的边框0.5px，你怎么实现？</h3><ul>
<li>伪类缩放： 【 :after 1px 然后 transform:scale(0.5)】</li></ul>
<h3 id="h3-112-b-a-1-"><a name="112.请将下列b函数进行修改，保证每次调用a都能+1（考闭包）" class="reference-link"></a><span class="header-link octicon octicon-link"></span>112.请将下列b函数进行修改，保证每次调用a都能+1（考闭包）</h3><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="kwd">function</span><span class="pln"> b</span><span class="pun">(){</span></code></li><li class="L1"><code class="lang-js"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> a</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L2"><code class="lang-js"><span class="pun">};</span></code></li><li class="L3"><code class="lang-js"></code></li><li class="L4"><code class="lang-js"><span class="kwd">function</span><span class="pln"> b</span><span class="pun">(){</span></code></li><li class="L5"><code class="lang-js"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> a</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L6"><code class="lang-js"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">()=&gt;{</span></code></li><li class="L7"><code class="lang-js"><span class="pln">        a</span><span class="pun">++;</span></code></li><li class="L8"><code class="lang-js"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> a</span><span class="pun">;</span></code></li><li class="L9"><code class="lang-js"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code class="lang-js"><span class="pun">};</span></code></li><li class="L1"><code class="lang-js"><span class="pln">let c </span><span class="pun">=</span><span class="pln"> b</span><span class="pun">();</span></code></li><li class="L2"><code class="lang-js"><span class="pln">c</span><span class="pun">();</span><span class="pln"> </span><span class="com">//2</span></code></li><li class="L3"><code class="lang-js"><span class="pln">c</span><span class="pun">();</span><span class="pln"> </span><span class="com">//3</span></code></li><li class="L4"><code class="lang-js"><span class="pln">c</span><span class="pun">();</span><span class="pln"> </span><span class="com">//4</span></code></li><li class="L5"><code class="lang-js"></code></li><li class="L6"><code class="lang-js"><span class="pun">作者：苏南</span></code></li><li class="L7"><code class="lang-js"><span class="pun">链接：</span><span class="pln">https</span><span class="pun">:</span><span class="com">//juejin.im/post/5ba6e77e6fb9a05d0b14359b</span></code></li></ol></pre>
<h3 id="h3-113-js-for-of-for-in-"><a name="113.JS的for of 循环和for in 循环有什么区别？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>113.JS的for of 循环和for in 循环有什么区别？</h3><ul>
<li><p>推荐在循环对象属性的时候，使用for…in,在遍历数组的时候的时候使用for…of。</p>
</li><li><p>for…in循环出的是key，for…of循环出的是value</p>
</li><li><p>另外for…of是ES6新引入的特性。修复了ES5引入的for…in的不足</p>
</li><li><p>for…of不能循环普通的对象，需要通过和Object.keys()搭配使用</p>
</li></ul>
<h3 id="h3-114-table-td-td-1000-"><a name="114.给table表格中的每个td绑定事件，td数量为1000+，写一下你的思路(事件委托题)" class="reference-link"></a><span class="header-link octicon octicon-link"></span>114.给table表格中的每个td绑定事件，td数量为1000+，写一下你的思路(事件委托题)</h3><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="pun">&lt;</span><span class="pln">body </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"container"</span><span class="pun">&gt;</span></code></li><li class="L1"><code class="lang-js"><span class="pln">    </span><span class="pun">&lt;</span><span class="pln">table id</span><span class="pun">=</span><span class="str">"table"</span><span class="pun">&gt;</span></code></li><li class="L2"><code class="lang-js"><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">tr</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">1</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;td&gt;3&lt;/</span><span class="pln">td</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">3</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;td&gt;4&lt;/</span><span class="pln">td</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">5</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;/</span><span class="pln">tr</span><span class="pun">&gt;</span></code></li><li class="L3"><code class="lang-js"><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">tr</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">1</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;td&gt;3&lt;/</span><span class="pln">td</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">3</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;td&gt;4&lt;/</span><span class="pln">td</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">5</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;/</span><span class="pln">tr</span><span class="pun">&gt;</span></code></li><li class="L4"><code class="lang-js"><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">tr</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">1</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;td&gt;3&lt;/</span><span class="pln">td</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">3</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;td&gt;4&lt;/</span><span class="pln">td</span><span class="pun">&gt;&lt;</span><span class="pln">td</span><span class="pun">&gt;</span><span class="lit">5</span><span class="pun">&lt;</span><span class="str">/td&gt;&lt;/</span><span class="pln">tr</span><span class="pun">&gt;</span></code></li><li class="L5"><code class="lang-js"><span class="pln">        </span><span class="pun">…………</span></code></li><li class="L6"><code class="lang-js"><span class="pln">    </span><span class="pun">&lt;/</span><span class="pln">table</span><span class="pun">&gt;</span></code></li><li class="L7"><code class="lang-js"><span class="pun">&lt;</span><span class="pln">script</span><span class="pun">&gt;</span></code></li><li class="L8"><code class="lang-js"><span class="pln">    let table </span><span class="pun">=</span><span class="pln">document</span><span class="pun">.</span><span class="pln">querySelector</span><span class="pun">(</span><span class="str">"#table"</span><span class="pun">);</span></code></li><li class="L9"><code class="lang-js"><span class="pln">    table</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">"click"</span><span class="pun">,(</span><span class="pln">e</span><span class="pun">)=&gt;{</span></code></li><li class="L0"><code class="lang-js"><span class="pln">        let </span><span class="pun">{</span><span class="pln">nodeName</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> e</span><span class="pun">.</span><span class="pln">target</span><span class="pun">;</span></code></li><li class="L1"><code class="lang-js"><span class="pln">        </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">nodeName</span><span class="pun">.</span><span class="pln">toUpperCase</span><span class="pun">()</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="str">"TD"</span><span class="pun">){</span></code></li><li class="L2"><code class="lang-js"><span class="pln">            console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">e</span><span class="pun">.</span><span class="pln">target</span><span class="pun">);</span><span class="com">//&lt;td&gt;N&lt;/td&gt;</span></code></li><li class="L3"><code class="lang-js"><span class="pln">        </span><span class="pun">}</span></code></li><li class="L4"><code class="lang-js"><span class="pln">    </span><span class="pun">},</span><span class="kwd">false</span><span class="pun">);</span></code></li><li class="L5"><code class="lang-js"></code></li><li class="L6"><code class="lang-js"><span class="pun">&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span></code></li><li class="L7"><code class="lang-js"><span class="pun">&lt;/</span><span class="pln">body</span><span class="pun">&gt;</span><span class="pln"> </span></code></li><li class="L8"><code class="lang-js"></code></li><li class="L9"><code class="lang-js"><span class="pun">作者：苏南</span></code></li><li class="L0"><code class="lang-js"><span class="pun">链接：</span><span class="pln">https</span><span class="pun">:</span><span class="com">//juejin.im/post/5ba6e77e6fb9a05d0b14359b</span></code></li></ol></pre>
<h3 id="h3-115-js-"><a name="115.js把一串字符串去重(能统计出字符重复次数更佳)，列出你的思路（两种以上）" class="reference-link"></a><span class="header-link octicon octicon-link"></span>115.js把一串字符串去重(能统计出字符重复次数更佳)，列出你的思路（两种以上）</h3><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-js"><span class="pun">&lt;</span><span class="pln">script</span><span class="pun">&gt;</span></code></li><li class="L1"><code class="lang-js"><span class="pln">    let str </span><span class="pun">=</span><span class="pln"> </span><span class="str">"12qwe345671dsfa233dsf9876ds243dsaljhkjfzxcxzvdsf"</span><span class="pun">;</span></code></li><li class="L2"><code class="lang-js"><span class="pln">    let array </span><span class="pun">=</span><span class="pln"> str</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">""</span><span class="pun">);</span><span class="pln"> </span><span class="com">//split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 </span></code></li><li class="L3"><code class="lang-js"></code></li><li class="L4"><code class="lang-js"><span class="pln">    </span><span class="com">//方案一：</span></code></li><li class="L5"><code class="lang-js"><span class="pln">    array </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[...</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Set</span><span class="pun">(</span><span class="pln">array</span><span class="pun">)].</span><span class="pln">join</span><span class="pun">(</span><span class="str">""</span><span class="pun">);</span><span class="pln"> </span><span class="com">//</span></code></li><li class="L6"><code class="lang-js"><span class="pln">    array </span><span class="pun">=</span><span class="pln"> </span><span class="pun">((</span><span class="pln">a</span><span class="pun">)=&gt;[...</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Set</span><span class="pun">(</span><span class="pln">a</span><span class="pun">)])(</span><span class="pln">array</span><span class="pun">).</span><span class="pln">join</span><span class="pun">(</span><span class="str">""</span><span class="pun">);</span></code></li><li class="L7"><code class="lang-js"><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">array</span><span class="pun">);</span><span class="com">//12qwe34567dsfa98ljhkzxcv  只能过滤，不会统计</span></code></li><li class="L8"><code class="lang-js"></code></li><li class="L9"><code class="lang-js"><span class="pln">    </span><span class="com">//方案二：</span></code></li><li class="L0"><code class="lang-js"><span class="pln">    </span><span class="kwd">function</span><span class="pln"> unique </span><span class="pun">(</span><span class="pln">arr</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code class="lang-js"><span class="pln">        </span><span class="kwd">const</span><span class="pln"> seen </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Map</span><span class="pun">()</span></code></li><li class="L2"><code class="lang-js"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">((</span><span class="pln">a</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">!</span><span class="pln">seen</span><span class="pun">.</span><span class="pln">has</span><span class="pun">(</span><span class="pln">a</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> seen</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">))).</span><span class="pln">join</span><span class="pun">(</span><span class="str">""</span><span class="pun">);</span></code></li><li class="L3"><code class="lang-js"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code class="lang-js"><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">unique</span><span class="pun">(</span><span class="pln">array</span><span class="pun">))</span><span class="pln"> </span><span class="com">// 12qwe34567dsfa98ljhkzxcv</span></code></li><li class="L5"><code class="lang-js"></code></li><li class="L6"><code class="lang-js"><span class="pln">    </span><span class="com">//方案三：</span></code></li><li class="L7"><code class="lang-js"><span class="pln">    </span><span class="kwd">function</span><span class="pln"> unique </span><span class="pun">(</span><span class="pln">arr</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code class="lang-js"><span class="pln">        let arrs</span><span class="pun">=[];</span></code></li><li class="L9"><code class="lang-js"><span class="pln">        </span><span class="kwd">var</span><span class="pln"> news_arr </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">sort</span><span class="pun">();</span><span class="com">//排序能减少一次循环</span></code></li><li class="L0"><code class="lang-js"><span class="pln">        </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln">i</span><span class="pun">&lt;</span><span class="pln">news_arr</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln">i</span><span class="pun">++){</span></code></li><li class="L1"><code class="lang-js"><span class="pln">                </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">news_arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> news_arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">+</span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> news_arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]!=</span><span class="pln"> news_arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">-</span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span><span class="pun">){</span></code></li><li class="L2"><code class="lang-js"><span class="pln">                        arrs</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span></code></li><li class="L3"><code class="lang-js"><span class="pln">                </span><span class="pun">};</span></code></li><li class="L4"><code class="lang-js"></code></li><li class="L5"><code class="lang-js"><span class="pln">        </span><span class="pun">};</span></code></li><li class="L6"><code class="lang-js"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> arrs</span><span class="pun">.</span><span class="pln">join</span><span class="pun">(</span><span class="str">""</span><span class="pun">);</span></code></li><li class="L7"><code class="lang-js"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code class="lang-js"><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">unique</span><span class="pun">(</span><span class="pln">array</span><span class="pun">))</span><span class="pln"> </span><span class="com">// 12qwe34567dsfa98ljhkzxcv</span></code></li><li class="L9"><code class="lang-js"></code></li><li class="L0"><code class="lang-js"><span class="pln">    </span><span class="com">//方案四：</span></code></li><li class="L1"><code class="lang-js"><span class="pln">    </span><span class="kwd">function</span><span class="pln"> unique </span><span class="pun">(</span><span class="pln">arr</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code class="lang-js"><span class="pln">        let obj</span><span class="pun">={};</span></code></li><li class="L3"><code class="lang-js"><span class="pln">        </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln">i</span><span class="pun">&lt;</span><span class="pln">arr</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln">i</span><span class="pun">++){</span></code></li><li class="L4"><code class="lang-js"><span class="pln">            let key </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span></code></li><li class="L5"><code class="lang-js"><span class="pln">            </span><span class="kwd">if</span><span class="pun">(!</span><span class="pln">obj</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]</span><span class="pln"> </span><span class="pun">){</span></code></li><li class="L6"><code class="lang-js"><span class="pln">                    obj</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]=</span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L7"><code class="lang-js"><span class="pln">            </span><span class="pun">}</span><span class="kwd">else</span><span class="pun">{</span></code></li><li class="L8"><code class="lang-js"><span class="pln">                obj</span><span class="pun">[</span><span class="pln">key</span><span class="pun">]+=</span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L9"><code class="lang-js"><span class="pln">            </span><span class="pun">}</span></code></li><li class="L0"><code class="lang-js"></code></li><li class="L1"><code class="lang-js"><span class="pln">        </span><span class="pun">};</span></code></li><li class="L2"><code class="lang-js"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> obj</span><span class="pun">;</span></code></li><li class="L3"><code class="lang-js"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code class="lang-js"><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">unique</span><span class="pun">(</span><span class="pln">array</span><span class="pun">))</span><span class="pln"> </span><span class="com">// object 对应每个key以及它重复的次数 </span></code></li><li class="L5"><code class="lang-js"></code></li><li class="L6"><code class="lang-js"><span class="pun">&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln"> </span></code></li><li class="L7"><code class="lang-js"></code></li><li class="L8"><code class="lang-js"><span class="pun">作者：苏南</span></code></li><li class="L9"><code class="lang-js"><span class="pun">链接：</span><span class="pln">https</span><span class="pun">:</span><span class="com">//juejin.im/post/5ba6e77e6fb9a05d0b14359b</span></code></li></ol></pre>
<h3 id="h3-116-"><a name="116.项目上线前，你们做过哪些性能优化?" class="reference-link"></a><span class="header-link octicon octicon-link"></span>116.项目上线前，你们做过哪些性能优化?</h3><ul>
<li>图片预加载，css样式表放在顶部且link引入，js放在body之后</li><li>减少http请求，图片静态资源使用CDN托管，小图标使用精灵图</li><li>减少DOM操作次数，减少DOM的数量，合理利用:after :before等伪类元素</li><li>图片懒加载，外部资源按需加载</li><li>压缩JS CSS HTML</li></ul>
<h3 id="h3-117-"><a name="117.你对重绘和重排是怎么理解的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>117.你对重绘和重排是怎么理解的？</h3><ul>
<li>重排<ul>
<li>当渲染树需要更新并且DOM尺寸(宽高)发生了变化，同时其他的DOM也会收到影响，浏览器就会重新构建渲染树，这个过程叫重排</li><li>触发重排<ul>
<li>添加或删除可见的DOM ，DOM位置发生变化，DOM尺寸大小发生变化，页面初次渲染，浏览器窗口尺寸发生变化</li></ul>
</li></ul>
</li><li>重绘<ul>
<li>浏览器重新绘制受到影响的部分到屏幕上，这个过程叫做重绘</li><li>触发重绘<ul>
<li>单独改变DOM的样式而不改变尺寸大小</li></ul>
</li></ul>
</li><li>重绘不一定会重排，重排一定会重绘</li></ul>
<h3 id="h3-118-new-"><a name="118.new 关键字都做了哪些事情？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>118.new 关键字都做了哪些事情？</h3><ul>
<li>1·创建一个空对象</li><li>2·将构造函数的作用域赋给这个空对象（将this指向这个空对象）</li><li>3·执行构造函数中的代码（为空对象添加属性）</li><li>4·返回新对象</li></ul>
<h3 id="h3-119-doctype-"><a name="119.Doctype有什么作用？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>119.Doctype有什么作用？</h3><ul>
<li>Doctype声明在HTML文档第一行，作用是告知浏览器的解析器用什么文档标准来解析这个文档，</li><li>Doctype不存在或者格式不正确会导致文档以兼容模式呈现</li></ul>
<h3 id="h3-120-vue-wathc-"><a name="120.Vue的wathc有什么属性？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>120.Vue的wathc有什么属性？</h3><ul>
<li>deep ：true 可以深度监听对象的变化</li><li>immediate：true  立刻触发回调，即使监听的值没有变化</li></ul>
<h3 id="h3-121-chrome-12px-"><a name="121.怎么让chrome浏览器支持小于12px的字体？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>121.怎么让chrome浏览器支持小于12px的字体？</h3><ul>
<li>1·可以使用<em>-webkit-text-size-adjust:none</em>  （27以后的版本无效 ，使用第二种方法）</li><li>2·可以使用transform:scale()   缩放</li></ul>
<h3 id="h3-122-"><a name="122.谷歌浏览器最小支持的字体大小是多少？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>122.谷歌浏览器最小支持的字体大小是多少？</h3><ul>
<li>12px</li></ul>
<h3 id="h3-123-ajax-jsonp-"><a name="123.ajax与jsonp的区别是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>123.ajax与jsonp的区别是什么？</h3><ul>
<li>ajax与jsonp的作用都是请求url（发送请求）</li><li>区别是<ul>
<li>ajax的核心是通过XMLHttpRequest对象来处理请求</li><li>jsonp的核心是动态添加script标签，利用scr来处理请求</li></ul>
</li></ul>
<h3 id="h3-124-css-"><a name="124.CSS瀑布流布局效果你了解吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>124.CSS瀑布流布局效果你了解吗？</h3><ul>
<li>瀑布流布局的核心是基于网格布局的，但是每一项的高度是动态的，由内容撑开</li><li>实现方法：<ul>
<li>可以用flex弹性布局实现 </li><li>待补充。。。</li></ul>
</li></ul>
<h3 id="h3-125-css-"><a name="125.CSS有几种布局方式？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>125.CSS有几种布局方式？</h3><ul>
<li>浮动布局 float</li><li>定位布局 position</li><li>弹性布局 flex</li><li>网格布局  grid</li><li>瀑布流布局 </li></ul>
<h3 id="h3-126-axios-"><a name="126.axios如何同时管理多个请求？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>126.axios如何同时管理多个请求？</h3><ul>
<li>使用axios.all ，可以同时管理多个请求，当被管理的请求都结束后就会执行all中的回调函数</li></ul>
<h3 id="h3-127-web-"><a name="127.web是怎么实现上传文件的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>127.web是怎么实现上传文件的？</h3><ul>
<li>input标签，type为’file’  &lt;<code>input type="file" id="file" / &gt;</code></li></ul>
<h3 id="h3-128-"><a name="128.怎么实现在上传文件的时候预览图片？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>128.怎么实现在上传文件的时候预览图片？</h3><ul>
<li>1·通过input.files[0]获取到确认选择的图片信息  <code>f=document.getElementById('file').files[0];</code></li><li>2·使用URL.createObjectURL将获取到的图片信息转为可临时访问的URL <code>url=URL.createObjectURL(f)</code></li><li>3·把获取到临时url地址，放在预览图片的img标签的scr上就完成预览了</li></ul>
<h3 id="h3-129-ajax-"><a name="129.ajax是怎么上传文件的？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>129.ajax是怎么上传文件的？</h3><ul>
<li>使用FormData对象<ul>
<li>1·创建一个FormData对象 <code>f = new FormData()</code></li><li>2·通过files[0]获取到确认选择的图片信息 <code>imgInfo = document.getElementById('img').files[0]</code></li><li>3·把文件信息添加到FormData对象中 ，注意这里是键值对的形式 <code>f.append('img',imgInfo)</code></li><li>4·在ajax请求的响应体中添加FormData对象 <code>$ajax({data:f})</code></li></ul>
</li></ul>
<h3 id="h3-130-web-"><a name="130.web如何处理大文件上传？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>130.web如何处理大文件上传？</h3><ul>
<li>待补充 …</li></ul>
<h3 id="h3-131-js-"><a name="131.js的设计模式有哪些？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>131.js的设计模式有哪些？</h3><ul>
<li>设计模式的目的：<ul>
<li>设计模式是为了更好的代码重用性，可读性，可靠性，可维护性<ul>
<li>1· 工厂模式</li><li>2· 单例模式</li><li>3· 适配器模式</li><li>4· 装饰器模式</li><li>5· 代理模式</li><li>6· 外观模式</li><li>7· 观察者模式</li><li>8· 迭代器模式</li><li>9· 状态模式</li><li><code>https://juejin.im/post/5c984610e51d45656702a785</code> 具体学习地址，面试也不用全部回答</li></ul>
</li></ul>
</li></ul>
<h3 id="h3-132-js-"><a name="132.js是高级语言吗？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>132.js是高级语言吗？</h3><ul>
<li>js是脚本语言，主要是作用于浏览器，与用户进行交互</li></ul>
<h3 id="h3-133-js-js-"><a name="133.你对js是怎么理解的？js的优缺点是什么？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>133.你对js是怎么理解的？js的优缺点是什么？</h3><ul>
<li>js是一门跨平台脚本语言，主要作用于浏览器上，进行用户交互</li><li>优点<ul>
<li>既可以面向过程又可以面向对象</li><li>是一门弱类型语言，编程更加随性</li></ul>
</li><li>缺点<ul>
<li>隐式类型转换混乱 </li><li>==双等运算符自动转换数据类型的隐患</li></ul>
</li></ul>
<h3 id="h3-134-js-"><a name="134.js有哪些内置对象？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>134.js有哪些内置对象？</h3><ul>
<li>Object ， Array ， Boolean ， Number ，String </li><li>Symbol ， Map ， Set ， Promise ， Proxy  （ES6新增）<h3 id="h3-135-"><a name="135.如何实现跨域？" class="reference-link"></a><span class="header-link octicon octicon-link"></span>135.如何实现跨域？</h3></li><li>JSONP：通过动态创建script，再请求一个带参网址实现跨域通信。document.domain + iframe跨域：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。</li><li>location.hash + iframe跨域：a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。</li><li>window.name + iframe跨域：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。</li><li>postMessage跨域：可以跨域操作的window属性之一。</li><li>CORS：服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求，前后端都需要设置。</li><li>代理跨域：起一个代理服务器，实现数据的转发</li></ul>
</div>
    </div>
</template>
<script setup>
import E from 'wangeditor'
import { onMounted, reactive } from 'vue';
const data = reactive({
    htmltxt: ''
})

onMounted(() => {
    const editor = new E('#div1')
    editor.config.onchange = function (newHtml) {
        console.log("change 之后最新的 html", newHtml);
        data.htmltxt = newHtml
    };
    // 配置触发 onchange 的时间频率，默认为 200ms
    editor.config.onchangeTimeout = 500; // 修改为 500ms
    editor.create()
})

function showhtml() {
    console.log(data.htmltxt)
}

</script>