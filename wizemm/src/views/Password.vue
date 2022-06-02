<template>
  <v-app>
    <v-content>
              <v-layout class="imgwiz">
        <v-flex order-xs6>
                  <v-img :src="require('../assets/wizLogoSecundario.png')"  max-width="450"/>
        </v-flex>
        </v-layout>
      <v-container>
        <v-row align-center justify="center">

                        <v-form >
                             <v-img
                          :src="require('../assets/logo_v1.png')"
                          class="my-5"
                          contain
                          height="350"
                        />

                          <v-text-field
                          color="#041c2c"
                            label="New Password"
                            v-model="passw"
                              :rules="passRules"
                              counter="9"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                          />
                          <v-text-field
                          color="#041c2c"
                          v-model="cpassw"
                              :rules="cpassRules"
                              counter="9"
                            label="Confirm New Password"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                          />

                        <!-- <span :rules="matchPasswd">{{matchPasswd}}</span> -->
                        <a class="font-weight-black">The Passwords don´t match</a>

  <br />
  <br />

                        <v-btn block  outlined class="text-none font-weight-black">Send</v-btn>


                        </v-form>


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
a {
  /* border: 2px solid black; */
  margin-left: 120px;
  color: black;
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
