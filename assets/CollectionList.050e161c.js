import{_ as l}from"./background-plus.3d2be363.js";import{_,o as n,c as o,b as a,t as i,r as g,F as h,e as f,n as d,d as y,f as b,g as w}from"./index.8e493d34.js";var q=[{category:[{type:"Work",nav:[{nav_id:1,nav_title:"Official website"},{nav_id:2,nav_title:"Landing Page"},{nav_id:3,nav_title:"OTHER"}]},{name:"GRAPHIC",nav:[{nav_id:1,nav_title:"POSTER"},{nav_id:2,nav_title:"business card"},{nav_id:3,nav_title:"DM & PAMPHLET"},{nav_id:4,nav_title:"Package"}]},{name:"LOGO",nav:[{nav_id:1,nav_title:"vintage"},{nav_id:2,nav_title:"OTHER"}]}]}];const k={props:["title","msg"],setup(s){s.title,s.msg}},C={class:"section top-banner"},P=a("div",{class:"top-banner-obj-1"},[a("img",{src:l,alt:""})],-1),L=a("div",{class:"top-banner-obj-2"},[a("img",{src:l,alt:""})],-1),O={class:"section-main top-banner-main"},$={"data-aos-anchor":".top-banner","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},x={"data-aos-anchor":".top-banner","data-aos-delay":"200","data-aos":"fade-up","data-aos-duration":"1000"};function E(s,r,t,u,v,c){return n(),o("section",C,[P,L,a("div",O,[a("h2",$,i(t.title),1),a("p",x,i(t.msg),1)])])}var J=_(k,[["render",E]]);const T={props:["data","type"],setup(s){s.data,s.data},computed:{newList:function(){return this.data.filter(function(s){return s.status})}}},H={class:"section-inner"},R=a("div",{class:"sticky-bar"},[a("div",{class:"collection-bar"},[a("h2",{class:"collection-bar--title"},"All list")])],-1),A={class:"group-row"},B={key:0,class:"collection-group","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},N={class:"image"},U=["data-img","src","alt"],V={class:"desc"},j=a("span",{class:"ico-plus-sm"},null,-1),D={key:1,class:"collection-group","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},F={class:"image"},G=["src","alt"],M={class:"desc"},S=a("span",{class:"ico-plus-sm"},null,-1);function z(s,r,t,u,v,c){const p=g("router-link");return n(),o("section",{class:d(["section collection",{"web-ui":t.type==="web",graphic:t.type==="graphic",logo:t.type==="logo"}])},[a("div",H,[R,a("div",A,[(n(!0),o(h,null,f(c.newList,(e,m)=>(n(),o("div",{class:d(["group-col",{"sp3 md-sp2":t.type!="graphic","sp2 md-sp2":t.type==="graphic","desc-pl":t.type==="web"}])},[t.type!=="web"?(n(),o("div",B,[a("div",N,[a("img",{"data-img":e.imgUrl,src:e.imgUrl,alt:e.name},null,8,U)]),a("div",V,[j,a("h2",null,i(e.name),1)])])):t.type==="web"?(n(),o("div",D,[y(p,{to:`/detail/${t.type}/${m}`},{default:b(()=>[a("div",F,[a("img",{src:e.imgUrl,alt:e.name},null,8,G)]),a("div",M,[S,a("h2",null,i(e.name),1)])]),_:2},1032,["to"])])):w("",!0)],2))),256))])])],2)}var K=_(T,[["render",z]]);export{K as C,J as P,q as n};
