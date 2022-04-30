<template>
  <v-container>
    <v-img
      class="mx-auto my-12"
      max-width="374"
      src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
    ></v-img>

    <v-card-title class="text-wlight font-Archivo mx-auto"
      >SIGN IN TO CONTINUE</v-card-title
    >
    <v-form  v-model="valid">
      <v-card
        elevation="0"
        color=""
        max-width="700"
        class="mx-auto my-12 font-Poppins"
      >
        <v-text-field v-model="email" :rules="emailRules" label="Email" prepend-icon="mdi-email" />

        <v-row class="d-flex justify-end mb-2">
          <v-btn variant="text">forgot password?</v-btn>
        </v-row>

        <v-text-field
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />

        <v-btn @click.prevent="login" block color="primary">Sign in</v-btn>

        <v-card-text class="d-flex justify-center text-h6 text-wlight"
          >OR</v-card-text
        >

        <v-btn block color="blight" prepend-icon="mdi-google"
          >Sign in with Google</v-btn
        >

        <v-card-text class="text-center text-h6 text-wlight"
          >Dont you have an account?
          <v-btn
            variant="text"
            class="mb-1 text-h6 text-warning text-decoration-underline"
          >
            Sign up
          </v-btn>
        </v-card-text>
      </v-card>
    </v-form>
    <pre>{{$data}}</pre>
    <!--<v-alert v-if="error" prominent type="error" variant="outlined">
      {{ error_msg }}
    </v-alert>!-->
  </v-container>
</template>

<script>

import firebase from "firebase/compat";

export default {
  name: "Login",

  data: () => ({
    valid: false,
    showPassword: false,
    email: "",
    password: "",
   // error: false,
    error_msg: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    login(){
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email,this.password)
        .then((user)=>alert('Email conectado'),(error)=>console.error(error));

    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;600&family=Bebas+Neue&family=Poppins:wght@600&display=swap");

.v-card {
  background-color: transparent;
}

.font-Bebas {
  font-size: 48px;
  font-family: "Bebas Neue", cursive;
  color: #f5cb5c;
  justify-content: center;
}

.font-Poppins {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #e8ede0;
}

.font-Archivo {
  font-size: 48px;
  font-family: "Archivo", sans-serif;
  justify-content: center;
}
</style>
