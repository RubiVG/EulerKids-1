(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d12a944"],{"03db":function(t,e,s){"use strict";var a=s("cbf8"),n=s.n(a);n.a},"0bff":function(t,e,s){"use strict";s.d(e,"a",function(){return a}),s.d(e,"c",function(){return n}),s.d(e,"b",function(){return r});var a=function(t){return"\\boxed{\\textrm{".concat(t,"}}")},n=function(t){var e=t.length;while(e>0){var s=Math.floor(Math.random()*e);e--;var a=t[e];t[e]=t[s],t[s]=a}return t},r=function(t){return t?"white--text":"grey--text text--darken-4"}},"16e1":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[t.$store.state.Learn.gotIt?t._e():s("v-card",{attrs:{hover:"",ripple:"",color:t.helpers.colorToggleEjer(t.btn,t.subject)},nativeOn:{click:function(e){t.active(t.btn,t.textoCard)}}},[s("v-container",[s("div",{staticClass:"text-xs-center",class:[t.darkText(t.btn),t.textSize]},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.textoCard,expression:"textoCard"}],staticClass:"katex"})])])],1),t.$store.state.Learn.gotIt?s("v-card",{attrs:{color:t.helpers.colorToggleEjer(t.btn,t.subject)}},[s("v-container",[s("div",{staticClass:"text-xs-center",class:[t.darkText(t.btn),t.textSize]},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.textoCard,expression:"textoCard"}],staticClass:"katex"})])])],1):t._e()],1)},n=[],r=s("0bff"),i={name:"CardSelectTextoKatex",props:["helpers","btn","subject","active","textoCard","textSize"],data:function(){return{darkText:r["b"]}}},o=i,c=s("2877"),u=Object(c["a"])(o,a,n,!1,null,null,null);u.options.__file="CardSelectTextoKatex.vue";e["a"]=u.exports},"1e23":function(t,e,s){"use strict";var a=s("418e"),n=s.n(a);n.a},"27a0":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"boxed title"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.correcta,expression:"correcta"}],staticClass:"katex blue--text text--darken-1"})])},n=[],r={name:"ResCorrKatexBox",props:["correcta"]},i=r,o=(s("03db"),s("2877")),c=Object(o["a"])(i,a,n,!1,null,"6e1225af",null);c.options.__file="ResCorrKatexBox.vue";e["a"]=c.exports},3633:function(t,e,s){"use strict";var a=s("514c"),n=s.n(a);n.a},"418e":function(t,e,s){},"514c":function(t,e,s){},a76e:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"boxed",class:t.helpers.tuRespuestaColor(t.$store.state.Learn.userAnswer)},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.expresion,expression:"expresion"}],staticClass:"katex"})])},n=[],r={name:"RespuestaKatexBox",props:["helpers","expresion"]},i=r,o=(s("1e23"),s("2877")),c=Object(o["a"])(i,a,n,!1,null,"c1bf9ca8",null);c.options.__file="RespuestaKatexBox.vue";e["a"]=c.exports},cbf8:function(t,e,s){},da27:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.instruction?s("div",{staticClass:"grey--text text--darken-2 subheading"},[t._t("instruction")],2):t._e(),t.operation?s("div",{staticClass:"grey--text text--darken-2 subheading"},[t._t("operation")],2):t._e(),t.interaction?s("div",{staticClass:"grey--text text--darken-2 subheading"},[t._t("interaction")],2):t._e(),s("br"),t.$store.state.Learn.gotIt?s("div",{class:t.$store.state.Learn.answerBackgroundColor},[s("v-container",{attrs:{fluid:""}},[t.yourAnswer?s("div",{staticClass:"grey--text text--darken-1 title"},[t._v("\n        Your answer was:\n        "),s("div",{staticClass:"mt-2"},[t._t("yourAnswer")],2),s("br")]):t._e(),t.solution?s("div",[s("div",{staticClass:"grey--text text--darken-1 title"},[t._v("\n          Solution:\n        ")]),s("div",{staticClass:"mt-2 grey--text text--darken-2 subheading"},[t._t("solution")],2),s("br")]):t._e(),t.correctAnswer?s("div",[s("div",{staticClass:"grey--text text--darken-1 title"},[t._v("\n          Correct Answer:\n        ")]),s("div",{staticClass:"mt-2 grey--text text--darken-2 subheading"},[t._t("correctAnswer")],2)]):t._e()])],1):t._e()])},n=[],r={computed:{instruction:function(){return this.$store.state.instruction},operation:function(){return this.$store.state.operation},interaction:function(){return this.$store.state.interaction},yourAnswer:function(){return this.$store.state.yourAnswer},solution:function(){return this.$store.state.solution},correctAnswer:function(){return this.$store.state.correctAnswer}}},i={name:"EjercicioSlot",mixins:[r]},o=i,c=s("2877"),u=Object(c["a"])(o,a,n,!1,null,null,null);u.options.__file="EjercicioSlot.vue";e["a"]=u.exports},e89b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ejercicio-slot",[s("div",{attrs:{slot:"instruccion"},slot:"instruccion"},[t._v("\n    Selecciona el símbolo que corresponde para que la operación sea correcta.\n  ")]),s("div",{attrs:{slot:"operacion"},slot:"operacion"},[s("div",{staticClass:"text-xs-center mt-2"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.numero1,expression:"question.numero1"}],staticClass:"katex"}),s("span",{staticClass:"boxed mr-2 ml-2"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.selected,expression:"selected"}],staticClass:"katex"})]),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.numero2,expression:"question.numero2"}],staticClass:"katex"})])]),s("div",{attrs:{slot:"interaccion"},slot:"interaccion"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{staticClass:"display-1",attrs:{row:"","align-center":"","justify-center":"",wrap:""}},t._l(t.questions,function(e){return s("card-select-texto",{key:e.textoCard,attrs:{helpers:t.helpers,btn:e.btn,subject:t.subject,active:e.active,"texto-card":e.textoCard,"text-size":t.textSize}})}))],1)],1),s("div",{attrs:{slot:"tuRespuesta"},slot:"tuRespuesta"},[s("respuesta-usuario",{attrs:{helpers:t.helpers,expresion:t.selected}})],1),s("div",{attrs:{slot:"solucion"},slot:"solucion"},[t.question.suma?s("div",[s("div",[t._v("\n        Si\n        "),s("b",[s("span",{staticClass:"blue--text text--darken-1"},[t._v("sumamos")])]),t._v("\n        los números "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.parte1,expression:"question.parte1 "}],staticClass:"blue--text text--darken-1"}),t._v("\n        y\n        "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.parte2,expression:"question.parte2"}],staticClass:"blue--text text--darken-1"}),t._v("\n        obtenemos el número\n        "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.total,expression:"question.total"}],staticClass:"blue--text text--darken-1"}),t._v(".\n      ")]),t._v("\n      En esta operación estamos\n      "),s("b",[s("span",{staticClass:"blue--text text--darken-1"},[t._v("juntando")])]),t._v("\n      las dos cantidades, por lo que el símbolo que debemos utilizar es el de la\n      "),s("b",[s("span",{staticClass:"blue--text text--darken-1"},[t._v("suma")])]),t._v(".\n    ")]):t._e(),t.question.resta?s("div",[s("div",[t._v("\n        Si\n        "),s("b",[s("span",{staticClass:"blue--text text--darken-1"},[t._v("restamos")])]),t._v("\n        al\n        "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.parte1,expression:"question.parte1"}],staticClass:"blue--text text--darken-1"}),t._v("\n        el número\n        "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.parte2,expression:"question.parte2"}],staticClass:"blue--text text--darken-1"}),t._v("\n        obtenemos el número\n        "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.total,expression:"question.total"}],staticClass:"blue--text text--darken-1"}),t._v(".\n      ")]),t._v("\n      En esta operación el resultado es la\n      "),s("b",[s("span",{staticClass:"blue--text text--darken-1"},[t._v("diferencia")])]),t._v("\n      de los números\n      "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.parte1,expression:"question.parte1"}],staticClass:"blue--text text--darken-1"}),t._v("\n      y\n      "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.parte2,expression:"question.parte2"}],staticClass:"blue--text text--darken-1"}),t._v("\n      por lo que estamos realizando una\n      "),s("b",[s("span",{staticClass:"blue--text text--darken-1"},[t._v("resta")])]),t._v(".\n    ")]):t._e(),s("div",{staticClass:"text-xs-center"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:t.question.expresion1,expression:"question.expresion1"}],staticClass:"katex"})])]),s("div",{attrs:{slot:"respuestaCorrecta"},slot:"respuestaCorrecta"},[s("respuesta-correcta",{attrs:{correcta:t.question.correcta}})],1)])},n=[],r=s("16e1"),i=s("da27"),o=s("a76e"),c=s("27a0"),u={name:"Dynamic",props:["helpers","subject"],components:{"card-select-texto":r["a"],"ejercicio-slot":i["a"],"respuesta-usuario":o["a"],"respuesta-correcta":c["a"]},data:function(){return{btn1:!1,btn2:!1,textSize:"display-1",selected:"\\footnotesize ?",suma:"+",resta:"-",dummy:{numero1:"8",numero2:"9 = 17",expresion1:"8\\textcolor{#1E88E5}{+}9 = 17",total:"17",parte1:"8",parte2:"9",suma:!0,correcta:"+"}}},methods:{active1:function(t,e){this.btn1=!1,this.btn2=!1,t||(this.respuestaCorrectaChecker(e),this.selected=e,this.btn1=!0,this.btn2=!1,this.$store.commit("Learn/enableButton")),t&&(this.$store.commit("Learn/getUserAnswer",{answer:!1,answerData:null}),this.btn1=!1,this.btn2=!1,this.$store.commit("Learn/disableButton"),this.selected="\\footnotesize ?")},active2:function(t,e){this.btn1=!1,this.btn2=!1,t||(this.respuestaCorrectaChecker(e),this.selected=e,this.btn1=!1,this.btn2=!0,this.$store.commit("Learn/enableButton")),t&&(this.$store.commit("Learn/getUserAnswer",{answer:!1,answerData:null}),this.btn1=!1,this.btn2=!1,this.$store.commit("Learn/disableButton"),this.selected="\\footnotesize ?")},respuestaCorrectaChecker:function(t){return t===this.question.correcta?this.$store.commit("Learn/getUserAnswer",{answer:!0,answerData:t}):this.$store.commit("Learn/getUserAnswer",{answer:!1,answerData:t})}},computed:{questions:function(){var t=[{btn:this.btn1,active:this.active1,textoCard:this.suma},{btn:this.btn2,active:this.active2,textoCard:this.resta}];return t},question:function(){return this.$store.state.Learn.question}}},l=u,x=(s("3633"),s("2877")),v=Object(x["a"])(l,a,n,!1,null,"67ded4b6",null);v.options.__file="Dynamic.vue";e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-6d12a944.e678effc.js.map