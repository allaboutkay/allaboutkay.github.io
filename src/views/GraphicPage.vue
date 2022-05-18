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
      listData: datas["graphic_data"],
    };
  },
};
</script>
<template>
  <PageTitleComponent
    title="GRAPHIC"
    msg="from cool idea to insanely great product"
  />
  <CollectionList :data="listData" type="graphic_data" />
</template>