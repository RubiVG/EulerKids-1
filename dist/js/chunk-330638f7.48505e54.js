(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330638f7"],{"0bff":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return a});var s=function(t){return"\\boxed{\\textrm{".concat(t,"}}")},r=function(t){var e=t.length;while(e>0){var n=Math.floor(Math.random()*e);e--;var s=t[e];t[e]=t[n],t[n]=s}return t},a=function(t){return t?"white--text":"grey--text text--darken-4"}},9590:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ejercicio-slot",[n("div",{attrs:{slot:"instruction"},slot:"instruction"}),n("div",{attrs:{slot:"operation"},slot:"operation"},[n("span",{domProps:{innerHTML:t._s(t.question.operacion)}})]),n("div",{attrs:{slot:"interaction"},slot:"interaction"},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.questions,function(e){return n("card-select-imagen",{key:e.img,attrs:{helpers:t.helpers,subject:t.subject,btn:e.btn,active:e.active,img:e.img,answerData:e.answerData}})}))],1)],1),n("div",{attrs:{slot:"yourAnswer"},slot:"yourAnswer"},[n("respuesta-usuario",{attrs:{img:t.img,answerData:t.$store.state.Learn.answerData}})],1),n("div",{attrs:{slot:"solution"},slot:"solution"},[n("div",[n("span",{domProps:{innerHTML:t._s(t.question.solucion)}})]),n("div",{staticClass:"images-2"},[n("img",{attrs:{src:t.img(t.question.imagenR1),height:"200"}}),n("img",{attrs:{src:t.img(t.question.imagenR2),height:"200"}})])]),n("div",{attrs:{slot:"correctAnswer"},slot:"correctAnswer"},[n("respuesta-correcta",{attrs:{img:t.img,answerData:t.question.correcta}})],1)])},r=[],a=n("da27"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.answerData?n("div",[n("v-img",{attrs:{src:t.img(t.answerData),height:"200",contain:""}})],1):t._e()},o=[],c={name:"Imagen",props:["img","answerData"]},u=c,l=n("2877"),m=Object(l["a"])(u,i,o,!1,null,null,null);m.options.__file="Imagen.vue";var d=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.answerData?n("div",[n("v-img",{attrs:{src:t.img(t.answerData),height:"200",contain:""}})],1):t._e()},g=[],h={name:"Imagen",props:["img","answerData"]},b=h,p=Object(l["a"])(b,v,g,!1,null,null,null);p.options.__file="Imagen.vue";var w=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",sm6:""}},[t.$store.state.Learn.gotIt?t._e():n("v-card",{attrs:{hover:"",ripple:"",color:t.helpers.colorToggleEjer(t.btn,t.subject)},nativeOn:{click:function(e){t.active(t.btn,t.answerData)}}},[n("v-container",[n("v-img",{attrs:{contain:"",src:t.img,height:"200"}})],1)],1),t.$store.state.Learn.gotIt?n("v-card",{attrs:{color:t.helpers.colorToggleEjer(t.btn,t.subject)}},[n("v-container",[n("v-img",{attrs:{contain:"",src:t.img,height:"200"}})],1)],1):t._e()],1)},_=[],x={name:"CardSelectImagen",props:["helpers","btn","active","img","subject","answerData"]},k=x,$=Object(l["a"])(k,f,_,!1,null,null,null);$.options.__file="CardSelectImagen.vue";var y=$.exports,C=n("0bff"),j={name:"Dynamic",props:["helpers","subject","img"],components:{"ejercicio-slot":a["a"],"respuesta-usuario":d,"respuesta-correcta":w,"card-select-imagen":y},data:function(){return{btn1:!1,btn2:!1,dummy:{operacion:'\n        <div>\n          Javier y Rosita fueron a la tienda de dulces, cada uno compró una bolsa diferente.\n        </div>\n        <div>\n          ¿Quién compró la bolsa con <b><span class="blue--text darken--1--text">más</span></b>\n          dulces?\n        </div>\n        ',solucion:'\n          <div class="mt-2 grey--text text--darken-2 subheading">\n            <div>\n              Notemos que la bolsa de Rosita está más llena.\n            </div>\n            <div >\n              Cuando contamos los dulces de cada bolsa podemos darnos cuenta que la bolsa de Javier\n              sólo tiene <span class="blue--text text--darken-1 katex" v-katex="\'4\'"></span>\n              dulces y la de Rosita tiene <span class="blue--text text--darken-1 katex" v-katex="\'6\'"></span> dulces.\n            </div>\n          </div>\n        ',imagen1:"rosita6.svg",imagen2:"javier4.svg",correcta:"rosita6.svg",imagenR1:"rosita6_R.svg",imagenR2:"javier4_R.svg"}}},methods:{active1:function(t,e){this.btn1=!1,this.btn2=!1,t||(this.respuestaCorrectaChecker(e),this.btn1=!0,this.btn2=!1,this.$store.commit("Learn/enableButton")),t&&(this.$store.commit("Learn/getUserAnswer",{answer:!1,answerData:null}),this.btn1=!1,this.btn2=!1,this.$store.commit("Learn/disableButton"))},active2:function(t,e){this.btn1=!1,this.btn2=!1,t||(this.respuestaCorrectaChecker(e),this.btn1=!1,this.btn2=!0,this.$store.commit("Learn/enableButton")),t&&(this.$store.commit("Learn/getUserAnswer",{answer:!1,answerData:null}),this.btn1=!1,this.btn2=!1,this.$store.commit("Learn/disableButton"))},respuestaCorrectaChecker:function(t){return t===this.question.correcta?this.$store.commit("Learn/getUserAnswer",{answer:!0,answerData:t}):this.$store.commit("Learn/getUserAnswer",{answer:!1,answerData:t})}},computed:{questions:function(){var t=[{btn:this.btn1,active:this.active1,img:this.img(this.imgs[0]),answerData:this.imgs[0]},{btn:this.btn2,active:this.active2,img:this.img(this.imgs[1]),answerData:this.imgs[1]}];return t},question:function(){return this.$store.state.Learn.question},imgs:function(){var t=[this.question.imagen1,this.question.imagen2];return Object(C["c"])(t)}}},D=j,A=Object(l["a"])(D,s,r,!1,null,null,null);A.options.__file="Statement.vue";e["default"]=A.exports},da27:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.instruction?n("div",{staticClass:"grey--text text--darken-2 subheading"},[t._t("instruction")],2):t._e(),t.operation?n("div",{staticClass:"grey--text text--darken-2 subheading"},[t._t("operation")],2):t._e(),t.interaction?n("div",{staticClass:"grey--text text--darken-2 subheading"},[t._t("interaction")],2):t._e(),n("br"),t.$store.state.Learn.gotIt?n("div",{class:t.$store.state.Learn.answerBackgroundColor},[n("v-container",{attrs:{fluid:""}},[t.yourAnswer?n("div",{staticClass:"grey--text text--darken-1 title"},[t._v("\n        Your answer was:\n        "),n("div",{staticClass:"mt-2"},[t._t("yourAnswer")],2),n("br")]):t._e(),t.solution?n("div",[n("div",{staticClass:"grey--text text--darken-1 title"},[t._v("\n          Solution:\n        ")]),n("div",{staticClass:"mt-2 grey--text text--darken-2 subheading"},[t._t("solution")],2),n("br")]):t._e(),t.correctAnswer?n("div",[n("div",{staticClass:"grey--text text--darken-1 title"},[t._v("\n          Correct Answer:\n        ")]),n("div",{staticClass:"mt-2 grey--text text--darken-2 subheading"},[t._t("correctAnswer")],2)]):t._e()])],1):t._e()])},r=[],a={computed:{instruction:function(){return this.$store.state.instruction},operation:function(){return this.$store.state.operation},interaction:function(){return this.$store.state.interaction},yourAnswer:function(){return this.$store.state.yourAnswer},solution:function(){return this.$store.state.solution},correctAnswer:function(){return this.$store.state.correctAnswer}}},i={name:"EjercicioSlot",mixins:[a]},o=i,c=n("2877"),u=Object(c["a"])(o,s,r,!1,null,null,null);u.options.__file="EjercicioSlot.vue";e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-330638f7.48505e54.js.map