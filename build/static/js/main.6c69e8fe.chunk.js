(this.webpackJsonpprueba=this.webpackJsonpprueba||[]).push([[0],{121:function(e,a,t){},123:function(e,a,t){},125:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(11),r=t.n(s),i=t(24),l=t(14),o=Object(l.h)((function(e){var a=e.history;return Object(c.useEffect)((function(){var e=a.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),d=t(18),j=(t(121),t(1)),b=function(){var e=Object(c.useState)(!1),a=Object(d.a)(e,2),t=a[0],n=a[1],s=function(){return n(!1)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-container",children:[Object(j.jsx)(i.b,{to:"/",className:"navbar-logo",onClick:s,children:"CoDNaS-PRs"}),Object(j.jsx)("div",{className:"menu-icon",onClick:function(){return n(!t)},children:Object(j.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(j.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/",className:"nav-links",onClick:s,children:"Inicio"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/tutorial",className:"nav-links",onClick:s,children:"Tutorial"})})]})]})})})},m=t(88),h=function(e){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("a",{className:"cards__item__link",href:e.path,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(j.jsx)("img",{className:"cards__item__img",alt:e.alt,src:e.src})}),Object(j.jsx)("div",{className:"cards__item__info",children:Object(j.jsx)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:e.text})})]})})})};var u=function(){return Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",style:{textAlign:"center"},children:"Con la colaboraci\xf3n de las universidades"}),Object(j.jsx)("div",{className:"cards__container",children:Object(j.jsx)("div",{className:"cards__wrapper",children:Object(j.jsxs)("ul",{className:"cards__items",children:[Object(j.jsx)(h,{src:"/images/img-pucp.jpg",text:"La Pontificia Universidad Cat\xf3lica del Per\xfa es una universidad privada en Lima, Per\xfa.",label:"Pontificia Universidad Cat\xf3lica del Per\xfa",path:"https://www.pucp.edu.pe",alt:"PUCP"}),Object(j.jsx)(h,{src:"/images/img-unq.png",text:"La Universidad Nacional de Quilmes es una universidad nacional argentina y la m\xe1s importante de la ciudad de Quilmes.",label:"Universidad Nacional de Quilmes",path:"http://www.unq.edu.ar",alt:"UNQ"})]})})})]})},O=t(58),x=t(16),p=t(197),_=t(211),f=t(213),g=t(210),v=Object(c.createContext)(),N=(t(123),["btn--primary","btn--secondary","btn--outline","btn--test"]),y=["btn--medium","btn--large"],w=function(e){var a=e.children,t=e.type,c=e.onClick,n=e.buttonStyle,s=e.buttonSize,r=e.width,l=e.to,o=void 0===l?"#!":l,d=N.includes(n)?n:N[0],b=y.includes(s)?s:y[0];return""===o?Object(j.jsx)("button",{className:"btn ".concat(d," ").concat(b),onClick:c,type:t,style:{width:r},children:a}):Object(j.jsx)(i.b,{to:o,className:"btn-mobile",children:Object(j.jsx)("button",{className:"btn ".concat(d," ").concat(b),onClick:c,type:t,style:{width:r},children:a})})},C=t(209),I=function(e){var a=e.handleInputChange,t=e.onKeyPress,n=Object(c.useContext)(v).prs;return Object(j.jsx)(C.a,{id:"pdbChain",options:n,getOptionLabel:function(e){return e.pdb_id},size:"small",onInputChange:a,renderInput:function(e){return Object(j.jsx)(_.a,Object(x.a)(Object(x.a)({},e),{},{label:"Prote\xedna repetida",variant:"outlined",style:{width:"100%"},onKeyPress:t}))}})};t(125);function P(e){return Object(j.jsx)(g.a,Object(x.a)({elevation:6,variant:"filled"},e))}var S=function(){var e=Object(c.useContext)(v),a=e.setCurrentPr,t=e.clearPr,n=Object(c.useState)({pdbChain:"",lower:"",higher:""}),s=Object(d.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)(!1),b=Object(d.a)(o,2),m=b[0],h=b[1],u=Object(c.useState)(""),g=Object(d.a)(u,2),N=g[0],y=g[1],C=Object(l.g)();Object(c.useEffect)((function(){t()}),[]);var S=r.pdbChain,k=r.lower,E=r.higher,R=function(e){i(Object(x.a)(Object(x.a)({},r),{},Object(O.a)({},e.target.name,e.target.value)))},F=function(){return""===k&&""===E||""!==S?parseInt(k)<=0||parseInt(E)<=0?(y("El l\xedmite inferior y el l\xedmite superior de la regi\xf3n de repetici\xf3n (Inf. y Sup., respectivamente) tiene que ser valores mayores que 0."),D(),!1):!(parseInt(k)>=parseInt(E))||(y("El l\xedmite inferior de la regi\xf3n de repetici\xf3n (Inf.) tienen que ser mayor al l\xedmite superior de la regi\xf3n de repetici\xf3n (Sup.)."),D(),!1):(y("Falta llenar el campo de la prote\xedna repetida."),D(),!1)},W=function(e){if("Enter"===e.key){if(""===S&&""===k&&""===E)return y("Falta llenar el campo de la prote\xedna repetida con o sin los campos de la regi\xf3n de repetici\xf3n (Inf. y Sup.)."),void D();if(""!==S&&""===k&&""===E)return a(r),y(""),void C.push("/detail");if(""!==S&&(""===k||""===E))return y("Si gusta estimar precisa de llenar los campos de la regi\xf3n de repetici\xf3n (Inf. y Sup.)."),void D();if((""!==k||""!==E)&&""===S)return y("Falta llenar el campo de la prote\xedna repetida."),void D();F()&&(a(r),y(""),C.push("/estimate"))}},D=function(){h(!0)},T=function(e,a){"clickaway"!==a&&h(!1)};return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsxs)("div",{className:"form-content",children:[Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)(p.a,{container:!0,justify:"center",spacing:3,children:Object(j.jsx)(p.a,{item:!0,lg:12,md:12,xs:12,children:Object(j.jsx)(I,{handleInputChange:function(e,a){i(Object(x.a)(Object(x.a)({},r),{},{pdbChain:a}))},onKeyPress:W})})})}),Object(j.jsx)("div",{className:"form-control",children:Object(j.jsxs)(p.a,{container:!0,justify:"center",spacing:3,children:[Object(j.jsx)(p.a,{item:!0,xs:6,lg:6,md:6,children:Object(j.jsx)(_.a,{id:"lower",name:"lower",label:"Inf.",variant:"outlined",size:"small",type:"number",placeholder:"2",fullWidth:!0,onChange:R,onKeyPress:W})}),Object(j.jsx)(p.a,{item:!0,xs:6,lg:6,md:6,children:Object(j.jsx)(_.a,{id:"higher",name:"higher",label:"Sup.",variant:"outlined",size:"small",type:"number",placeholder:"79",fullWidth:!0,onChange:R,onKeyPress:W})})]})}),Object(j.jsx)("div",{className:"form-control",children:Object(j.jsxs)(p.a,{container:!0,justify:"center",spacing:3,children:[Object(j.jsx)(p.a,{item:!0,xs:12,lg:6,md:6,children:Object(j.jsx)(w,{to:"",onClick:function(e){return""===S&&""===k&&""===E?(y("Falta llenar el campo de la prote\xedna repetida con los campos de la regi\xf3n de repetici\xf3n (Inf. y Sup.)."),void D()):""===S||""!==k&&""!==E?""===k&&""===E||""!==S?void(F()&&(a(r),y(""),C.push("/estimate"))):(y("Falta llenar el campo de la prote\xedna repetida."),void D()):(y("Falta llenar los campos de la regi\xf3n de repetici\xf3n (Inf. y Sup.)."),void D())},buttonStyle:"btn--primary",children:"Estimar"})}),Object(j.jsx)(p.a,{item:!0,xs:12,lg:6,md:6,children:Object(j.jsx)(w,{to:"",onClick:function(e){if(""===S)return y("Falta llenar el campo de la prote\xedna repetida."),void D();a(r),y(""),C.push("/detail")},buttonStyle:"btn--primary",children:"Buscar"})})]})})]}),Object(j.jsx)(f.a,{open:m,autoHideDuration:3e3,onClose:T,style:{textAlign:"center"},anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(j.jsx)(P,{onClose:T,severity:"error",children:N})})]})},k=t(97),E=t.n(k),R=function(e){var a=e.title,t=e.text,c=e.color;return Object(j.jsx)("div",{className:"cards",children:Object(j.jsx)("div",{className:"cards__container",children:Object(j.jsx)("div",{className:"cards__wrapper",children:Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("div",{className:"cards__item__paper",children:[Object(j.jsx)("div",{className:"cards__item__title",children:Object(j.jsx)("span",{style:{fontWeight:"bold"},children:a})}),Object(j.jsx)(S,{}),Object(j.jsx)("div",{className:"cards__item__body ".concat(c),children:Object(j.jsx)("span",{children:t})}),Object(j.jsx)("div",{className:"cards__item__btn",children:Object(j.jsxs)(w,{to:"/tutorial",buttonStyle:"btn--outline",width:"40%",children:[Object(j.jsx)(E.a,{className:"icon__tutorial"}),Object(j.jsx)("span",{children:"\xbfC\xf3mo evaluar?"})]})})]})})})})})})},F=function(){var e=Object(c.useContext)(v).getPrs;return Object(c.useEffect)((function(){e()}),[]),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)("section",{children:Object(j.jsx)(m.Parallax,{bgImage:"/images/img-2.jpg",bgImageAlt:"prs",bgImageStyle:{height:"100%",width:"100%"},children:Object(j.jsx)(R,{title:"Herramienta para el an\xe1lisis de diversidad conformacional en estructuras de prote\xednas repetidas",text:"Ingresar una cadena de prote\xedna repetida para buscar su informaci\xf3n de diversidad conformacional en la base de datos o estimar su diversidad conformacional agregando la regi\xf3n de repetici\xf3n de la misma",color:"primary"})})}),Object(j.jsx)("section",{children:Object(j.jsx)(u,{})})]})},W=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("div",{className:"cards__item__link",children:[Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h1",{className:"cards__item__title",children:"Tutorial"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Resultados de la b\xfasqueda y estimaci\xf3n de diversidad conformacional de la cadena de prote\xedna repetida"}),Object(j.jsx)("br",{}),Object(j.jsx)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:"La presente herramienta permite buscar en la base de datos CoDNaS-PRs los resultados obtenidos empleando el m\xe9todo que analiza la diversidad conformacional de las prote\xednas repetidas en base al dominio repetitivo (regiones repetidas) y en caso no se encuentre en la misma, se tiene la opci\xf3n de estimar la diversidad conformacional de la prote\xedna repetida que se ingrese."})]}),Object(j.jsx)("img",{alt:"",src:"/images/img-tutorial-1.png",style:{width:"100%"}})]})})})},D=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("div",{className:"cards__item__link",children:[Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Buscar informaci\xf3n de diversidad conformacional de la prote\xedna repetida"}),Object(j.jsx)("br",{}),Object(j.jsxs)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:["Para acceder u obtener informaci\xf3n de la diversidad conformacional de alguna prote\xedna repetida, existe en la p\xe1gina principal la opci\xf3n"," ",Object(j.jsx)("i",{children:Object(j.jsx)("b",{children:"Buscar"})}),", la cual permite extraer de la base de datos CoDNaS-PRs la informaci\xf3n de diversidad conformacional (informaci\xf3n general, informaci\xf3n estructural y conformaciones) de la prote\xedna repetida que se requiera. Para esto, los usuarios pueden buscar \xfanicamente por cadena de prote\xedna repetida. Asimismo, en caso el usuario no recuerde la cadena de prote\xedna repetida, la presente herramienta le otorgar\xe1 un autocompletado. Adem\xe1s, la opci\xf3n"," ",Object(j.jsx)("i",{children:Object(j.jsx)("b",{children:" Buscar "})}),"estar\xe1 habilitado siempre y cuando se haya ingresado la cadena de prote\xedna repetida, sino estar\xe1 deshabilitado. Con lo mencionado previamente, facilitar\xe1 al usuario la b\xfasqueda de informaci\xf3n de diversidad conformacional de la prote\xedna repetida que quisiera conocer."]})]}),Object(j.jsx)("img",{alt:"",src:"/images/img-tutorial-2.png",style:{width:"100%"}})]})})})},T=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("div",{className:"cards__item__link",children:[Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Estimar la diversidad conformacional de la prote\xedna repetida"}),Object(j.jsx)("br",{}),Object(j.jsxs)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:["Para estimar la diversidad conformacional de alguna prote\xedna repetida existe en la p\xe1gina principal la opci\xf3n",Object(j.jsx)("i",{children:Object(j.jsx)("b",{children:" Estimar"})}),", la cual permite estimar la diversidad conformacional de la prote\xedna repetida que se requiera y obtener los resultados correspondientes (informaci\xf3n general, informaci\xf3n estructural y conformaciones). Para esto, los usuarios pueden estimar ingresando la cadena de prote\xedna repetida y la regi\xf3n de repetici\xf3n, la cual tiene un l\xedmite inferior y un l\xedmite superior. Asimismo, en caso el usuario no recuerde la cadena de prote\xedna repetida, la presente herramienta le otorgar\xe1 un autocompletado. Adem\xe1s, la opci\xf3n",Object(j.jsx)("i",{children:Object(j.jsx)("b",{children:" Estimar "})}),"estar\xe1 habilitado siempre y cuando se haya ingresado la cadena de prote\xedna repetida y la regi\xf3n de repetici\xf3n, sino estar\xe1 deshabilitado. Con lo mencionado previamente, facilitar\xe1 al usuario estimar la diversidad conformacional de la prote\xedna repetida que quisiera evaluar."]})]}),Object(j.jsx)("img",{alt:"",src:"/images/img-tutorial-3.png",style:{width:"100%"}})]})})})},M=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("div",{className:"cards__item__link",children:[Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Resultados de la b\xfasqueda y estimaci\xf3n de diversidad conformacional de la cadena de prote\xedna repetida"}),Object(j.jsx)("br",{}),Object(j.jsxs)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:["Una vez presionado el bot\xf3n",Object(j.jsx)("i",{children:Object(j.jsx)("b",{children:" Buscar"})}),", se le redireccionar\xe1 al usuario a una p\xe1gina que detalla los datos recopilados de l\xe1 b\xfasqueda en la base de datos CoDNaS-PRs de la informaci\xf3n de diversidad conformacional de la cadena de prote\xedna repetida insertada."]}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Secci\xf3n 1: Informaci\xf3n General"}),Object(j.jsx)("br",{}),Object(j.jsx)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:"La informaci\xf3n general sobre la prote\xedna repetida se presenta en la parte superior de la p\xe1gina."}),Object(j.jsxs)("ul",{className:"cards__item__text",style:{fontWeight:"lighter",margin:"2vh"},children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Nombre de la prote\xedna repetida: "}),"Nombre representativo de la prote\xedna extra\xedda de RCSB PDB."]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"T\xedtulo: "}),"T\xedtulo que representa a la prote\xedna"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Organismo: "})," Organismo a la que pertenece la prote\xedna repetida."]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Longitud de secuencia: "})," Cantidad de amino\xe1cidos de la prote\xedna repetida."]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Clasificaci\xf3n: "}),"Tipo de prote\xedna clasificado por RCSB PDB."]})]})]}),Object(j.jsx)("img",{alt:"",src:"/images/img-tutorial-4.png",style:{width:"100%"}})]})})})},G=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("div",{className:"cards__item__link",children:[Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Secci\xf3n 2: Informaci\xf3n Estructural"}),Object(j.jsx)("br",{}),Object(j.jsx)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:"La secci\xf3n Informaci\xf3n Estructural proporciona datos estructurales comparativos entre todas las conformaciones de la prote\xedna repetida incluyendo la misma. Entre estos datos se tiene al n\xfamero de conformaciones, el cual muestra la evidencia disponible sobre la diversidad conformacional de la prote\xedna repetida. Adem\xe1s, se muestra el RMSD m\xednimo, m\xe1ximo y promedio determinado por el software Mammoth. Estos valores proporcionan las mediciones centrales de la diversidad conformacional."})]}),Object(j.jsx)("img",{alt:"",src:"/images/img-tutorial-5.png",style:{width:"100%"}})]})})})},q=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)("div",{className:"cards__item__link",children:[Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Secci\xf3n 3: Conformaciones"}),Object(j.jsx)("br",{}),Object(j.jsx)("h5",{className:"cards__item__text",style:{fontWeight:"lighter"},children:"La presente secci\xf3n muestra las diversas conformaciones que la prote\xedna repetida tiene. Asimismo, se presenta para cada conformaci\xf3n la regi\xf3n repetida a trav\xe9s del l\xedmite inferior y l\xedmite superior, la secuencia de similitud expresado en un valor num\xe9rico y la diferencia estructural entre la prote\xedna repetida y la conformaci\xf3n expresada por la medida estad\xedstica RMSD."})]}),Object(j.jsx)("img",{alt:"",src:"/images/img-tutorial-6.png",style:{width:"100%"}})]})})})},L=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("div",{className:"cards",children:Object(j.jsx)("div",{className:"cards__container__tutorial",children:Object(j.jsxs)("div",{className:"cards__wrapper",children:[Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(W,{})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(D,{})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(T,{})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(M,{})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(G,{})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(q,{})})]})})})})},B=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)(L,{})})},A=t(198),U=t(192),z=t(199),K=t(200),H=t(201),Q=t(202),J=function(e){var a=e.infoGeneral,t=a.pdb_id,n=a.cluster,s=a.nombre_proteina,r=a.titulo,i=a.organismo,l=a.long_secuencia,o=a.clasificacion,d=a.num_regiones;return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsx)("div",{className:"cards__item__link",children:Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h1",{className:"cards__item__title",children:t}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Informaci\xf3n General"}),Object(j.jsx)("br",{}),Object(j.jsx)(A.a,{component:U.a,children:Object(j.jsx)(z.a,{className:"table__detail","aria-label":"simple data",children:Object(j.jsxs)(K.a,{children:[Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Nombre de la prote\xedna repetida:"}),Object(j.jsx)(Q.a,{children:s})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"T\xedtulo:"}),Object(j.jsx)(Q.a,{children:r})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Organismo"}),Object(j.jsx)(Q.a,{children:i})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Longitud de secuencia:"}),Object(j.jsx)(Q.a,{children:l})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Clasificaci\xf3n:"}),Object(j.jsx)(Q.a,{children:o})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Cluster:"}),Object(j.jsx)(Q.a,{children:n})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Regiones de repetici\xf3n:"}),Object(j.jsx)(Q.a,{children:d})]})]})})})]})})})})},V=function(e){var a=e.infoEstructural;return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsx)("div",{className:"cards__item__link",children:Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Informaci\xf3n Estructural"}),Object(j.jsx)("br",{}),a.map((function(e){return Object(j.jsxs)("div",{style:{color:"#252e48",marginBottom:"2vh"},children:[Object(j.jsxs)("h3",{style:{marginBottom:"2vh"},children:["Regi\xf3n ",e.region]}),Object(j.jsx)(A.a,{component:U.a,children:Object(j.jsx)(z.a,{className:"table__detail","arial-label":"simple data",children:Object(j.jsxs)(K.a,{children:[Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"#Conformaciones:"}),Object(j.jsx)(Q.a,{children:e.num_conformaciones}),Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"RMSD M\xednimo:"}),Object(j.jsx)(Q.a,{children:e.rmsd_min})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"RMSD M\xe1ximo:"}),Object(j.jsx)(Q.a,{children:e.rmsd_max}),Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"RMSD Promedio:"}),Object(j.jsx)(Q.a,{children:e.rmsd_avg})]})]})})})]},e.region)}))]})})})})},X=t(203),Y=t(34),Z=t(194),$=t(206),ee=t(208),ae=t(204),te=t(205),ce=t(47),ne=t.n(ce),se=t(48),re=t.n(se),ie=Object(X.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function le(e){var a=ie(),t=Object(Y.a)(),c=e.count,n=e.page,s=e.rowsPerPage,r=e.onChangePage;return Object(j.jsxs)("div",{className:a.root,children:[Object(j.jsx)(Z.a,{onClick:function(e){r(e,0)},disabled:0===n,"aria-label":"first page",children:"rtl"===t.direction?Object(j.jsx)(ne.a,{}):Object(j.jsx)(re.a,{})}),Object(j.jsx)(Z.a,{onClick:function(e){r(e,n-1)},disabled:0===n,"aria-label":"previous page",children:"rtl"===t.direction?Object(j.jsx)(ae.a,{}):Object(j.jsx)(te.a,{})}),Object(j.jsx)(Z.a,{onClick:function(e){r(e,n+1)},disabled:n>=Math.ceil(c/s)-1,"aria-label":"next page",children:"rtl"===t.direction?Object(j.jsx)(te.a,{}):Object(j.jsx)(ae.a,{})}),Object(j.jsx)(Z.a,{onClick:function(e){r(e,Math.max(0,Math.ceil(c/s)-1))},disabled:n>=Math.ceil(c/s)-1,"aria-label":"last page",children:"rtl"===t.direction?Object(j.jsx)(re.a,{}):Object(j.jsx)(ne.a,{})})]})}var oe=function(e){var a=e.conformaciones,t=Object(c.useContext)(v),n=t.pr,s=t.infoGeneral.num_regiones,r=Object(c.useState)(0),i=Object(d.a)(r,2),l=i[0],o=i[1],b=Object(c.useState)(5),m=Object(d.a)(b,2),h=m[0],u=m[1],O=Object(c.useState)([]),x=Object(d.a)(O,2),p=x[0],_=x[1];Object(c.useEffect)((function(){for(var e=[],t=function(t){var c=[];a.forEach((function(e){e.region===t&&c.push(e)}));var n={num_region:t,data:c};e.push(n)},c=1;c<=s;c++)t(c);_(e)}),[]);var f=function(e,a){o(a)},g=function(e){u(parseInt(e.target.value,10)),o(0)};return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsx)("div",{className:"cards__item__link",children:Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Conformaciones"}),Object(j.jsx)("br",{}),p.map((function(e){return Object(j.jsxs)("div",{style:{color:"#252e48",marginBottom:"2vh"},children:[Object(j.jsxs)("h3",{style:{marginBottom:"2vh"},children:["Regi\xf3n ",e.num_region]}),Object(j.jsx)(A.a,{component:U.a,children:Object(j.jsxs)(z.a,{className:"table__detail",size:"small","aria-label":"simple data",children:[Object(j.jsx)($.a,{children:Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"PDB ID"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"LIMITE INFERIOR"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"LIMITE SUPERIOR"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"SEC. SIMILITUD"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"RMSD"})]})}),Object(j.jsx)(K.a,{children:e.data.slice(l*h,l*h+h).map((function(e,a){return Object(j.jsx)(H.a,{children:e.conformero_1===n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Q.a,{children:e.conformero_2}),Object(j.jsx)(Q.a,{children:e.lim_inf_2}),Object(j.jsx)(Q.a,{children:e.lim_sup_2}),Object(j.jsx)(Q.a,{children:e.sec_similitud}),Object(j.jsx)(Q.a,{children:e.rmsd})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Q.a,{children:e.conformero_1}),Object(j.jsx)(Q.a,{children:e.lim_inf_1}),Object(j.jsx)(Q.a,{children:e.lim_sup_1}),Object(j.jsx)(Q.a,{children:e.sec_similitud}),Object(j.jsx)(Q.a,{children:e.rmsd})]})},a)}))})]})}),Object(j.jsx)(ee.a,{rowsPerPageOptions:[5,10,15,{label:"Todo",value:a.length}],component:"div",count:a.length,rowsPerPage:h,page:l,SelectProps:{inputProps:{"aria-label":"PDB por p\xe1gina"},native:!0},onChangePage:f,onChangeRowsPerPage:g,ActionsComponent:le,labelRowsPerPage:"PDB por p\xe1gina"})]},e.num_region)}))]})})})})},de=function(e){var a=e.infoGeneral,t=e.infoEstructural,n=e.conformaciones;return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("div",{className:"cards",children:Object(j.jsx)("div",{className:"cards__container__detail",children:Object(j.jsxs)("div",{className:"cards__wrapper",children:[Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(J,{infoGeneral:a})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(V,{infoEstructural:t})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(oe,{conformaciones:n})})]})})})})},je=(t(127),function(){return Object(j.jsx)("div",{className:"padre",children:Object(j.jsxs)("div",{className:"sk-chase",children:[Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"}),Object(j.jsx)("div",{className:"sk-chase-dot"})]})})}),be=function(){var e=Object(c.useContext)(v),a=e.pr,t=e.infoGeneral,n=e.infoEstructural,s=e.conformaciones,r=e.loading,i=e.getDetailInfo;Object(c.useEffect)((function(){a&&i(a)}),[]);var o=r?Object(j.jsx)(je,{}):Object(j.jsx)(de,{infoGeneral:t,infoEstructural:n,conformaciones:s});return Object(j.jsx)(c.Fragment,{children:a?o:Object(j.jsx)(l.a,{to:"/"})})},me=function(e){var a=e.infoGeneral,t=a.pdb_id,n=a.nombre_proteina,s=a.titulo,r=a.organismo,i=a.region_repetida,l=a.clasificacion;return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsx)("div",{className:"cards__item__link",children:Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h1",{className:"cards__item__title",children:t}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Informaci\xf3n General"}),Object(j.jsx)("br",{}),Object(j.jsx)(A.a,{component:U.a,children:Object(j.jsx)(z.a,{className:"table__detail","aria-label":"simple data",children:Object(j.jsxs)(K.a,{children:[Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Nombre de la prote\xedna repetida:"}),Object(j.jsx)(Q.a,{children:n})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"T\xedtulo:"}),Object(j.jsx)(Q.a,{children:s})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Organismo"}),Object(j.jsx)(Q.a,{children:r})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Regi\xf3n repetida:"}),Object(j.jsx)(Q.a,{children:i})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"Clasificaci\xf3n:"}),Object(j.jsx)(Q.a,{children:l})]})]})})})]})})})})},he=function(e){var a=e.infoEstructural,t=a.num_conformaciones,n=a.rmsd_min,s=a.rmsd_max,r=a.rmsd_avg;return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsx)("div",{className:"cards__item__link",children:Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Informaci\xf3n Estructural"}),Object(j.jsx)("br",{}),Object(j.jsx)(A.a,{component:U.a,children:Object(j.jsx)(z.a,{className:"table__detail","arial-label":"simple data",children:Object(j.jsxs)(K.a,{children:[Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"#Conformaciones:"}),Object(j.jsx)(Q.a,{children:t}),Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"RMSD M\xednimo:"}),Object(j.jsx)(Q.a,{children:n})]}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"RMSD M\xe1ximo:"}),Object(j.jsx)(Q.a,{children:s}),Object(j.jsx)(Q.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:"RMSD Promedio:"}),Object(j.jsx)(Q.a,{children:r})]})]})})})]})})})})},ue=Object(X.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function Oe(e){var a=ue(),t=Object(Y.a)(),c=e.count,n=e.page,s=e.rowsPerPage,r=e.onChangePage;return Object(j.jsxs)("div",{className:a.root,children:[Object(j.jsx)(Z.a,{onClick:function(e){r(e,0)},disabled:0===n,"aria-label":"first page",children:"rtl"===t.direction?Object(j.jsx)(ne.a,{}):Object(j.jsx)(re.a,{})}),Object(j.jsx)(Z.a,{onClick:function(e){r(e,n-1)},disabled:0===n,"aria-label":"previous page",children:"rtl"===t.direction?Object(j.jsx)(ae.a,{}):Object(j.jsx)(te.a,{})}),Object(j.jsx)(Z.a,{onClick:function(e){r(e,n+1)},disabled:n>=Math.ceil(c/s)-1,"aria-label":"next page",children:"rtl"===t.direction?Object(j.jsx)(te.a,{}):Object(j.jsx)(ae.a,{})}),Object(j.jsx)(Z.a,{onClick:function(e){r(e,Math.max(0,Math.ceil(c/s)-1))},disabled:n>=Math.ceil(c/s)-1,"aria-label":"last page",children:"rtl"===t.direction?Object(j.jsx)(re.a,{}):Object(j.jsx)(ne.a,{})})]})}var xe=function(e){var a=e.conformaciones,t=Object(c.useState)(0),n=Object(d.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(5),l=Object(d.a)(i,2),o=l[0],b=l[1];return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsx)("div",{className:"cards__item__link",children:Object(j.jsxs)("div",{className:"cards__item__info",children:[Object(j.jsx)("h2",{className:"cards__item__subtitle",children:"Conformaciones"}),Object(j.jsx)("br",{}),Object(j.jsx)(A.a,{component:U.a,children:Object(j.jsxs)(z.a,{className:"table__detail",size:"small","aria-label":"simple data",children:[Object(j.jsx)($.a,{children:Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"PDB ID"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"LIMITE INFERIOR"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"LIMITE SUPERIOR"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"SEC. SIMILITUD"}),Object(j.jsx)(Q.a,{component:"th",scope:"row",className:"table__cell",children:"RMSD"})]})}),Object(j.jsx)(K.a,{children:a.slice(s*o,s*o+o).map((function(e,a){return Object(j.jsxs)(H.a,{children:[Object(j.jsx)(Q.a,{children:e.conformero}),Object(j.jsx)(Q.a,{children:e.lim_inf}),Object(j.jsx)(Q.a,{children:e.lim_sup}),Object(j.jsx)(Q.a,{children:e.sec_similitud}),Object(j.jsx)(Q.a,{children:e.rmsd})]},a)}))})]})}),Object(j.jsx)(ee.a,{rowsPerPageOptions:[5,10,15,{label:"Todo",value:a.length}],component:"div",count:a.length,rowsPerPage:o,page:s,SelectProps:{inputProps:{"aria-label":"PDB por p\xe1gina"},native:!0},onChangePage:function(e,a){r(a)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value,10)),r(0)},ActionsComponent:Oe,labelRowsPerPage:"PDB por p\xe1gina"})]})})})})},pe=function(e){var a=e.infoGeneral,t=e.infoEstructural,n=e.conformaciones;return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("div",{className:"cards",children:Object(j.jsx)("div",{className:"cards__container__detail",children:Object(j.jsxs)("div",{className:"cards__wrapper",children:[Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(me,{infoGeneral:a})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(he,{infoEstructural:t})}),Object(j.jsx)("ul",{className:"cards__items",children:Object(j.jsx)(xe,{conformaciones:n})})]})})})})},_e=function(){var e=Object(c.useContext)(v),a=e.pr,t=e.lower,n=e.higher,s=e.infoGeneral,r=e.infoEstructural,i=e.conformaciones,o=e.loading,d=e.getEstimateInfo;Object(c.useEffect)((function(){a&&t&&n&&d({pr:a,lower:t,higher:n})}),[]);var b=o?Object(j.jsx)(je,{}):Object(j.jsx)(pe,{infoGeneral:s,infoEstructural:r,conformaciones:i});return Object(j.jsx)(c.Fragment,{children:a?b:Object(j.jsx)(l.a,{to:"/"})})},fe=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("h1",{children:"No se encuentra"})})},ge=(t(128),function(){return Object(j.jsx)("div",{className:"footer-container",children:Object(j.jsx)("section",{className:"social-media",children:Object(j.jsxs)("div",{className:"social-media-wrap",children:[Object(j.jsx)("small",{className:"website-rights",children:"Copyright \xa9 2021. Hecho por Ronaldo Romario Tunque Cahui. Todos los derechos reservados."}),Object(j.jsxs)("div",{className:"social-icons",children:[Object(j.jsx)("a",{className:"social-icon-link facebook",href:"https://www.facebook.com/RonaldoTunqueC",target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:Object(j.jsx)("i",{className:"fab fa-facebook-f"})}),Object(j.jsx)("a",{className:"social-icon-link github",href:"https://github.com/SfrRonaldo",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:Object(j.jsx)("i",{className:"fab fa-github"})}),Object(j.jsx)("a",{className:"social-icon-link linkedin",href:"https://www.linkedin.com/in/ronaldotunquecahui/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})})]})]})})})}),ve=t(32),Ne=t.n(ve),ye=t(54),we="GET_PRS",Ce="SET_DETAIL_INFO",Ie="SET_ESTIMATE_INFO",Pe="SET_CURRENT_PR",Se="CLEAR_PR",ke=function(e,a){switch(a.type){case we:return Object(x.a)(Object(x.a)({},e),{},{prs:a.payload});case Ce:return Object(x.a)(Object(x.a)({},e),{},{infoGeneral:a.payload.res1,infoEstructural:a.payload.res2,conformaciones:a.payload.res3,loading:!1});case Ie:return Object(x.a)(Object(x.a)({},e),{},{infoGeneral:a.payload.res1,infoEstructural:a.payload.res3,conformaciones:a.payload.res2,loading:!1});case Pe:return localStorage.setItem("pr",a.payload.pdbChain),localStorage.setItem("lower",a.payload.lower),localStorage.setItem("higher",a.payload.higher),Object(x.a)(Object(x.a)({},e),{},{pr:a.payload.pdbChain,lower:a.payload.lower,higher:a.payload.higher});case Se:return localStorage.removeItem("pr"),localStorage.removeItem("lower"),localStorage.removeItem("higher"),Object(x.a)(Object(x.a)({},e),{},{pr:null,lower:null,higher:null,infoGeneral:null,infoEstructural:null,conformaciones:null,loading:!0});default:return e}},Ee=t(38),Re=t.n(Ee),Fe=function(e){var a={prs:[],pr:localStorage.getItem("pr"),lower:localStorage.getItem("lower"),higher:localStorage.getItem("higher"),infoGeneral:null,infoEstructural:null,conformaciones:null,loading:!0},t=Object(c.useReducer)(ke,a),n=Object(d.a)(t,2),s=n[0],r=n[1],i=function(){var e=Object(ye.a)(Ne.a.mark((function e(){var a;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re.a.get("/api/GetAll");case 2:a=e.sent,r({type:we,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(ye.a)(Ne.a.mark((function e(a){var t,c,n,s,i,l,o,j;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/GetInfoGeneral/".concat(a),c="/api/GetInfoEstructural/".concat(a),n="/api/GetConformacion/".concat(a),e.next=5,Promise.all([Re()(t),Re()(c),Re()(n)]);case 5:s=e.sent,i=Object(d.a)(s,3),l=i[0],o=i[1],j=i[2],setTimeout((function(){r({type:Ce,payload:{res1:l.data.InfoGeneral[0],res2:o.data.InfoEstructural,res3:j.data.Conformacion}})}),3e3);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),o=function(){var e=Object(ye.a)(Ne.a.mark((function e(a){var t,c,n,s,i,l;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/EstimarInfoGeneral/".concat(a.pr,"_").concat(a.lower,"_").concat(a.higher),c="/api/EstimarConformacion/".concat(a.pr,"_").concat(a.lower,"_").concat(a.higher),e.next=4,Promise.all([Re()(t),Re()(c)]);case 4:n=e.sent,s=Object(d.a)(n,2),i=s[0],l=s[1],setTimeout(Object(ye.a)(Ne.a.mark((function e(){var t,c;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/EstimarInfoEstructural/".concat(a.pr,"_").concat(a.lower,"_").concat(a.higher),e.next=3,Re.a.get(t);case 3:c=e.sent,console.log(c),r({type:Ie,payload:{res1:i.data,res2:l.data,res3:c.data}});case 6:case"end":return e.stop()}}),e)}))),3e3);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(j.jsx)(v.Provider,{value:{prs:s.prs,pr:s.pr,lower:s.lower,higher:s.higher,infoGeneral:s.infoGeneral,infoEstructural:s.infoEstructural,conformaciones:s.conformaciones,loading:s.loading,getPrs:i,getDetailInfo:l,getEstimateInfo:o,setCurrentPr:function(e){r({type:Pe,payload:e})},clearPr:function(){r({type:Se})},getPr:function(){return{pdbChain:localStorage.getItem("pr"),low:localStorage.getItem("lower"),high:localStorage.getItem("higher")}}},children:e.children})};t(148);var We=function(){return Object(j.jsx)(Fe,{children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(o,{}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",component:F}),Object(j.jsx)(l.b,{exact:!0,path:"/tutorial",component:B}),Object(j.jsx)(l.b,{exact:!0,path:"/detail",component:be}),Object(j.jsx)(l.b,{exact:!0,path:"/estimate",component:_e}),Object(j.jsx)(l.b,{exact:!0,path:"/404",component:fe}),Object(j.jsx)(l.a,{from:"*",to:"/404"})]}),Object(j.jsx)(ge,{})]})})},De=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,215)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),c(e),n(e),s(e),r(e)}))};t(149);r.a.render(Object(j.jsx)(n.a.Fragment,{children:Object(j.jsx)(We,{})}),document.getElementById("root")),De()}},[[150,1,2]]]);
//# sourceMappingURL=main.6c69e8fe.chunk.js.map