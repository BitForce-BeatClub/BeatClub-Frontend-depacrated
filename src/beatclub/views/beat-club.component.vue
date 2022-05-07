<template>
  <div class="container">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-toolbar-title>
        <v-img
          style="height: 50px; width: 100px"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn plain to="" color="white"> Top Producers </v-btn>
      <v-btn plain to="" color="white"> Advertisements </v-btn>
      <v-btn plain to="/message"> Message </v-btn>
      <v-btn plain to="/profile" color="white">
        Profile
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn plain to="/sing_up" color="white"> Sing Up </v-btn>
    </v-app-bar>

    <div class="img-container">
      <img class="img-portada" src="src/assets/portada.png" alt="" />
    </div>
    <div style="text-align: left; margin-top: 20px">
      <h1>Recommendations</h1>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "beat_club",
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  /*border: 2px solid red;*/
}
.img-portada {
  height: 300px;
  width: 100%;
}

.img-container {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
