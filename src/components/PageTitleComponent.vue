<script>
export default {
  props: ["title", "msg"],
  setup(props) {
    const title = props.title;
    const msg = props.msg;
  },
};
</script>

<template>
  <section class="section top-banner">
    <div class="top-banner-obj-1">
      <img src="/src/assets/background-plus.svg" alt="" />
    </div>
    <div class="top-banner-obj-2">
      <img src="/src/assets/background-plus.svg" alt="" />
    </div>
    <div class="section-main top-banner-main">
      <h2 data-aos-anchor=".top-banner" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000">{{ title }}</h2>
      <p data-aos-anchor=".top-banner" data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000">{{ msg }}</p>
    </div>
  </section>
</template>


