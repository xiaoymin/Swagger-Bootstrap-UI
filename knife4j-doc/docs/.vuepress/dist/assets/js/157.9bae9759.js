(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{258:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("大家好,我在GitChat中开了一篇关于"),a("a",{attrs:{href:"https://gitbook.cn/gitchat/activity/5f86b4cb1772090f20e13b03",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Knife4j 及 Swagger 在企业开发中的实践》"),a("OutboundLink")],1),t._v("\n地址："),a("a",{attrs:{href:"https://gitbook.cn/gitchat/activity/5f86b4cb1772090f20e13b03",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitbook.cn/gitchat/activity/5f86b4cb1772090f20e13b03"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("欢迎对 SpringFox、Swagger、Knife4j 感兴趣以及想了解的人员一起来chat")])]),t._v(" "),a("p",[t._v("一开始项目初衷是为了写一个增强版本的Swagger 前端UI,但是随着项目的发展,面对越来越多的个性化需求,不得不编写后端Java代码以满足新的需求,在swagger-bootstrap-ui的1.8.5~1.9.6版本之间,采用的是后端Java代码和Ui都混合在一个Jar包里面的方式提供给开发者使用.这种方式虽说对于集成swagger来说很方便,只需要引入jar包即可,但是在微服务架构下显得有些臃肿。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("后端Java代码和ui包分离为多个模块的jar包,以面对在目前微服务架构下,更加方便的使用增强文档注解(使用SpringCloud微服务项目,只需要在网关层集成UI的jar包即可,因此分离前后端)")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("由于更名给大家带来的不便深表歉意~！")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("如果你是Spring Boot的单体架构,所有的服务Controller接口都是写在一起的,那么使用knife4j的方式就很简单了,你只需要引入starter即可")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("类会为我们开启Swagger的增强注解,您只需要在项目中创建Swagger的Docket对象即可")]),t._v(" "),t._m(12),a("p",[t._v("项目可以参考示例"),a("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-spring-boot-single-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("knife4j-spring-boot-single-demo"),a("OutboundLink")],1)]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("在微服务架构下,引入微服务的starter")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("主要包含的核心模块jar：")]),t._v(" "),t._m(16),t._v(" "),a("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"项目说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因此,项目正式更名为"),s("strong",[this._v("knife4j")]),this._v(",取名knife4j是希望她能像一把匕首一样小巧,轻量,并且功能强悍,更名也是希望把她做成一个为Swagger接口文档服务的通用性解决方案,不仅仅只是专注于前端Ui前端.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("swagger-bootstrap-ui的所有特性都会集中在"),s("code",[this._v("knife4j-spring-ui")]),this._v("包中,并且后续也会满足开发者更多的个性化需求.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("主要的变化是,项目的相关类包路径更换为"),s("code",[this._v("com.github.xiaoymin.knife4j")]),this._v("前缀,开发者使用增强注解时需要替换包路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("knife4j")]),this._v("沿用swagger-bootstrap-ui的版本号,第1个版本从1.9.6开始,关于使用方法,请参考文档")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("本文将详细介绍在不同项目场景下如何从"),s("code",[this._v("swagger-bootsstrap-ui")]),this._v("切换使用knife4j")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"spring-boot单服务架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot单服务架构","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot单服务架构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("maven中的"),s("code",[this._v("pom.xml")]),this._v("文件引入starter即可")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--在引用时请在maven中央仓库搜索最新版本号--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.4"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("knife4j-spring-boot-starter")]),this._v("主要为我们引用的相关jar包：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("knife4j-spring:Swagger增强处理类")]),this._v(" "),s("li",[this._v("knife4j-spring-ui:swagger的增强ui文档")]),this._v(" "),s("li",[this._v("springfox-swagger:springfox最新2.9.2版本")]),this._v(" "),s("li",[this._v("springfox-bean-validators：springfox验证支持组件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此时,位于包路径"),s("code",[this._v("com.github.xiaoymin.knife4j.spring.configuration.Knife4jAutoConfiguration.java")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableKnife4j")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanValidatorPluginsConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"spring-cloud微服务架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud微服务架构","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Cloud微服务架构")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-micro-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--在引用时请在maven中央仓库搜索最新版本号--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.4"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("knife4j-micro-spring-boot-starter")]),this._v("的区别在于去掉了Swagger的前端UI包("),s("code",[this._v("springfox-swagger-ui")]),this._v("以及"),s("code",[this._v("knife4j-spring-ui")]),this._v("),只引入了后端的Java代码模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("knife4j-spring:Swagger增强处理类")]),this._v(" "),s("li",[this._v("springfox-swagger:springfox最新2.9.2版本")]),this._v(" "),s("li",[this._v("springfox-bean-validators：springfox验证支持组件")])])}],!1,null,null,null);s.default=e.exports}}]);