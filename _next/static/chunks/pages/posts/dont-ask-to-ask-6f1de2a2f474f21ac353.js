_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"7vJR":function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/dont-ask-to-ask",function(){return o("E0fL")}])},E0fL:function(e,t,o){"use strict";o.r(t),o.d(t,"__N_SSG",(function(){return k})),o.d(t,"default",(function(){return v}));var a=o("q1tI"),r=o.n(a),n=o("8Kt/"),p=o.n(n),i=o("4PbB");o("a4Bd");function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},h=function(e){var t=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var o="";e.title&&(o=e.title,c.templateTitle&&(o=c.templateTitle.replace(/%s/g,(function(){return o}))),t.push(r.a.createElement("title",{key:"title"},o)));var a=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,n=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow;if(a||n?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),t.push(r.a.createElement("meta",{key:"robots",name:"robots",content:(a?"noindex":"index")+","+(n?"nofollow":"follow")})),t.push(r.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(a?"noindex":"index")+","+(n?"nofollow":"follow")}))):(t.push(r.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(r.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(r.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(r.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(r.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(r.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(r.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(r.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(r.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(r.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var p=e.openGraph.type.toLowerCase();t.push(r.a.createElement("meta",{key:"og:type",property:"og:type",content:p})),"profile"===p&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(r.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(r.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(r.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(r.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===p&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"book:author:0"+o,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(r.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(r.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"book:tag:0"+o,property:"book:tag",content:e}))}))):"article"===p&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(r.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(r.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(r.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"article:author:0"+o,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(r.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"article:tag:0"+o,property:"article:tag",content:e}))}))):"video.movie"!==p&&"video.episode"!==p&&"video.tv_show"!==p&&"video.other"!==p||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,o){e.profile&&t.push(r.a.createElement("meta",{key:"video:actor:0"+o,property:"video:actor",content:e.profile})),e.role&&t.push(r.a.createElement("meta",{key:"video:actor:role:0"+o,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"video:director:0"+o,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"video:writer:0"+o,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(r.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(r.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"video:tag:0"+o,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(r.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(r.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||o})),(e.openGraph.description||e.description)&&t.push(r.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"og:image:0"+o,property:"og:image",content:e.url})),e.alt&&t.push(r.a.createElement("meta",{key:"og:image:alt0"+o,property:"og:image:alt",content:e.alt})),e.width?t.push(r.a.createElement("meta",{key:"og:image:width0"+o,property:"og:image:width",content:e.width.toString()})):c.defaultOpenGraphImageWidth&&t.push(r.a.createElement("meta",{key:"og:image:width0"+o,property:"og:image:width",content:c.defaultOpenGraphImageWidth.toString()})),e.height?t.push(r.a.createElement("meta",{key:"og:image:height"+o,property:"og:image:height",content:e.height.toString()})):c.defaultOpenGraphImageHeight&&t.push(r.a.createElement("meta",{key:"og:image:height"+o,property:"og:image:height",content:c.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,o){t.push(r.a.createElement("meta",{key:"og:video:0"+o,property:"og:video",content:e.url})),e.alt&&t.push(r.a.createElement("meta",{key:"og:video:alt0"+o,property:"og:video:alt",content:e.alt})),e.width?t.push(r.a.createElement("meta",{key:"og:video:width0"+o,property:"og:video:width",content:e.width.toString()})):c.defaultOpenGraphVideoWidth&&t.push(r.a.createElement("meta",{key:"og:video:width0"+o,property:"og:video:width",content:c.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(r.a.createElement("meta",{key:"og:video:height"+o,property:"og:video:height",content:e.height.toString()})):c.defaultOpenGraphVideoHeight&&t.push(r.a.createElement("meta",{key:"og:video:height"+o,property:"og:video:height",content:c.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(r.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(r.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(r.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(r.a.createElement("meta",Object.assign({key:e.name?e.name:e.property},e)))})),t},s=(a.Component,function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.noindex,a=void 0!==o&&o,n=e.nofollow,i=e.description,l=e.canonical,c=e.openGraph,s=e.facebook,d=e.twitter,m=e.additionalMetaTags,u=e.titleTemplate,g=e.mobileAlternate,f=e.languageAlternates;return r.a.createElement(p.a,null,h({title:t,noindex:a,nofollow:n,description:i,canonical:l,facebook:s,openGraph:c,additionalMetaTags:m,twitter:d,titleTemplate:u,mobileAlternate:g,languageAlternates:f}))},t}(a.Component)),d=o("vRNQ"),m=o.n(d),u=r.a.createElement;function g(e){return u(r.a.Fragment,null,u("div",{className:m.a.article},u("div",{className:m.a["a-head"]},u(i.f,{type:"h3"},e.title),u(i.f,{type:"h5",style:{margin:0}},e.description)),u("div",{className:m.a["a-body"]},e.children)))}var f=r.a.createElement,y="Don't ask to ask, just ask.",G="The worst possible thing you can do is ask to ask. Why not just ask your question instead?",k=!0;function v(){return f(r.a.Fragment,null,f(s,{title:y,description:G,openGraph:{type:"website",title:y,description:G,site_name:"RealSGII2"},additionalMetaTags:[{property:"theme-color",content:"#5093ad"}]}),f(g,{title:y,description:G},f(i.f,{type:"body1"},"Hi")))}},Qetd:function(e,t,o){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},SksO:function(e,t){function o(t,a){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,a)}e.exports=o},W8MJ:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}},ZhPi:function(e,t,o){var a=o("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}}},cDf5:function(e,t){function o(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["7vJR",0,1,3,4]]]);