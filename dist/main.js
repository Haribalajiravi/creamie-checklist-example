!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:g(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function g(e,t){var n,o,r;if(t.singleton){var i=m++;n=f||(f=l(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(t),o=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"div{padding:10px;margin:10px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const o="style",r="text/html";class i{constructor(e,t,n){this.template=e,this.style=t,this.boot=n}getHTML(){return this.boot[this.template]}getCSS(){return this.boot[this.style]}get(){const e=document.createDocumentFragment(),t=document.createElement(o),n=document.createTextNode(this.getCSS()),i=(new DOMParser).parseFromString(this.getHTML(),r);return t.appendChild(n),e.appendChild(t),e.appendChild(i.body),e}}class a{constructor(e,t,n){if(this.scopes={},e&&e.length>2){this.bindAttribute=e,this.dom=t;let o=this;o.dom.querySelectorAll(`[${o.bindAttribute}]`).forEach(e=>{let t=e.getAttribute(o.bindAttribute);o.addScopes(t,n),"text"!==e.type&&"textarea"!==e.type||(e.onkeyup=function(){o.scopes[t]=e.value})})}else if(e)throw this.getError("BINDER_ATTRIBUTE_LENGTH",e)}addScopes(e,t){let n=this;if(!n.scopes.hasOwnProperty(e)){let o;Object.defineProperty(n.scopes,e,{set:function(r){o=r,n.dom.querySelectorAll(`[${n.bindAttribute}]`).forEach(o=>{o.getAttribute(n.bindAttribute)==e&&(!o.type||"text"!==o.type&&"textarea"!==o.type?"string"==typeof r&&(o.innerText=r):o.value=r,"function"==typeof t&&t(o,r))})},get:function(){return o},enumerable:!0})}}free(){this.scopes={}}get(){return this.scopes}getError(e,t){return`Error[creamie]: ${{BINDER_ATTRIBUTE_LENGTH:`Keep the binder '${t}' attribute > 2 characters!`}[e]}`}}class s{constructor(e){this.dom=e||document,this.eventAttribute="e",this.domevents={afterprint:"onafterprint",beforeprint:"onbeforeprint",beforeunload:"onbeforeunload",error:"onerror",hashchange:"onhashchange",load:"onload",message:"onmessage",offline:"onoffline",online:"ononline",pagehide:"onpagehide",pageshow:"onpageshow",popstate:"onpopstate",resize:"onresize",storage:"onstorage",unload:"onunload",blur:"onblur",change:"onchange",contextmenu:"oncontextmenu",focus:"onfocus",input:"oninput",invalid:"oninvalid",reset:"onreset",search:"onsearch",select:"onselect",submit:"onsubmit",keydown:"onkeydown",keypress:"onkeypress",keyup:"onkeyup",click:"onclick",dblclick:"ondblclick",mousedown:"onmousedown",mousemove:"onmousemove",mouseout:"onmouseout",mouseover:"onmouseover",mouseup:"onmouseup",mousewheel:"onmousewheel",wheel:"onwheel",drag:"ondrag",dragend:"ondragend",dragenter:"ondragenter",dragleave:"ondragleave",dragover:"ondragover",dragstart:"ondragstart",drop:"ondrop",scroll:"onscroll",copy:"oncopy",cut:"oncut",paste:"onpaste",abort:"onabort",canplay:"oncanplay",canplaythrough:"oncanplaythrough",cuechange:"oncuechange",durationchange:"ondurationchange",emptied:"onemptied",ended:"onended",error:"onerror",loadeddata:"onloadeddata",loadedmetadata:"onloadedmetadata",loadstart:"onloadstart",pause:"onpause",play:"onplay",playing:"onplaying",progress:"onprogress",ratechange:"onratechange",seeked:"onseeked",seeking:"onseeking",stalled:"onstalled",suspend:"onsuspend",timeupdate:"ontimeupdate",volumechange:"onvolumechange",waiting:"onwaiting",toggle:"ontoggle"}}init(e){let t=this;t.dom.querySelectorAll(`[${t.eventAttribute}]`).forEach(n=>{let o=n.getAttribute(t.eventAttribute).split(":"),r=o[0],i=o[1];if(t.domevents[r]&&e&&e[i])n[t.domevents[r]]=e[i];else{if(!t.domevents[r])throw t.getError("NO_EVENT_FOUND",r);if(!e[i])throw t.getError("NO_METHOD_FOUND",i)}})}getError(e,t){return`Error[creamie]: ${{NO_EVENT_FOUND:`There is no event called '${t}'`,NO_METHOD_FOUND:`There is no method called '${t}'`}[e]}`}}class c extends HTMLElement{constructor(e){super(),this.component=e,this.dom=this.component.isShadowDom?this._shadowRoot=this.attachShadow({mode:this.component.shadowMode}):this;let t=new i(this.component.template,this.component.style,this.component.boot);this.dom.appendChild(t.get()),this.binder=new a(this.component.binder,this.dom),this.data=this.binder.get(),this.events=new s(this.dom)}disconnectedCallback(){this.binder.free()}attributeChangedCallback(e,t,n){console.log(`Attribute: ${e} - ${n} - ${t} changed!`)}}var l={template:"app-component.html",style:"app-component.css",tag:"app-component",isShadowDom:!1,shadowMode:"open",binder:"data",boot:{"app-component.html":"<div>\r    <container-component></container-component>\r</div>","app-component.css":".sample {\r    background: #fff;\r    border: 1px solid #efefef;\r    border-radius: 2px;\r    padding: 10px;\r    margin: auto;\r    text-align: center;\r    width: 20%;\r    margin-top: 5%;\r}\r\r.creamieFont {\r    font-size: 24pt;\r    font-weight: bold;\r    color: #945f31;\r    overflow: hidden;\r    text-overflow: ellipsis;\r    width: 100%;\r}\r\r.version {\r    padding: 3px;\r    background: #e8e8e8;\r    color: #6b6b6b;\r    display: inline-block;\r    text-align: center;\r    width: 65px;\r    margin-top: 10px;\r    border-radius: 3px;\r    font-family: monospace;\r}"}};window.customElements.define(l.tag,class extends c{constructor(){super(l),console.log("App constructor!")}connectedCallback(){console.log("connected!")}});var d={template:"checklist-component.html",style:"checklist-component.css",tag:"checklist-component",isShadowDom:!1,shadowMode:"open",binder:"data",boot:{"checklist-component.html":'<div>\r    <input class="cb" type="checkbox" e="click:check" />\r    <span data="checklistContent"></span>\r</div>',"checklist-component.css":".cb {\r    vertical-align: -3px;\r}"}};class u extends c{constructor(e){super(d),this.data.checklistContent=e,this.events.init({check:()=>{this.style.textDecoration="line-through"}})}}window.customElements.define(d.tag,u);var p={template:"container-component.html",style:"container-component.css",tag:"container-component",isShadowDom:!1,shadowMode:"open",binder:"data",boot:{"container-component.html":'<div class="panel">\r    <div class="textPanel">\r        <form e="submit:addChecklist">\r            <h2>Simple Checklist App - Example</h2>\r            <input class="checklistTextbox" data="checklist" type="text" placeholder="Enter something here" />\r            <button e="click:addChecklist">add</button>\r        </form>\r    </div>\r    <div id="checklistPanel"></div>\r</div>',"container-component.css":".panel {\r    width: 50%;\r    background: aliceblue;\r    margin: auto;\r}\r\r.textPanel {\r    margin: auto;\r    width: 70%;\r}\r\r.checklistTextbox {\r    padding: 5px;\r    width: 80%;\r    outline: none;\r}\r\r.checklistTextbox:hover {\r    border: 2px solid #0f64b3;\r}\r\rbutton {\r    background: #0f64b3;\r    color: #ffffff;\r    width: 42px;\r    padding: 5px;\r    border: none;\r    outline: none;\r    cursor: pointer;\r}\r\rbutton:hover {\r    background: #0b4b86;\r}"}};window.customElements.define(p.tag,class extends c{constructor(){super(p),this.initEvents()}initEvents(){let e=this;this.events.init({addChecklist:t=>{if(t.preventDefault(),e.data.checklist.length){let t=new u(e.data.checklist);document.getElementById("checklistPanel").appendChild(t),e.data.checklist=""}}})}})}]);