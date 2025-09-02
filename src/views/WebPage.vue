<script setup>
import PageTitleComponent from "../components/PageTitleComponent.vue";
import CollectionList from "../components/CollectionList.vue";
</script>


<script>
import navigation from "../datas.json";
import webDatas from "../detail_data.json";
export default {
  data() {
    return {
      navigation: navigation,
      listData: webDatas["web_data"],
      projectsData: [
        {
          "name": "MasterLiquid Atmos II LCD",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<IF design award 2025>"],
          "source": "Cooler Master",
          "coverImage": "/web/1.png",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "MasterHUB",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<Reddot award 2025>"],
          "source": "Cooler Master",
          "coverImage": "/web/2.png",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "AI Assistant - COOMABEAR",
          "hashtags": ["<Character Design>", "<AI LLM Avatar>", "<Llama 3>"],
          "source": "Cooler Master ＆Ubitus",
          "coverImage": "/web/3.gif",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "Samantha II",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<B2B>", "<IOT>"],
          "source": "Moshi & Hiroia",
          "coverImage": "/web/4.png",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "Moshi - Membership APP",
          "hashtags": ["<UI & UX>", "<Mobile>"],
          "source": "Moshi",
          "coverImage": "/web/5.png",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "MasterCTRL",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<i18n>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/6.gif",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "VueNex-Minidesk",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<POC>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/7.png",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "Minecraft Digital Showcase",
          "hashtags": ["<Computex 2024>", "<Visual Design>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/8.png",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "Moshi official web 2020",
          "hashtags": ["<UI & UX>", "<Web Design>", "<Software>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/9.png",
          "popupImage": "/web/popup1.webp"
        },
        {
          "name": "Sneaker X Bounce",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<Software>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/10.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Meta - CDU HMI",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<HMI>", "<CDU>"],
          "source": "Meta X Cooler Master",
          "coverImage": "/web/11.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Hybrid Wireless Keyboard",
          "hashtags": ["<UI & UX>", "<HW & SW>", "<i18n>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/12.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Cooler LCD Display design",
          "hashtags": ["<HMI>", "<GUI>"],
          "source": "Cooler Master",
          "coverImage": "/web/13.gif",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Vertical Front Panel",
          "hashtags": ["<UI & UX>", "<HW&SW>", "<Touch screen>", "<POC>"],
          "source": "Cooler Master",
          "coverImage": "/web/14.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "consumer website",
          "hashtags": ["<UI & UX>", "<web design>", "<Componentization>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/15.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Amazon Visual Integration",
          "hashtags": ["<UI & UX>", "<EC Stie>", "<A/B test>", "<Software>"],
          "source": "Moshi",
          "coverImage": "/web/16.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Component Optimization",
          "hashtags": ["<UI & UX>", "<B2B>", "<SaaS>", "<Software>"],
          "source": "KKday",
          "coverImage": "/web/17.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Moshi official 2021",
          "hashtags": ["<UI & UX>", "<Web Design>"],
          "source": "Moshi",
          "coverImage": "/web/18.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "MasterID - Membership Site",
          "hashtags": ["<UI & UX>", "<web design>", "<iso27001>", "<Software>"],
          "source": "Cooler Master",
          "coverImage": "/web/19.png",
          "popupImage": "/web/popup11.webp"
        },
        {
          "name": "Wantshow x Moshi",
          "hashtags": ["<UI & UX>", "<Landing page>", "<web design>"],
          "source": "Wantshow & Moshi",
          "coverImage": "/web/20.png",
          "popupImage": "/web/popup21.webp"
        },
        {
          "name": "Mooncake sales website",
          "hashtags": ["<UI & UX>", "<Landing page>", "<web design>"],
          "source": "Moshi",
          "coverImage": "/web/21.png",
          "popupImage": "/web/popup21.webp"
        },
        {
          "name": "Rehabilitation facilities",
          "hashtags": ["<UI & UX>", "<Landing page>", "<web design>"],
          "source": "POPO ケセラセラ",
          "coverImage": "/web/22.png",
          "popupImage": "/web/popup21.webp"
        },
        {
          "name": "Recruitment Website",
          "hashtags": ["<UI & UX>", "<web design>"],
          "source": "エスエーグループ",
          "coverImage": "/web/23.png",
          "popupImage": "/web/popup21.webp"
        },
        {
          "name": "Moshi Event website",
          "hashtags": ["<UI & UX>", "<Landing page>", "<web design>"],
          "source": "Moshi",
          "coverImage": "/web/24.png",
          "popupImage": "/web/popup21.webp"
        }
      ]
    };
  },
};
</script>

<template>
  <PageTitleComponent
    title="PROJECT"
    msg="Making pixels work harder,
    so users don't have to."
  />

  <CollectionList :data="listData" type="web" :projects="projectsData" />
</template>