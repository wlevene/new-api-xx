import{t as B,i as le,j as l,r as A,m as V,b as P,A as se,a as ie,c as ne,g as Q,d as me}from"./index-gnhIQDEW.js";import{r as d}from"./react-core-BE3w-k5R.js";import{l as Z,V as _}from"./visactor-D2-xo_Y3.js";import{L,k as S,B as ce,S as de}from"./semi-ui-eTHMSREL.js";import"./tools-BD_dY_tN.js";import"./react-components-CXZTIyra.js";import"./semantic-m2SYSARb.js";const q="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif",N="theme-mode",G=(t,r,a)=>{const o=t&&getComputedStyle(document.body).getPropertyValue(t)||r;return o&&!isNaN(o[0])?`rgba(${o})`:o},ue=(t,r,a)=>{new MutationObserver(o=>{o.forEach(s=>{s.attributeName===r&&a(s)})}).observe(t,{attributes:!0})},ge=(t,r,a,o)=>r.map((s,c)=>{const{scheme:h}=a[c];return Object.assign(Object.assign({},s),{scheme:s.scheme.map((u,p)=>G(typeof u=="object"?u[t]:u,h==null?void 0:h[p]))})}),he=(t,r,a,o)=>{const s={};return Object.keys(r).forEach(c=>{const h=typeof r[c]=="object"?r[c][t]:r[c];s[c]=G(h,a[c])}),s},z=()=>document.body.hasAttribute(N)&&document.body.getAttribute(N)==="dark"?"dark":"light",pe=t=>`semiDesign${t[0].toUpperCase()}${t.slice(1)}`,be=t=>{new MutationObserver(r=>{r.forEach(a=>{var o;if(a.addedNodes.length===1){const s=a.addedNodes[0];s.tagName==="LINK"&&((o=s.getAttribute)===null||o===void 0?void 0:o.call(s,"semi-theme-switcher"))==="true"&&t(a,s)}})}).observe(document.body,{childList:!0})},Ce={default:{dataScheme:Z.colorScheme.default.dataScheme,palette:{backgroundColor:"#16161a",borderColor:"rgba(255,255,255,0.08)",shadowColor:"rgba(0,0,0,0.25)",hoverBackgroundColor:"rgba(255,255,255,0.12)",sliderRailColor:"rgba(255,255,255,0.12)",sliderHandleColor:"#e4e7f5",sliderTrackColor:"rgba(84,169,255,1)",popupBackgroundColor:"#43444a",primaryFontColor:"rgba(249,249,249,1)",secondaryFontColor:"rgba(249,249,249,0.8)",tertiaryFontColor:"rgba(249,249,249,0.6)",axisLabelFontColor:"rgba(249,249,249,0.6)",disableFontColor:"rgba(249,249,249,0.35)",axisMarkerFontColor:"#16161a",axisGridColor:"rgba(255,255,255,0.08)",axisDomainColor:"rgba(255,255,255,0.08)",dataZoomHandleStrokeColor:"rgba(46,50,56,0.13)",dataZoomChartColor:"rgba(255,255,255,0.16)",playerControllerColor:"rgba(84,169,255,1)",axisMarkerBackgroundColor:"rgba(249,249,249,1)",markLabelBackgroundColor:"rgba(255,255,255,0.08)",markLineStrokeColor:"rgba(249,249,249,0.8)",dangerColor:"rgba(252,114,90,1)",warningColor:"rgba(255,174,67,1)",successColor:"rgba(93,194,100,1)",infoColor:"rgba(84,169,255,1)"}}},fe={name:"semiDesignDark",description:"Semi Design - dark",type:"dark",fontFamily:q,colorScheme:Ce},_e={default:{dataScheme:Z.colorScheme.default.dataScheme,palette:{backgroundColor:"rgba(255,255,255,1)",borderColor:"rgba(28,31,35,0.08)",shadowColor:"rgba(0,0,0,0.1)",hoverBackgroundColor:"rgba(46,50,56,0.05)",sliderRailColor:"rgba(46,50,56,0.05)",sliderHandleColor:"rgba(255,255,255,1)",sliderTrackColor:"rgba(0,100,250,1)",popupBackgroundColor:"rgba(255,255,255,1)",primaryFontColor:"rgba(28,31,35,1)",secondaryFontColor:"rgba(28,31,35,0.8)",tertiaryFontColor:"rgba(28,31,35,0.62)",axisLabelFontColor:"rgba(28,31,35,0.62)",disableFontColor:"rgba(28,31,35,0.35)",axisMarkerFontColor:"rgba(255,255,255,1)",axisGridColor:"rgba(28,31,35,0.08)",axisDomainColor:"rgba(28,31,35,0.15)",dataZoomHandleStrokeColor:"rgba(46,50,56,0.13)",dataZoomChartColor:"rgba(46,50,56,0.09)",playerControllerColor:"rgba(0,100,250,1)",axisMarkerBackgroundColor:"rgba(28,31,35,1)",markLabelBackgroundColor:"rgba(28,31,35,0.08)",markLineStrokeColor:"rgba(28,31,35,0.8)",dangerColor:"rgba(249,57,32,1)",warningColor:"rgba(252,136,0,1)",successColor:"rgba(59,179,70,1)",infoColor:"rgba(0,100,250,1)"}}},xe={name:"semiDesignLight",description:"Semi Design - light",type:"light",fontFamily:q,colorScheme:_e},ye={backgroundColor:"--semi-color-bg-0",borderColor:"--semi-color-border",hoverBackgroundColor:"--semi-color-fill-0",sliderRailColor:"--semi-color-fill-0",sliderHandleColor:"--semi-white",sliderTrackColor:"--semi-color-primary",popupBackgroundColor:"--semi-color-bg-3",primaryFontColor:"--semi-color-text-0",secondaryFontColor:"--semi-color-text-1",tertiaryFontColor:"--semi-color-text-2",axisLabelFontColor:"--semi-color-text-0",disableFontColor:"--semi-color-disabled-text",axisMarkerFontColor:"--semi-color-bg-0",axisGridColor:"--semi-color-border",axisDomainColor:{light:"--semi-grey-9",dark:"--semi-color-border"},dataZoomHandleStrokeColor:{light:"--semi-color-fill-2"},dataZoomChartColor:"--semi-color-fill-1",playerControllerColor:"--semi-color-primary",axisMarkerBackgroundColor:"--semi-color-text-0",markLabelBackgroundColor:"--semi-color-border",markLineStrokeColor:"--semi-color-text-1",dangerColor:"--semi-color-danger",warningColor:"--semi-color-warning",successColor:"--semi-color-success",infoColor:"--semi-color-info"},Se=[{maxDomainLength:10,scheme:["--semi-color-data-0","--semi-color-data-2","--semi-color-data-4","--semi-color-data-6","--semi-color-data-8","--semi-color-data-10","--semi-color-data-12","--semi-color-data-14","--semi-color-data-16","--semi-color-data-18"]},{scheme:["--semi-color-data-0","--semi-color-data-1","--semi-color-data-2","--semi-color-data-3","--semi-color-data-4","--semi-color-data-5","--semi-color-data-6","--semi-color-data-7","--semi-color-data-8","--semi-color-data-9","--semi-color-data-10","--semi-color-data-11","--semi-color-data-12","--semi-color-data-13","--semi-color-data-14","--semi-color-data-15","--semi-color-data-16","--semi-color-data-17","--semi-color-data-18","--semi-color-data-19"]}],ke={light:xe,dark:fe},R=(t,r)=>{const a=ke[t],{dataScheme:o,palette:s}=a.colorScheme.default,c={default:{dataScheme:ge(t,Se,o),palette:he(t,ye,s)}};return Object.assign(Object.assign({},a),{colorScheme:c})},ve=t=>{const{defaultMode:r,isWatchingMode:a=!0,isWatchingThemeSwitch:o=!1}=t??{};I(!1,r),a&&ue(document.body,N,()=>I()),o&&be(()=>{const s=z(),c=JSON.stringify(R(s).colorScheme);let h=0;const u=setInterval(()=>{const p=R(s);(h>50||c!==JSON.stringify(p.colorScheme))&&(I(!0,s,p),clearInterval(u)),h++},100)})},I=(t,r,a)=>{r||(r=z());const o=pe(r);(t||_.ThemeManager.getCurrentTheme()!==o)&&(t&&_.ThemeManager.removeTheme(o),_.ThemeManager.themeExist(o)||_.ThemeManager.registerTheme(o,a??R(r)),_.ThemeManager.setCurrentTheme(o))},Ne=t=>{const r=d.useRef();let a=new Date;const[o,s]=d.useState({username:"",token_name:"",model_name:"",start_timestamp:localStorage.getItem("data_export_default_time")==="hour"?B(a.getTime()/1e3-86400):localStorage.getItem("data_export_default_time")==="week"?B(a.getTime()/1e3-86400*30):B(a.getTime()/1e3-86400*7),end_timestamp:B(a.getTime()/1e3+3600),channel:"",data_export_default_time:""}),{username:c,model_name:h,start_timestamp:u,end_timestamp:p,channel:Fe}=o,$=le(),H=d.useRef(!1),[E,J]=d.useState(null),[j,Y]=d.useState(null),[W,O]=d.useState(!1),[Te,K]=d.useState([]),[De,X]=d.useState(0),[Me,ee]=d.useState(0),[x,te]=d.useState(localStorage.getItem("data_export_default_time")||"hour"),F=(e,m)=>{if(m==="data_export_default_time"){te(e);return}s(n=>({...n,[m]:e}))},T={type:"bar",data:[{id:"barData",values:[]}],xField:"Time",yField:"Usage",seriesField:"Model",stack:!0,legends:{visible:!0,selectMode:"single"},title:{visible:!0,text:"模型消耗分布",subtext:"0"},bar:{state:{hover:{stroke:"#000",lineWidth:1}}},tooltip:{mark:{content:[{key:e=>e.Model,value:e=>A(parseFloat(e.Usage),4)}]},dimension:{content:[{key:e=>e.Model,value:e=>e.Usage}],updateContent:e=>{e.sort((n,g)=>g.value-n.value);let m=0;for(let n=0;n<e.length;n++)m+=parseFloat(e[n].value),e[n].value=A(parseFloat(e[n].value),4);return e.unshift({key:"总计",value:A(m,4)}),e}}},color:{specified:V}},D={type:"pie",data:[{id:"id0",values:[{type:"null",value:"0"}]}],outerRadius:.8,innerRadius:.5,padAngle:.6,valueField:"value",categoryField:"type",pie:{style:{cornerRadius:10},state:{hover:{outerRadius:.85,stroke:"#000",lineWidth:1},selected:{outerRadius:.85,stroke:"#000",lineWidth:1}}},title:{visible:!0,text:"模型调用次数占比"},legends:{visible:!0,orient:"left"},label:{visible:!0},tooltip:{mark:{content:[{key:e=>e.type,value:e=>P(e.value)}]}},color:{specified:V}},U=async(e,m)=>{O(!0);let n="",g=Date.parse(u)/1e3,y=Date.parse(p)/1e3;$?n=`/api/data/?username=${c}&start_timestamp=${g}&end_timestamp=${y}&default_time=${x}`:n=`/api/data/self/?start_timestamp=${g}&end_timestamp=${y}&default_time=${x}`;const k=await se.get(n),{success:v,message:b,data:i}=k.data;if(v){K(i),i.length===0&&i.push({count:0,model_name:"无数据",quota:0,created_at:a.getTime()/1e3});let C=3600;x==="day"?C=86400:x==="week"&&(C=604800),i.sort((f,M)=>f.created_at-M.created_at),i.forEach(f=>{f.created_at=Math.floor(f.created_at/C)*C}),re(e,m,i)}else ie(b);O(!1)},ae=async()=>{await U(E,j)},oe=async()=>{let e=E;E||(e=new _(T,{dom:"model_data"}),J(e),e.renderAsync());let m=j;j||(m=new _(D,{dom:"model_pie"}),Y(m),m.renderAsync()),console.log("init vchart"),await U(e,m)},re=(e,m,n)=>{let g=[],y=[],k=0,v=0;for(let b=0;b<n.length;b++){const i=n[b];k+=i.quota,v+=i.count;let C=g.find(w=>w.type===i.model_name);C?C.value+=i.count:g.push({type:i.model_name,value:i.count});let f=ne(i.created_at,x),M=y.find(w=>w.Time===f&&w.Model===i.model_name);M?M.Usage+=parseFloat(Q(i.quota)):y.push({Time:f,Model:i.model_name,Usage:parseFloat(Q(i.quota))})}X(k),ee(v),g.sort((b,i)=>i.value-b.value),D.title.subtext=`总计：${P(v)}`,D.data[0].values=g,T.title.subtext=`总计：${me(k,2)}`,T.data[0].values=y,m.updateSpec(D),e.updateSpec(T),m.reLayout(),e.reLayout()};return d.useEffect(()=>{H.current||(ve({isWatchingThemeSwitch:!0}),H.current=!0,oe())},[]),l.jsx(l.Fragment,{children:l.jsxs(L,{children:[l.jsx(L.Header,{children:l.jsx("h3",{children:"数据看板"})}),l.jsxs(L.Content,{children:[l.jsx(S,{ref:r,layout:"horizontal",style:{marginTop:10},children:l.jsxs(l.Fragment,{children:[l.jsx(S.DatePicker,{field:"start_timestamp",label:"起始时间",style:{width:272},initValue:u,value:u,type:"dateTime",name:"start_timestamp",onChange:e=>F(e,"start_timestamp")}),l.jsx(S.DatePicker,{field:"end_timestamp",fluid:!0,label:"结束时间",style:{width:272},initValue:p,value:p,type:"dateTime",name:"end_timestamp",onChange:e=>F(e,"end_timestamp")}),l.jsx(S.Select,{field:"data_export_default_time",label:"时间粒度",style:{width:176},initValue:x,placeholder:"时间粒度",name:"data_export_default_time",optionList:[{label:"小时",value:"hour"},{label:"天",value:"day"},{label:"周",value:"week"}],onChange:e=>F(e,"data_export_default_time")}),$&&l.jsx(l.Fragment,{children:l.jsx(S.Input,{field:"username",label:"用户名称",style:{width:176},value:c,placeholder:"可选值",name:"username",onChange:e=>F(e,"username")})}),l.jsx(S.Section,{children:l.jsx(ce,{label:"查询",type:"primary",htmlType:"submit",className:"btn-margin-right",onClick:ae,loading:W,children:"查询"})})]})}),l.jsxs(de,{spinning:W,children:[l.jsx("div",{style:{height:500},children:l.jsx("div",{id:"model_pie",style:{width:"100%",minWidth:100}})}),l.jsx("div",{style:{height:500},children:l.jsx("div",{id:"model_data",style:{width:"100%",minWidth:100}})})]})]})]})})};export{Ne as default};
