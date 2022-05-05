<template>
  <div class="container">

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

    <div class="img-container">
      <h1>the <span style="color: #D90429;">world’s #1</span>  platform for<br> music production</h1>
    </div>
    <div style="text-align: left; margin-top: 20px" >
      <h1>Recommendations</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHome"
};
</script>

<style scoped>
@import "https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
@import "https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
@import "https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
@import "https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
@import "https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
.container{
  margin-top: 20px;
  /*border: 2px solid red;*/
}
.img-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Bebas Neue';
  height: 45vh;
  background-image: linear-gradient(
    0deg,
    rgba(0,0,0,0.1),
    rgba(0,0,0,0.1)
  )
  ,url(src/assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center ;
}
.img-container h1{
  margin-left: 2rem;
  font-size: 4rem;
  text-align: left;
}
</style>


