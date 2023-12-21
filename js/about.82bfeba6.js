"use strict";(self["webpackChunkthebalemamuseum"]=self["webpackChunkthebalemamuseum"]||[]).push([[443],{3344:function(a,s,t){t.r(s),t.d(s,{default:function(){return v}});var e=function(){var a=this,s=a._self._c;return s("div",{staticClass:"artistes"},[s("div",{staticClass:"container"},[s("h1",{attrs:{id:"Artistes"}},[a._v("Artistes")]),s("h2",[a._v("Les nostres persones especials que formen Balema")]),s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Ariadna Padilla")]),s("img",{attrs:{src:t(1947),alt:"Artista 1"}})]),s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Carlos Hernàndez")]),s("img",{attrs:{src:t(314),alt:"Artista 2"}})]),s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Diego Ramírez")]),s("img",{attrs:{src:t(493),alt:"Artista 3"}})]),s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Elena Cavaliren")]),s("img",{attrs:{src:t(4435),alt:"Artista 4"}})]),s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Eugen Bravalia")]),s("img",{attrs:{src:t(5020),alt:"Artista 5"}})]),s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Laura Sabostoni")]),s("img",{attrs:{src:t(683),alt:"Artista 6"}})]),s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Malika Boyanshi")]),s("img",{attrs:{src:t(5824),alt:"Artista 7"}})]),s("div",{staticClass:"image-wrapper"},[s("div",{staticClass:"nombre"},[a._v("Ángel Sabadia")]),s("img",{attrs:{src:t(8167),alt:"Artista 8"}})])])]),s("Bios")],1)},i=[],r=function(){var a=this,s=a._self._c;return s("div",{staticClass:"container"},[s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-sm-12"},[s("img",{staticClass:"imatgecol",attrs:{src:t(1947),alt:"Artista 1"}})]),a._m(0)]),s("hr"),s("div",{staticClass:"row"},[a._m(1),s("div",{staticClass:"col-lg-4 col-sm-12"},[s("img",{staticClass:"imatgecol",attrs:{src:t(314),alt:"Artista 1"}})])])])},l=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"col-lg-8 col-sm-12"},[s("h1",[a._v("Ariadna Padilla")]),s("p",[a._v("Ariadna Padilla, nascuda a Barcelona en 1995, és una destacada artista contemporània coneguda pel seu enfocament únic en l'abstracció i el surrealisme "),s("br"),a._v(" "),s("br"),a._v(" Graduada amb honors en Belles arts, Ariadna explora la complexitat de la psique humana, creant experiències visuals i emocionals úniques. El seu estil es caracteritza per la fusió de formes abstractes amb elements surrealistes, creant composicions dinàmiques que conviden a la reflexió. ")]),s("button",{staticClass:"boto"},[a._v(" Descobreix les seves obres exposades! ")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"col-lg-8 col-sm-12"},[s("h1",[a._v("Carlos Hernàndez")]),s("p",[a._v("Carlos Hernández, un talentós jove de 35 anys, va néixer a Madrid, Espanya. La seva fascinació per l'art es va manifestar des de primerenca edat, explorant diverses disciplines creatives.ontemporània coneguda pel seu enfocament únic en l'abstracció i el surrealisme "),s("br"),a._v(" "),s("br"),a._v(" L'estil distintiu de Carlos fusiona la precisió del disseny gràfic amb la calidesa i expressivitat de les arts visuals. La seva obra reflecteix una mescla única de formes geomètriques i colors vius, creant composicions dinàmiques que capturen l'essència de la modernitat. Les línies netes i l'atenció al detall són segells distintius en les seves creacions, transmetent un equilibri entre l'abstracte i el contemporani. ")]),s("button",{staticClass:"boto"},[a._v(" Descobreix les seves obres exposades! ")])])}],n=t(1001),o={},c=(0,n.Z)(o,r,l,!1,null,null,null),u=c.exports,m={name:"ArtistesView",components:{Bios:u}},d=m,p=(0,n.Z)(d,e,i,!1,null,null,null),v=p.exports},3279:function(a,s,t){t.r(s),t.d(s,{default:function(){return _}});var e=function(){var a=this,s=a._self._c;return s("b-card-group",{attrs:{deck:""}},a._l(a.proyectos,(function(a){return s("div",{key:a.id},[s("Actuals",{attrs:{srcimg:a.srcimg,alt:a.alt,titulo:a.titulo,texto:a.texto,url:a.url}})],1)})),0)},i=[],r=function(){var a=this,s=a._self._c;return s("div",[s("b-card",{staticClass:"lg-4",staticStyle:{"max-width":"20rem","flex-wrap":"wrap","border-color":"black","border-width":"1px","border-radius":"0%",margin:"10px 10px","object-fit":"cover"},attrs:{title:a.titulo,"img-src":a.srcimg,"img-alt":a.alt,"img-top":"",footer:a.autor,tag:"proyecto"}},[s("b-card-text",[a._v(" "+a._s(a.texto)+" ")]),s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticStyle:{"background-color":"rgb(255, 255, 255)","border-radius":"0%","border-color":"black",color:"black"},attrs:{title:"Descubreix-me!",variant:"primary",href:a.url}},[a._v("Més info")])],1)],1)},l=[],n={props:["id","autor","titulo","srcimg","alt","texto","url"]},o=n,c=t(1001),u=(0,c.Z)(o,r,l,!1,null,"135d5549",null),m=u.exports;const d="../llistaexpo.json";var p={props:{name:{type:String,default:"proyecto"}},components:{Actuals:m},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const a=await fetch(d),s=await a.json();this.proyectos=s,console.log(s)}}},v=p,g=(0,c.Z)(v,e,i,!1,null,null,null),_=g.exports},3124:function(a,s,t){t.r(s),t.d(s,{default:function(){return o}});var e=function(){var a=this;a._self._c;return a._m(0)},i=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"container"},[s("h1",[a._v("Horaris")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-sm-12"},[s("h6",[a._v("Horaris")]),s("div",{staticClass:"row"},[s("p",{staticClass:"col"},[a._v("De dilluns a dissabte")]),s("p",{staticClass:"col"},[a._v("De 10h a 21h")])]),s("div",{staticClass:"row"},[s("p",{staticClass:"col"},[a._v("Diumenges i festius")]),s("p",{staticClass:"col"},[a._v("De 10h a 14:30h")])])]),s("div",{staticClass:"col-lg-6 col-sm-12"},[s("h6",[a._v("Tarifes")]),s("div",{staticClass:"row"},[s("p",{staticClass:"col-lg-8 col-sm-10"},[a._v("Entrada general (Inclou totes les exposicions)")]),s("p",{staticClass:"col-lg-4 col-sm-2"},[s("strong",[a._v("10€")])])]),s("div",{staticClass:"row"},[s("p",{staticClass:"col-lg-8 col-sm-10"},[a._v("Entrada individual (Inclou una exposició)")]),s("p",{staticClass:"col-lg-4 col-sm-2"},[s("strong",[a._v("4€")])])])])])])}],r=t(1001),l={},n=(0,r.Z)(l,e,i,!1,null,null,null),o=n.exports},9231:function(a,s,t){t.r(s),t.d(s,{default:function(){return x}});var e=function(){var a=this,s=a._self._c;return s("div",{staticClass:"opinions"},[s("JenSimmons",{attrs:{msg:"Welcome to Your Vue.js App"}}),s("Estrelles")],1)},i=[],r=function(){var a=this;a._self._c;return a._m(0)},l=[function(){var a=this,s=a._self._c;return s("section",{staticClass:"container borde"},[s("h1",{attrs:{id:"Opinions"}},[a._v("Opinions")]),s("section",{staticClass:"jensimmons"},[s("ul",[s("li",[s("h3",[a._v("Marta Campos")]),s("p",[a._v("Lloc amb una escencia particular, m’ha agradat molt, però s’ubica bastant lluny del centre de la ciutat… ")]),s("h5",[a._v(" ★★★★☆")])]),s("li",[s("h3",[a._v("Olívia Martínez")]),s("p",[a._v("Espectacular! Vaig anar-hi amb els meus fills i el meu home i tant ells com nosaltres vam gaudir de cada exposició. Són interactives i aprens coses noves al mateix temps. Recomano anar-hi!")]),s("h5",[a._v("★★★★★")])]),s("li",[s("h3",[a._v("Marc Santmartí")]),s("p",[a._v("Bona experiència, una atenció esplendida per part dels empleats!")]),s("h5",[a._v(" ★★★★☆")])]),s("li",[s("h3",[a._v("Carlos Díaz")]),s("p",[a._v("Aquest museu d'art contemporani i interactiu mereix cinc estrelles per la seva capacitat per a inspirar i desafiar la ment a través d'obres sorprenents i experiències immersives")]),s("h5",[a._v("★★★★★")])])])])])}],n={name:"JenSimmons",props:{msg:String}},o=n,c=t(1001),u=(0,c.Z)(o,r,l,!1,null,null,null),m=u.exports,d=function(){var a=this,s=a._self._c;return s("div",{staticClass:"opinio"},[s("h1",[a._v("Donan's la teva opinió!")]),s("b-form-rating",{model:{value:a.value,callback:function(s){a.value=s},expression:"value"}}),s("p",{staticClass:"mt-2"},[a._v("Estrelles: "+a._s(a.value))]),s("b-row",{staticClass:"mt-2"},[s("b-col",{attrs:{sm:"2"}},[s("label",{attrs:{for:"textarea-large"}},[a._v("Comentaris:")])]),s("b-col",{attrs:{sm:"10"}},[s("b-form-textarea",{attrs:{id:"textarea-large",size:"lg",placeholder:"Escriu aquí..."}})],1)],1),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"my-modal",expression:"'my-modal'"}]},[a._v("Enviar resposta")]),s("b-modal",{attrs:{id:"my-modal"}},[a._v("La teva resposta ha estat enviada. Gràcies!")])],1)},p=[],v={data(){return{value:null}}},g=v,_=(0,c.Z)(g,d,p,!1,null,null,null),f=_.exports,b={name:"OpinionsView",components:{JenSimmons:m,Estrelles:f}},C=b,h=(0,c.Z)(C,e,i,!1,null,null,null),x=h.exports},8167:function(a,s,t){a.exports=t.p+"img/AngelBadia.12a2d3d9.jpg"},1947:function(a,s,t){a.exports=t.p+"img/AriadnaPadilla.2fd2a250.jpeg"},314:function(a,s,t){a.exports=t.p+"img/CarlosRigotir.628f0000.jpeg"},493:function(a,s,t){a.exports=t.p+"img/DiegoRamirez.75f2d029.jpg"},4435:function(a,s,t){a.exports=t.p+"img/ElenaCavaliren.69567422.jpg"},5020:function(a,s,t){a.exports=t.p+"img/EugenBrava.c34ad932.jpeg"},683:function(a,s,t){a.exports=t.p+"img/LauraBoston.fe1cb07d.jpeg"},5824:function(a,s,t){a.exports=t.p+"img/MalikaBoya.eb2273dc.jpeg"}}]);
//# sourceMappingURL=about.82bfeba6.js.map