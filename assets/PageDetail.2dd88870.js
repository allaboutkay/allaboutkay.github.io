import{d as p}from"./detail_data.03235bcc.js";import{_ as c}from"./background-plus.3d2be363.js";import{_ as a,o as l,c as n,b as t,t as u,r as h,d as o,f as v,F as g}from"./index.fa968ea5.js";const f={data(){return{}},props:["title","scope","imgUrl"],setup(e){e.title,e.scope,e.imgUrl}},U={class:"section work-detail"},$=t("div",{class:"work-detail-obj-1"},[t("img",{src:c,alt:""})],-1),b=t("div",{class:"work-detail-obj-2"},[t("img",{src:c,alt:""})],-1),y={class:"collection-image"},k=["src","alt"],w={class:"section-main work-detail-main"},C={class:"work-detail-desc"},D=t("h3",null,[t("span",{class:"ico-plus-md"}),t("span",{class:"title-bottom-border"},"SCOPE")],-1),S=["innerHTML"];function j(e,s,i,r,d,_){return l(),n("section",U,[$,b,t("div",y,[t("img",{src:i.imgUrl,alt:i.title},null,8,k)]),t("div",w,[t("h2",null,u(i.title),1)]),t("div",C,[D,t("ol",{innerHTML:i.scope},null,8,S)])])}var B=a(f,[["render",j]]);const L={props:["videoUrl"],setup(e){e.videoUrl}},O={class:"section collection"},T={class:"section-inner"},x=t("div",{class:"sticky-bar"},[t("div",{class:"collection-bar"},[t("h2",{class:"collection-bar--title"},"WORKS")])],-1),E={class:"collection-detail"},F={id:"demo-video"},H={controls:"",crossorigin:"",playsinline:"",autoplay:"",muted:""},M=["src"],N=t("br",null,null,-1),V=t("br",null,null,-1),z=t("div",{id:"demo-video"},[t("div",{style:{position:"relative","padding-bottom":"calc(56.25% + 44px)"}},[t("iframe",{src:"https://gfycat.com/ifr/DearestLinedAtlanticridleyturtle",frameborder:"0",scrolling:"no",width:"100%",height:"100%",style:{position:"absolute",top:"0",left:"0"},allowfullscreen:""})])],-1);function A(e,s,i,r,d,_){const m=h("vue-plyr");return l(),n("section",O,[t("div",T,[x,t("div",E,[t("div",F,[o(m,{options:e.options},{default:v(()=>[t("video",H,[t("source",{size:"720",src:i.videoUrl,type:"video/mp4"},null,8,M)])]),_:1},8,["options"])]),N,V,z])])])}var K=a(L,[["render",A]]);const P={data(){return{navigation,item:null,title:null,scope:null,imgUrl:null,videoUrl:null}},created(){this.item=p[`${this.$route.params.type}_data`][this.$route.params.id],this.title=this.item.name,this.scope=this.item.detailScope,this.imgUrl=this.item.imgUrl2,this.videoUrl=this.item.videoUrl}},G=Object.assign(P,{setup(e){return(s,i)=>(l(),n(g,null,[o(B,{title:s.title,scope:s.scope,imgUrl:s.imgUrl},null,8,["title","scope","imgUrl"]),o(K,{videoUrl:s.videoUrl},null,8,["videoUrl"])],64))}});export{G as default};
