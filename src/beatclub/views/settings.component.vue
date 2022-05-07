<template>
  <v-app-bar color="nav_color" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-btn to="/">
      <v-img
        style="height: 50px; width: 100px"
        src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
      ></v-img>
    </v-btn>
    <v-text-field
      class=""
      label="What are you looking for?"
      variant="underlined"
      append-icon="mdi-magnify"
    ></v-text-field>

    <v-spacer></v-spacer>
    <v-btn plain to="/profile" color="white" prepend-icon="mdi-account">
      Hi User
    </v-btn>
    <v-btn plain to="" color="white" prepend-icon="mdi-message">
      message
    </v-btn>
    <v-btn plain to="" color="white"> creator hub </v-btn>
    <v-btn plain to="" color="white" prepend-icon="mdi-cloud"> upload </v-btn>
    <v-btn to="" prepend-icon="mdi-cart"></v-btn>
  </v-app-bar>
  <v-card class="mx-5 my-5" max-width="400">
    <template v-slot:title> Account Settings </template>
    <div class="text-center">
      <v-card-text class="text-left">
        <a href="/Navbar">Profile</a>
      </v-card-text>
      <v-card-text class="text-left">
        <a href="/">Credential</a>
      </v-card-text>
      <v-card-text class="text-left">
        <a href="/">Subscription</a>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "settings",
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
