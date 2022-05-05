<template>
  <v-app-bar>
    <v-btn to="/UserHome">
      <v-img
        style="height: 50px; width: 100px"
        src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
      ></v-img>
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
  <v-card class="mx-5 my-5" max-width="400" height="600">
    <div class="text-center">
      <v-avatar
        color="#FAFAFA"
        size="82"
      >
        <v-icon icon="mdi-account-circle" color="#212121" size="82"></v-icon>
      </v-avatar>
      <v-card-text class="text-center">
        UserName
      </v-card-text>
    </div>
    <template v-slot:title>
      My Profile
    </template>
    <div class="text-center">
      <v-btn to="/Settings">
        <span class="material-symbols-rounded" >edit</span>
        <p>Edit Profile</p>
      </v-btn>
      <div class="container">
        <v-card-text class="text-left">
          <b>Stats</b>
        </v-card-text>
        <div class="stats">
          <v-card-text class="text-left">
            Followers <br> Plays <br> Tracks
          </v-card-text>
        </div>
      </div>
    </div>

  </v-card>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;600&family=Bebas+Neue&family=Poppins:wght@600&display=swap");
.font-Bebas {
  font-size: 48px;
  font-family: "Bebas Neue", cursive;
  color: #f5cb5c;
  justify-content: flex-end;
}
.font-Poppins {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #e8ede0;
}
</style>