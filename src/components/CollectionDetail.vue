<script>
export default {
  props: ["videoUrl"],
  setup(props) {
    const videoUrl = props.videoUrl;
  },
};
</script>

<template>
  <section class="section collection">
    <div class="section-inner">
      <div class="sticky-bar">
        <div class="collection-bar">
          <h2 class="collection-bar--title">WORKS</h2>
        </div>
      </div>
      <div class="collection-detail" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000">
        <div id="demo-video">
          <vue-plyr :options="options">
            <video controls crossorigin playsinline autoplay muted>
              <source size="720" :src="videoUrl" type="video/mp4" />
            </video>
          </vue-plyr>
        </div>
        <!-- <a href="#" class="image"
          ><img src="/src/assets/work-detail-samlple.png" alt=""
        /></a> -->
        <!-- <a href="" class="button-play">
          <span class="ico-play"
            ><img src="/src/assets/ico-play.svg" alt=""
          /></span>
          <span class="ico-text">PLAY <br />VIDEO</span>
        </a> -->
      </div>
    </div>
  </section>
</template>


