!function(e){"use strict";function t(){var e=["<div class='player-controls'>","<div class='player-progress'>","<label for='seek{id}' class='sr-only'>Seek</label>","<input id='seek{id}' class='player-progress-seek' type='range' min='0' max='100' step='0.5' value='0' data-player='seek'>","<progress class='player-progress-played' max='100' value='0'>","<span>0</span>% played","</progress>","<progress class='player-progress-buffer' max='100' value='0'>","<span>0</span>% buffered","</progress>","</div>","<span class='player-controls-left'>"];return a(T.controls,"restart")&&e.push("<button type='button' data-player='restart'>","<svg><use xlink:href='#icon-restart'></use></svg>","<span class='sr-only'>Restart</span>","</button>"),a(T.controls,"rewind")&&e.push("<button type='button' data-player='rewind'>","<svg><use xlink:href='#icon-rewind'></use></svg>","<span class='sr-only'>Rewind {seektime} secs</span>","</button>"),a(T.controls,"play")&&e.push("<button type='button' data-player='play'>","<svg><use xlink:href='#icon-play'></use></svg>","<span class='sr-only'>Play</span>","</button>","<button type='button' data-player='pause'>","<svg><use xlink:href='#icon-pause'></use></svg>","<span class='sr-only'>Pause</span>","</button>"),a(T.controls,"fast-forward")&&e.push("<button type='button' data-player='fast-forward'>","<svg><use xlink:href='#icon-fast-forward'></use></svg>","<span class='sr-only'>Forward {seektime} secs</span>","</button>"),a(T.controls,"current-time")&&e.push("<span class='player-time'>","<span class='sr-only'>Current time</span>","<span class='player-current-time'>00:00</span>","</span>"),a(T.controls,"duration")&&e.push("<span class='player-time'>","<span class='sr-only'>Duration</span>","<span class='player-duration'>00:00</span>","</span>"),e.push("</span>","<span class='player-controls-right'>"),a(T.controls,"mute")&&e.push("<input class='inverted sr-only' id='mute{id}' type='checkbox' data-player='mute'>","<label id='mute{id}' for='mute{id}'>","<svg class='icon-muted'><use xlink:href='#icon-muted'></use></svg>","<svg><use xlink:href='#icon-volume'></use></svg>","<span class='sr-only'>Toggle Mute</span>","</label>"),a(T.controls,"volume")&&e.push("<label for='volume{id}' class='sr-only'>Volume</label>","<input id='volume{id}' class='player-volume' type='range' min='0' max='10' value='5' data-player='volume'>"),a(T.controls,"captions")&&e.push("<input class='sr-only' id='captions{id}' type='checkbox' data-player='captions'>","<label for='captions{id}'>","<svg class='icon-captions-on'><use xlink:href='#icon-captions-on'></use></svg>","<svg><use xlink:href='#icon-captions-off'></use></svg>","<span class='sr-only'>Toggle Captions</span>","</label>"),a(T.controls,"fullscreen")&&e.push("<button type='button' data-player='fullscreen'>","<svg class='icon-exit-fullscreen'><use xlink:href='#icon-exit-fullscreen'></use></svg>","<svg><use xlink:href='#icon-enter-fullscreen'></use></svg>","<span class='sr-only'>Toggle Fullscreen</span>","</button>"),e.push("</span>","</div>"),e.join("")}function n(e,t){T.debug&&window.console&&console[t?"error":"log"](e)}function r(){var e,t,n,r=navigator.userAgent,s=navigator.appName,a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",a="11;"):-1!==(t=r.indexOf("MSIE"))?(s="IE",a=r.substring(t+5)):-1!==(t=r.indexOf("Chrome"))?(s="Chrome",a=r.substring(t+7)):-1!==(t=r.indexOf("Safari"))?(s="Safari",a=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(a=r.substring(t+8))):-1!==(t=r.indexOf("Firefox"))?(s="Firefox",a=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(s=r.substring(e,t),a=r.substring(t+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(n=a.indexOf(";"))&&(a=a.substring(0,n)),-1!==(n=a.indexOf(" "))&&(a=a.substring(0,n)),o=parseInt(""+a,10),isNaN(o)&&(a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),{name:s,version:o,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform)}}function s(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function a(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function o(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function i(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,s=e[n],a=s.parentNode,o=s.nextSibling;r.appendChild(s),o?a.insertBefore(r,o):a.appendChild(r)}}function l(e){e.parentNode.removeChild(e)}function u(e,t){e.insertBefore(t,e.firstChild)}function c(e,t){for(var n in t)e.setAttribute(n,t[n])}function p(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function d(e,t,n,r){if(t=t.split(" "),e instanceof NodeList)for(var s=0;s<e.length;s++)e[s]instanceof Node&&d(e[s],arguments[1],arguments[2],arguments[3]);else for(var a=0;a<t.length;a++)e[r?"addEventListener":"removeEventListener"](t[a],n,!1)}function f(e,t,n){e&&d(e,t,n,!0)}function m(e,t,n){e&&d(e,t,n,!1)}function y(e,t){var n=document.createEvent("MouseEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function v(e){return e.keyCode&&13!=e.keyCode?!0:(e.target.checked=!e.target.checked,y(e.target,"change"),void 0)}function g(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function b(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},b(e[n],t[n])):e[n]=t[n];return e}function h(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++){if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return"webkit"===e.prefix&&navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&(e.supportsFullScreen=!1),e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=document),this.prefix){case"":return document.fullscreenElement==e;default:return document[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]("webkit"===this.prefix?e.ALLOW_KEYBOARD_INPUT:null)},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),e}function k(){var e={supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}()};return e}function x(a){function d(e){if(!rt.usingTextTracks&&"video"===rt.type&&rt.supported.full){for(rt.subcount=0,e="number"==typeof e?e:rt.media.currentTime;x(rt.captions[rt.subcount][0])<e.toFixed(1);)if(rt.subcount++,rt.subcount>rt.captions.length-1){rt.subcount=rt.captions.length-1;break}rt.media.currentTime.toFixed(1)>=b(rt.captions[rt.subcount][0])&&rt.media.currentTime.toFixed(1)<=x(rt.captions[rt.subcount][0])?(rt.currentCaption=rt.captions[rt.subcount][1],rt.captionsContainer.innerHTML=rt.currentCaption):rt.captionsContainer.innerHTML=""}}function y(){rt.buttons.captions&&(p(rt.container,T.classes.captions.enabled,!0),T.captions.defaultActive&&(p(rt.container,T.classes.captions.active,!0),rt.buttons.captions.checked=!0))}function b(e){var t=[];return t=e.split(" --> "),F(t[0])}function x(e){var t=[];return t=e.split(" --> "),F(t[1])}function F(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function S(e){return rt.container.querySelectorAll(e)}function C(e){return S(e)[0]}function E(){try{return window.self!==window.top}catch(e){return!0}}function A(){var e=T.html;if(n("Injecting custom controls."),e||(e=t()),e=o(e,"{seektime}",T.seekTime),e=o(e,"{id}",Math.floor(1e4*Math.random())),rt.container.insertAdjacentHTML("beforeend",e),T.tooltips)for(var r=S(T.selectors.labels),s=r.length-1;s>=0;s--){var a=r[s];p(a,T.classes.hidden,!1),p(a,T.classes.tooltip,!0)}}function N(){try{return rt.controls=C(T.selectors.controls),rt.buttons={},rt.buttons.seek=C(T.selectors.buttons.seek),rt.buttons.play=C(T.selectors.buttons.play),rt.buttons.pause=C(T.selectors.buttons.pause),rt.buttons.restart=C(T.selectors.buttons.restart),rt.buttons.rewind=C(T.selectors.buttons.rewind),rt.buttons.forward=C(T.selectors.buttons.forward),rt.buttons.fullscreen=C(T.selectors.buttons.fullscreen),rt.buttons.mute=C(T.selectors.buttons.mute),rt.buttons.captions=C(T.selectors.buttons.captions),rt.checkboxes=S("[type='checkbox']"),rt.progress={},rt.progress.container=C(T.selectors.progress.container),rt.progress.buffer={},rt.progress.buffer.bar=C(T.selectors.progress.buffer),rt.progress.buffer.text=rt.progress.buffer.bar&&rt.progress.buffer.bar.getElementsByTagName("span")[0],rt.progress.played={},rt.progress.played.bar=C(T.selectors.progress.played),rt.progress.played.text=rt.progress.played.bar&&rt.progress.played.bar.getElementsByTagName("span")[0],rt.volume=C(T.selectors.buttons.volume),rt.duration=C(T.selectors.duration),rt.currentTime=C(T.selectors.currentTime),rt.seekTime=S(T.selectors.seekTime),!0}catch(e){return n("It looks like there's a problem with your controls html. Bailing.",!0),rt.media.setAttribute("controls",""),!1}}function P(){if(rt.buttons.play){var e=rt.buttons.play.innerText||"Play";"undefined"!=typeof T.title&&T.title.length&&(e+=", "+T.title),rt.buttons.play.setAttribute("aria-label",e)}}function I(){if(!rt.media)return n("No audio or video element found!",!0),!1;if(rt.supported.full&&(rt.media.removeAttribute("controls"),p(rt.container,T.classes[rt.type],!0),p(rt.container,T.classes.stopped,null===rt.media.getAttribute("autoplay")),rt.browser.ios&&p(rt.container,"ios",!0),"video"===rt.type)){var e=document.createElement("div");e.setAttribute("class",T.classes.videoWrapper),i(rt.media,e),rt.videoContainer=e}null!==rt.media.getAttribute("autoplay")&&O()}function M(){if("video"===rt.type){rt.videoContainer.insertAdjacentHTML("afterbegin","<div class='"+T.selectors.captions.replace(".","")+"'></div>"),rt.captionsContainer=C(T.selectors.captions),rt.usingTextTracks=!1,rt.media.textTracks&&(rt.usingTextTracks=!0);for(var e,t="",r=rt.media.childNodes,s=0;s<r.length;s++)"track"===r[s].nodeName.toLowerCase()&&(e=r[s].getAttribute("kind"),"captions"===e&&(t=r[s].getAttribute("src")));if(rt.captionExists=!0,""===t?(rt.captionExists=!1,n("No caption track found.")):n("Caption track found; URI: "+t),rt.captionExists){for(var a=rt.media.textTracks,o=0;o<a.length;o++)a[o].mode="hidden";if(y(rt),("IE"===rt.browser.name&&10===rt.browser.version||"IE"===rt.browser.name&&11===rt.browser.version||"Firefox"===rt.browser.name&&rt.browser.version>=31||"Safari"===rt.browser.name&&rt.browser.version>=7)&&(n("Detected IE 10/11 or Firefox 31+ or Safari 7+."),rt.usingTextTracks=!1),rt.usingTextTracks){n("TextTracks supported.");for(var i=0;i<a.length;i++){var l=a[i];"captions"===l.kind&&f(l,"cuechange",function(){rt.captionsContainer.innerHTML="",this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&rt.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML())})}}else if(n("TextTracks not supported so rendering captions manually."),rt.currentCaption="",rt.captions=[],""!==t){var u=new XMLHttpRequest;u.onreadystatechange=function(){if(4===u.readyState)if(200===u.status){var e,t=[],r=u.responseText;t=r.split("\n\n");for(var s=0;s<t.length;s++)e=t[s],rt.captions[s]=[],rt.captions[s]=e.split("\n");rt.captions.shift(),n("Successfully loaded the caption file via AJAX.")}else n("There was a problem loading the caption file via AJAX.",!0)},u.open("get",t,!0),u.send()}if("Safari"===rt.browser.name&&rt.browser.version>=7){n("Safari 7+ detected; removing track from DOM."),a=rt.media.getElementsByTagName("track");for(var c=0;c<a.length;c++)rt.media.removeChild(a[c])}}else p(rt.container,T.classes.captions.enabled)}}function L(){if("video"===rt.type&&T.fullscreen.enabled){var e=w.supportsFullScreen;e||T.fullscreen.fallback&&!E()?(n((e?"Native":"Fallback")+" fullscreen enabled."),p(rt.container,T.classes.fullscreen.enabled,!0)):n("Fullscreen not supported and fallback disabled."),T.fullscreen.hideControls&&p(rt.container,T.classes.fullscreen.hideControls,!0)}}function O(){rt.media.play()}function q(){rt.media.pause()}function H(e){"number"!=typeof e&&(e=T.seekTime),R(rt.media.currentTime-e)}function V(e){"number"!=typeof e&&(e=T.seekTime),R(rt.media.currentTime+e)}function R(e){var t=0;"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*rt.media.duration),0>t?t=0:t>rt.media.duration&&(t=rt.media.duration);try{rt.media.currentTime=t.toFixed(1)}catch(r){}n("Seeking to "+rt.media.currentTime+" seconds"),d(t)}function j(){p(rt.container,T.classes.playing,!rt.media.paused),p(rt.container,T.classes.stopped,rt.media.paused)}function B(e){var t=w.supportsFullScreen;e&&e.type===w.fullScreenEventName?rt.isFullscreen=w.isFullScreen(rt.container):t?(w.isFullScreen(rt.container)?w.cancelFullScreen():w.requestFullScreen(rt.container),rt.isFullscreen=w.isFullScreen(rt.container)):(rt.isFullscreen=!rt.isFullscreen,rt.isFullscreen?(f(document,"keyup",D),document.body.style.overflow="hidden"):(m(document,"keyup",D),document.body.style.overflow="")),p(rt.container,T.classes.fullscreen.active,rt.isFullscreen)}function D(e){27===(e.which||e.charCode||e.keyCode)&&rt.isFullscreen&&B()}function W(e){rt.volume&&("undefined"==typeof e&&(e=T.storage.enabled&&k().supported?window.localStorage[T.storage.key]||T.volume:T.volume),e>10&&(e=10),rt.supported.full&&(rt.volume.value=e),rt.media.volume=parseFloat(e/10),_(),T.storage.enabled&&k().supported&&window.localStorage.setItem(T.storage.key,e))}function U(e){"undefined"==typeof e&&(e=!rt.media.muted),rt.supported.full&&(rt.buttons.mute.checked=e),rt.media.muted=e,_()}function X(e){rt.supported.full&&rt.buttons.captions&&("undefined"==typeof e&&(e=-1===rt.container.className.indexOf(T.classes.captions.active),rt.buttons.captions.checked=e),p(rt.container,T.classes.captions.active,e))}function _(){p(rt.container,T.classes.muted,0===rt.media.volume||rt.media.muted)}function J(e){var t="waiting"===e.type;clearTimeout(rt.loadingTimer),rt.loadingTimer=setTimeout(function(){p(rt.container,T.classes.loading,t)},t?250:0)}function $(e){var t=rt.progress.played.bar,n=rt.progress.played.text,r=0;if(e)switch(e.type){case"timeupdate":case"seeking":r=g(rt.media.currentTime,rt.media.duration),"timeupdate"==e.type&&rt.buttons.seek&&(rt.buttons.seek.value=r);break;case"change":case"input":r=e.target.value;break;case"playing":case"progress":t=rt.progress.buffer.bar,n=rt.progress.buffer.text,r=function(){var e=rt.media.buffered;return e.length?g(e.end(0),rt.media.duration):0}()}t&&(t.value=r),n&&(n.innerHTML=r)}function z(e,t){if(t){rt.secs=parseInt(e%60),rt.mins=parseInt(e/60%60),rt.hours=parseInt(e/60/60%60);var n=parseInt(rt.media.duration/60/60%60)>0;rt.secs=("0"+rt.secs).slice(-2),rt.mins=("0"+rt.mins).slice(-2),t.innerHTML=(n?rt.hours+":":"")+rt.mins+":"+rt.secs}}function K(){var e=rt.media.duration||0;!rt.duration&&T.displayDuration&&rt.media.paused&&z(e,rt.currentTime),rt.duration&&z(e,rt.duration)}function Y(e){z(rt.media.currentTime,rt.currentTime),$(e)}function G(){for(var e=rt.media.querySelectorAll("source"),t=e.length-1;t>=0;t--)l(e[t]);rt.media.removeAttribute("src")}function Q(e){if(e.src){var t=document.createElement("source");c(t,e),u(rt.media,t)}}function Z(e){if(q(),R(),G(),"string"==typeof e)rt.media.setAttribute("src",e);else if(e.constructor===Array)for(var t in e)Q(e[t]);rt.supported.full&&(Y(),j()),rt.media.load(),null!==rt.media.getAttribute("autoplay")&&O()}function et(e){"video"===rt.type&&rt.media.setAttribute("poster",e)}function tt(){var e="IE"==rt.browser.name?"change":"input";f(rt.buttons.play,"click",function(){O(),setTimeout(function(){rt.buttons.pause.focus()},100)}),f(rt.buttons.pause,"click",function(){q(),setTimeout(function(){rt.buttons.play.focus()},100)}),f(rt.buttons.restart,"click",R),f(rt.buttons.rewind,"click",H),f(rt.buttons.forward,"click",V),f(rt.buttons.seek,e,R),f(rt.volume,e,function(){W(this.value)}),f(rt.buttons.mute,"change",function(){U(this.checked)}),f(rt.buttons.fullscreen,"click",B),w.supportsFullScreen&&f(document,w.fullScreenEventName,B),f(rt.media,"timeupdate seeking",Y),f(rt.media,"timeupdate",d),f(rt.media,"loadedmetadata",K),f(rt.buttons.captions,"change",function(){X(this.checked)}),f(rt.media,"ended",function(){"video"===rt.type&&(rt.captionsContainer.innerHTML=""),j()}),f(rt.media,"progress",$),f(rt.media,"playing",$),f(rt.media,"volumechange",_),f(rt.media,"play pause",j),f(rt.media,"waiting canplay seeked",J),f(rt.checkboxes,"keyup",v),"video"===rt.type&&T.click&&f(rt.videoContainer,"click",function(){rt.media.paused?O():rt.media.ended?(R(),O()):q()}),T.fullscreen.hideControls&&f(rt.controls,"mouseenter mouseleave",function(e){p(rt.controls,T.classes.hover,"mouseenter"===e.type)})}function nt(){if(w=h(),rt.browser=r(),rt.media=rt.container.querySelectorAll("audio, video")[0],rt.type=rt.media.tagName.toLowerCase(),rt.supported=e.supported(rt.type),!rt.supported.basic)return!1;if(n(rt.browser.name+" "+rt.browser.version),I(),rt.supported.full){if(A(),!N())return!1;T.displayDuration&&K(),P(),M(),W(),L(),tt()}return!0}var rt=this;return rt.container=a,nt()?{media:rt.media,play:O,pause:q,restart:R,rewind:H,forward:V,seek:R,source:Z,poster:et,setVolume:W,toggleMute:U,toggleCaptions:X,toggleFullscreen:B,isFullscreen:function(){return rt.isFullscreen||!1},support:function(e){return s(rt,e)}}:{}}var w,T,F={enabled:!0,debug:!1,seekTime:10,volume:5,click:!0,tooltips:!1,displayDuration:!0,selectors:{container:".player",controls:".player-controls",labels:"[data-player] .sr-only, label .sr-only",buttons:{seek:"[data-player='seek']",play:"[data-player='play']",pause:"[data-player='pause']",restart:"[data-player='restart']",rewind:"[data-player='rewind']",forward:"[data-player='fast-forward']",mute:"[data-player='mute']",volume:"[data-player='volume']",captions:"[data-player='captions']",fullscreen:"[data-player='fullscreen']"},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",currentTime:".player-current-time",duration:".player-duration"},classes:{video:"player-video",videoWrapper:"player-video-wrapper",audio:"player-audio",stopped:"stopped",playing:"playing",muted:"muted",loading:"loading",tooltip:"player-tooltip",hidden:"sr-only",hover:"hover",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active",hideControls:"fullscreen-hide-controls"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,hideControls:!0},storage:{enabled:!0,key:"plyr_volume"},controls:["restart","rewind","play","fast-forward","current-time","duration","mute","volume","captions","fullscreen"],onSetup:function(){}};e.supported=function(e){var t,n,s=r(),a="IE"===s.name&&s.version<=9,o=/iPhone|iPod/i.test(navigator.userAgent),i=!!document.createElement("audio").canPlayType,l=!!document.createElement("video").canPlayType;switch(e){case"video":t=l,n=t&&!a&&!o;break;case"audio":t=i,n=t&&!a;break;default:t=i&&l,n=t&&!a}return{basic:t,full:n}},e.setup=function(t){if(T=b(F,t),!T.enabled||!e.supported().basic)return!1;for(var n=document.querySelectorAll(T.selectors.container),r=[],s=n.length-1;s>=0;s--){var a=n[s];if("undefined"==typeof a.plyr){var o=new x(a);a.plyr=Object.keys(o).length?o:!1,T.onSetup.apply(a.plyr)}r.push(a.plyr)}return r}}(this.plyr=this.plyr||{});