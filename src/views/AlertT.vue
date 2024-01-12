<template>
    <div>
      <v-alert
        v-if="show && type === 'success'"
        :class="['custom-alert', type]"
        border="start"
        variant="tonal"
        closable
        close-label="Close Alert"
        color="deep-purple-accent-4"
        title="Closable Alert"
      >
        Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
  
        Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
      </v-alert>
  
      <v-alert
        v-if="show && type === 'error'"
        :class="['custom-alert', type]"
        border="start"
        variant="tonal"
        closable
        close-label="Close Alert"
        color="deep-purple-accent-4"
        title="Closable Alert"
      >
        {{ message }}
      </v-alert>
    </div>
  </template>
  
  <script>
  import '@mdi/font/css/materialdesignicons.css'; // Import MDI CSS
  
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      message: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'info',
      },
    },
  };
  </script>
  