import{_ as l}from"./background-plus.3d2be363.js";import{_ as d,o as n,c as o,b as a,t as i,r as m,F as g,e as y,n as c,d as b,f}from"./index.77189acd.js";var W=[{category:[{type:"Work",nav:[{nav_id:1,nav_title:"Official website"},{nav_id:2,nav_title:"Landing Page"},{nav_id:3,nav_title:"OTHER"}]},{name:"GRAPHIC",nav:[{nav_id:1,nav_title:"POSTER"},{nav_id:2,nav_title:"business card"},{nav_id:3,nav_title:"DM & PAMPHLET"},{nav_id:4,nav_title:"Package"}]},{name:"LOGO",nav:[{nav_id:1,nav_title:"vintage"},{nav_id:2,nav_title:"OTHER"}]}]}];const k={props:["title","msg"],setup(s){s.title,s.msg}},P={class:"section top-banner"},w=a("div",{class:"top-banner-obj-1"},[a("img",{src:l,alt:""})],-1),C=a("div",{class:"top-banner-obj-2"},[a("img",{src:l,alt:""})],-1),$={class:"section-main top-banner-main"},O={"data-aos-anchor":".top-banner","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},x={"data-aos-anchor":".top-banner","data-aos-delay":"200","data-aos":"fade-up","data-aos-duration":"1000"};function E(s,_,t,r,v,p){return n(),o("section",P,[w,C,a("div",$,[a("h2",O,i(t.title),1),a("p",x,i(t.msg),1)])])}var q=d(k,[["render",E]]);const L={props:["data","type"],setup(s){s.data,s.data}},T={class:"section-inner"},H=a("div",{class:"sticky-bar"},[a("div",{class:"collection-bar"},[a("h2",{class:"collection-bar--title"},"All list")])],-1),R={class:"group-row"},A={key:0,class:"collection-group","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},B={class:"image"},j=["src","alt"],D={class:"desc"},F=a("span",{class:"ico-plus-sm"},null,-1),G={key:1,class:"collection-group","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},M={class:"image"},N=["src","alt"],S={class:"desc"},U=a("span",{class:"ico-plus-sm"},null,-1);function V(s,_,t,r,v,p){const u=m("router-link");return n(),o("section",{class:c(["section collection",{"web-ui":t.type==="web",graphic:t.type==="graphic",logo:t.type==="logo"}])},[a("div",T,[H,a("div",R,[(n(!0),o(g,null,y(t.data,(e,h)=>(n(),o("div",{class:c(["group-col",{"sp3 md-sp2":t.type!="graphic","sp2 md-sp2":t.type==="graphic","desc-pl":t.type==="web"}])},[t.type!=="web"?(n(),o("div",A,[a("div",B,[a("img",{src:e.imgUrl,alt:e.name},null,8,j)]),a("div",D,[F,a("h2",null,i(e.name),1)])])):(n(),o("div",G,[b(u,{to:`/detail/${t.type}/${h}`},{default:f(()=>[a("div",M,[a("img",{src:e.imgUrl,alt:e.name},null,8,N)]),a("div",S,[U,a("h2",null,i(e.name),1)])]),_:2},1032,["to"])]))],2))),256))])])],2)}var J=d(L,[["render",V]]);export{J as C,q as P,W as n};
