<template>
  <div class="container">
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

    <div class="img-container">
      <h1>
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
  name: "userHome",
};
</script>

<style lang="scss" scoped>
@import "../src/styles/_variables.scss";
.container {
  margin-top: 20px;
  /*border: 2px solid red;*/
}
.img-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Bebas Neue";
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
