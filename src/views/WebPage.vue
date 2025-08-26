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
    };
  },
};
</script>

<template>
  <PageTitleComponent
    title="PROJECT"
    msg="creating websites and web apps that incorporate
interactive design and modern technologies"
  />

  <CollectionList :data="listData" type="web" />
</template>