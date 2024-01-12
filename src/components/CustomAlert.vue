<template>
  <div class="alert-container">
    <v-alert
      v-if="show && type === 'success'"
      :class="['custom-alert', type]"
      border="start"
  
      closable
      style="height: 150px;"
      type="success"
      close-label="Close Alert"
      color="success"
      title="Congratulations"
    >
    {{ message }}
    </v-alert>

    <v-alert
      v-if="show && type === 'error'"
      :class="['custom-alert', type]"
      border="start"
     
      closable
      style="height: 150px;"
      type="error"
      close-label="Close Alert"
      color="error"
      title="Failed "
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

<style scoped>
.alert-container {
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  z-index: 1000;  
}

.custom-alert {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}
</style>
