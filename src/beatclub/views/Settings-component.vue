<template>
  <v-app-bar>
    <v-btn to="/Home">
      <h1>BeatClub</h1>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/Profile">
      <span class="material-symbols-rounded">
      account_circle
      </span>
      <strong>Hi User</strong>
    </v-btn>
    <v-btn>
      <span class="material-symbols-rounded">
      chat_bubble
      </span>
      <p>Messages</p>
    </v-btn>
    <v-btn >
      CreatorHub
    </v-btn>
    <v-btn>
      <span class="material-symbols-rounded">
      cloud_upload
      </span>
      <p>Upload</p>
    </v-btn>
    <v-btn>
      <span class="material-symbols-rounded">
      shopping_cart
      </span>
      <p>Shooping</p>
    </v-btn>

  </v-app-bar>
  <v-card class="mx-5 my-5" max-width="400" >
    <template v-slot:title>
      Account Settings
    </template>
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
  name: "Settings"
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}
</style>