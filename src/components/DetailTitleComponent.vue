<script>
export default {
  data() {
    return {};
  },
  props: ["title", "scope", "imgUrl"],
  setup(props) {
    const title = props.title;
    const scope = props.scope;
    const imgUrl = props.imgUrl;
  },
};
</script>

<template>
  <section class="section work-detail">
    <div class="work-detail-obj-1">
      <img src="/src/assets/background-plus.svg" alt="" />
    </div>
    <div class="work-detail-obj-2">
      <img src="/src/assets/background-plus.svg" alt="" />
    </div>
    <div class="collection-image">
      <img :src="imgUrl" :alt="title" />
    </div>
    <div class="section-main work-detail-main">
      <h2 data-aos-anchor=".work-detail" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000">{{ title }}</h2>
    </div>
    <div class="work-detail-desc">
      <h3 data-aos-anchor=".work-detail" data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000">
        <span class="ico-plus-md"></span
        ><span class="title-bottom-border">SCOPE</span>
      </h3>
      <ol v-html="scope" data-aos-anchor=".work-detail" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1000">
      </ol>
    </div>
  </section>
</template>


