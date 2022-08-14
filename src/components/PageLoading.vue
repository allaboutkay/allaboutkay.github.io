
<script>

export default {
  props: ["loaded"],
  setup(props) {
    const loaded = props.loaded;
  },
};
</script>
<template>
	<div id="loading-layer" class="page" :class="loaded ? 'done': ''">
		<div class="done-overlay"></div>
	</div>
</template>

<style scoped>
#loading-layer.done .done-overlay{
	opacity: 1;
	animation: swipeLeft .8s ease forwards
}

.done-overlay{
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background: #FA6A18;
	z-index: 200;
	opacity: 1;
}

@keyframes swipeLeft{
	to{
		/* opacity: 0; */
		width: 0
	}
}
</style>
