<template>
<v-app>
  <v-content>
  <v-container>
    <v-layout >
      <v-flex my-15 >
     <v-card class="elevation-10">
       <v-row>
               <v-col cols="6" md="7">
                 <v-card id="containerWizLogo">
               <v-img id="wizLogo" :src="require('../assets/wizLogoSecundario.png')" class="my-2"  contain height="116" />
                  </v-card>
                    </v-col>

         <v-col cols="5" md="16" >
          <v-card-text >
               <v-flex >

             <v-img :src="require('../assets/logo_v1.png')" class="my-9"  contain height="150" />

                       <v-form>
                        <v-text-field label="User" name="Users" type="text" color="#041C2C"/>
                        <v-text-field label="Password"
                          :type="showPassword ? 'text'  : 'password'"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          color="#041C2C"
                          @click:append="showPassword = !showPassword"/>
                          </v-form>

                          <br>
                          <v-btn class="logIn text-none white--text" block color="#041C2C" :elevation="0"  height="50" >Login</v-btn>
                     <br>


                    <a><p class="font-weight-black"  color="#041C2C"  >Forgot your Password?</p></a>

                     <br>
                     <p  class="second font-weight-black " color="#041C2C">Or</p>
                     <br>



                      <v-btn block class=" text-none " :elevation="6"  height="50"> <img src="../assets/google.png" alt="" contain height="30" >Sing in with Google</v-btn>
                        <br>
                        <v-btn  block class=" text-none" :elevation="6"  height="50"><img src="../assets/apple.png" alt="" contain height="30"> Sing in with Apple</v-btn>
                    </v-flex>
                    </v-card-text>
                    </v-col>
                    </v-row>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-content>
<router-view></router-view>
</v-app>
</template>



<script>
  export default {
    data: () => ({
     showPassword: false,


    })

  }
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

*{
    font-family:'QuickSand';
    font-size: medium;
}
/* a p{
    padding: 0px 10px;

} */
.container{
    margin:  100px auto;
    width: 1300px;
}

/* ||||||||||||||||||||||||| linkAndOrStyles ||||||||||||||||||||||||| */

.second{
  margin:0px 0px 0px 210px;
  color: #041C2C;
    padding: 0px 35px;
}

/* ||||||||||||||||||||||||| ContainerStyles ||||||||||||||||||||||||| */
#containerWizLogo{
  max-width: 403px;
  margin: -20px 0px 0px -12px;
  border-radius: 0px;
  max-height: 100px;
}

.container{
    margin:  20px auto;
    max-width: 1512px;
}

.boton{
  margin: 0px 15px 0px 0px;
}

a{
    margin:0px 0px 0px 170px;
}

h3{
  margin:0px 0px 0px 230px;
}

/* ||||||||||||||||||||||||| colsAndCardsStyles ||||||||||||||||||||||||| */

.v-card-text{
  border: 2px solid rgb(82, 0, 14);
}

.col-md-16 .col-5{
  height: 770px;
}

.col-md-7.col-6{
background: url(../assets/PDA.jpg);
width: 700px;
height: 755px;
background-size: 1150px;
background-position-x: -90px;
}

/* ||||||||||||||||||||||||| loginButtonStyles ||||||||||||||||||||||||| */

.v-btn{
 box-shadow: 0px 3px 5px;
   font-size: 18px;

}

.logIn{
  color: white;
}

/* ||||||||||||||||||||||||| loginButtonImgStyles ||||||||||||||||||||||||| */

img{
    margin: 0px 0px 0px -240px;
  padding: 0px 110px;
}

 #wizLogo{
   max-width: 400px;
 }

/* ||||||||||||||||||||||||| pLinkForgotStyles ||||||||||||||||||||||||| */

p{
    margin: -20px 0px 0px 135px;
  color: #041C2C;
  font-size: 18px;
}

</style>
