(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{461:function(e,t,n){},484:function(e,t,n){"use strict";n(461)},504:function(e,t,n){"use strict";n.r(t);var o,l=n(64),r=n(8),c=n(5),m=(n(269),n(6),n(63)),d=n.n(m),h=(n(186),n(72)),f=n.n(h),L=(n(270),n(104)),v=n.n(L),x=(n(271),n(139)),w=n.n(x),R=(n(272),n(70)),S=n.n(R),O=(n(273),n(140)),C=n.n(O),P=(n(274),n(141)),y=n.n(P),H=(n(275),n(142)),_=n.n(H),k=(n(276),n(143)),j=n.n(k),z=(n(277),n(144)),I=n.n(z),E=(n(278),n(145)),T=n.n(E),B=(n(279),n(146)),D=n.n(B),F=(n(280),n(147)),A=n.n(F),M=(n(281),n(148)),V=n.n(M),$=(n(282),n(149)),J=n.n($),N=(n(41),n(10),n(445)),U=n.n(N),X=n(446),G=n.n(X),W=n(441),K=n.n(W),Q=n(443),Y=n(438),Z=(n(439),n(71)),ee=n(150),te=n(440),ae=(n(442),n(188)),ne=n(187);U.a.vfs=G.a.pdfMake.vfs;var oe={mixins:[te.a],layout:"DashboardLayout",components:(o={Tabs:ae.a,TabPane:ne.a,BasePagination:ee.b,flatPicker:K.a,RouteBreadCrumb:Z.a},Object(c.a)(o,J.a.name,J.a),Object(c.a)(o,V.a.name,V.a),Object(c.a)(o,A.a.name,A.a),Object(c.a)(o,D.a.name,D.a),Object(c.a)(o,T.a.name,T.a),Object(c.a)(o,I.a.name,I.a),Object(c.a)(o,j.a.name,j.a),Object(c.a)(o,_.a.name,_.a),Object(c.a)(o,y.a.name,y.a),Object(c.a)(o,C.a.name,C.a),Object(c.a)(o,S.a.name,S.a),Object(c.a)(o,w.a.name,w.a),Object(c.a)(o,v.a.name,v.a),Object(c.a)(o,f.a.name,f.a),Object(c.a)(o,d.a.name,d.a),o),data:function(){return{token:this.$cookies.get("token"),mListLotes:[],loadingInsumoLotes:!1,mSelectLote:[],mListRHLote:[],fechaInicial:null,fechaFinal:null}},methods:{readLoteAll:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.mListLotes=[],t.prev=1,t.next=4,e.$axios.post("http://localhost:3002/lote_all_user",{token:e.token});case 4:o=t.sent,(n=e.mListLotes).push.apply(n,Object(l.a)(o.data.datos)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},readRHLote:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.mListRHLote=[],e.loadingInsumoLotes=!0,t.prev=2,t.next=5,e.$axios.post("http://localhost:3002/Rhistorial_lotes_all",{token:e.token,lotes:0==e.mSelectLote.length?"*":e.mSelectLote,fechaI:null!=e.fechaInicial?Object(Y.a)(e.fechaInicial):null,fechaF:null!=e.fechaFinal?Object(Y.a)(e.fechaFinal):null});case 5:o=t.sent,(n=e.mListRHLote).push.apply(n,Object(l.a)(o.data.datos)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:e.loadingInsumoLotes=!1;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()},exportPdfRSalidas:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,i,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[[{text:"LOTE",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"},{text:"Procedencia - Sector",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"},{text:"F. HISTORIAL",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"},{text:"TEMP.",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"},{text:"HUM.",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"},{text:"PH.",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"},{text:"OXI.",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"},{text:"DETALLE",fontSize:8.5,bold:!0,fillColor:"#039BC4",color:"white",alignment:"center"}]],i=0;i<e.mListRHLote.length;i++)o=[{text:e.mListRHLote[i].nombre_lote,alignment:"center",fontSize:8.5},{text:e.mListRHLote[i].nombre_mercado,fontSize:8.5,alignment:"center"},{text:e.mListRHLote[i].fechaHistorial,fontSize:8.5,alignment:"center"},{text:e.mListRHLote[i].vTemperatura,fontSize:8.5,alignment:"center"},{text:e.mListRHLote[i].vHumedad,fontSize:8.5,alignment:"center"},{text:e.mListRHLote[i].vPh,fontSize:8.5,alignment:"center"},{text:e.mListRHLote[i].vOxigeno,fontSize:8.5,alignment:"center"},{text:e.mListRHLote[i].detalleHistorial,fontSize:8.5,alignment:"center"}],n.push(o);l={pageSize:"A4",pageOrientation:"landscape",pageMargins:[40,80,40,60],header:{margin:15,columns:[{image:Object(Q.a)(""),width:190,height:45,margin:[30,0,0,0]},{layout:"noBorders",table:{widths:["*"],body:[[{text:"REPORTE HISTORIAL DE PILA",alignment:"center",fontSize:16,bold:!0}],[{text:"Dir :  5 de Junio y Primera Constituyente Email : dircomunicacion@gadmriobamba.gob.ec",alignment:"center",fontSize:8}],[{text:"Tel : 096 973 8255 Sitio Web : http://www.gadmriobamba.gob.ec/",alignment:"center",fontSize:8}]]}}]},content:[{table:{headerRows:0,widths:[90,130,90,80,60,50,60,130],body:n}}]},U.a.createPdf(l).download("RHL_"+Date.now());case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.readLoteAll(),this.readRHLote()}},le=(n(484),n(3)),component=Object(le.a)(oe,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("base-header",[n("div",{staticClass:"align-items-center py-3"},[n("card",{staticClass:"no-border-card col",staticStyle:{"margin-bottom":"0.5rem"},attrs:{"body-classes":"px-0 pb-1 card-bodyTopOpcionesRPagosVehiculoPRoduccionPanelDespachoBusqueda cardSelectRubrosEstadosPagosVehiculoProduccionContainerPanelDespachoBusqueda","footer-classes":"pb-2"}},[n("div",{staticClass:"cardTextoRPagosVehiculoProduccionPanelDespachoBusqueda"},[n("el-select",{staticStyle:{"margin-right":"0.5rem"},attrs:{placeholder:"LOTE",multiple:"","collapse-tags":""},model:{value:e.mSelectLote,callback:function(t){e.mSelectLote=t},expression:"mSelectLote"}},e._l(e.mListLotes,(function(e){return n("el-option",{key:e.id_lote,attrs:{label:e.nombre_lote,value:e.id_lote}})})),1),e._v(" "),n("el-date-picker",{staticStyle:{"margin-right":"0.5rem"},attrs:{type:"date",placeholder:"Fecha Inicial"},model:{value:e.fechaInicial,callback:function(t){e.fechaInicial=t},expression:"fechaInicial"}}),e._v(" "),n("el-date-picker",{staticStyle:{"margin-right":"0.5rem"},attrs:{type:"date",placeholder:"Fecha Final"},model:{value:e.fechaFinal,callback:function(t){e.fechaFinal=t},expression:"fechaFinal"}})],1),e._v(" "),n("div",{staticClass:"cardSelectRubrosEstadosPagosVehiculoProduccionContainerPanelDespachoBusqueda"},[n("div",{staticClass:"buttonCenterEndDerecha"},[n("base-button",{attrs:{icon:"",type:"primary",size:"sm"},on:{click:function(t){return e.readRHLote()}}},[n("span",{staticClass:"btn-inner--icon"},[n("i",{staticClass:"el-icon-search"})])]),e._v(" "),e.mListRHLote.length>0?n("base-button",{attrs:{icon:"",type:"danger",size:"sm"},on:{click:function(t){return e.exportPdfRSalidas()}}},[n("span",{staticClass:"btn-inner--icon"},[n("i",{staticClass:"ni ni-single-copy-04"})])]):e._e()],1)])]),e._v(" "),n("card",{staticClass:"no-border-card",staticStyle:{"margin-bottom":"0rem"},attrs:{"body-classes":"card-bodyRPagosVehiculoProduccion px-0 pb-1","footer-classes":"pb-2"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingInsumoLotes,expression:"loadingInsumoLotes"}],staticClass:"tablePanelControlProduccion",staticStyle:{width:"100%"},attrs:{"element-loading-text":"Cargando Datos...",data:e.mListRHLote,"row-key":"id","header-row-class-name":"thead-dark",height:"calc(100vh - 11rem)"}},[n("el-table-column",{attrs:{prop:"nombre_lote",label:"LOTE",width:"250"}}),e._v(" "),n("el-table-column",{attrs:{prop:"nombre_mercado",label:"MERCADO",width:"280"}}),e._v(" "),n("el-table-column",{attrs:{prop:"fechaHistorial",label:"F. INGRESO",width:"230"}}),e._v(" "),n("el-table-column",{attrs:{prop:"vTemperatura",label:"TEMP.",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"vHumedad",label:"HU.",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"vPh",label:"PH.",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"vOxigeno",label:"OX.",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"detalleHistorial",label:"DETALLE",width:"270"}}),e._v(" "),n("div",{attrs:{slot:"empty"},slot:"empty"})],1)],1),e._v("\n      .\n    ")],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);