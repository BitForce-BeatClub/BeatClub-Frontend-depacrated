<template>
  <v-container>
    <v-img
      class="mx-auto my-12"
      max-width="374"
      src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
    ></v-img>

    <v-card-title style="font-size: 34px" class="font-Archivo mx-auto"
      >Complete to sign up
    </v-card-title>
    <v-form style="max-width: 800px" class="mx-auto">
      <v-text-field
        v-model="username"
        label="username"
        prepend-icon="mdi-account"
      />
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        prepend-icon="mdi-email"
      />
      <v-text-field
        v-model="password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
      <v-text-field
        v-model="confirmation"
        label="Confirmation"
        :type="showPassword1 ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword1 = !showPassword1"
      />

      <v-btn plain to="/homebeatclub" block="" color="primary">Sign up</v-btn>

      <v-card-text class="d-flex justify-center text-h6">OR</v-card-text>

      <v-btn block="" color="white" prepend-icon="mdi-google"
        >Sign up with Google</v-btn
      >
      <v-card-text class="text-center text-h6"
        >Already have an account?
        <router-link to="/signin" class="text-warning"> Sign in </router-link>
      </v-card-text>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "sign_up",
  data: () => ({
    showPassword: false,
    showPassword1: false,
    username: "",
    email: "",
    password: "",
    confirmation: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../src/styles/_variables.scss";
.v-card-text {
  color: white;
}
</style>
