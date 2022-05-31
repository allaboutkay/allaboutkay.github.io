<script>
export default {
  props: ["data", "type"],
  setup(props) {
    const data = props.data;
    const type = props.data;
  },
  computed:{
    newList:function(){
      return this.data.filter(function (item) {
			return item.status;
		})
    }
  }
};
</script>


<template>
  <section class="section collection" :class="{'web-ui': type === 'web',
            'graphic': type === 'graphic',
            'logo': type === 'logo'}">
    <div class="section-inner">
      <div class="sticky-bar">
        <div class="collection-bar">
          <h2 class="collection-bar--title">All list</h2>
          <!-- <div class="collection-navi">
            <a href="#">POSTER</a>
            <a href="#">CARD</a>
            <a href="#">DM & PAMPHLET</a>
          </div> -->
        </div>
      </div>
      <div class="group-row">
        <div
          v-for="(item, index) in newList"
          class="group-col"
          :class="{
            'sp3 md-sp2': type != 'graphic',
            'sp2 md-sp2': type === 'graphic',
            'desc-pl': type === 'web',
          }"
        >
          <div class="collection-group" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000" v-if="type !== 'web'">

              <div class="image">
                <img :data-img="item.imgUrl" :src="item.imgUrl" :alt="item.name" />
              </div>
              <div class="desc">
                <span class="ico-plus-sm"></span>
                <h2>{{ item.name }}</h2>
              </div>
          </div>

          <div class="collection-group" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000" v-else-if="type === 'web'">
            <router-link :to="`/detail/${type}/${item.id}`">
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


