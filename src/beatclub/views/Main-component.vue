<template>
  <div class="container">
    <v-app-bar  color="deep-purple accent-4"
                dense
                dark>
      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-toolbar-title >
        <v-btn>
          <v-img
            style="height: 50px; width: 100px"
            src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
          ></v-img>

        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn plain to="" color="white">
        Explore
      </v-btn>
      <v-btn plain to="" color="white">
        Creator
      </v-btn>
      <v-btn plain to="/Login" color="white">
        Sign Up │Sign in
      </v-btn>
      <v-btn to="/Login" color="red">
        Star Collaborating
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
  name: "Main"
}
</script>

<style scoped>
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