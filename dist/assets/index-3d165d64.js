import{d as k,o as n,e as c,f as d,n as o,q as T,h as f,p as y,w as P,b as l,g as w,i as M,t as S,j as B,r as L,c as v,a as H,G as C,k as R,F as z,l as I,m as g}from"./index-93e4125f.js";import{_ as N,P as V}from"./Money.vue_vue_type_script_setup_true_lang-86897c1e.js";import{g as D}from"./getElementId-5f791855.js";const E={products:()=>[]},F=k({__name:"PrimitiveRadio",props:{value:{type:Boolean}},setup(u){return(s,r)=>(n(),c("div",{class:o([s.$style.radio,!!s.value&&s.$style.radio_checked])},[d("span",{class:o([s.$style.mark,!!s.value&&s.$style.mark_on])},null,2),T(s.$slots,"default")],2))}}),j="_radio_1kt8l_1",q="_radio_checked_1kt8l_13",A="_mark_1kt8l_17",G="_mark_on_1kt8l_27",O={radio:j,radio_checked:q,mark:A,mark_on:G},W={$style:O},J=f(F,[["__cssModules",W]]),K=["for"],Q=["id","checked","value"],U=["innerHTML"],X=["innerHTML"],Y=["innerHTML"],Z=k({__name:"Product",props:{id:{},price:{},title:{},description:{},bestText:{},active:{type:Boolean}},emits:["onSelect"],setup(u,{emit:s}){const r=u,a=D(),i=e=>{e.target.checked&&s("onSelect",r.id)};return(e,_)=>(n(),c("label",{for:l(a),class:o(e.$style.product)},[d("div",{class:o(e.$style.title)},[y(l(J),{value:e.active},{default:P(()=>[d("input",{id:l(a),type:"radio",name:"product-item",class:o(e.$style.native),checked:e.active,value:l(a),onChange:i},null,42,Q)]),_:1},8,["value"]),y(l(N),{value:e.price},null,8,["value"])],2),d("h4",{innerHTML:e.title},null,8,U),e.description?(n(),c("p",{key:0,innerHTML:e.description,class:o(e.$style.description)},null,10,X)):w("",!0),e.bestText?(n(),c("p",{key:1,innerHTML:e.bestText,class:o(e.$style.best)},null,10,Y)):w("",!0)],10,K))}}),x="_product_eaa8w_1",ee="_title_eaa8w_11",te="_description_eaa8w_20",se="_best_eaa8w_25",oe="_native_eaa8w_35",ae={product:x,title:ee,description:te,best:se,native:oe},ne={$style:ae},re=f(Z,[["__cssModules",ne]]),le=k({__name:"paywall_row.preset",props:M({media:{},title:{},description:{},pagination:{},shape:{},textAlign:{},background:{},list:{},mainButtonText:{},links:{},popup:{},products:{}},E),setup(u){var $;const s=u,{products:r}=S(s),a=B(),i=L((($=r.value[0])==null?void 0:$.id)||null),e=v(()=>r.value.map(t=>({...t,bestText:t.bestText&&a.translate(t.bestText),title:t.title&&a.translate(t.title),description:t.description&&a.translate(t.description)}))),_=v(()=>{const t=i.value;return e.value.find(({id:p})=>p===t)||null}),h=t=>{i.value=t},b=v(()=>{const t=r.value.length;return t<=3?{"--tok-product-width":`calc(100% / ${t})`}:{"--tok-product-width":"calc(100% / 2 - 10%)"}});return(t,p)=>(n(),H(l(V),g(s,{"selected-product":_.value}),{default:P(()=>[d("form",{class:o(t.$style.form),style:C(b.value),onSubmit:p[0]||(p[0]=R(()=>{},["prevent"]))},[(n(!0),c(z,null,I(e.value,m=>(n(),c("div",{key:m.id,class:o(t.$style.product)},[y(re,g(m,{active:i.value===m.id,onOnSelect:h}),null,16,["active"])],2))),128))],38)]),_:1},16,["selected-product"]))}}),ce="_form_szch0_1",ie="_product_szch0_16",de={form:ce,product:ie},ue={$style:de},ve=f(le,[["__cssModules",ue]]);export{ve as PaywallRowPreset,E as PaywallRowPresetDefaultProps};