(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5205e492"],{"008e":function(t,e,r){t.exports=r.p+"img/level1.65cabb93.svg"},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"36d7":function(t,e,r){(function(t){var e=173.7178;function r(t){this.matches=this.computeMatches(t)}function n(t,e,r,n){this._tau=n,this.setRating(t),this.setRd(e),this.setVol(r)}function a(t){t=t||{},this._tau=t.tau||.5,this._default_rating=t.rating||1500,this._default_rd=t.rd||350,this._default_vol=t.vol||.06,this._volatility_algorithm=i[t.volatility_algorithm||"newprocedure"],this.players=[],this.players_index=0}r.prototype.getMatches=function(){return this.matches},r.prototype.computeMatches=function(t){var e=[],r=0;function n(t){if(0===t.length)return[];var e=t.shift(),r=t.map(function(t){return[e.player,t.player,e.position<t.position?1:.5]});return r.concat(n(t))}return t.forEach(function(t){r+=1,t.forEach(function(t){e.push({player:t,position:r})})}),n(e)},n.prototype.getRating=function(){return this.__rating*e+this.defaultRating},n.prototype.setRating=function(t){this.__rating=(t-this.defaultRating)/e},n.prototype.getRd=function(){return this.__rd*e},n.prototype.setRd=function(t){this.__rd=t/e},n.prototype.getVol=function(){return this.__vol},n.prototype.setVol=function(t){this.__vol=t},n.prototype.addResult=function(t,e){this.adv_ranks.push(t.__rating),this.adv_rds.push(t.__rd),this.outcomes.push(e)},n.prototype.update_rank=function(){if(this.hasPlayed()){var t=this._variance(),e=this._delta(t);this.__vol=this.volatility_algorithm(t,e),this._preRatingRD(),this.__rd=1/Math.sqrt(1/Math.pow(this.__rd,2)+1/t);for(var r=0,n=0,a=this.adv_ranks.length;n<a;n++)r+=this._g(this.adv_rds[n])*(this.outcomes[n]-this._E(this.adv_ranks[n],this.adv_rds[n]));this.__rating+=Math.pow(this.__rd,2)*r}else this._preRatingRD()},n.prototype.hasPlayed=function(){return this.outcomes.length>0},n.prototype._preRatingRD=function(){this.__rd=Math.sqrt(Math.pow(this.__rd,2)+Math.pow(this.__vol,2))},n.prototype._variance=function(){for(var t=0,e=0,r=this.adv_ranks.length;e<r;e++){var n=this._E(this.adv_ranks[e],this.adv_rds[e]);t+=Math.pow(this._g(this.adv_rds[e]),2)*n*(1-n)}return 1/t},n.prototype._E=function(t,e){return 1/(1+Math.exp(-1*this._g(e)*(this.__rating-t)))},n.prototype._g=function(t){return 1/Math.sqrt(1+3*Math.pow(t,2)/Math.pow(Math.PI,2))},n.prototype._delta=function(t){for(var e=0,r=0,n=this.adv_ranks.length;r<n;r++)e+=this._g(this.adv_rds[r])*(this.outcomes[r]-this._E(this.adv_ranks[r],this.adv_rds[r]));return t*e},n.prototype._makef=function(t,e,r){var n=this;return function(a){return Math.exp(a)*(Math.pow(t,2)-Math.pow(n.__rd,2)-e-Math.exp(a))/(2*Math.pow(Math.pow(n.__rd,2)+e+Math.exp(a),2))-(a-r)/Math.pow(n._tau,2)}},a.prototype.makeRace=function(t){return new r(t)},a.prototype.removePlayers=function(){this.players=[],this.players_index=0},a.prototype.getPlayers=function(){return this.players},a.prototype.cleanPreviousMatches=function(){for(var t=0,e=this.players.length;t<e;t++)this.players[t].adv_ranks=[],this.players[t].adv_rds=[],this.players[t].outcomes=[]},a.prototype.calculatePlayersRatings=function(){for(var t=Object.keys(this.players),e=0,r=t.length;e<r;e++)this.players[t[e]].update_rank()},a.prototype.addMatch=function(t,e,r){var n=this._createInternalPlayer(t.rating,t.rd,t.vol,t.id),a=this._createInternalPlayer(e.rating,e.rd,e.vol,e.id);return this.addResult(n,a,r),{pl1:n,pl2:a}},a.prototype.makePlayer=function(t,e,r){return this._createInternalPlayer(t,e,r)},a.prototype._createInternalPlayer=function(t,e,r,a){if(void 0===a)a=this.players_index,this.players_index=this.players_index+1;else{var i=this.players[a];if(void 0!==i)return i}var s=new n(t||this._default_rating,e||this._default_rd,r||this._default_vol,this._tau),o=Object.getPrototypeOf(s);return o.defaultRating=this._default_rating,o.volatility_algorithm=this._volatility_algorithm,s.setRating(t||this._default_rating),s.id=a,s.adv_ranks=[],s.adv_rds=[],s.outcomes=[],this.players[a]=s,s},a.prototype.addResult=function(t,e,r){t.addResult(e,r),e.addResult(t,1-r)},a.prototype.updateRatings=function(t){if(t instanceof r&&(t=t.getMatches()),"undetypeof(matches)fined"!==typeof t){this.cleanPreviousMatches();for(var e=0,n=t.length;e<n;e++){var a=t[e];this.addResult(a[0],a[1],a[2])}}this.calculatePlayersRatings()};var i={oldprocedure:function(t,e){var r,n,a,i,s,o,u,c,h,l=this.__vol,p=this.__rd,f=this._tau;if(c=m(p,t,e,f),r=Math.log(Math.pow(l,2)),s=v(p,t,0,r,f,e),s>0)h=c;else{n=0,a=n,o=s,n-=1,s=v(p,t,n,r,f,e);while(s<0)a=n,o=s,n-=1,s=v(p,t,n,r,f,e);for(var _=0;_<21;_++)i=s*(n-a)/(o-s)+n,u=v(p,t,i,r,f,e),u>0?(n=i,s=u):(a=i,o=u);h=Math.exp((s*(n-a)/(o-s)+n)/2)>c?c:Math.exp((s*(n-a)/(o-s)+n)/2)}return h;function v(t,e,r,n,a,i){var s=Math.pow(t,2)+e+Math.exp(r);return-(r-n)/Math.pow(a,2)-.5*Math.exp(r)/s+.5*Math.exp(r)*Math.pow(i/s,2)}function g(t,e,r,n,a){return d=Math.pow(t,2)+e+Math.exp(r),-1/Math.pow(n,2)-.5*Math.exp(r)/d+.5*Math.exp(r)*(Math.exp(r)+Math.pow(a,2))/Math.pow(d,2)-Math.pow(Math.exp(r),2)*Math.pow(a,2)/Math.pow(d,3)}function m(t,e,r,n){var a,i,s,o,u,c;if(o=g(t,e,0,n,r),o<0)return 1;a=0,i=a,u=o,a-=1,o=g(t,e,a,n,r);while(o>0)i=a,u=o,a-=1,o=g(t,e,a,n,r);for(var h=0;h<21;h++)s=o*(a-i)/(u-o)+a,c=g(t,e,s,n,r),c>0?(a=s,o=c):(i=s,u=c);return Math.exp((o*(a-i)/(u-o)+a)/2)}},newprocedure:function(t,e){var r,n,a=Math.log(Math.pow(this.__vol,2)),i=this._makef(e,t,a),s=1e-7;if(Math.pow(e,2)>Math.pow(this.__rd,2)+t)r=Math.log(Math.pow(e,2)-Math.pow(this.__rd,2)-t);else{n=1;while(i(a-n*this._tau)<0)n+=1;r=a-n*this._tau}var o,u,c=i(a),h=i(r);while(Math.abs(r-a)>s)o=a+(a-r)*c/(h-c),u=i(o),u*h<0?(a=r,c=h):c/=2,r=o,h=u;return Math.exp(a/2)},newprocedure_mod:function(t,e){var r,n,a=Math.log(Math.pow(this.__vol,2)),i=this._makef(e,t,a),s=1e-7;if(e>Math.pow(this.__rd,2)+t)r=Math.log(e-Math.pow(this.__rd,2)-t);else{n=1;while(i(a-n*this._tau)<0)n+=1;r=a-n*this._tau}var o,u,c=i(a),h=i(r);while(Math.abs(r-a)>s)o=a+(a-r)*c/(h-c),u=i(o),u*h<0?(a=r,c=h):c/=2,r=o,h=u;return Math.exp(a/2)},oldprocedure_simple:function(t,e){var r,n,a,i=Math.log(Math.pow(this.__vol,2)),s=this._tau,o=i,u=0;while(Math.abs(o-u)>1e-8)o=u,r=Math.pow(this.__rating,2)+t+Math.exp(o),n=-(o-i)/Math.pow(s,2)-.5*Math.exp(o)/r+.5*Math.exp(o)*Math.pow(e/r,2),a=-1/Math.pow(s,2)-.5*Math.exp(o)*(Math.pow(this.__rating,2)+t)/Math.pow(r,2)+.5*Math.pow(e,2)*Math.exp(o)*(Math.pow(this.__rating,2)+t-Math.exp(o))/Math.pow(r,3),u=o-n/a;return Math.exp(u/2)}};t.Glicko2=a})(e)},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"57a8":function(t,e,r){t.exports=r.p+"img/level4.fb73d684.svg"},"5e32":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{xs12:"",md6:"","offset-md3":"",xl4:"","offset-xl4":""}},[r("v-card",{attrs:{tile:""}},[r("v-container",{attrs:{fluid:"","grid-list-lg":""}},[r("v-layout",[r("v-flex",[r("v-flex",{attrs:{xs12:""}},[r("v-alert",{staticClass:"subheading text-xs-center",attrs:{outline:"",color:t.helpers.colorMaster(t.subject),icon:t.icon,value:!0}},[t._v("\n              "+t._s(t.msg)+"\n            ")])],1)],1)],1)],1)],1)],1)},a=[],i={name:"CardInfo",props:["helpers","subject","icon","msg"]},s=i,o=r("2877"),u=Object(o["a"])(s,n,a,!1,null,null,null);u.options.__file="CardInfo.vue";e["a"]=u.exports},7333:function(t,e,r){"use strict";var n=r("0d58"),a=r("2621"),i=r("52a7"),s=r("4bf8"),o=r("626a"),u=Object.assign;t.exports=!u||r("79e5")(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=u({},t)[r]||Object.keys(u({},e)).join("")!=n})?function(t,e){var r=s(t),u=arguments.length,c=1,h=a.f,l=i.f;while(u>c){var p,d=o(arguments[c++]),f=h?n(d).concat(h(d)):n(d),_=f.length,v=0;while(_>v)l.call(d,p=f[v++])&&(r[p]=d[p])}return r}:u},"8ce4":function(t,e,r){t.exports=r.p+"img/level3.224a25bd.svg"},a715:function(t,e,r){"use strict";e["a"]={data:function(){return{}},methods:{becomeEuler:function(t,e){if(!t)return r("008e");var n=Math.floor(100*t/e);return n<50?r("008e"):n>=50&&n<70?r("b178"):n>=70&&n<90?r("8ce4"):n>=90?r("57a8"):void 0}},computed:{max:function(){return this.$store.state.Learn.maxRating}}}},abda:function(t,e,r){},b178:function(t,e,r){t.exports=r.p+"img/level2.34b4a851.svg"},c82b:function(t,e,r){"use strict";var n=r("abda"),a=r.n(n);a.a},c832:function(t,e,r){(function(e){var r="Expected a function",n="__lodash_hash_undefined__",a=1/0,i="[object Function]",s="[object GeneratorFunction]",o="[object Symbol]",u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,h=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/[\\^$.*+?()[\]{}|]/g,d=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,_="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,g=_||v||Function("return this")();function m(t,e){return null==t?void 0:t[e]}function y(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}var b=Array.prototype,w=Function.prototype,M=Object.prototype,x=g["__core-js_shared__"],k=function(){var t=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),R=w.toString,j=M.hasOwnProperty,$=M.toString,C=RegExp("^"+R.call(j).replace(p,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=g.Symbol,P=b.splice,O=it(g,"Map"),I=it(Object,"create"),L=E?E.prototype:void 0,A=L?L.toString:void 0;function S(t){var e=-1,r=t?t.length:0;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}function D(){this.__data__=I?I(null):{}}function G(t){return this.has(t)&&delete this.__data__[t]}function q(t){var e=this.__data__;if(I){var r=e[t];return r===n?void 0:r}return j.call(e,t)?e[t]:void 0}function T(t){var e=this.__data__;return I?void 0!==e[t]:j.call(e,t)}function z(t,e){var r=this.__data__;return r[t]=I&&void 0===e?n:e,this}function F(t){var e=-1,r=t?t.length:0;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}function N(){this.__data__=[]}function V(t){var e=this.__data__,r=Z(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():P.call(e,r,1),!0}function W(t){var e=this.__data__,r=Z(e,t);return r<0?void 0:e[r][1]}function B(t){return Z(this.__data__,t)>-1}function Q(t,e){var r=this.__data__,n=Z(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}function J(t){var e=-1,r=t?t.length:0;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}function H(){this.__data__={hash:new S,map:new(O||F),string:new S}}function K(t){return at(this,t)["delete"](t)}function U(t){return at(this,t).get(t)}function X(t){return at(this,t).has(t)}function Y(t,e){return at(this,t).set(t,e),this}function Z(t,e){var r=t.length;while(r--)if(dt(t[r][0],e))return r;return-1}function tt(t,e){e=st(e,t)?[e]:nt(e);var r=0,n=e.length;while(null!=t&&r<n)t=t[ht(e[r++])];return r&&r==n?t:void 0}function et(t){if(!vt(t)||ut(t))return!1;var e=_t(t)||y(t)?C:f;return e.test(lt(t))}function rt(t){if("string"==typeof t)return t;if(mt(t))return A?A.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}function nt(t){return ft(t)?t:ct(t)}function at(t,e){var r=t.__data__;return ot(e)?r["string"==typeof e?"string":"hash"]:r.map}function it(t,e){var r=m(t,e);return et(r)?r:void 0}function st(t,e){if(ft(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!mt(t))||(c.test(t)||!u.test(t)||null!=e&&t in Object(e))}function ot(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function ut(t){return!!k&&k in t}S.prototype.clear=D,S.prototype["delete"]=G,S.prototype.get=q,S.prototype.has=T,S.prototype.set=z,F.prototype.clear=N,F.prototype["delete"]=V,F.prototype.get=W,F.prototype.has=B,F.prototype.set=Q,J.prototype.clear=H,J.prototype["delete"]=K,J.prototype.get=U,J.prototype.has=X,J.prototype.set=Y;var ct=pt(function(t){t=yt(t);var e=[];return h.test(t)&&e.push(""),t.replace(l,function(t,r,n,a){e.push(n?a.replace(d,"$1"):r||t)}),e});function ht(t){if("string"==typeof t||mt(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}function lt(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function pt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(r);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var s=t.apply(this,r);return n.cache=i.set(a,s),s};return n.cache=new(pt.Cache||J),n}function dt(t,e){return t===e||t!==t&&e!==e}pt.Cache=J;var ft=Array.isArray;function _t(t){var e=vt(t)?$.call(t):"";return e==i||e==s}function vt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function gt(t){return!!t&&"object"==typeof t}function mt(t){return"symbol"==typeof t||gt(t)&&$.call(t)==o}function yt(t){return null==t?"":rt(t)}function bt(t,e,r){var n=null==t?void 0:tt(t,e);return void 0===n?r:n}t.exports=bt}).call(this,r("c8ba"))},f751:function(t,e,r){var n=r("5ca1");n(n.S+n.F,"Object",{assign:r("7333")})},fbce:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"mt-0",attrs:{row:"",wrap:""}},[t.isAuthenticated?t._e():r("card-info",{attrs:{id:t.top,helpers:t.helpers,subject:t.subject,icon:t.icon,msg:t.msg}}),t.isAuthenticated?r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":"",xl6:"","offset-xl3":""}},[r("v-card",{attrs:{id:t.top}},[r("v-container",[t.spinner?r("spinner",{attrs:{size:t.size2,width:t.width}}):t._e(),r("v-layout",{attrs:{row:"","justify-space-between":""}},[r("v-flex",{attrs:{xs9:"",md10:""}},[t.spinner?t._e():r("div",{staticClass:"mt-3",attrs:{id:"myProgress"}},[r("div",{style:{width:t.changeWidth(t.rating),"background-color":t.barColor(t.rating)},attrs:{id:"myBar"}},[r("div",{staticClass:"subheading"},[t._v("\n                  "+t._s(t.barNumber(t.rating))+"\n                ")])])])]),t.spinner?t._e():r("v-flex",{attrs:{xs3:"",md2:""}},[r("v-img",{staticClass:"mb-2",attrs:{src:t.becomeEuler(t.rating,t.max),contain:"",height:"50"}})],1)],1)],1)],1)],1):t._e(),r("v-flex",{attrs:{xs12:"",xl10:"","offset-xl1":""}},[r("v-card",[r("v-container",{attrs:{fluid:""}},[r("div",{class:t.borderColor(t.subject)},[r("div",{staticClass:"grey--text text--darken-1 title "},[r("b",[t._v(t._s(t.skillName))])]),r("div",{staticClass:"grey--text text--darken-1 subheading"},[t._v("\n            "+t._s(t.exerciseName)+"\n          ")]),t.spinner?t._e():r("div",[t.alertRespuesta?r("v-flex",{attrs:{xs12:""}},[r("v-alert",{attrs:{value:!0,color:t.answerAlertColor(t.userAnswer),icon:t.iconAlert(t.userAnswer)}},[r("div",{staticClass:"title"},[t._v(t._s(t.emoji(t.userAnswer))+" ")])])],1):t._e()],1),t.spinner?r("spinner",{attrs:{size:t.size,width:t.width}}):t._e(),t.spinner?t._e():r(t.currentView,{tag:"component",staticClass:"mt-3",attrs:{helpers:t.helpers,subject:t.subject}}),t.$store.state.Learn.gotIt?t._e():r("v-btn",{staticClass:"mt-3",attrs:{dark:!t.disabled,color:t.helpers.btnColorMaster(t.subject),disabled:t.disabled},on:{click:t.check}},[t._v("\n            Check\n          ")]),t.$store.state.Learn.gotIt?r("v-btn",{staticClass:"mt-3",attrs:{color:t.helpers.btnColorMaster(t.subject),dark:""},on:{click:t.gotIt}},[t._v("\n            "+t._s(t.btnGotItText(t.userAnswer))+"\n          ")]):t._e()],1)])],1)],1)],1)},a=[],i=(r("cadf"),r("551c"),r("097d"),r("a715")),s=(r("f751"),r("182f")),o=r("5e32"),u={"comparing-numbers-e":function(){return r.e("chunk-069149c2").then(r.bind(null,"1cb7"))},"more-or-less-e":function(){return r.e("chunk-8649ca92").then(r.bind(null,"3b17"))},"los-simbolos-mas-y-menos-e":function(){return r.e("chunk-2d0abfd9").then(r.bind(null,"1840"))}},c={"orden-de-dias-de-la-semana-e":function(){return r.e("chunk-41b3fe74").then(r.bind(null,"eb04"))}},h={"sumas-de-dos-digitos-sin-llevar-e":function(){return r.e("chunk-16d9b765").then(r.bind(null,"39c1"))},"tablas-de-multiplicar-2-3-4-5-y-10-e":function(){return r.e("chunk-6b3d5b16").then(r.bind(null,"1950"))}},l={"notacion-desarrollada-a-estandar-4-e":function(){return r.e("chunk-1bf84142").then(r.bind(null,"39c4"))}},p={"paralelas-secantes-o-perpendiculares-e":function(){return r.e("chunk-10d96908").then(r.bind(null,"b927"))}},d={"compara-los-numeros-de-mas-de-6-digitos-e":function(){return r.e("chunk-2d0f02d1").then(r.bind(null,"9af9"))},"sumas-y-restas-de-decimales-e":function(){return r.e("chunk-67e23ff0").then(r.bind(null,"4c60"))}},f={spinner:s["a"],"card-info":o["a"]},_=Object.assign({},f,u,c,h,l,p,d),v=r("c832"),g=r.n(v),m=r("36d7"),y=r.n(m),b={name:"Ejercicio",props:["subject","skill","exercise","exerciseName","skillName","helpers","isAuthenticated"],mixins:[i["a"]],components:_,data:function(){return{size:60,size2:44,width:2,icon:"videogame_asset",msg:"(╹◡╹) Login to track your progress and access all levels.",alertRespuesta:!1,timer:null,seconds:0,yeah:["(☆^ー^☆) Perfect! Correct answer","｡◕‿◕｡ Excellent! Correct answer","｡^‿^｡ Amazing! Correct answer","(╹◡╹) Awesome! Correct answer","（＾_＾）Wonderful! Correct answer"],sorry:["(・_・) Oops! Wrong answer","●⌢● Sorry! Wrong answer","(´╹‸╹`) Oops! Wrong answer","⊙_☉  Sorry! Wrong answer"],top:"top"}},methods:{check:function(){this.alertRespuesta=!0,this.$store.commit("Learn/gotItPayload",!0),this.pageToTop(this.top),this.$store.commit("Learn/disableButton"),this.isAuthenticated&&(this.userAnswer&&(this.updateRatingGlicko(1,0),this.updateRatings(!0)),this.userAnswer||(this.$store.state.Learn.rating>0&&(this.updateRatingGlicko(0,100),this.updateRatings(!1)),this.$store.state.Learn.rating<=0&&(this.updateRatingGlicko(0,0),this.updateRatings(!1))))},gotIt:function(){this.$store.commit("Learn/resetExercise"),this.alertRespuesta=!1,this.getQuestionDb(),this.seconds=0},getQuestionDb:function(){this.$store.dispatch("Learn/getQuestionDb").then(function(){}).catch(function(){})},updateRatings:function(t){var e=this;this.$store.dispatch("Learn/updateRatings",{correct:t,time:this.seconds}).catch(function(t){e.$store.commit("Learn/gotItPayload",!1),e.alertRespuesta=!1})},changeWidth:function(t){var e=100*t/this.max;return e<0?0:e<90?Math.floor(100*t/this.max)+"%":e>=90&&e<100?Math.floor(100*t/this.max)+"%":e>=100?"100%":void 0},barColor:function(t){var e=Math.floor(100*t/this.max);return e<50?"#E91E63":e>=50&&e<70?"#FFC107":e>=70&&e<90?"#1E88E5":e>=90?"#64DD17":void 0},barNumber:function(t){var e=100*t/this.max;return e<0?0:e<90?Math.floor(100*t/this.max):e>=90&&e<100?Math.floor(100*t/this.max):e>=100?"100":void 0},borderColor:function(t){return"math"===t?{math:!0}:"language"===t?{language:!0}:void 0},answerAlertColor:function(t){return t?"green accent-4":"pink"},iconAlert:function(t){return t?"check_circle":"cancel"},emoji:function(t){return t?this.yeah[Math.floor(Math.random()*this.yeah.length)]:this.sorry[Math.floor(Math.random()*this.sorry.length)]},startClock:function(){var t=this;this.timer=setInterval(function(){t.seconds++},1e3)},glicko:function(t,e,r){var n={tau:.5,rating:1500,rd:200,vol:.06},a=new y.a.Glicko2(n),i=a.makePlayer(t,175,.06),s=a.makePlayer(e,175,.06),o=[];return o.push([i,s,r]),a.updateRatings(o),{username:Math.round(i.getRating()),question:Math.round(s.getRating())}},updateRatingGlicko:function(t,e){var r=this.glicko(this.$store.state.Learn.rating,this.$store.state.Learn.questionRating,t).username-e,n=function(t,e){return t<e?t>1?t:1:t>=e?e:t};this.$store.commit("Learn/updateRating",{rating:n(r,this.max)})},pageToTop:function(t){var e=document.getElementById(t);e.scrollIntoView({block:"start",behavior:"smooth"})},btnGotItText:function(t){return t?"Next":"Got it"}},computed:{currentView:function(){return g()(_,this.exercise,!1)},disabled:function(){return this.$store.state.Learn.sendBtn||this.spinner},userAnswer:function(){return this.$store.state.Learn.userAnswer},rating:function(){return this.$store.state.Learn.rating},spinner:function(){return this.$store.state.Learn.spinner},question:function(){return this.$store.state.Learn.question},enterPressed:function(){return this.$store.getters["Learn/enterPressedChecker"]}},watch:{$route:function(){},enterPressed:function(t){t&&this.check()}},onIdle:function(){clearInterval(this.timer)},onActive:function(){this.startClock()},created:function(){this.$store.commit("exerciseChooseElements"),this.getQuestionDb(),this.currentView||this.$store.commit("Learn/resetExercise")},mounted:function(){this.startClock()},destroyed:function(){this.$store.commit("Learn/resetExercise"),this.$store.commit("resetExerciseElements"),this.$store.commit("error500Data",!1),clearInterval(this.timer)}},w=b,M=(r("c82b"),r("2877")),x=Object(M["a"])(w,n,a,!1,null,"9a70e6f8",null);x.options.__file="Exercise.vue";e["default"]=x.exports}}]);
//# sourceMappingURL=chunk-5205e492.bf683bef.js.map