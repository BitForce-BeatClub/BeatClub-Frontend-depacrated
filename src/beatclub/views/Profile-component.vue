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
  <v-card class="mx-5 my-5" max-width="400" height="600">
    <div class="text-center">
      <v-avatar color="#FAFAFA" size="82">
        <v-icon icon="mdi-account-circle" color="#212121" size="82"></v-icon>
      </v-avatar>
      <v-card-text class="text-center"> UserName </v-card-text>
    </div>
    <template v-slot:title> My Profile </template>
    <div class="text-center">
      <v-btn to="/Settings">
        <v-icon icon="mdi-pencil"></v-icon>
        <p>Edit Profile</p>
      </v-btn>
      <div class="container">
        <v-card-text class="text-left">
          <b>Stats</b>
        </v-card-text>
        <div class="stats">
          <v-card-text class="text-left">
            Followers <br />
            Plays <br />
            Tracks
          </v-card-text>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
@import "../src/styles/_variables.scss";
.v-card {
   background-color: #242423;
}
</style>
