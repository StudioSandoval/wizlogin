<template>
  <v-app>
    <v-content>
              <v-layout class="imgwiz">
        <v-flex order-xs6>
                  <v-img :src="require('../assets/wizLogoSecundario.png')"  max-width="450"/>
        </v-flex>
        </v-layout>
      <v-container>
        <v-row align="center" justify="center">
          <v-card class="elevation-0" >
                <v-row>
                  <v-col cols="12" md="16">
                    <v-card-text>

                      <v-flex >






                        <v-form >
                             <v-img
                          :src="require('../assets/logo_v1.png')"
                          class="my-5"
                          contain
                          height="350"
                        />

                           <h3 class="font-weight-regular">
                          Confirm email to send intructions for password reset
                        </h3>

                          <v-text-field label="Email" name="Email" type="text" color="#041c2c" />
                             <br />
                        <br />
                        <v-btn block  outlined class="text-none font-weight-black">Send</v-btn>

                        <br />
                        </v-form>


                      </v-flex>
                    </v-card-text>
                  </v-col>
                </v-row>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  font-family: "QuickSand";
  font-size: medium;
}
.container {
  margin: -50px auto;
}

h3 {
  margin: -50px 0px 0px 30px;
}
.imgwiz{
  margin: 50px 0px 0px 380px;
}
</style>

<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  props: {
    souce: String,
  },
};
</script>
