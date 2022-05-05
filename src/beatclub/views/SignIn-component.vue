<template>
  <v-container>

  <v-img
      class="mx-auto my-12"
      max-width="374"
      src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
    ></v-img>

  <v-card-title style="font-size: 34px;" class="font-Archivo mx-auto"
    >Sign in to continue
    </v-card-title>

  <v-form style="max-width: 800px"  class="mx-auto" v-model="valid">

        <v-text-field  v-model="email" :rules="emailRules" label="Email" prepend-icon="mdi-email" />

        <router-link to="/" variant="text" class="d-flex justify-end mb-2 text-wlight">forgot password?</router-link>
        <v-text-field
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />

        <v-btn @click.prevent="login" plain to="/main" block color="primary">Sign in</v-btn>

        <v-card-text class="d-flex justify-center text-h6 text-wlight"
        >OR
        </v-card-text
        >

        <v-btn block color="blight" prepend-icon="mdi-google"
        >Sign in with Google
        </v-btn
        >

        <v-card-text class="text-center text-h6 text-wlight"
        >Dont you have an account?
          <router-link to="/signup" class="text-warning" >
            Sign up
          </router-link>

        </v-card-text>

    </v-form>
  <pre>{{ $data }}</pre>
    <!--<v-alert v-if="error" prominent type="error" variant="outlined">
      {{ error_msg }}
    </v-alert>!-->
  </v-container>
</template>


<script>
import firebase from "firebase/compat";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
      (v) => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => alert("Email conectado"), (error) => console.error(error));
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;600&family=Bebas+Neue&family=Poppins:wght@600&display=swap");
@import "../src/styles/_variables.scss";

/*
font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #e8ede0;
*/

</style>
