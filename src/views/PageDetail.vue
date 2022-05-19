<script setup>
import DetailTitleComponent from "../components/DetailTitleComponent.vue";
import CollectionDetail from "../components/CollectionDetail.vue";
</script>

<script>
import datas from "../detail_data.json";
export default {
  data() {
    return {
      navigation: navigation,
      item: null,
      title: null,
      scope: null,
      imgUrl: null,
      videoUrl: null,
    };
  },
  created() {
    this.item = datas[`${this.$route.params.type}_data`][this.$route.params.id];
    this.title = this.item.name;
    this.scope = this.item.detailScope;
    this.imgUrl = this.item.imgUrl2;
    this.videoUrl = this.item.videoUrl;
  },
};
</script>

<template>
  <DetailTitleComponent :title="title" :scope="scope" :imgUrl="imgUrl" />
  <CollectionDetail :videoUrl="videoUrl" />
</template>