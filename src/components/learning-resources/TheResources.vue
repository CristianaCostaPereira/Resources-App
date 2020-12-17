<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource ')">Add Resources</base-button>
  </base-card>

  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource';

export default {
  components: {
    StoredResources,
    AddResource
  },

  data() {
    return {
      selectedTab: 'stored-resources'
    };
  },

  methods: {
    // here, we get the tab that should be selected as our argument
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
}
</script>