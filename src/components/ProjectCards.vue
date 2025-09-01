<script>
export default {
  props: ["projects"],
  data() {
    return {
      selectedProject: null,
      showPopup: false
    };
  },
  methods: {
    openPopup(project) {
      this.selectedProject = project;
      this.showPopup = true;
      document.body.style.overflow = 'hidden';
    },
    closePopup() {
      this.showPopup = false;
      this.selectedProject = null;
      document.body.style.overflow = '';
    }
  }
};
</script>

<template>
  <section class="project-cards-section">
    <div class="project-cards-container">
      <div class="project-cards-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-card"
          @click="openPopup(project)"
          data-aos="fade-up" 
          :data-aos-delay="index * 100"
          data-aos-duration="1000"
        >
          <div class="project-card-image">
            <img :src="project.coverImage" :alt="project.name" />
          </div>
          <div class="project-card-content">
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="project-hashtags">
              <span 
                v-for="tag in project.hashtags" 
                :key="tag"
                class="hashtag"
              >
                {{ tag }}
              </span>
            </div>
            <p class="project-source">{{ project.source }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <button class="close-button" @click="closePopup">×</button>
        <div class="popup-image">
          <img :src="selectedProject.popupImage" :alt="selectedProject.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 基本三列網格樣式 */
.project-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.project-card {
  max-width: 455px;
}

@media (max-width: 768px) {
  .project-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .project-cards-grid {
    grid-template-columns: 1fr;
  }
}

/* 文字樣式 */
.project-name {
  color: #363636;
  font-size: 23px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  margin: 0;
  font-weight: 300;
  margin-top: 10px;
}

.project-hashtags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hashtag {
  color: #FF7423;
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
}

.project-source {
  color: #363636;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  margin: 0;
}

/* 只保留popup功能的基本樣式，其他樣式都移除 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  padding: 50px 0;
  box-sizing: border-box;
}

.popup-content {
  position: relative;
  background: #f5f5f5;
  border-radius: 0;
  max-width: 1200px;
  margin: 0 auto;
  min-height: fit-content;
}

.popup-image {
  width: 100%;
  height: auto;
}

.close-button {
  position: absolute;
  top: 0;
  right: -120px;
  width: 80px;
  height: 80px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 0;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: background 0.3s ease;
}

.close-button:hover {
  background: #e55a2b;
}

.popup-image {
  width: 100%;
  height: 100%;
}

.popup-image img {
  width: 100%;
  height: auto;
  display: block;
}
</style>