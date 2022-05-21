<template>
  <section class="section work-experience">
    <div class="work-exp-obj-1"></div>
    <div class="work-exp-obj-2"></div>
    <div class="work-experience-list">
      <div class="collapse-group" :class="{ collapseShow: activeExps[0] }">
        <a href="#" @click.prevent.stop="expandCollapse($event, 0)"
          ><span class="ico-plus"></span><span class="title">Taiwan</span></a
        >
        <div class="collapse-content">
          <ol>
            <li>2020 / 電子產品設計品牌Moshi  網頁UI設計</li>
            <li>2013 / 日本角色授權公司DLE-ERA 視覺設計</li>
            <li>​​2012 / 華研音樂服裝品牌ORENDA 視覺設計</li>
            <li>​​2008 / 復興商工廣告設計科 圖文傳播組畢業</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{ collapseShow: activeExps[1] }">
        <a href="#" @click.prevent.stop="expandCollapse($event, 1)"
          ><span class="ico-plus"></span><span class="title">Japan</span></a
        >
        <div class="collapse-content">
          <ol>
            <li>2019 / 國際型設計公司Queserser 網頁設計</li>
            <li>2019 / 名古屋經營會計專門學校 商業系畢業</li>
            <li>2016 / 日本設計公司TRiPLE-E 視覺設計</li>
            <li>2015 / YAMASA言語文化學院  AIJP畢業</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{ collapseShow: activeExps[2] }">
        <a href="#" @click.prevent.stop="expandCollapse($event, 2)"
          ><span class="ico-plus"></span><span class="title">License</span></a
        >
        <div class="collapse-content">
          <ol>
            <li>2018 / 日本語能力試驗N1</li>
            <li>2018 / 日本商業簿記檢定3級</li>
            <li>2018 / 日本文書設計技能檢定1級</li>
            <li>2017 / 日本情報處理技能檢定2級</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{ collapseShow: activeExps[3] }">
        <a href="#" @click.prevent.stop="expandCollapse($event, 3)"
          ><span class="ico-plus"></span><span class="title">News</span></a
        >
        <div class="collapse-content">
          <ol>
            <li>2016 / YAMASA言語文化學院川柳俳句 金獎</li>
            <li>2016 / CANDLE NIGHT插畫作品 日本岡崎展出</li>
            <li>​2015 / 亞洲插畫祭插畫類作品 台北華山展出</li>
            <li>​2015 / 香港國際授權展 原創作品 香港灣仔展出</li>
            <li>​​2014 / VIVI 雜誌中文版 來自世界的酷女孩專訪</li>
            <li>2013 / 微型素人攝影展</li>
            <li>2012 / 99+高雄美麗島時尚來自自我 設計師聯​​展​​</li>
            <li>​2007 / 第四屆交通大學宏碁數位創作比賽 佳作</li>
            <li>​2007 / 全國學生創藝作品線上競賽 優勝</li>
            <li>​2007 / 酷卡城市攝影展 信義誠品展出</li>
            <li>2005 / 馬來西亞世界青少年發明展 甲等獎​​​​</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeExps: [false, false, false, false],
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