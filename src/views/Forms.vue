<template>
  <v-container fluid style="background-color: #f5f6f7;">
<div v-show="isLoggedIn" >
 
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="data:image/jpeg;base64,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"
          :title= "username"
        ></v-list-item>

        <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-domain" title="Request" value="form" @click="showform"   ></v-list-item>

        <v-list-item prepend-icon="mdi-view-dashboard" title="History" value="history"   @click="showtable"  ></v-list-item>
       
        <v-btn @click="logout()" color="#1A6EB7" class="my-50">
          <v-icon
          start
          icon="mdi-arrow-right"
        ></v-icon>
  LOGOUT
</v-btn>        
      </v-list>
      </v-navigation-drawer>
      <v-main style="height: 1100px; margin: 0; ">
        
        <div class="d-flex h-1000 c0" :class="{ 'alert-visible': alert.show }" style="background-color: #f5f6f7;" >
         

          


          <v-row justify = "center" >
      <v-col>
        <v-row justify="center">
          <v-img v-if="!showFormHistory" src="../assets/logo0.png" alt="Header Logo" class="header-logo"></v-img>
          <v-img  v-if="showFormHistory" src="../assets/logo0.png" alt="Header Logo" class="header-logo1"></v-img>
       
        </v-row>

        <v-row   v-if="!showFormHistory">
          <v-col>
            <v-row justify="center">
              <v-img src="../assets/logo.png" alt="Logo" class="logo"></v-img>
            </v-row>
          </v-col>
          <v-col>
            <v-form @submit.prevent="onSubmit"  style=" z-index:1;
    margin-bottom: 20px;
    background-color: #f5f6f7;
     margin-right: -40px;
    width: 700px;
   height: 850px;
    padding: 60px;
    padding-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 8px;
    box-shadow: 0 0 15px  #505050 ;">
              <v-row>
                <v-col>
                  <v-row>
                    <v-col>
                      <div class="header-container">
                        <v-img src="../assets/logo0.png" alt="Header Logo" class="header-logo0"></v-img>
                        <h4>User Informations :</h4>
                      </div>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="c1">
                      <v-label for="Full name">Full Name</v-label>
                      <v-text-field  clearable v-model="fullName" id="Full name" placeholder="Full name" outlined></v-text-field>

                      <v-label for="gender">Gender</v-label>
                      <v-select  clearable v-model="formData.gender" id="gender" placeholder="Select Gender" :items="genderOptions" outlined></v-select>

                      <v-label for="married">Married</v-label>
                      <v-select  clearable v-model="formData.married" id="married" placeholder="Select Married" :items="yesNoOptions" outlined></v-select>

                      <v-label for="dependents">Dependents</v-label>
                      <v-select clearable v-model="formData.dependents" id="dependents" placeholder="Select Dependents" :items="dependentsOptions" outlined></v-select>

                      <v-label for="education">Education</v-label>
                      <v-select  clearable v-model="formData.education" id="education" placeholder="Select Education" :items="educationOptions" outlined></v-select>

                      <v-label for="self-employed">Self Employed</v-label>
                      <v-select  clearable v-model="formData.selfEmployed" id="self-employed" placeholder="Select Employed" :items="yesNoOptions" outlined></v-select>
                    </v-col>

                    <v-col class="c2">
                      <v-label for="applicant-income">Applicant Income</v-label>
                      <v-text-field  clearable v-model="formData.applicantIncome" id="applicant-income" placeholder="Applicant Income" outlined></v-text-field>

                      <v-label for="coapplicant-income">Coapplicant Income</v-label>
                      <v-text-field  clearable v-model="formData.coapplicantIncome" id="coapplicant-income" placeholder="Coapplicant Income" outlined></v-text-field>

                      <v-label for="loan-amount">Loan Amount</v-label>
                      <v-text-field   clearable v-model="formData.loanAmount" id="loan-amount" placeholder="Loan Amount" outlined></v-text-field>

                      <v-label for="loan-term">Loan Amount Term</v-label>
                      <v-text-field  clearable v-model="formData.loanTerm" id="loan-term" placeholder="Loan Amount Term" outlined></v-text-field>

                      <v-label for="credit-history">Credit History</v-label>
                      <v-select  clearable v-model="formData.creditHistory" id="credit-history" placeholder="Select Credit History" :items="yesNoOptions" outlined></v-select>

                      <v-label for="property-area">Property Area</v-label>
                      <v-select  clearable v-model="formData.propertyArea" id="property-area" placeholder="Select Property Area" :items="propertyAreaOptions" outlined></v-select>
                    </v-col>
                  </v-row>

                  <v-row justify="center">
                    <v-btn type="submit" class="button" block>Show result</v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
          
      
        </v-row>
      </v-col>
    </v-row>
    <v-btn 
             v-if="!showFormHistory"
           style=" background: linear-gradient(to right, #01A89E ,#1A6EB7,#01A89E );       color: #fff;"
    
            @click.stop="drawer = !drawer"
            icon="mdi-format-align-justify"  >

            
          </v-btn>
          <v-btn 
          v-if="showFormHistory"
              
             style="margin-right: -1590px; background: linear-gradient(to right, #01A89E ,#1A6EB7,#01A89E );       color: #fff;"
    
             @click.stop="drawer = !drawer"
             icon="mdi-format-align-justify"  >
 
             
           </v-btn>
 
   <div  v-show="showFormHistory "><br><br><br><br><br>

        <v-row justify="center" v-if="showFormHistory">
      <v-col>
        <v-data-table
     
  :items="ps"
  :headers="headers"
  style="margin-left:-10px; width:1600px ;max-height:1000px;" 
>
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title style="color: #1A6EB7   ; font-size:2em;" >User History : </v-toolbar-title>
    </v-toolbar>
  </template>

  <template v-slot:item="{ item }">

    <tr>
      <td>{{ item.Gender }}</td>
              <td>{{ item.Married }}</td>
              <td>{{ item.Education }}</td>
              <td>{{ item.Self_Employed }}</td>
              <td>{{ item.Dependents }}</td>
              <td>{{ item.ApplicantIncome }}</td>
              <td>{{ item.CoapplicantIncome }}</td>
              <td>{{ item.LoanAmount }}</td>
              <td>{{ item.Loan_Amount_Term }}</td>
              <td>{{ item.Credit_History }}</td>
              <td>{{ item.Property_Area }}</td>
              <td>{{ item.LoanStatus }} </td>
          
                <td>
      <v-btn style="   background:   #01A89E ; 
     " small @click="generatePDF(item)">
  <v-icon color="#fff">mdi-download</v-icon>
  <span style="color: #fff;">Download Receipt</span>
</v-btn>

                </td>
              </tr>
  </template>
</v-data-table>

      </v-col>
    </v-row>


      </div>
 
  
 
        </div>
        
      </v-main>
    </v-layout>
 

</div>




 
 

 
    <custom-alert :show="alert.show" :message="alert.message" :type="alert.type" @close="closeAlert"></custom-alert>
   
  </v-container>
  
</template>


<script>
import 'jspdf-autotable';
import axios from 'axios';
import CustomAlert from '@/components/CustomAlert.vue';
import cloneDeep from 'lodash/cloneDeep';
import jsPDF from 'jspdf';
import router from '@/router'; 
export default {
  name: 'formL',
  components: {
    CustomAlert,
  },
  data() {
    return {
      
      headers: [
        { title: 'Gender', key: 'Gender' },
        { title: 'Married', key: 'Married' },
        { title: 'Education', key: 'Education' },
        { title: 'Self Employed',key: 'Self_Employed' },
        { title: 'Dependents',key: 'Dependents' },
        {title: 'Applicant Income', key: 'ApplicantIncome' },
        { title: 'Coapplicant Income', key: 'CoapplicantIncome' },
        { title: 'Loan Amount', key: 'Loan_Amount' },
        { title: 'Loan Amount Term',key: 'Loan_Amount_Term' },
        { title: 'Credit History', key: 'Credit_History' },
        { title: 'Property Area',key: 'Property_Area' },
        { title: 'Loan Status', key: 'LoanStatus' },
        { title: 'Receipt', key:'actions', sortable: false, headerAlign: 'center', align: 'center' },

      ],
      username:' ',
      drawer: null,
      showFormHistory: false,
      ps: [],
      Temp:{},
      fullName: '',
      isLoggedIn:false,
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
      genderOptions: ['Male', 'Female'],
      yesNoOptions: ['Yes', 'No'],
      dependentsOptions: ['0 enfant', '1 enfants', '2 enfants', '3+ enfants'],
      educationOptions: ['Graduate', 'Not Graduate'],
      propertyAreaOptions: ['Urban', 'SemiUrban', 'Rural'],
    };
  },
  mounted() {
    if(!this.showFormHistory){
this.$router.push('/forms')
    }
    if ( localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;  
    } 
    this.username=localStorage.getItem('username')
     
    
  },
  
  methods: {
    async showform() {
  this.showFormHistory = false;
    },
    async showtable() {
  this.showFormHistory = true;
  this.$router.push('/history');

  try {
    let id = await this.currentuser();
    console.log(id);

    const response = await axios.get(`http://127.0.0.1:5000/get_loan_data/${id}`);
    
    if (response.status === 200) {
      console.log("history", response.data);
      this.ps = response.data.data;
      return response.data;
    } else {
      console.error(`Failed to fetch history. Status code: ${response.status}`);
      return { error: `Failed to fetch history. Status code: ${response.status}` };
    }
  } catch (error) {
    console.error(`Failed to fetch history. ${error.message}`);
    return { error: `Failed to fetch history. ${error.message}` };
  }
},

 async currentuser() {
       
console.log( `Bearer ${localStorage.getItem('token')}` )
      try {
        const response = await axios.get(' http://127.0.0.1:5000/current_user',  {
           headers: {
             Authorization: 'Bearer ' +localStorage.getItem('token')
           },
         });
         console.log(response.data)
      
         if (response.status == 200) {
  if (response.data ) {
    console.log("user ", response.data.user_id);
    return response.data.user_id;
  } else {
    this.$router.push('/login');
    return { error: "User data not available in the response" };
  }
} 
    else {
      this.$router.push('/login');
  return { error: `Failed to fetch current user. Status code: ${response.status}` };
}

      } catch (error) {
        this.$router.push('/login');
        return { error: `Failed to fetch current user. ${error.message}` };
      }
    },
    async logout() {
  try {
    
    const response = await axios.post(' http://127.0.0.1:5000/logout');
    console.log(response.data );

    // Redirect to the login page
    router.push('/login'); // Adjust the route name based on your setup
  } catch (error) {
    // Handle any errors that occur during the logout process.
    console.error('Logout failed:', error);
  }
},
    async save(status) {
      try {
      let id = await  this.currentuser()
      console.log(id)
      this.Temp.id_user = id;
    this.Temp.loanStatus = status;

    const response = await axios.post(` http://127.0.0.1:5000/save_loan_data`, this.Temp);
       if (response.status === 200) {
          console.log("messg",response.data);
          return response.data;
        } else {
          return { error: `Failed to save. Status code: ${response.status}` };
        }
      } catch (error) {
        return { error: `Failed to save. ${error.message}` };
      }
    },
    
    async onSubmit() {
      console.log("hhh" );
      this.Temp = cloneDeep(this.formData);
       
    
      console.log(this.formData.dependents[0])
      console.log(this.formData)
   
    
 
      if (this.formData.gender =="Male") {
        this.formData.gender = 0;
      } else {
        this.formData.gender = 1;
      }
      if (this.formData.married =="Yes") {
        this.formData.married = 0;
      } else {this.formData.married = 1;
      }

      if (this.formData.education =="Graduate") {
        this.formData.education = 1;
      } 
      else {
        this.formData.education = 0;
      }

      if (this.formData.selfEmployed =="Yes") {
        this.formData.selfEmployed = 0;
      } else {
        this.formData.selfEmployed = 1;
      }

      if (this.formData.creditHistory =="Yes") {
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
        const response = await axios.post(" http://127.0.0.1:5000/predictLoanStatus", this.formData, {
          headers: {
            'API-Key': 'LPSIBD',
            'Content-Type': 'application/json',
          },
        });
        
        console.log("Response:", response.data["prediction"]);
        console.log(this.Temp) 
          await this.save(response.data["prediction"]);
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
    async generatePDF(rowData) {
  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Load the logo image asynchronously
  const loadImage = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  // Add application logo at the top-left with a 20px margin
  try {
    const logo = await loadImage(require('@/assets/logo0.png')); // Adjust the path accordingly
    pdf.addImage(logo, 'PNG', 6, 6, 50, 50); // Adjust width and height as needed
  } catch (error) {
    console.error('Error loading logo:', error);
  }

  // Define data for the table
  const tableData = [
    { field: 'Receipt for', value: this.username },
    { field: 'Ref', value: rowData._id },
    { field: 'Gender', value: rowData.Gender },
    { field: 'Married', value: rowData.Married },
    { field: 'Education', value: rowData.Education },
    { field: 'Self Employed', value: rowData.Self_Employed },
    { field: 'Dependents', value: rowData.Dependents },
    { field: 'Applicant Income', value: rowData.ApplicantIncome },
    { field: 'Coapplicant Income', value: rowData.CoapplicantIncome },
    { field: 'Loan Amount', value: rowData.LoanAmount },
    { field: 'Loan Term', value: rowData.Loan_Amount_Term },
    { field: 'Credit History', value: rowData.Credit_History },
    { field: 'Property Area', value: rowData.Property_Area },
    { field: 'Acceptation of Credit', value: rowData.LoanStatus, bold: true },
    { field: 'Date', value: new Date().toLocaleDateString(), bold: true },
  ];

  // Add content to the PDF using autoTable
  pdf.autoTable({
    head: [['Field', 'Value']], // Headings
    body: tableData.map((entry) => [entry.field, entry.value]), // Data excluding headings
    startY: 70, // Adjust the starting Y position
    styles: { fontStyle: entry => (entry.row.index === tableData.length - 1 || entry.row.index === tableData.length - 2) && entry.column.index === 1 && entry.cell.styles.bold ? 'bold' : 'normal' },
  });

  // Save the PDF file
  pdf.save('receipt.pdf');
}
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
    margin-top: -23px;
    margin-left:-1400px;
    
}

.header-logo1 {
    width: 150px;
    height: 140px;
    z-index:2;
    margin-top: -23px;
    margin-left: -1400px;
    
}

.logo {
    width: 300px;
    height: 550px;
    margin-right: -10px;
    margin-top:130px;
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
    width: 200px;
    height: 200px;
    padding: 60px;
    padding-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px linear-gradient(to right, #01A89E ,#1A6EB7,#01A89E );  
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
    background: linear-gradient(to right, #1A6EB7, #01A89E,#01A89E,#01A89E, #3E63F9); 
  
    color: white;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
   background: linear-gradient(to right, #1A6EB7,#01A89E , #3E63F9, #3E63F9,#01A89E);
  
}
.header-logo0{
  margin-top:-80px;
margin-left:-280px;
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
  margin-left:-100px;
  color:#0b5a9f;
  font-size:1.4em;
}
 
  .custom-btn {
  color: #ffffff; /* Définissez la couleur du texte */
  background-color: #007bff; /* Définissez la couleur de fond */
  /* Ajoutez d'autres propriétés de style au besoin */
}
body.alert-visible {
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  }
  </style>
  