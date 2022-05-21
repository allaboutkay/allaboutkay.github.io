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
      <div class="collection-detail">
        <div id="demo-video">
          <vue-plyr :options="options">
            <video controls crossorigin playsinline autoplay muted>
              <source size="720" :src="videoUrl" type="video/mp4" />
            </video>
          </vue-plyr>
        </div>

        <br><br>

        <div id="demo-video">
          <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/DearestLinedAtlanticridleyturtle' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
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


