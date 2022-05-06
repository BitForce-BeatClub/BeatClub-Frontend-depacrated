<template>
  <div class="container">
    <v-app-bar color="nav_color" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn to="/">
          <v-img
            style="height: 50px; width: 100px"
            src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
          ></v-img>
        </v-btn>
        <v-btn icon="mdi-magnify"> </v-btn
        ></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn plain to="" color="white"> Explore </v-btn>
      <v-btn plain to="" color="white"> Creator </v-btn>
      <v-btn plain to="/signIn" color="white"> Sign In </v-btn>
      <v-btn plain to="/signUp" color="white"> Sign Up </v-btn>
      <v-btn class="btn-red" to="/signIn" flat=""> Star Collaborating </v-btn>
    </v-app-bar>
    <div class="img-container">
      <h1 class="font-Bebas">
        the <span style="color: #d90429">world’s #1</span> platform for<br />
        music production
      </h1>
    </div>
    <div style="text-align: left; margin-top: 20px">
      <h1>Recommendations</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: () => ({
    drawer: false,
    tab: null,
    items: ["web", "shopping", "videos", "images", "news"],
  }),
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  /*border: 2px solid red;*/
}
.btn-red {
  background-color: #d90429;
}
.img-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 45vh;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1)
  ),
  url(src/assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.img-container h1 {
  margin-left: 2rem;
  font-size: 4rem;
  text-align: left;
}
</style>
<style lang="scss" scoped>
@import "../src/styles/_variables.scss";
</style>
