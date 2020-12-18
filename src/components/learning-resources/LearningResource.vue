<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
        <base-button mode="flat" @click="deleteResource(id)"><i class="far fa-trash-alt"></i></base-button>
      </header>

      <p>{{ description }}</p>

      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'description',
    'link'
  ],

  inject: ['deleteResource']
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #09919bc5;
}

a:hover,
a:active {
  color: #c89300;
}
</style>