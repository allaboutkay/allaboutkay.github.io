<template>
  <div class="pointer" :class="{hide: isHover}" ref="pointer">
    <span></span>
  </div>
</template>

<script>
import { throttle } from "lodash";
export default {
  data() {
    return {
      pointerTarget: null,
      isHover: false
    };
  },
  mounted() {
    let self = this;
    document.addEventListener("mousemove", function(e) {
      self.$refs.pointer.style.left = e.clientX + "px";
      self.$refs.pointer.style.top = e.clientY + "px";
    });
    document.onmousemove = throttle(function(e) {
      var elm = document.elementFromPoint(e.clientX, e.clientY);
      if (elm.classList.contains("pointer-target") === true) {
        self.pointerTarget = elm.innerHTML;
        self.isHover = false;
      } else {
        self.pointerTarget = "";
        self.isHover = true;
      }
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
.pointer {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  &.hide {
    opacity: 0;
    transform: scale(0);
  }
  &.over {
    span {
      transform: scale(3);
      border: none;
      background: rgba(0, 0, 0, 0.5);
      mix-blend-mode: difference;
    }
  }
  span {
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 1px solid gray;
    border-radius: 20px;
    display: block;
    transition: transform, 0.3s ease-out;
  }
}
</style>
