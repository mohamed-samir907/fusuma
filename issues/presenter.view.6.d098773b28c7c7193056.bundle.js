(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(e,t,n){"use strict";n.d(t,"a",function(){return v}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return b}),n.d(t,"b",function(){return y});var r=n(2),o=n.n(r),a=n(425),i=n(346),u=n(93);n(359),n(383);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=l(t).call(this,e),n=!o||"object"!==c(o)&&"function"!=typeof o?f(r):o,d(f(n),"changeColor",function(){n.colors=n.colors.concat(n.colors.splice(0,1)),n.setState({color:n.colors[0]})}),d(f(n),"setData",function(){window.localStorage.setItem("fusumaCanvasCoordinate",n.ref.getSaveData())}),d(f(n),"getData",function(){var e=window.localStorage.getItem("fusumaCanvasCoordinate");n.beforeData!==e&&(n.ref.loadSaveData(e,!0),n.beforeData=e)}),d(f(n),"undo",function(){n.ref.undo()}),d(f(n),"clear",function(){n.ref.clear()}),n.ref=null,n.beforeData=null,n.timerId=null,n.colors=["#444","#3498db","#ff874d","#67a2a0"],n.state={color:n.colors[0]},n}var n,r,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.props.toolbar?this.timerId=setInterval(function(){e.setData()},1e3):this.timerId=setInterval(function(){e.getData()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this,t=this.props,n=t.disabled,r=t.hideGrid,c=t.toolbar;return o.a.createElement(o.a.Fragment,null,c&&o.a.createElement("div",{className:"fusuma-canvas-toolbar"},o.a.createElement(u.b,{onClick:this.clear,size:"32"}),o.a.createElement(i.m,{onClick:this.undo}),o.a.createElement("div",{style:{background:this.state.color},onClick:this.changeColor,className:"fusuma-canvas-toolbar-color"})),o.a.createElement(a.a,{ref:function(t){return e.ref=t},className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:this.state.color,disabled:n,hideGrid:r,lazyRadius:0,brushRadius:8}))}}])&&s(n.prototype,r),v&&s(n,v),t}();function h(){return JSON.parse(window.localStorage.getItem("fusumaCanvasEvent"))}function b(e){window.addEventListener("storage",function(t){"fusumaCanvasEvent"===t.key&&e(JSON.parse(t.newValue))})}function y(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}},359:function(e,t,n){var r=n(360);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(92)(r,o);r.locals&&(e.exports=r.locals)},360:function(e,t,n){},376:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return i});var i=function(){function e(){var t=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"setupRecording",function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(t.handlerRecording)}),a(this,"handlerRecording",function(e){var n=[];t.stream=e,t.mediaRecorder=new MediaRecorder(e,{}),t.mediaRecorder.addEventListener("dataavailable",function(e){e.data.size>0&&n.push(e.data)}),t.mediaRecorder.addEventListener("stop",function(){t.finishedProcess=!0,t.url=URL.createObjectURL(new Blob(n,{type:"audio/webm"}))})}),a(this,"startRecording",function(){t.mediaRecorder.start(),t.finishedProcess=!1,t.url=null}),a(this,"stopRecording",function(){return new Promise(function(e){t.mediaRecorder.stop();var n=setInterval(function(){t.finishedProcess&&(clearInterval(n),e(t.url))},100)})}),a(this,"disposeRecording",function(){t.mediaRecorder.stream.getTracks().forEach(function(e){return e.stop()}),t.finishedProcess=!1,t.url=null}),!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}var t,n,i;return t=e,(n=[{key:"startCapturing",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia(t);case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e,null,[[1,7]])}),function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"stopCapturing",value:function(e){e.srcObject.getTracks().forEach(function(e){return e.stop()}),e.srcObject=null}}])&&o(t.prototype,n),i&&o(t,i),e}()},584:function(e,t,n){var r=n(585);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(92)(r,o);r.locals&&(e.exports=r.locals)},585:function(e,t,n){},607:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(131);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}var t,n,r;return t=e,(n=[{key:"registerEvent",value:function(e,t){navigator.presentation.receiver.connectionList.then(function(n){n.connections.forEach(function(n){n.addEventListener(e,t)}),n.addEventListener("connectionavailable",function(e){t(e.connection)})})}},{key:"setUp",value:function(){this.registerEvent("close",function(e){console.log(e)})}},{key:"onChangePage",value:function(e){"presentation"===this.apiType?this.registerEvent("message",function(t){var n=JSON.parse(t.data).page;e(n)}):window.addEventListener("storage",function(t){if("page"===t.key){var n=JSON.parse(t.newValue).page;e(n)}})}}])&&i(t.prototype,n),r&&i(t,r),e}(),c=n(358),s=n(376);n(584);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){p(a,r,o,i,u,"next",e)}function u(e){p(a,r,o,i,u,"throw",e)}i(void 0)})}}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return g});var g=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=h(t).call(this),e=!r||"object"!==l(r)&&"function"!=typeof r?b(n):r,m(b(e),"startCapturing",d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.webrtc){t.next=7;break}return e.webrtc=new s.a,t.next=4,e.webrtc.startCapturing({video:{displaySurface:"monitor"}});case 4:return t.abrupt("return",t.sent);case 7:throw new Error("Capturing has already run.");case 8:case"end":return t.stop()}},t)}))),m(b(e),"stopCapturing",function(t){e.webrtc&&t&&(t.pause(),e.webrtc.stopCapturing(t),e.currentLayer.style.opacity=1,e.webrtc=null,e.currentLayer=null,e.currentVideoTag=null)}),m(b(e),"listenCanvas",function(){Object(c.d)(function(t){e.setState({usedCanvas:"start"===t.status})})}),e.webrtc=null,e.currentVideoTag=null,e.currentLayer=null,e.presentationReceiver=new u,e.presentationReceiver.onChangePage(function(t){window.slide&&(window.slide.goToSlide(t),e.webrtc&&e.currentVideoTag&&e.stopCapturing(e.currentVideoTag))}),e.state={usedCanvas:!1},e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){this.listenVideoTags(),this.listenCanvas(),this.setState({usedCanvas:"start"===Object(c.c)().status})}},{key:"listenVideoTags",value:function(){var e=d(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=document.querySelectorAll("#webslides .fusuma-screen"))){e.next=3;break}return e.abrupt("return");case 3:n.forEach(function(e){var t=f(e.children,2),n=t[0],o=t[1];o.addEventListener("click",d(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.webrtc){e.next=10;break}return e.next=3,r.startCapturing();case 3:t=e.sent,o.srcObject=t,o.play(),r.currentVideoTag=o,r.currentLayer=n,r.currentLayer.style.opacity=0,t.getVideoTracks()[0].onended=function(){r.stopCapturing(o)};case 10:case"end":return e.stop()}},e)})))});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"fusuma-presenter-view"},this.state.usedCanvas&&o.a.createElement(c.a,{disabled:!0,hideGrid:!0}),o.a.createElement(a.a,{slides:this.props.slides,hash:this.props.hash,showIndex:!1}))}}])&&v(n.prototype,r),i&&v(n,i),t}()}}]);