<template>
  <ul v-for="storedResource in storedResources" :key="storedResource.id">
    <li>Vue.js</li>
    <li>Google</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },

        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.pt'
        },
      ],
    };
  }
}
</script>