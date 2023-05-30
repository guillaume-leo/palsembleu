<template>
  <div class="content">
    <h1 class="content__title">gallery</h1>
    <div class="content__gallery gallery">
      <img src="/00.png" class="gallery__image" alt="">
      <img src="/01.png" class="gallery__image" alt="">
      <img src="/02.png" class="gallery__image" alt="">
      <img src="/live01.jpg" class="gallery__image" alt="">
      <img src="/03.png" class="gallery__image" alt="">
      <img src="/04.png" class="gallery__image" alt="">
      <img src="/06.png" class="gallery__image" alt="">
      <img src="/07.png" class="gallery__image" alt="">
      <img src="/live00.jpg" class="gallery__image" alt="">
      <img src="/08.png" class="gallery__image" alt="">
      <img src="/09.png" class="gallery__image" alt="">
    </div>
    <div class="content__gifs">
      <img src="/physarum_experiment06.gif" class="gallery__gif" alt="">
      <img src="/Physarum_experiment07.gif" class="gallery__gif" alt="">
    </div>
  </div>
</template>

<style scoped>
.content {
  max-height: 100%;
}

h1 {
  font-variant: small-caps;
  font-family: Saira;
}

.gallery {
  background: black;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.content__gifs {
  display: flex;
  justify-content: center;
}

.gallery__gif {
  object-fit: cover;
  min-width: 33%;
  margin: auto;
}

.gallery__image {
  max-width: 50%;
}
</style>