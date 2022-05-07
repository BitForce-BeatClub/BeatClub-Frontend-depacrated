<template>
  <v-container>
    <v-img
      class="mx-auto my-12"
      max-width="374"
      src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
    ></v-img>

    <v-card-title style="font-size: 34px" class="font-Archivo mx-auto"
      >Sign in to continue
    </v-card-title>

    <v-form style="max-width: 800px" class="mx-auto">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        prepend-icon="mdi-email"
      />

      <router-link
        to="/"
        variant="text"
        class="d-flex justify-end mb-2 text-white"
        >forgot password?</router-link
      >
      <v-text-field
        v-model="password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />

      <v-btn to="/user_home" plain block="" color="primary">Sign in</v-btn>

      <v-card-text class="d-flex justify-center text-h6">OR </v-card-text>

      <v-btn block="" color="white" prepend-icon="mdi-google"
        >Sign in with Google
      </v-btn>

      <v-card-text class="text-center text-h6"
        >Dont you have an account?
        <router-link to="/signup" class="text-warning"> Sign up </router-link>
      </v-card-text>
    </v-form>
    <!--   <pre>{{ $data }}</pre>
    -->
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "sign_in",

  data: () => ({
    showPassword: false,
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../src/styles/_variables.scss";
.v-card-text {
  color: white;
}
</style>
