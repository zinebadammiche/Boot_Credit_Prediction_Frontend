<template >
    <div  style="background-color: #f5f6f7; margin-top: -24px;  height: 100vh;">
      <v-img class="mx-auto my-6" max-width="228"  width="200" src="../assets/logo0.png"></v-img>
  
      <v-card class="mx-auto pa-12 pb-8 c "  id="c"  elevation="8" max-width="448" rounded="lg"  >
        <div class=" " style="color: #1A6EB7; font-size: 1.2em; margin-bottom: 10px;">Log In</div>
  
        <v-text-field
        clearable
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
       
          v-model=email
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
         
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          clearable
          @click:append-inner="visible = !visible"
          v-model=password
        ></v-text-field>
  
        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
         Log in to our credit prediction application. </v-card-text>
        </v-card>
  
        <v-btn block class="mb-8" color="#fff" @click="login()"   style="background: linear-gradient(to right, #1A6EB7, #01A89E,#01A89E,#01A89E, #3E63F9);" size="large" variant="tonal">
          Log In
        </v-btn>
        <v-card-text class="text-center">
        <router-link class="text-decoration-none" to="/signup" style="color: #1A6EB7;">
           Sign Up Now <v-icon icon="mdi-chevron-right" style="color: #1A6EB7;"></v-icon>
          </router-link>
          </v-card-text>
      </v-card>
    </div>
  </template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      visible: false,
      email: '',
      password: '',
    };
  },
    methods: {
        async login() {
    try {
      // Create a data object to send in the request
      const requestData = {
        email: this.email,
        password: this.password,

      };  
        console.log(requestData);

      
      const response = await axios.post('http://127.0.0.1:5000/login', requestData);
      console.log(response.data);
      
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("username", response.data.username);
 
      // Log the response for debugging purposes
      console.log(response);

      
      alert('vous avez été connecté');

     
      this.$router.push('/forms');
    } catch (error) {
      
  
      console.error('Error during login:', error);
      console.log('Response data:', error.response.data);
  console.log('Response status:', error.response.status);
  console.log('Response headers:', error.response.headers);
  
    }
  }}
}
</script>
 <style scoped>
 .c  {
  margin-top: -60px;
  
  margin-bottom: 20px;
  background-color: #f5f6f7;
 }
 </style>
 
  