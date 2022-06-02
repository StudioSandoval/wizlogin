<template>
  <v-app>
    <v-container>


        <v-container mt-5  class="pac">

                <v-layout align-center justify-center  >

            <!-- <v-flex md5 class="sto"> -->
          <v-img class="sto" :src="require('../assets/logo_v1.png')" contain height="110"/>
          <!-- </v-flex> -->

          <!-- <v-flex mb-n7 pa-12 class="use"> -->
          <v-h1 class=" use text-capitalize font-weight-medium display-1 " >User Management</v-h1>
          <!-- </v-flex> -->

          <v-flex md3 mb-n8  class="sea" >
          <v-text-field class="sea" outlined label="search" prepend-inner-icon="search" color="#041c2c" append-outer-icon="microfone" rounded dense ></v-text-field>
        </v-flex>

</v-layout>
</v-container>




<!------------------------ Boton De Agregar Con El Formulario ------------------------------->

      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 offset-sm2 sm8>
            <v-card class="pt-9">
              <v-layout row justify-center>


<!------------------------ Caja De Formulario Interna --------------------------------->
                <v-dialog v-model="Botnc" persistent max-width="750px">
                  <template v-slot:activator="{ on }">
                    <v-flex>
                      <v-card class="mx-5" color="transparent" max-width="1280">
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr class="tab">
                                <th class="white--text">User/Email</th>
                                <th class="white--text">Name</th>
                                <th class="white--text">Last Name</th>
                                <th class="white--text">Roles</th>
                                <th class="white--text">Active</th>
                              </tr>
                            
                            </thead>
                            <tbody></tbody
                          ></template>
                        </v-simple-table>
                        <v-flex>
<!---------------------------- <v-data-table> </v-data-table> ------------------------------>
                        </v-flex>
                      </v-card>

                      <v-btn
                        class="ma-5"
                        v-show="!hidden"
                        color="#041C2C"
                        depressed
                        fab
                        dark
                        v-on="on"
                        ><v-icon x-large>add</v-icon></v-btn
                      >
                    </v-flex>
                  </template>

                  <!-- Ventana De Agregar Con El Formulario -->

                  <v-card >
                    <v-card-title>
                      <v-layout class="text-center">
                        <v-flex>
                          <span class="font-weight-regular text-capitalized display-1">
                            New User
                          </span>
                        </v-flex>
                      </v-layout>
                    </v-card-title>

                    <v-card-text>
                        <v-form class="m-3" @submit.prevent="signup" ref="signupForm">
                        <v-layout wrap>
                          <v-flex xs6 sm12 class="font-weight-black">
                            <v-text-field
                              v-model="user.email"
                              :rules="emailRules"
                              required
                              prepend-icon="fa-user-circle"
                              label="User/E-mail"
                              name="Users"
                              type="text"
                              color="#041C2C"
                            ></v-text-field>

                            <v-text-field
                              label="Name"
                              v-model="user.name"
                              :rules="nameRules"
                              counter="10"
                              required
                              name="Name"
                              type="text"
                              color="#041C2C"
                            />

                            <v-text-field
                              label="Last Name"
                              v-model="user.last"
                              :rules="lastRules"
                              counter="10"
                              required
                              name="Last"
                              type="text"
                              color="#041C2C"
                            />

                            <!-----------------------------Start Roles ----------------------->

                            <v-flex class="font-weight-medium">
                              <v-autocomplete
                              v-model="user.role"
                              :rules="[(v) => !!v || 'Please choose one' ] "
                                filled
                                label="Role"
                                color="#041C2C"
                                :items="['DSD Associate', 'DSD Supervisor']"
                              ></v-autocomplete>
                            </v-flex>

                            <!----------------------------- Fin Roles ----------------------->

                            <!-------------------- checkbox configuracion ----------------------------------------------------------->
                            <v-layout wrap>

                              <v-flex>
                                <v-checkbox v-model="checkboxf">
                                  <template v-slot:label>
                                    <v-tooltip>
                                      <template v-slot:activator="{}">
                                        Force password change on first login
                                      </template>
                                    </v-tooltip>
                                  </template>
                                </v-checkbox>
                              </v-flex>

                              <v-flex>
                                <v-checkbox v-model="user.active">
                                  <template v-slot:label>
                                    <v-tooltip>
                                      <template v-slot:activator="{}">
                                        Active
                                      </template>
                                    </v-tooltip>
                                  </template>
                                </v-checkbox>
                              </v-flex>

                            </v-layout>
                            <!-- finalizacion de checkbox ----------------------------------------------------------->

                            <v-text-field
                              v-model="user.pass"
                              :rules="passRules"
                              counter="8"
                              required
                              prepend-icon="fa-lock"
                              label="Password"
                              :type="showPassword ? 'text' : 'password'"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              color="#041C2C"
                              @click:append="showPassword = !showPassword"
                            />
                            <v-text-field
                              v-model="user.cpass"
                              :rules="cpassRules"
                              counter="8"
                              required
                              prepend-icon=" fa-lock"
                              label="Confirm Password"
                              :type="showcPassword ? 'text' : 'password'"
                              :append-icon="showcPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              color="#041C2C"
                              @click:append="showcPassword = !showcPassword"
                            />


                       <!-- Botones de Formulario ------------------------------------------------>
                    <v-card-actions>

                      <v-flex mb-3 sm6 xs6 px-8>
                        <v-btn color="white" block class="text-none" flat @click="Botnc= false" >Cancel</v-btn >
                      </v-flex>

                      <v-flex mb-3 sm6 xs6 px-8>
                        <v-btn color="white" block class="text-none text-capitalized" flat @click="Btns = false" type="submit" >Save</v-btn>
                      </v-flex>

                    </v-card-actions>
                    <!-- Fin De Botones de Formulario ----------------------------------------------------------->
                  </v-flex>
                        </v-layout>
                    </v-form>
                    </v-card-text>

                  </v-card>
                </v-dialog>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <!--Fin Ventana De Agregar Con El Formulario --------------------------------------->



              <v-container >
                <v-layout align-center>
                  <v-flex md2>
 </v-flex>
   <label class="text-none font-weight-black">Made with passion by</label>
 <v-flex md1 >
  <v-img  :src="require('../assets/isologoRGBWIZ.png')" contain height="100"/>
</v-flex>
</v-layout>
</v-container>

    </v-container>
  </v-app>
</template>




/* --------------------------------------------- */
<script>
export default {
  data: () => ({
alert:{show: false , message: '' },
    // Btns: false,
    Botnc: false,
    showPassword: false,  //Para Mostrar La Contraseña
     showcPassword: false,
    // valid: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 5 || "Name must be less than 10 characters"),
    ],
    lastRules: [
      (v) => !!v || "Last is required",
      (v) => (v && v.length >= 5 || "Last must be less than 10 characters"),
    ],
    passRules: [
      (v) => !!v || "Password is required",
      (v) => /.+.+/.test(v) || "Password must be valid",
    ],
    cpassRules: [
      (v) => !!v || " Confirm Password is required",
      (v) => /.+.+/.test(v) || " Confirm Password must be valid",
    ],
    user:{
      email:'',
      name:'',
      last:'',
      role:'',
      active:'',
      pass:'',
      cpass:'',
      },

  }),

   methods: {
     async signup(){
       let valid = this.$refs.signupForm.validate();
       if (valid){
         try {
           const res = await this.pg.post('/signup' , this.user);
           this.$refs.signupForm.reset();
           this.alert = {
             show: true,
             type: 'success',
             message: res.data.message
           }
         }
         catch (error){
           this.alert = {
            show: true,
            type: 'error',
            message: error.response.data.message
           }
         }
       }
     }

  }

};
</script>
/* --------------------------------------------- */




<style scope>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  font-family: "QuickSand";
font-size: medium;
}
.tab {
background-color: #041c2c;
}
.use{
margin: 0pc 50px 0px -150px;

}
.sto{
margin: 0px -650px 0px -10px;
}
.pac{
margin: auto -530px;
}
</style>
