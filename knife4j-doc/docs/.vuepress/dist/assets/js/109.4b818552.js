(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{351:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v(",通常有时候我们碰到的问题如下：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("当我们部署系统到生产系统,为了接口安全,需要屏蔽所有Swagger的相关资源")]),t._v(" "),t._m(15),t._v(" "),t._m(16),s("p",[t._v("配置此属性后,所有资源都会屏蔽输出.")]),t._v(" "),s("p",[t._v("效果图如下：")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("做登录页控制需要有用户的概念,所以相当长一段时间都没有提供此功能")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("效果图如下：")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),s("p",[s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/ProductionSecurityFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProductionSecurityFilter"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/SecurityBasicAuthFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("SecurityBasicAuthFilter"),s("OutboundLink")],1),t._v("只需配置一个即可")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/ProductionSecurityFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProductionSecurityFilter"),s("OutboundLink")],1),t._v(":开启生产环境,屏蔽所有Swagger资源,不可访问,production配置为true时,basic认证功能不可用")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/SecurityBasicAuthFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("SecurityBasicAuthFilter"),s("OutboundLink")],1),t._v("：开启HTTP Basic认证,访问Swagger资源需要提供服务端配置的用户名以及密码")]),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"访问权限控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问权限控制","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问权限控制")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),a("p",[this._v("访问权限控制功能是"),a("code",[this._v("knife4j")]),this._v("提供的增强功能,开发者要想使用"),a("code",[this._v("knife4j")]),this._v("提供的增强功能,必须在Swagger的配置文件中引入增强注解,各个版本的增强注解区别如下表:"),a("br")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("软件")]),t._v(" "),s("th",[t._v("版本")]),t._v(" "),s("th",[t._v("增强注解")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("swagger-bootstrap-ui")]),t._v(" "),s("td",[t._v("<= "),s("code",[t._v("1.9.6")])]),t._v(" "),s("td",[s("code",[t._v("@EnableSwaggerBootstrapUI")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("knife4j")]),t._v(" "),s("td",[t._v("<="),s("code",[t._v("2.0.0")])]),t._v(" "),s("td",[s("code",[t._v("@EnableSwaggerBootstrapUi")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("knife4j")]),t._v(" "),s("td",[t._v(">="),s("code",[t._v("2.0.1")])]),t._v(" "),s("td",[s("code",[t._v("@EnableKnife4j")])]),t._v(" "),s("td",[t._v("后续版本不会再更改")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("在使用"),a("code",[this._v("swagger-bootstrap-ui")]),this._v("的<="),a("code",[this._v("1.9.6")]),this._v("版本之前的代码方式,代码示例如下：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwaggerBootstrapUI")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanValidatorPluginsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//more..")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("在使用"),a("code",[this._v("knife4j")]),this._v("的<="),a("code",[this._v("2.0.0")]),this._v("版本之前的代码方式,代码示例如下：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwaggerBootstrapUi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanValidatorPluginsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//more..")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("在使用"),a("code",[this._v("knife4j")]),this._v("的>="),a("code",[this._v("2.0.1")]),this._v("版本之后的代码方式,代码示例如下：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableKnife4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanValidatorPluginsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//more..")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在开发"),a("code",[this._v("SwaggerBootstrapUi")]),this._v("功能时,同很多开发者经常讨论的问题就是在生产环境时,屏蔽或者去除Swagger的文档很麻烦")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("系统部署生产环境时,我们想屏蔽Swagger的文档功能,不管是接口或者html文档")]),this._v(" "),a("li",[this._v("通常我们有时候需要生产环境部署后,又需要Swagger的文档调试功能,辅助开发者调试,但是存在安全隐患,没有对Swagger的资源接口过滤")]),this._v(" "),a("li",[this._v("等等")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("针对以上两种情况,SwaggerBootstrapUi在1.9.0的版本中加入了过滤Filter功能,如果开发者使用SpringBoot开发框架进行开发的话,只需在"),a("code",[this._v("application.properties")]),this._v("或者"),a("code",[this._v("application.yml")]),this._v("配置文件中配置相关属性即可方便的解决上面的问题,不用删除Springfox-swagger的jar包或者删除相关代码等复杂的操作,提升开发体验.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"开启生产环境-屏蔽swagger所有资源接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启生产环境-屏蔽swagger所有资源接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 开启生产环境,屏蔽Swagger所有资源接口")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("目前"),a("code",[this._v("Springfox-Swagger")]),this._v("以及"),a("code",[this._v("SwaggerBootstrapUi")]),this._v("提供的资源接口包括如下：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("资源")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/doc.html")]),t._v(" "),s("td",[t._v("SwaggerBootstrapUi提供的文档访问地址")])]),t._v(" "),s("tr",[s("td",[t._v("/api-docs-ext")]),t._v(" "),s("td",[t._v("SwaggerBootstrapUi提供的增强接口地址")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-resources")]),t._v(" "),s("td",[t._v("Springfox-Swagger提供的分组接口")])]),t._v(" "),s("tr",[s("td",[t._v("/api-docs")]),t._v(" "),s("td",[t._v("Springfox-Swagger提供的分组实例详情接口")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-ui.html")]),t._v(" "),s("td",[t._v("Springfox-Swagger提供的文档访问地址")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-resources/configuration/ui")]),t._v(" "),s("td",[t._v("Springfox-Swagger提供")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-resources/configuration/security")]),t._v(" "),s("td",[t._v("Springfox-Swagger提供")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("如果使用SpringBoot框架,只需在"),a("code",[this._v("application.properties")]),this._v("或者"),a("code",[this._v("application.yml")]),this._v("配置文件中配置")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[this._v("swagger.production")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[this._v("true")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"/knife4j/images/ac.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"访问页面加权控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问页面加权控制","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问页面加权控制")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("不管是官方的"),a("code",[this._v("swagger-ui.html")]),this._v("或者"),a("code",[this._v("doc.html")]),this._v(",目前接口访问都是无需权限即可访问接口文档的,很多朋友以前问我能不能提供一个登陆界面的功能,开发者输入用户名和密码来控制界面的访问,只有知道用户名和密码的人才能访问此文档")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("不过在"),a("code",[this._v("1.9.0")]),this._v("版本时,针对Swagger的资源接口,"),a("code",[this._v("SwaggerBootstrapUi")]),this._v("提供了简单的"),a("strong",[this._v("Basic认证功能")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"/knife4j/images/ac-pwd.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("允许开发者在配置文件中配置一个静态的用户名和密码,当对接者访问Swagger页面时,输入此配置的用户名和密码后才能访问Swagger文档页面,如果您使用SpringBoot开发,则只需在相应的"),a("code",[this._v("application.properties")]),this._v("或者"),a("code",[this._v("application.yml")]),this._v("中配置如下：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 开启Swagger的Basic认证功能,默认是false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("swagger.basic.enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Basic认证用户名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("swagger.basic.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("zhangsan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Basic认证密码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("swagger.basic.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("如果用户开启了basic认证功能,但是并未配置用户名及密码,"),a("code",[this._v("SwaggerBootstrapUi")]),this._v("提供了默认的用户名和密码：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("admin/123321\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("如果您使用的是"),a("code",[this._v("SpringMVC")]),this._v(",则需要在"),a("code",[this._v("web.xml")]),this._v("中添加相应的Filter,参考如下：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--SwaggerBootstrapUi提供的Swagger增强功能,Filter过滤保护Swagger资源--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--生产环境Filter--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerProductionFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin.swaggerbootstrapui.filter.ProductionSecurityFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("production"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerProductionFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--Swagger资源的Basic认证保护策略--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerSecurityBasic"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin.swaggerbootstrapui.filter.SecurityBasicAuthFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--开启basic认证--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("enableBasicAuth"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--用户名&密码--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("userName"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lisi"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("password"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("123"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerSecurityBasic"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);