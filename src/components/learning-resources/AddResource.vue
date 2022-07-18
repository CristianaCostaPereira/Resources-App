<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput"/>
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput"/>
      </div>

      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>

  <base-dialog v-if="inputIsInvalid" title="Invalid Input ❌" @close="confirmError">

    <!-- Provides content to my different slots -->
    <template v-slot:default>
      <p>Sorry, but one or more input value is invalid.</p>
      <p>Please make sure that at least one character is entered into each input field.</p>
    </template>

    <template v-slot:actions>
      <base-button @click="confirmError">Got it 😄</base-button>
    </template>
  </base-dialog>
</template>

<script>
export default {
  // Allows to call my addResource method from theResources component in this component inside of submitData
  inject: ['addResource'],

  data() {
    return {
      inputIsInvalid: false
    };
  },

  methods: {
    submitData() {
      // 3 values that the user enters
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      // To clean the inputs after data is saved to variable
      this.$refs.titleInput.value = ''
      this.$refs.descriptionInput.value = ''
      this.$refs.linkInput.value = ''

      // trim() can be called on strings to removes the excess blanks that the user might enter in the input fields
      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        this.inputIsInvalid = true;

        // return to avoid this.addResouces to be executed, because return stops the function execution
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },

    confirmError() {
      this.inputIsInvalid = false; // will close the dialog
    }
  },
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>