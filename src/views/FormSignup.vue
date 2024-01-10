<template>
    <div>
      <v-img class="mx-auto my-6" max-width="228" width="200" src="../assets/logo0.png"></v-img>
  
      <v-card class="mx-auto pa-12 pb-8 c" id="c" elevation="10" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Sign Up</div>
  
       
           
            <v-text-field
              v-model="Name"
              label="First Name"
              dense
              outlined
              placeholder="Enter your first name"
            ></v-text-field>
         
         
     
  
        <v-text-field
          v-model="email"
          label="Email address"
          dense
          outlined
          placeholder="Enter your email address"
          prepend-inner-icon="mdi-email-outline"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          label="Password"
          dense
          outlined
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          dense
          outlined
          placeholder="Confirm your password"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visibleConfirm ? 'text' : 'password'"
          @click:append-inner="visibleConfirm = !visibleConfirm"
        ></v-text-field>
  
        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Sign up now to create an account and access our credit prediction application.
          </v-card-text>
        </v-card>
  
        <v-btn
  block
  class="mb-8"
  color="#fff"
  style="background: linear-gradient(to right, #400546, #1fb16d, #5CE1E6);"
  size="large"
  @click="signup()"
  variant="tonal"
>
  Sign Up
</v-btn>
  
        <v-card-text class="text-center">
          <router-link class="text-decoration-none" to="/login" style="color: #36013c;">
            Already have an account? Login  <v-icon icon="mdi-chevron-right" style="color: #36013c;"></v-icon>
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
        visibleConfirm: false,
         Name: '',
         
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async signup() {
        try {
          const response = await axios.post('http://127.0.0.1:5000/register', {
            username: this.Name,
            email: this.email,
            password: this.password,
             
          });
          alert('vous avez été inscrit')
           this.$router.push('/login');
        
          console.log(response.data);
        } catch (error) {
          console.error('Error during sign up:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .c {
    margin-top: -60px;
    box-shadow: 0 0 15px rgba(54, 1, 60, 0.5);
    margin-bottom: 20px;
  }
  </style>
  