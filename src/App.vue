<style scoped>
.v-btn {
  color: white;
}
</style>
<template>
  <v-app>
    <v-main>
      <v-app-bar color="#0D1B29">
        <v-img
          @click="redirectTo"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
        >
        </v-img>

        <v-spacer>
          <v-btn plain to="/signup"> Sing Up </v-btn>
          <v-btn plain to="/signin"> Sing In </v-btn>
        </v-spacer>

      </v-app-bar>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),

  methods: {
    redirectTo() {
      return this.$router.push("/home");
    },
  },
};
</script>
