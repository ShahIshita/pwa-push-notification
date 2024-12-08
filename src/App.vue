<template>
  <div class="app">
    <h1>Random Image Gallery</h1>
    <button @click="fetchImages">Load New Images</button>
    <div class="gallery">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Random Image ' + (index + 1)"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const images = ref([]);

    const fetchImages = async () => {
      images.value = [];
      for (let i = 0; i < 10; i++) {
        const randomImageUrl = `https://picsum.photos/id/${i + 1}/200/300`;
        images.value.push(randomImageUrl);
      }
    };

    return { images, fetchImages };
  },
};
</script>

<style>
.app {
  text-align: center;
  margin: 20px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 20px;
}
img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
