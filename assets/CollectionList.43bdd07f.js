import{_ as r}from"./background-plus.3d2be363.js";import{_ as v,o,c as n,b as a,t as i,r as l,F as b,e as f,n as d,d as _,f as k}from"./index.4c469c1d.js";var Z=[{category:[{type:"Work",nav:[{nav_id:1,nav_title:"Official website"},{nav_id:2,nav_title:"Landing Page"},{nav_id:3,nav_title:"OTHER"}]},{name:"GRAPHIC",nav:[{nav_id:1,nav_title:"POSTER"},{nav_id:2,nav_title:"business card"},{nav_id:3,nav_title:"DM & PAMPHLET"},{nav_id:4,nav_title:"Package"}]},{name:"LOGO",nav:[{nav_id:1,nav_title:"vintage"},{nav_id:2,nav_title:"OTHER"}]}]}];const C={props:["title","msg"],setup(e){e.title,e.msg}},x={class:"section top-banner"},P=a("div",{class:"top-banner-obj-1"},[a("img",{src:r,alt:""})],-1),w=a("div",{class:"top-banner-obj-2"},[a("img",{src:r,alt:""})],-1),L={class:"section-main top-banner-main"},$={"data-aos-anchor":".top-banner","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},B={"data-aos-anchor":".top-banner","data-aos-delay":"200","data-aos":"fade-up","data-aos-duration":"1000"};function O(e,u,t,p,m,g){return o(),n("section",x,[P,w,a("div",L,[a("h2",$,i(t.title),1),a("p",B,i(t.msg),1)])])}var q=v(C,[["render",O]]);const E={props:["data","type"],setup(e){e.data,e.data}},T={class:"section-inner"},H=a("div",{class:"sticky-bar"},[a("div",{class:"collection-bar"},[a("h2",{class:"collection-bar--title"},"All list")])],-1),R={class:"group-row"},A={key:0,class:"collection-group","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},U={class:"image"},j=["data-img","src","alt"],D={class:"desc"},F=a("span",{class:"ico-plus-sm"},null,-1),G={key:1,class:"collection-group","data-aos-delay":"0","data-aos":"fade-up","data-aos-duration":"1000"},M={class:"image"},N=["src","alt"],S={class:"desc"},V=a("span",{class:"ico-plus-sm"},null,-1);function z(e,u,t,p,m,g){const h=l("CoolLightBox"),y=l("router-link");return o(),n("section",{class:d(["section collection",{"web-ui":t.type==="web",graphic:t.type==="graphic",logo:t.type==="logo"}])},[a("div",T,[H,a("div",R,[(o(!0),n(b,null,f(t.data,(s,c)=>(o(),n("div",{class:d(["group-col",{"sp3 md-sp2":t.type!="graphic","sp2 md-sp2":t.type==="graphic","desc-pl":t.type==="web"}])},[t.type!=="web"?(o(),n("div",A,[_(h,{items:s,index:c,useZoomBar:!0},null,8,["items","index"]),a("div",U,[a("img",{"data-img":s.imgUrl,src:s.imgUrl,alt:s.name},null,8,j)]),a("div",D,[F,a("h2",null,i(s.name),1)])])):(o(),n("div",G,[_(y,{to:`/detail/${t.type}/${c}`},{default:k(()=>[a("div",M,[a("img",{src:s.imgUrl,alt:s.name},null,8,N)]),a("div",S,[V,a("h2",null,i(s.name),1)])]),_:2},1032,["to"])]))],2))),256))])])],2)}var J=v(E,[["render",z]]);export{J as C,q as P,Z as n};
