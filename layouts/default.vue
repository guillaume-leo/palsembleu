<template>
  <nav class="nav">
    <NuxtLink class="nav__link" to="/">gallery</NuxtLink>
    <NuxtLink class="nav__link" to="/setup">setup</NuxtLink>
    <NuxtLink class="nav__link" to="/simulation">the simulation</NuxtLink>
  </nav>
  <NuxtPage />
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  max-width: fit-content;
  padding-inline: 20px;
  border-radius: 5px;
  flex-wrap: wrap;
}

.nav__link {
  font-family: Saira;
  color: white;
  font-size: 30px;
  font-variant: small-caps;
  text-decoration: none;
}

.router-link-active {
  text-decoration: underline;
}
</style>

