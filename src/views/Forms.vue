<template>
  <div class="c0">
    <img src="../assets/logo0.png" alt="Header Logo" class="header-logo">
    <div class="container">
      <div class="content">
        <img src="../assets/logo.png" alt="Logo" class="logo">
       
        <form class="f1" @submit.prevent="onSubmit">
          <div class="header-container">
      <img src="../assets/logo0.png" alt="Header Logo" class="header-logo0">
      <h4>User Informations :</h4>
    </div>
          <div class="form">
            <div class="c1">
              <label for="Full name" class="label">Full Name</label>
              <input v-model="fullName" type="text" id="Full name" placeholder="Full name" class="input black-background">

              <label for="gender" class="label">Gender</label>
              <select v-model="formData.gender" id="gender" placeholder="Gender" class="input black-background">
                <option value="" disabled selected>Select Gender</option>
                <option value="male" selected>Male</option>
                <option value="female">Female</option>
              </select>

              <label for="married" class="label">Married</label>
              <select v-model="formData.married" id="married" class="input black-background">
                <option value="" disabled selected>Select Married</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label for="dependents" class="label">Dependents</label>
              <select v-model="formData.dependents" id="dependents" class="input black-background">
                <option value="" disabled selected>Select Dependents</option>
                <option value="0">0 enfant</option>
                <option value="1">1 enfants</option>
                <option value="2">2 enfants</option>
                <option value="3+">3+ enfants</option>
              </select>

              <label for="education" class="label">Education</label>
              <select v-model="formData.education" id="education" class="input black-background">
                <option value="" disabled selected>Select Education</option>
                <option value="graduate">Graduate</option>
                <option value="not-graduate">Not Graduate</option>
              </select>

              <label for="self-employed" class="label">Self Employed</label>
              <select v-model="formData.selfEmployed" id="self-employed" class="input black-background">
                <option value="" disabled selected>Select Employed</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div class="c2">
              <label for="applicant-income" class="label">Applicant Income</label>
              <input v-model="formData.applicantIncome" type="text" id="applicant-income" placeholder="Applicant Income" class="input black-background">

              <label for="coapplicant-income" class="label">Coapplicant Income</label>
              <input v-model="formData.coapplicantIncome" type="text" id="coapplicant-income" placeholder="Coapplicant Income" class="input black-background">

              <label for="loan-amount" class="label">Loan Amount</label>
              <input v-model="formData.loanAmount" type="text" id="loan-amount" placeholder="Loan Amount" class="input black-background">

              <label for="loan-term" class="label">Loan Amount Term</label>
              <input v-model="formData.loanTerm" type="text" id="loan-term" placeholder="Loan Amount Term" class="input black-background">

              <label for="credit-history" class="label">Credit History</label>
              <select v-model="formData.creditHistory" id="credit-history" placeholder="Credit History" class="input black-background">
                <option value="" disabled selected>Select Credit History</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label for="property-area" class="label">Property Area</label>
              <select v-model="formData.propertyArea"  id="property-area" placeholder="Property Area"   class="input black-background">
                <option value="" disabled selected>Select Property Area</option>
                <option value="Urban">Urban</option>
                <option value="SemiUrban">SemiUrban</option>
                <option value="Rural">Rural</option>
              </select>
            </div>
          </div>
          <button type="submit" class="button">Show result</button>
        </form>
      </div>
    </div>
  </div>
   
   
    <custom-alert
      :show="alert.show"
      :message="alert.message"
      :type="alert.type"
      @close="closeAlert"
    ></custom-alert>


</template>

<script>
import axios from 'axios';
import CustomAlert from '@/components/CustomAlert.vue';
export default {
  name: 'formL',
  components: {
    CustomAlert,
  },
  data() {
    return {
    
      fullName: '',
      formData: {
        gender: '',
        married: '',
        dependents: '',
        education: '',
        selfEmployed: '',
        applicantIncome: '',
        coapplicantIncome: '',
        loanAmount: '',
        loanTerm: '',
        creditHistory: '',
        propertyArea: '',
      },
      alert: {
      show: false,
      message: '',
      type: 'info',
    },
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.formData.gender)
      console.log(this.formData)
      if (this.formData.gender =="male") {
        this.formData.gender = 0;
      } else {
        this.formData.gender = 1;
      }
      if (this.formData.married =="yes") {
        this.formData.married = 0;
      } else {this.formData.married = 1;
      }

      if (this.formData.education =="graduate") {
        this.formData.education = 1;
      } 
      else {
        this.formData.education = 0;
      }

      if (this.formData.selfEmployed =="yes") {
        this.formData.selfEmployed = 0;
      } else {
        this.formData.selfEmployed = 1;
      }

      if (this.formData.creditHistory =="yes") {
        this.formData.creditHistory = 1;
      } else {
        this.formData.creditHistory = 0;
      }

      if (this.formData.propertyArea =="Urban") {
        this.formData.propertyArea = 2;
      } else if (this.formData.propertyArea =="SemiUrban") {
        this.formData.propertyArea = 1;
      } else {
        this.formData.propertyArea = 0;
      }
      if (this.formData.gender !== undefined && this.formData.gender !== null) {
 
  this.formData.gender = parseInt(this.formData.gender);
}

      this.formData.dependents = parseInt(this.formData.dependents);
      this.formData.applicantIncome = parseInt(this.formData.applicantIncome);
      this.formData.coapplicantIncome = parseInt(this.formData. coapplicantIncome);
      this.formData.loanAmount = parseInt(this.formData.loanAmount);
      this.formData.loanTerm = parseInt(this.formData.loanTerm);

      console.log(this.formData.gender);  
console.log(this.formData.married);  
console.log(this.formData.dependents);
  
      console.log(this.formData.education);  
console.log(this.formData.selfEmployed); // Accéder à la propriété married
console.log(this.formData.applicantIncome);
console.log(this.formData.coapplicantIncome);
console.log(this.formData.loanAmount);
console.log(this.formData. loanTerm);
console.log(this.formData.creditHistory);
console.log(this.formData.propertyArea); 

      try {
        const response = await axios.post("http://127.0.0.1:5000/predictLoanStatus", this.formData, {
          headers: {
            'API-Key': 'LPSIBD',
            'Content-Type': 'application/json',
          },
        });
        
        console.log("Response:", response.data["prediction"]);
        var c=""
        if(response.data["prediction"]=="Yes"){
          c="Accepted"
          this.showAlert(` Hey  ${this.fullName}\n Your Request Credit Result is :  ${c} visit the agency `, 'success');
    
        }
        else{

          c="refused"
          this.showAlert(` Hey  ${this.fullName}\n Your Request Credit Result is :  ${c}  Try Again ! `, 'error');
    
        }
        // Affichage de l'alerte avec un style personnalisé
         } catch (error) {
        
        console.error('Erreur lors de l\'envoi des données à l\'API', error);
        // Affichage de l'alerte d'erreur
        this.showAlert('Une erreur s\'est produite lors de l\'envoi des données à l\'API.', 'error');
      }
    },
    showAlert(message, type) {
      this.alert.show = true;
      this.alert.message = message;
      this.alert.type = type;
    },

    closeAlert() {
      this.alert.show = false;
    },
   
  },
};
</script>
  
  <style scoped>
 .c0{
    margin: 0;
    padding: 0;

    font-family: Arial, sans-serif;
    background-color: #fff;
}

.container {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin-top: 60px;
    margin-bottom: 30px;
}

.content {

    display: flex;
    align-items: center;
    
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px #ffffff;
    margin: 20px;
}

.header-logo {
    width: 150px;
    height: 140px;
    z-index:2;
    margin-top:-45px;
    margin-left: 20px;
    
}

.logo {
    width: 400px;
    height: auto;
    margin-right: 150px;
   
}

.form {
  
    display: flex;  
    flex-direction: row; 
}

.c1,
.c2 {
    flex: 1; 
    margin-right: 10px;  
    display: flex;
    flex-direction:column;  
}
.f1{
    z-index:1;
    margin-bottom: 20px;
    background-color: #fff;
    color:#fff;
    width: 500px;
    height: 570px;
    padding: 60px;
    padding-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px #36013c;
}
.label,
.input {
  color:#000;
    margin-bottom: 10px;
}

.input {
    width: 200px; /* Ajustez la largeur comme nécessaire */
    padding: 10px;
    border: 1px solid linear-gradient(to right, #af06c2d0, #5CE1E6);
    border-radius: 5px;
}

.black-background {
    background-color:#fff;
}

.button {
    width: 480px;
    padding: 10px;
    background: linear-gradient(to right, #400546, #04eb7f, #5CE1E6);
    color: white;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background: linear-gradient(to right, #400546, #333, #5CE1E6);
}
.header-logo0{
  margin-top:-80px;
margin-left:-50px;
width:130px;
z-index:1;
height:130px;
}
.header-container {
  display: flex;
  align-items: center;
  flex-direction:row;
}
h4{
  margin-top:-40px;
  margin-left:80px;
  color:#2c3e50;
  font-size:1.4em;
  font-family:;
}
  </style>
  