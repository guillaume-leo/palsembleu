<template>
  <div class="content">
    <div class="content__img">
      <img src="/setup00.jpg" alt="my setup">
    </div>
    <div class="content__text">
      <p>The simulation runs into a <a target="_blank" href="https://cycling74.com/">Max/Msp</a> patch.</p>
      <p>Max is a creative coding environement that can be extended with other languages.</p>
      <p>Thus, I can inside my max project, create shaders in GLSL to run the particle simulation directly on the GPU <br>
        and
        javascript to
        control parameters of the patch in real-time with a midi controller that you can see on the picture (ableton push)
      </p>
    </div>
  </div>
</template>

<style scoped>
.content {
  font-family: Saira;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

a {
  color: white;
}

.content__img {
  max-width: 100%;
}

.content__text {
  flex-shrink: 1;
}

img {
  max-width: 100%;
  max-height: 900px;
}
</style>
