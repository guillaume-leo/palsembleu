<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,600;1,700;1,900&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
html,
body,
#__nuxt {
  background-color: black;
}
</style>