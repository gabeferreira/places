!function(i){function t(i,t,n,e,s){this._listener=t,this._isOnce=n,this.context=e,this._signal=i,this._priority=s||0}function n(i,t){if("function"!=typeof i)throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",t))}function e(){this._bindings=[],this._prevParams=null;var i=this;this.dispatch=function(){e.prototype.dispatch.apply(i,arguments)}}t.prototype={active:!0,params:null,execute:function(i){var t;return this.active&&this._listener&&(i=this.params?this.params.concat(i):i,t=this._listener.apply(this.context,i),this._isOnce&&this.detach()),t},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal,delete this._listener,delete this.context},toString:function(){return"[SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}},e.prototype={VERSION:"1.0.0",memorize:!1,_shouldPropagate:!0,active:!0,_registerListener:function(i,n,e,s){var r=this._indexOfListener(i,e);if(r!==-1){if(i=this._bindings[r],i.isOnce()!==n)throw Error("You cannot add"+(n?"":"Once")+"() then add"+(n?"Once":"")+"() the same listener without removing the relationship first.")}else i=new t(this,i,n,e,s),this._addBinding(i);return this.memorize&&this._prevParams&&i.execute(this._prevParams),i},_addBinding:function(i){var t=this._bindings.length;do--t;while(this._bindings[t]&&i._priority<=this._bindings[t]._priority);this._bindings.splice(t+1,0,i)},_indexOfListener:function(i,t){for(var n,e=this._bindings.length;e--;)if(n=this._bindings[e],n._listener===i&&n.context===t)return e;return-1},has:function(i,t){return this._indexOfListener(i,t)!==-1},add:function(i,t,e){return n(i,"add"),this._registerListener(i,!1,t,e)},addOnce:function(i,t,e){return n(i,"addOnce"),this._registerListener(i,!0,t,e)},remove:function(i,t){n(i,"remove");var e=this._indexOfListener(i,t);return e!==-1&&(this._bindings[e]._destroy(),this._bindings.splice(e,1)),i},removeAll:function(){for(var i=this._bindings.length;i--;)this._bindings[i]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(i){if(this.active){var t,n=Array.prototype.slice.call(arguments),e=this._bindings.length;if(this.memorize&&(this._prevParams=n),e){t=this._bindings.slice(),this._shouldPropagate=!0;do e--;while(t[e]&&this._shouldPropagate&&t[e].execute(n)!==!1)}}},forget:function(){this._prevParams=null},dispose:function(){this.removeAll(),delete this._bindings,delete this._prevParams},toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}};var s=e;s.Signal=e,"function"==typeof define&&define.amd?define(function(){return s}):"undefined"!=typeof module&&module.exports?module.exports=s:i.signals=s}(this);
!function(){var e=function(e){function t(e,t){if(e.indexOf)return e.indexOf(t);for(var r=e.length;r--;)if(e[r]===t)return r;return-1}function r(e,r){var n=t(e,r);n!==-1&&e.splice(n,1)}function n(e,t){return"[object "+t+"]"===Object.prototype.toString.call(e)}function s(e){return n(e,"RegExp")}function i(e){return n(e,"Array")}function a(e){return"function"==typeof e}function o(e){var t;return t=null===e||"null"===e?null:"true"===e||"false"!==e&&(e===f||"undefined"===e?f:""===e||isNaN(e)?e:parseFloat(e))}function u(e){for(var t=e.length,r=[];t--;)r[t]=o(e[t]);return r}function h(e,t){for(var r,n,s,a,u=(e||"").replace("?","").split("&"),h=-1,c={};n=u[++h];)r=n.indexOf("="),a=n.substring(0,r),s=decodeURIComponent(n.substring(r+1)),t!==!1&&(s=o(s)),a in c?i(c[a])?c[a].push(s):c[a]=[c[a],s]:c[a]=s;return c}function c(){this.bypassed=new e.Signal,this.routed=new e.Signal,this._routes=[],this._prevRoutes=[],this._piped=[],this.resetState()}function p(t,r,n,i){var a=s(t),o=i.patternLexer;this._router=i,this._pattern=t,this._paramsIds=a?null:o.getParamIds(t),this._optionalParamsIds=a?null:o.getOptionalParamsIds(t),this._matchRegexp=a?t:o.compilePattern(t,i.ignoreCase),this.matched=new e.Signal,this.switched=new e.Signal,r&&this.matched.add(r),this._priority=n||0}var d,l,f;return l=""===/t(.+)?/.exec("t")[1],c.prototype={greedy:!1,greedyEnabled:!0,ignoreCase:!0,ignoreState:!1,shouldTypecast:!1,normalizeFn:null,resetState:function(){this._prevRoutes.length=0,this._prevMatchedRequest=null,this._prevBypassedRequest=null},create:function(){return new c},addRoute:function(e,t,r){var n=new p(e,t,r,this);return this._sortedInsert(n),n},removeRoute:function(e){r(this._routes,e),e._destroy()},removeAllRoutes:function(){for(var e=this.getNumRoutes();e--;)this._routes[e]._destroy();this._routes.length=0},parse:function(e,t){if(e=e||"",t=t||[],this.ignoreState||e!==this._prevMatchedRequest&&e!==this._prevBypassedRequest){var r,n=this._getMatchedRoutes(e),s=0,i=n.length;if(i)for(this._prevMatchedRequest=e,this._notifyPrevRoutes(n,e),this._prevRoutes=n;s<i;)r=n[s],r.route.matched.dispatch.apply(r.route.matched,t.concat(r.params)),r.isFirst=!s,this.routed.dispatch.apply(this.routed,t.concat([e,r])),s+=1;else this._prevBypassedRequest=e,this.bypassed.dispatch.apply(this.bypassed,t.concat([e]));this._pipeParse(e,t)}},_notifyPrevRoutes:function(e,t){for(var r,n=0;r=this._prevRoutes[n++];)r.route.switched&&this._didSwitch(r.route,e)&&r.route.switched.dispatch(t)},_didSwitch:function(e,t){for(var r,n=0;r=t[n++];)if(r.route===e)return!1;return!0},_pipeParse:function(e,t){for(var r,n=0;r=this._piped[n++];)r.parse(e,t)},getNumRoutes:function(){return this._routes.length},_sortedInsert:function(e){var t=this._routes,r=t.length;do--r;while(t[r]&&e._priority<=t[r]._priority);t.splice(r+1,0,e)},_getMatchedRoutes:function(e){for(var t,r=[],n=this._routes,s=n.length;(t=n[--s])&&((!r.length||this.greedy||t.greedy)&&t.match(e)&&r.push({route:t,params:t._getParamsArray(e)}),this.greedyEnabled||!r.length););return r},pipe:function(e){this._piped.push(e)},unpipe:function(e){r(this._piped,e)},toString:function(){return"[crossroads numRoutes:"+this.getNumRoutes()+"]"}},d=new c,d.VERSION="0.12.2",d.NORM_AS_ARRAY=function(e,t){return[t.vals_]},d.NORM_AS_OBJECT=function(e,t){return[t]},p.prototype={greedy:!1,rules:void 0,match:function(e){return e=e||"",this._matchRegexp.test(e)&&this._validateParams(e)},_validateParams:function(e){var t,r=this.rules,n=this._getParamsObject(e);for(t in r)if("normalize_"!==t&&r.hasOwnProperty(t)&&!this._isValidParam(e,t,n))return!1;return!0},_isValidParam:function(e,r,n){var o=this.rules[r],u=n[r],h=!1,c=0===r.indexOf("?");return null==u&&this._optionalParamsIds&&t(this._optionalParamsIds,r)!==-1?h=!0:s(o)?(c&&(u=n[r+"_"]),h=o.test(u)):i(o)?(c&&(u=n[r+"_"]),h=this._isValidArrayRule(o,u)):a(o)&&(h=o(u,e,n)),h},_isValidArrayRule:function(e,r){if(!this._router.ignoreCase)return t(e,r)!==-1;"string"==typeof r&&(r=r.toLowerCase());for(var n,s,i=e.length;i--;)if(n=e[i],s="string"==typeof n?n.toLowerCase():n,s===r)return!0;return!1},_getParamsObject:function(e){for(var r,n,s=this._router.shouldTypecast,i=this._router.patternLexer.getParamValues(e,this._matchRegexp,s),a={},u=i.length;u--;)n=i[u],this._paramsIds&&(r=this._paramsIds[u],0===r.indexOf("?")&&n&&(a[r+"_"]=n,n=h(n,s),i[u]=n),l&&""===n&&t(this._optionalParamsIds,r)!==-1&&(n=void 0,i[u]=n),a[r]=n),a[u]=n;return a.request_=s?o(e):e,a.vals_=i,a},_getParamsArray:function(e){var t,r=this.rules?this.rules.normalize_:null;return r=r||this._router.normalizeFn,t=r&&a(r)?r(e,this._getParamsObject(e)):this._getParamsObject(e).vals_},interpolate:function(e){var t=this._router.patternLexer.interpolate(this._pattern,e);if(!this._validateParams(t))throw new Error("Generated string doesn't validate against `Route.rules`.");return t},dispose:function(){this._router.removeRoute(this)},_destroy:function(){this.matched.dispose(),this.switched.dispose(),this.matched=this.switched=this._pattern=this._matchRegexp=null},toString:function(){return'[Route pattern:"'+this._pattern+'", numListeners:'+this.matched.getNumListeners()+"]"}},c.prototype.patternLexer=function(){function e(){var e,t;for(e in f)f.hasOwnProperty(e)&&(t=f[e],t.id="__CR_"+e+"__",t.save="save"in t?t.save.replace("{{id}}",t.id):t.id,t.rRestore=new RegExp(t.id,"g"))}function t(e,t){var r,n=[];for(e.lastIndex=0;r=e.exec(t);)n.push(r[1]);return n}function r(e){return t(l,e)}function n(e){return t(f.OP.rgx,e)}function s(e,t){return e=e||"",e&&(m===g?e=e.replace(p,""):m===v&&(e=e.replace(d,"")),e=a(e,"rgx","save"),e=e.replace(c,"\\$&"),e=a(e,"rRestore","res"),m===g&&(e="\\/?"+e)),m!==_&&(e+="\\/?"),new RegExp("^"+e+"$",t?"i":"")}function a(e,t,r){var n,s;for(s in f)f.hasOwnProperty(s)&&(n=f[s],e=e.replace(n[t],n[r]));return e}function o(e,t,r){var n=t.exec(e);return n&&(n.shift(),r&&(n=u(n))),n}function h(e,t){if(t=t||{},"string"!=typeof e)throw new Error("Route pattern should be a string.");var r=function(e,r){var n;if(r="?"===r.substr(0,1)?r.substr(1):r,null!=t[r]){if("object"==typeof t[r]){var s,a=[];for(var o in t[r])if(s=t[r][o],i(s))for(var u in s)"[]"==o.slice(-2)?a.push(encodeURI(o.slice(0,-2))+"[]="+encodeURI(s[u])):a.push(encodeURI(o+"="+s[u]));else a.push(encodeURI(o+"="+s));n="?"+a.join("&")}else n=String(t[r]);if(e.indexOf("*")===-1&&n.indexOf("/")!==-1)throw new Error('Invalid value "'+n+'" for segment "'+e+'".')}else{if(e.indexOf("{")!==-1)throw new Error("The segment "+e+" is required.");n=""}return n};return f.OS.trail||(f.OS.trail=new RegExp("(?:"+f.OS.id+")+$")),e.replace(f.OS.rgx,f.OS.save).replace(l,r).replace(f.OS.trail,"").replace(f.OS.rRestore,"/")}var c=/[\\.+*?\^$\[\](){}\/'#]/g,p=/^\/|\/$/g,d=/\/$/g,l=/(?:\{|:)([^}:]+)(?:\}|:)/g,f={OS:{rgx:/([:}]|\w(?=\/))\/?(:|(?:\{\?))/g,save:"$1{{id}}$2",res:"\\/?"},RS:{rgx:/([:}])\/?(\{)/g,save:"$1{{id}}$2",res:"\\/"},RQ:{rgx:/\{\?([^}]+)\}/g,res:"\\?([^#]+)"},OQ:{rgx:/:\?([^:]+):/g,res:"(?:\\?([^#]*))?"},OR:{rgx:/:([^:]+)\*:/g,res:"(.*)?"},RR:{rgx:/\{([^}]+)\*\}/g,res:"(.+)"},RP:{rgx:/\{([^}]+)\}/g,res:"([^\\/?]+)"},OP:{rgx:/:([^:]+):/g,res:"([^\\/?]+)?/?"}},g=1,_=2,v=3,m=g;return e(),{strict:function(){m=_},loose:function(){m=g},legacy:function(){m=v},getParamIds:r,getOptionalParamsIds:n,getParamValues:o,compilePattern:s,interpolate:h}}(),d};"function"==typeof define&&define.amd?define(["signals"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("signals")):window.crossroads=e(window.signals)}();
!function(){var e=function(e){var n=function(n){function t(e){return String(e||"").replace(/\W/g,"\\$&")}function a(e){if(!e)return"";var n=new RegExp("^"+t(l.prependHash)+"|"+t(l.appendHash)+"$","g");return e.replace(n,"")}function r(){var e=R.exec(l.getURL()),n=e&&e[1]||"";try{return l.raw?n:decodeURIComponent(n)}catch(e){return n}}function i(){return w?w.contentWindow.frameHash:null}function o(){w=y.createElement("iframe"),w.src="about:blank",w.style.display="none",y.body.appendChild(w)}function c(){if(w&&f!==i()){var e=w.contentWindow.document;e.open(),e.write("<html><head><title>"+y.title+'</title><script type="text/javascript">var frameHash="'+f+'";</script></head><body>&nbsp;</body></html>'),e.close()}}function s(e,n){if(f!==e){var t=f;f=e,x&&(n?w.contentWindow.frameHash=e:c()),l.changed.dispatch(a(e),a(t))}}function p(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent&&e.attachEvent("on"+n,t)}function d(e,n,t){e.removeEventListener?e.removeEventListener(n,t,!1):e.detachEvent&&e.detachEvent("on"+n,t)}function u(e){e=Array.prototype.slice.call(arguments);var n=e.join(l.separator);return n=n?l.prependHash+n.replace(b,"")+l.appendHash:n}function h(e){return e=encodeURI(e),I&&z&&(e=e.replace(/\?/,"%3F")),e}var l,f,v,g,w,m,H=25,y=n.document,E=(n.history,e.Signal),R=/#(.*)$/,L=/(\?.*)|(\#.*)/,b=/^\#/,I=!1,U="onhashchange"in n&&7!==y.documentMode,x=I&&!U,z="file:"===location.protocol;return m=x?function(){var e=r(),n=i();n!==f&&n!==e?l.setHash(a(n)):e!==f&&s(e)}:function(){var e=r();e!==f&&s(e)},l={VERSION:"1.2.0",raw:!1,appendHash:"",prependHash:"/",separator:"/",changed:new E,stopped:new E,initialized:new E,init:function(){g||(f=r(),U?p(n,"hashchange",m):(x&&(w||o(),c()),v=setInterval(m,H)),g=!0,l.initialized.dispatch(a(f)))},stop:function(){g&&(U?d(n,"hashchange",m):(clearInterval(v),v=null),g=!1,l.stopped.dispatch(a(f)))},isActive:function(){return g},getURL:function(){return n.location.href},getBaseURL:function(){return l.getURL().replace(L,"")},setHash:function(e){e=u.apply(null,arguments),e!==f&&(s(e),e===f&&(l.raw||(e=h(e)),n.location.hash="#"+e))},replaceHash:function(e){e=u.apply(null,arguments),e!==f&&(s(e,!0),e===f&&(l.raw||(e=h(e)),n.location.replace("#"+e)))},getHash:function(){return a(f)},getHashAsArray:function(){return l.getHash().split(l.separator)},dispose:function(){l.stop(),l.initialized.dispose(),l.stopped.dispose(),l.changed.dispose(),w=l=n.hasher=null},toString:function(){return'[hasher version="'+l.VERSION+'" hash="'+l.getHash()+'"]'}},l.initialized.memorize=!0,l}(window);return n};"function"==typeof define&&define.amd?define(["signals"],e):"object"==typeof exports?module.exports=e(require("signals")):window.hasher=e(window.signals)}();
var locations=[{url:"madeira",title:"Madeira",date:"09.11.2016",coordinates:{lat:32.6519356,lng:-16.9100971},flag:"madeira",content:[{type:"image",size:"fullScreen",path:"madeira-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"madeira-3x2-002.jpg"},{type:"image",size:"landscape",path:"madeira-3x2-003.jpg"},{type:"image",size:"landscape",path:"madeira-3x2-004.jpg"},{type:"image",size:"landscape",path:"madeira-3x2-005.jpg"},{type:"image",size:"landscape",path:"madeira-3x2-006.jpg"},{type:"caption",text:"Freitas &amp; Araújo"},{type:"text",text:"Madeira Island is a special place for me, as it used to be the home of my maternal grandparents before they decided to move to Brazil. Finding the house in which they lived the early years of their lives (they were neighbors prior to getting married) proved to be a challenge: none of my relatives knew the address, though I had the name of a fellow villager who could help."},{type:"text",text:"Fortunately, I was able to connect with a 4th-degree cousin whose bar was located just 100 meters from the hostel in whichI stayed (I didn’t know about her or the bar prior to booking my accommodation). I owe  the fact that I could locate my roots on the island to to Beatriz, João, and their family’s amazing hospitality and willingness to help."}]},{url:"lisbon",title:"Lisbon",date:"31.10.2016",coordinates:{lat:38.7101379,lng:-9.1381656},flag:"lisbon",content:[{type:"image",size:"fullScreen",path:"lisbon-3x2-001-full.jpg"},{type:"image",size:"portrait",path:"lisbon-3x4-001.jpg"},{type:"image",size:"landscape",path:"lisbon-3x2-002.jpg"},{type:"image",size:"landscape",path:"lisbon-3x2-003.jpg"},{type:"image",size:"landscape",path:"lisbon-3x2-004.jpg"},{type:"image",size:"landscape",path:"lisbon-3x2-005.jpg"}]},{url:"london",title:"London",date:"15.10.2016",coordinates:{lat:51.5143837,lng:-.1429347},flag:"england",content:[{type:"image",size:"fullScreen",path:"london-3x2-002-full.jpg"},{type:"image",size:"landscape",path:"london-3x2-001.jpg"},{type:"image",size:"landscape",path:"london-3x2-003.jpg"},{type:"image",size:"landscape",path:"london-3x2-004.jpg"},{type:"image",size:"landscape",path:"london-3x2-005.jpg"},{type:"image",size:"landscape",path:"london-3x2-006.jpg"}]},{url:"berlin",title:"Berlin",date:"28.09.2016",coordinates:{lat:52.5076274,lng:13.1452775},flag:"germany",content:[{type:"image",size:"fullScreen",path:"berlin-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"berlin-3x2-002.jpg"},{type:"image",size:"landscape",path:"berlin-3x2-003.jpg"},{type:"image",size:"landscape",path:"berlin-3x2-004.jpg"},{type:"image",size:"landscape",path:"berlin-3x2-005.jpg"},{type:"image",size:"landscape",path:"berlin-3x2-006.jpg"},{type:"image",size:"landscape",path:"berlin-3x2-007.jpg"}]},{url:"prague",title:"Prague",date:"23.09.2016",coordinates:{lat:50.0598053,lng:14.3251972},flag:"prague",content:[{type:"image",size:"fullScreen",path:"prague-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"prague-3x2-002.jpg"},{type:"image",size:"landscape",path:"prague-3x2-003.jpg"},{type:"image",size:"landscape",path:"prague-3x2-004.jpg"},{type:"image",size:"landscape",path:"prague-3x2-005.jpg"}]},{url:"vienna",title:"Vienna",date:"18.09.2016",coordinates:{lat:48.2208282,lng:16.2396329},flag:"austria",content:[{type:"image",size:"fullScreen",path:"vienna-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"vienna-3x2-002.jpg"},{type:"image",size:"landscape",path:"vienna-3x2-003.jpg"},{type:"image",size:"landscape",path:"vienna-3x2-004.jpg"},{type:"image",size:"landscape",path:"vienna-3x2-005.jpg"},{type:"caption",text:"Bier und Brot"},{type:"text",text:"My time in Vienna wouldn’t have been the same had I not met a former German professor of mine, Harald Friedl. I’d had the chance to work with Harald on a few projects before, and it was a real pleasure to hear about the city from a local with interesting perspectives. On my last morning there, I was treated to a great breakfast: I ate bread from some of the world’s most prestigious bakers and learned about the unconventional ways with which they approach their craft. Danke schön, Harald!"}]},{url:"budapest",title:"Budapest",date:"13.09.2016",coordinates:{lat:47.4813598,lng:18.9898759},flag:"budapest",content:[{type:"image",size:"fullScreen",path:"budapest-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"budapest-3x2-002.jpg"},{type:"image",size:"portrait",path:"budapest-3x4-001.jpg"},{type:"image",size:"landscape",path:"budapest-3x2-003.jpg"},{type:"image",size:"landscape",path:"budapest-3x2-004.jpg"}]},{url:"split",title:"Split",date:"08.09.2016",coordinates:{lat:43.5149083,lng:16.4139781},flag:"croatia",content:[{type:"image",size:"fullScreen",path:"split-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"split-3x2-002.jpg"},{type:"image",size:"portrait",path:"split-3x4-001.jpg"},{type:"image",size:"landscape",path:"split-3x2-003.jpg"},{type:"image",size:"landscape",path:"split-3x2-004.jpg"}]},{url:"zagreb",title:"Zagreb",date:"04.09.2016",coordinates:{lat:45.8403491,lng:15.8239041},flag:"zagreb",content:[{type:"image",size:"fullScreen",path:"zagreb-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"zagreb-3x2-002.jpg"},{type:"image",size:"landscape",path:"zagreb-3x2-003.jpg"},{type:"image",size:"landscape",path:"zagreb-3x2-004.jpg"},{type:"image",size:"landscape",path:"zagreb-3x2-005.jpg"}]},{url:"bovec",title:"Bovec",date:"01.09.2016",flag:"bovec",coordinates:{lat:46.3427891,lng:13.5064602},content:[{type:"image",size:"fullScreen",path:"bovec-3x2-001-full.jpg"},{type:"caption",text:"Soca Valley"},{type:"text",text:"Bovec, one of the cities in the Soca Valley, was selected as a travel destination completely at random. Whether by luck or destiny, it turned out to be as beautiful as it is small. Given its population of 1,600 (during high-season), it wasn’t a surprise to find out that the hostel’s receptionist was also the bar’s hostess, working 16 hours a day to take advantage of the flow of turists."},{type:"image",size:"landscape",path:"bovec-3x2-002.jpg"},{type:"image",size:"portrait",path:"bovec-3x4-001.jpg"},{type:"caption",text:"Soca River"},{type:"text",text:"At 3°C, the Soca River was almost unswimmable for someone accustomed to warmer waters. Still, it was amazing to jump in after a long, frustrating hike to a waterfall that turned out to be completely dry. The night before we left town marked the official end of the season, which was celebrated with a party at the margins of the Soca. I estimate about 50% of the city was there, the only addressless event I’ve ever attended. “Just walk to the river and follow the noise.”"},{type:"image",size:"landscape",path:"bovec-3x2-003.jpg"},{type:"image",size:"landscape",path:"bovec-3x2-004.jpg"}]},{url:"ljubljana",title:"Ljubljana",date:"28.08.2016",coordinates:{lat:46.0662313,lng:14.4618875},flag:"ljubljana",content:[{type:"image",size:"fullScreen",path:"ljubljana-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"ljubljana-3x2-002.jpg"},{type:"image",size:"landscape",path:"ljubljana-3x2-003.jpg"},{type:"image",size:"landscape",path:"ljubljana-3x2-004.jpg"},{type:"image",size:"landscape",path:"ljubljana-3x2-005.jpg"},{type:"image",size:"landscape",path:"ljubljana-3x2-006.jpg"},{type:"image",size:"landscape",path:"ljubljana-3x2-007.jpg"}]},{url:"saalfelden",title:"Saalfelden",date:"26.08.2016",coordinates:{lat:47.4382296,lng:12.7718184},flag:"austria",content:[{type:"image",size:"fullScreen",path:"saalfelden-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"saalfelden-3x2-002.jpg"},{type:"image",size:"landscape",path:"saalfelden-3x2-003.jpg"}]},{url:"salzburg",title:"Salzburg",date:"22.08.2016",coordinates:{lat:47.8029038,lng:12.9862185},flag:"austria",content:[{type:"image",size:"fullScreen",path:"salzburg-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"salzburg-3x2-002.jpg"},{type:"image",size:"landscape",path:"salzburg-3x2-003.jpg"},{type:"caption",text:"Hallein"},{type:"text",text:"The bike path connecting Salzburg to the city of Hallein follows the Salzach river while offering 20km of peacefulness and tourist-free viewpoints such as the one in the photo above."},{type:"image",size:"landscape",path:"salzburg-3x2-004.jpg"},{type:"caption",text:"Kehlsteinhaus"},{type:"text",text:"Above: the view from “Eagle’s Nest,” Hitler’s infamous tea house. It isn’t in Salzburg, but it was close enough for a day trip."},{type:"image",size:"landscape",path:"salzburg-3x2-005.jpg"}]},{url:"munich",title:"Munich",date:"14.08.2016",coordinates:{lat:48.1390082,lng:11.5588342},flag:"bavaria",content:[{type:"image",size:"fullScreen",path:"munich-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"munich-3x2-002.jpg"},{type:"image",size:"landscape",path:"munich-3x2-003.jpg"},{type:"image",size:"landscape",path:"munich-3x2-004.jpg"},{type:"image",size:"landscape",path:"munich-3x2-005.jpg"}]},{url:"san-francisco",title:"San Francisco",date:"22.04.2016",coordinates:{lat:37.757815,lng:-122.5076402},flag:"usa",content:[{type:"image",size:"fullScreen",path:"san-francisco-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"san-francisco-3x2-002.jpg"},{type:"image",size:"portrait",path:"san-francisco-3x4-001.jpg"},{type:"image",size:"landscape",path:"san-francisco-3x2-003.jpg"},{type:"image",size:"landscape",path:"san-francisco-3x2-004.jpg"}]},{url:"cajon-del-maipo",title:"Cajón del Maipo",date:"13.01.2016",coordinates:{lat:-33.8614073,lng:-69.9777909},flag:"chile",content:[{type:"image",size:"fullScreen",path:"cajon-del-maipo-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"cajon-del-maipo-3x2-002.jpg"},{type:"caption",text:"Baños Colina"},{type:"text",text:"Driving through Cajón del Maipo trying to find Baños Colina was a memorable experience in itself, and though it was not easy to get to these volcano-heated springs on a 1.0 liter engine rental car, it was the best possible way to end an amazing journey through South America."}]},{url:"pucon",title:"Pucón",date:"08.01.2016",coordinates:{lat:-39.2803931,lng:-71.9766899},flag:"chile",content:[{type:"image",size:"fullScreen",path:"pucon-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"pucon-3x2-002.jpg"},{type:"image",size:"landscape",path:"pucon-3x2-003.jpg"},{type:"image",size:"landscape",path:"pucon-3x2-004.jpg"}]},{url:"mar-del-plata",title:"Mar del Plata",date:"02.01.2015",coordinates:{lat:-37.9332167,lng:-57.7822829},flag:"mar_del_plata",content:[{type:"image",size:"fullScreen",path:"mar-del-plata-3x2-001-full.jpg"},{type:"caption",text:"Mar del Plata"},{type:"text",text:"Our time in the city was enjoyable, but what stood out the most was how well we were received by our Argentinian hosts. I have very few photos of Mar del Plata, but I’ll never forget the trip we took to a drive-in beach, the family dinner, the good conversations, and the fact that I didn’t miss the bus to Mendoza because of them. We were also told “seeing our large backpacks inspired them to travel again.” It’d be great to find out that they actually did."}]},{url:"buenos-aires",title:"Buenos Aires",date:"28.12.2015",coordinates:{lat:-34.6155729,lng:-58.5033605},flag:"buenos_aires",content:[{type:"image",size:"fullScreen",path:"buenos-aires-3x2-004-full.jpg"},{type:"image",size:"landscape",path:"buenos-aires-3x2-002.jpg"},{type:"image",size:"landscape",path:"buenos-aires-3x2-003.jpg"},{type:"image",size:"landscape",path:"buenos-aires-3x2-001.jpg"}]},{url:"punta-del-este",title:"Punta del Este",date:"24.12.2015",coordinates:{lat:-34.9424383,lng:-54.9468935},flag:"uruguay",content:[{type:"image",size:"fullScreen",path:"punta-del-este-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"punta-del-este-3x2-002.jpg"},{type:"image",size:"landscape",path:"punta-del-este-3x2-003.jpg"}]},{url:"montevideo",title:"Montevideo",date:"21.12.2015",coordinates:{lat:-34.8195806,lng:-56.3702907},flag:"uruguay",content:[{type:"image",size:"fullScreen",path:"montevideo-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"montevideo-3x2-002.jpg"}]},{url:"sao-paulo",title:"São Paulo",date:"14.12.2015",coordinates:{lat:-23.6815315,lng:-46.8754919},flag:"sao_paulo",content:[{type:"image",size:"fullScreen",path:"sao-paulo-3x2-001-full.jpg"},{type:"image",size:"landscape",path:"sao-paulo-3x2-002.jpg"},{type:"image",size:"landscape",path:"sao-paulo-3x2-003.jpg"},{type:"image",size:"landscape",path:"sao-paulo-3x2-004.jpg"},{type:"image",size:"portrait",path:"sao-paulo-3x4-001.jpg"}]},{url:"big-sur",title:"Big Sur",date:"22.05.2015",coordinates:{lat:36.2466623,lng:-121.8562847},flag:"usa",content:[{type:"image",size:"fullScreen",path:"big-sur-3x2-001-full.jpg"},{type:"caption",text:"University"},{type:"text",text:"Camping in Big Sur was the first trip I made after graduating college, so I deemed it’d be appropriate to use it as a starting point for this site. This occasion also happens to mark the longest I’ve stayed completely disconnected from society, a very fond memory of mine."}]}];
for(var flagPath="assets/img/flags/",flagArray=["austria.svg","bavaria.svg","bovec.svg","budapest.svg","buenos_aires.svg","chile.svg","croatia.svg","england.svg","germany.svg","ljubljana.svg","mar_del_plata.svg","prague.svg","sao_paulo.svg","uruguay.svg","usa.svg","zagreb.svg"],flagPreloader=0;flagPreloader<flagArray.length;flagPreloader++){var loadedFlag=new Image;loadedFlag.src=flagPath+flagArray[flagPreloader];var loadedMobileFlag=new Image;loadedMobileFlag.src=flagPath+"rotated/"+flagArray[flagPreloader]}
function redirect(){window.location.href="#/nothome"}function populate(e){"map"===e&&redirect();for(var a=document.getElementById("locations"),t=0;t<locations.length;t++){var n=document.createElement("a");n.href="#/"+locations[t].url,n.id=locations[t].url,n.className="location";var o=document.createElement("img");o.src="assets/img/thumbnails/"+locations[t].url+".jpg";var l=document.createElement("span");l.innerHTML=locations[t].date,l.className="date";var c=document.createElement("span");c.className="accessories",c.appendChild(o),c.appendChild(l),n.innerHTML=locations[t].title,n.appendChild(c),a.appendChild(n);var i=2500*Math.random()+"ms",s=document.getElementsByClassName("location");s[s.length-1].style.animationDelay=i}var m=document.createElement("a");m.className="mapLink",m.href="#/map",m.innerHTML="Map",a.appendChild(m);var r=document.getElementById("credits");setTimeout(function(){r.style.opacity=1},500)}
function loadPage(e){var t=document.body,a=locations.filter(function(t){return t.url==e})[0],n="assets/img/flags/",l="assets/img/flags/rotated/";if("nothome"===e||"map"===e){t.style.overflow="auto";var o=document.getElementById("stage");null!=o&&(o.className="leave"),mapHolder.className="","map"===e&&pageSwitchCounter>0&&(mapHolder.className="visible",initMap())}else{t.style.overflow="hidden",mapHolder.className="";var s=document.getElementById("transitionElement");s.innerHTML="";var c=document.createElement("img");c.className="flag",c.src=n+a.flag+".svg";var m=document.createElement("img");m.className="mobileFlag",m.src=l+a.flag+".svg",s.appendChild(c),s.appendChild(m),setTimeout(function(){s.className="show"},100),setTimeout(function(){s.className="up",setTimeout(function(){s.className=""},500)},2e3);var i=document.getElementById("stage");null!=i&&setTimeout(function(){i.parentNode.removeChild(i)},500);var d=document.createElement("div");d.id="stage",t.appendChild(d),setTimeout(function(){d.className="active"},450);var r=document.createElement("div");r.id="closeLocation",r.onclick=function(){window.location.href="#/nothome"};var p=document.createElement("img");p.src="assets/img/ui/close.svg",r.appendChild(p),d.appendChild(r);var u=document.createElement("div");u.id="locationContent",d.appendChild(u);var v=document.createElement("div");v.id="locationTitle",v.innerHTML=a.title,u.appendChild(v);var g=document.createElement("div");g.id="locationDate",g.innerHTML=a.date,d.appendChild(g);var E=a.content,h="assets/img/locations/"+a.url+"/";for(contentElements=0;contentElements<E.length;contentElements++)if("image"===E[contentElements].type){var f=document.createElement("img");f.onload=function(){this.style.opacity=1},f.src=h+E[contentElements].path;var N=document.createElement("div");"landscape"===E[contentElements].size?(f.className="landscape",N.className="imageHolder landscape"):"portrait"===E[contentElements].size?(f.className="portrait",N.className="imageHolder portrait"):(f.className="fullScreen",N.className="imageHolder fullScreen"),N.appendChild(f),u.appendChild(N)}else if("caption"===E[contentElements].type){var C=document.createElement("p");C.className="captionParagraph";var H=document.createElement("span");H.innerHTML=E[contentElements].text,C.appendChild(H),u.appendChild(C)}else{var y=document.createElement("p");y.innerHTML=E[contentElements].text,y.className="contentParagraph",u.appendChild(y)}addNavButtons(d,a)}}var mapHolder=document.getElementById("mapHolder");
function addNavButtons(e,a){var t=locations.indexOf(a),n=t+1,l=t-1;if(n<=locations.length-1){var r=document.createElement("div");r.className="navLinkWrapper beforeWrapper";var s=document.createElement("a");s.className="navLink",s.href="#/"+locations[n].url;var i=document.createElement("img");i.className="beforeLabel",i.src="assets/img/ui/dot.svg";var c=document.createElement("span");c.className="beforeTitle",c.innerHTML=locations[n].title;var m=document.createElement("img");m.className="beforePreview",m.src="assets/img/thumbnails/"+locations[n].url+".jpg",s.appendChild(i),s.appendChild(c),s.appendChild(m),r.appendChild(s),e.appendChild(r)}if(l>=0){var r=document.createElement("div");r.className="navLinkWrapper afterWrapper";var d=document.createElement("a");d.className="navLink",d.href="#/"+locations[l].url;var o=document.createElement("img");o.className="afterLabel",o.src="assets/img/ui/dot.svg";var p=document.createElement("span");p.className="afterTitle",p.innerHTML=locations[l].title;var v=document.createElement("img");v.className="afterPreview",v.src="assets/img/thumbnails/"+locations[l].url+".jpg",d.appendChild(v),d.appendChild(p),d.appendChild(o),r.appendChild(d),e.appendChild(r)}}
document.onkeydown=function(e){switch(e=e||window.event,e.which||e.keyCode){case 37:console.log("left arrow pressed");break;case 39:console.log("right arrow pressed");break;case 27:console.log("escape key pressed")}};
function attachClickHandler(e){google.maps.event.addListener(e,"click",function(){window.location.href=e.url})}function initMap(){for(var e={lat:0,lng:0},t=new google.maps.LatLngBounds,o=new google.maps.Map(document.getElementById("map"),{center:e,scrollwheel:!1,zoom:2,mapTypeControl:!1,streetViewControl:!1,minZoom:2,styles:[{featureType:"administrative.country",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{saturation:-100},{lightness:-100},{visibility:"off"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#323232"},{visibility:"on"},{weight:.5}]},{featureType:"administrative.locality",elementType:"geometry.stroke",stylers:[{color:"#b4b4b4"},{visibility:"on"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#b4b4b4"},{visibility:"on"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#f0f0f0"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi.park",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"off"},{weight:.5}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#c8c8c8"},{visibility:"off"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#dcdcdc"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{visibility:"off"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b4dcff"},{visibility:"on"}]}]}),l=0;l<locations.length;l++){var i=locations[l].coordinates,r=Math.floor(Math.random()*randomColors.length),a=randomColors[r],s=new google.maps.Marker({position:i,icon:{path:google.maps.SymbolPath.CIRCLE,scale:10,fillColor:a,fillOpacity:1,strokeWeight:0},map:o,title:locations[l].title,url:"#"+locations[l].url});t.extend(s.getPosition()),attachClickHandler(s)}o.fitBounds(t),o.setCenter.bound;var e=t.getCenter();google.maps.event.addListener(o,"center_changed",function(){checkBounds(o)})}function checkBounds(e){var t,o=e.getBounds().getNorthEast().lat(),l=e.getBounds().getSouthWest().lat();if(!(o<85&&l>-85)&&!(o>85&&l<-85)&&(o>85?t=e.getCenter().lat()-(o-85):o<85&&(t=e.getCenter().lat()-(l+85)),t)){var i=new google.maps.LatLng(t,e.getCenter().lng());e.setCenter(i)}}
function parseHash(a,e){crossroads.parse(a)}pageSwitchCounter=0,crossroads.addRoute("",function(){redirect()}),crossroads.addRoute("{id}",function(a){0===pageSwitchCounter?(populate(a),loadPage(a),pageSwitchCounter++):loadPage(a)}),hasher.initialized.add(parseHash),hasher.changed.add(parseHash),hasher.init();
function createPin(){var e=Math.floor(Math.random()*randomColors.length),t=randomColors[e],r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0 0 50 50");var o=r.namespaceURI,n=document.createElementNS(o,"circle");n.setAttribute("cx",25),n.setAttribute("cy",25),n.setAttribute("r",22.5),n.setAttribute("fill",t),r.appendChild(n),cursor.appendChild(r),body.insertBefore(cursor,body.firstChild)}function dropDot(){var e=event.pageX+"px",t=event.pageY+"px",r=document.createElement("div");r.className="droppedDot",r.style.left=e,r.style.top=t,r.innerHTML=cursor.innerHTML;var o=document.getElementById("droppedDots");o.appendChild(r),cursor.innerHTML="",createPin()}var body=document.body,cursor=document.createElement("div");cursor.id="cursor";var randomColors=["#a41ee2","#4cdbdf","#2b82d8","#efdb35","#ef141f","#34d74a","#0e2baa","#ff64de","#848484","#ff9100"],currentMousePos={x:-1,y:-1};document.addEventListener("mousemove",function(e){var t=window.pageYOffset,r=e.pageX+"px",o=e.pageY-t+"px";cursor.style.left=r,cursor.style.top=o}),createPin(),body.addEventListener("click",dropDot);