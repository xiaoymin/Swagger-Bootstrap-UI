(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{246:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[n("strong",[t._v("自2.0.6版本后,Knife4j的增强模式可以由后端进行配置,Knife4j提供了更加符合Spring Boot以及OpenAPI规范的方式进行使用,推荐开发者升级使用,文档请移步"),n("router-link",{attrs:{to:"./enhance.html"}},[t._v("增强模式")])],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("2、另外是Knife4j还在发展中,强制使用自己所提供的功能对于各个软件的兼容难免会存在问题,所以把Knife4j所提供的增强功能使用权也是交给开发者,让开发者做选择。")]),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("上面说了默认规则,那么在增强模式下,能否默认在前端界面就开启呢?")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),n("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"前端默认开启增强模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端默认开启增强模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端默认开启增强模式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[e("code",[this._v("knife4j")]),this._v(" 版本>2.0.1 使用此规则")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("knife4j")]),this._v("所提供Swagger-Ui默认是访问Springfox-Swagger所提供的"),e("code",[this._v("/v2/api-docs")]),this._v("接口,从开源至今,一直默认访问的就是该地址")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但随着版本的更新迭代,使用的开发者越来越多,"),e("code",[this._v("knife4j")]),this._v("也响应支持了一些特有的增强功能，增强功能主要包括：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("接口分组排序")]),t._v(" "),n("li",[t._v("接口排序")]),t._v(" "),n("li",[t._v("参数自动忽略")]),t._v(" "),n("li",[t._v("针对"),n("code",[t._v("@RequestBody")]),t._v(" Map类型的请求提供动态字段注释")]),t._v(" "),n("li",[t._v("给接口添加作者信息")]),t._v(" "),n("li",[t._v("自定义Markdown文档")]),t._v(" "),n("li",[t._v("文档权限过滤")]),t._v(" "),n("li",[t._v("more...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("同时也保留了一些个性化的配置特性,用于"),e("code",[this._v("knife4j")]),this._v("的文档调试使用,如下图：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/knife4j/images/knife4j/set.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在以前的做法,开发者是先访问"),e("code",[this._v("doc.html")]),this._v(",然后在个性化配置中勾选 启用Knife4j提供的增强功能")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("勾选后,重新刷新页面,此时,"),n("code",[t._v("knife4j")]),t._v("的ui界面会访问"),n("code",[t._v("knife4j")]),t._v("提供的接口地址"),n("code",[t._v("/v2/api-docs-ext")]),t._v(" ,"),n("code",[t._v("knife4j")]),t._v("提供的增强功能扩展属性都会从这个接口中返回,前端ui会解析增强部分并且在页面中体现")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("提供这样的方式主要原因是")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("1、原本Knife4j-spring-ui所替代的角色是"),e("code",[this._v("springfox-swagger-ui")]),this._v(",一开始的愿景也是希望开发者能够无缝集成,减少软件集成的学习成本,在Java的Maven Pom文件中直接引入jar包就可以完成集成(前提是你已经集成了springfox-swagger)并使用，这种体验对于开发者来说是再简单不过的")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("现在")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("有时候我们确实需要"),e("code",[this._v("knife4j")]),this._v("所提供的增强功能,但是每次在打开后都需要个性化设置界面勾选启用增强会很繁琐,特别是和别人接口对接的情况下,别人希望看到的例如排序、忽略参数等特性能直接体现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("knife4j")]),this._v("针对这样的需求提供了解决方法,但是有些前提条件是开发者需要首先确保的，主要注意点：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("1、Java后端必须在"),e("code",[this._v("@EnableSwagger2")]),this._v("的基础上再添加"),e("code",[this._v("@EnableKnife4j")]),this._v("增强注解,代码示例如下：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableKnife4j")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//more..")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("2、如果你使用Spring Security、Shiro这类权限框架时,需要对接口地址"),e("code",[this._v("/v2/api-docs-ext")]),this._v("进行放权")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("最后")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以上操作完成后,在界面端直接访问地址："),e("code",[this._v("http://host:port/doc.html#/plus")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以上地址告诉"),e("code",[this._v("knife4j")]),this._v("的前端界面后端增强功能万事俱备,前端可以使用了")])}],!1,null,null,null);e.default=i.exports}}]);