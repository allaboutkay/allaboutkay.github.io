<script>
export default {
  props: ["title", "msg"],
  computed: {
    formattedMsg() {
      return this.msg.replace(/\n/g, '<br>');
    }
  }
};
</script>

<template>
  <kinesis-container event="scroll" duration="1200">
    <section class="section top-banner">
      <div class="top-banner-obj-1">
        <kinesis-element :strength="-100" axis="y" type="translate">
          <img src="/src/assets/background-plus.svg" alt="" />
        </kinesis-element>
      </div>
      <div class="top-banner-obj-2">
        <kinesis-element :strength="100" axis="y" type="translate">
          <img src="/src/assets/background-plus.svg" alt="" />
        </kinesis-element>
      </div>
      <div class="section-main top-banner-main">
        <h2 data-aos-anchor=".top-banner" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000">{{ title }}</h2>
        <p data-aos-anchor=".top-banner" data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000" v-html="formattedMsg"></p>
      </div>
    </section>
  </kinesis-container>
</template>


