<template>
  
    <div v-if="show" :class="['custom-alert', type]" style="display: flex; background: #fff;">
        
        <div v-if="type === 'success'" class="icon-container" style="background: #fff;">
        <i class="mdi mdi-check-circle-outline" style="font-size: 210px;"></i>
      </div>
      <div v-if="type === 'error'" class="icon-container" style="  background-color: #fff;">
        <i class="mdi mdi-alert-circle-outline" style="font-size: 210px;"></i>
      </div>
      <div class="message-container" :style="{color: type === 'success' ? '#34dba6' : '#e74c3c' }">
        {{ message }}
        
      </div>
      <button @click="closeAlert" class="close-button" :style="{color: type === 'success' ? '#34dba6' : '#e74c3c' }">
          <i class="mdi mdi-close"></i>
        </button>
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
    methods: {
      closeAlert() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-alert {
    position: fixed;
    z-index: 100000;
    top: 100px;
    left: 50%;
    transform: translateX(-50%)  ; 
    padding: 10px;
    border-radius: 5px;
 
    color: #fff;
   
    font-weight: bold;
  }
  
  .icon-container {
    margin-right: 10px;
  }
  
.message-container {
    flex-grow: 1;
    color: #e74c3c;
    margin-top: 100px;
  }
  
  
  
  .success {
   color: #34dba6;
   box-shadow: 0 0 10px #34dba6;
  }
  
  .error {
  
    box-shadow: 0 0 10px #e74c3c;
     color: #e74c3c;
  }
  
  .mdi {
    margin-right: 5px;
  }
  
  .close-button {
    background: none;
    border: none;
    cursor: pointer;
   
    font-size: 20px;
 margin-top:-200px;
    color: #34dba6; /* Change color as needed */
  }
   

  </style>
  