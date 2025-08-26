<template>
  <kinesis-container event="scroll" duration="1200">
  <section class="section work-experience">
    
    <kinesis-element :strength="300" axis="y" type="translate">
      <div class="work-exp-obj-1">
          <div class="bg"></div>
      </div>
    </kinesis-element>
    
    
    
    <kinesis-element :strength="-300" axis="y" type="translate">
      <div class="work-exp-obj-2">
        <div class="bg"></div>
      </div>
    </kinesis-element>
    
    
    <div class="work-experience-list" data-aos-anchor=".work-experience-list" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000">
      <div class="collapse-group" :class="{ collapseShow: activeExps[0] }">
        <a href="#" @click.prevent.stop="expandCollapse($event, 0)"
          ><span class="ico-plus"></span><span class="title">Taiwan</span></a
        >
        <div class="collapse-content">
          <ol>
            <li>I am from Taipei, Taiwan, and graduated from Fu-Hsin Trade & Arts School. During my studies, I received awards from the 2007 Acer Digital Creation Competition organized by National Chiao Tung University and the 2005 Malaysia World Youth Invention Exhibition. These creative experiences not only honed my design skills but also inspired my passion for visual design, digital art and UX design.</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{ collapseShow: activeExps[1] }">
        <a href="#" @click.prevent.stop="expandCollapse($event, 1)"
          ><span class="ico-plus"></span><span class="title">Japan</span></a
        >
        <div class="collapse-content">
          <ol>
            <li>In 2015, my experience working at a design company in Japan taught me the “craftsmanship spirit,” which means striving for perfection and mastering a skill to the highest level. This experience showed me how to work in a more organized way, pay closer attention to detail, and understand the differences between Japanese and Taiwanese work styles.</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{ collapseShow: activeExps[2] }">
        <a href="#" @click.prevent.stop="expandCollapse($event, 2)"
          ><span class="ico-plus"></span><span class="title">News</span></a>
        <div class="collapse-content">
          <ol>
            <li>At Cooler Master, I led the design and development of software that can control many PC hardware devices. I worked with teams in Taiwan, the United States, and Europe, and ran user tests in different markets to make sure the product met various user needs. I also handled the multilingual interface, making sure all users had a consistent and smooth experience. This project won the 2025 Red Dot Design Award and also received two media awards at Computex 2024:</li>
            <li>* PC MR – Best of Computex 2024<br>* cgm Tech – Most Innovative Computer 2024</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  </kinesis-container>
</template>

<script>
export default {
  data() {
    return {
      activeExps: [true, true, true, true],
      collapseHeight: [0, 0, 0, 0],
    };
  },
  methods: {
    expandCollapse(e, x) {
      let currentTarget = e.currentTarget;
      let height = currentTarget.parentNode.querySelector("ol").offsetHeight;

      if (!this.activeExps[x]) {
        document.querySelectorAll(".collapse-content").forEach((i, ind) => {
          i.style.height = 0;
        });
        currentTarget.parentNode.querySelector(
          ".collapse-content"
        ).style.height = height + "px";
      } else {
        document.querySelectorAll(".collapse-content").forEach((i, ind) => {
          i.style.height = 0;
        });
      }

      this.activeExps[x] = !this.activeExps[x];
      this.activeExps.forEach((item, y) => {
        if (x !== y) {
          this.activeExps[y] = false;
        }
      });
    },
  },
};
</script>>