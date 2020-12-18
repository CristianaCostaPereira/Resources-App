<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #024136c2;
  border: 1px solid #08582a;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #024136c2;
  border-color: #2a6b3dc2;
}

.flat {
  background-color: transparent;
  color: #127a64;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #b5e2d5;
}
</style>