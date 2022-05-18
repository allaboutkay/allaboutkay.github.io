<script setup>
import PageTitleComponent from "../components/PageTitleComponent.vue";
import CollectionList from "../components/CollectionList.vue";
</script>
<script>
import navigation from "../datas.json";
import datas from "../detail_data.json";
export default {
  data() {
    return {
      navigation: navigation,
      listData: datas["logo_data"],
    };
  },
};
</script>


<template>
  <PageTitleComponent title="LOGO" msg="design is in the details" />
  <CollectionList :data="listData" type="logo_data" />
</template>