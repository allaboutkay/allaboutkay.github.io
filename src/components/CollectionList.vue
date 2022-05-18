<script>
export default {
  props: ["data", "type"],
  setup(props) {
    const data = props.data;
    const type = props.data;
  },
};
</script>


<template>
  <section class="section collection">
    <div class="section-inner">
      <div class="sticky-bar">
        <div class="collection-bar">
          <h2 class="collection-bar--title">All list</h2>
          <div class="collection-navi">
            <a href="#">POSTER</a>
            <a href="#">CARD</a>
            <a href="#">DM & PAMPHLET</a>
          </div>
        </div>
      </div>

      <div class="group-row">
        <div
          v-for="item in data"
          class="group-col"
          :class="{
            'sp3 md-sp2': type != 'graphic_data',
            'sp2 md-sp2': type === 'graphic_data',
            'desc-pl': type === 'web_data',
          }"
        >
          <div class="collection-group">
            <router-link to="/detail">
              <div class="image">
                <img :src="item.imgUrl" :alt="item.name" />
              </div>
              <div class="desc">
                <span class="ico-plus-sm"></span>
                <h2>{{ item.name }}</h2>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


