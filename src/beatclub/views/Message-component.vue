<template>

<div >
  <v-app-bar color="black" dense dark>
  <v-toolbar
    color="black"
    dense
  >
    <v-btn plain to="" color="white"> Recommended</v-btn>
    <v-btn plain to="" color="white"> Trending</v-btn>
    <v-btn plain to="/message"> Following </v-btn></v-toolbar>
  </v-app-bar>
  <v-app-bar color="black" dense dark>
    <v-toolbar
      color="black"
      dense
    >
      <v-btn plain to="/message"> Message </v-btn>
    <br><br>
    <v-btn plain to="/message"> + </v-btn></v-toolbar>
  </v-app-bar>
  <v-container fluid>
    <v-row>
      <v-col cols="6" sm="3" class="border">
  <v-card class="mx-5 my-5" max-width="400" height="200" color=1B1B1B6>

    <div class="text-center">

      <v-avatar
        color="#FAFAFA"
        size="82">
        <v-img src="https://static.wikia.nocookie.net/youtubepedia/images/a/ac/Fara%C3%B3n_Love_Shady.jpg/revision/latest?cb=20201110210449&path-prefix=es"></v-img>
      </v-avatar>
      <v-card-text >raaaaa</v-card-text>
    </div>
    <template v-slot:title>
      EldiosdelaVersatilidad
    </template>
  </v-card >
  <v-card class="mx-5 my-5" max-width="400" height="200">
    <div class="text-center">
      <v-avatar
        color="#FAFAFA"
        size="82">
        <v-img src="https://static.wikia.nocookie.net/youtubepedia/images/a/ac/Fara%C3%B3n_Love_Shady.jpg/revision/latest?cb=20201110210449&path-prefix=es"></v-img>
      </v-avatar>
      <v-card-text >Nice work!</v-card-text>
    </div>
    <template v-slot:title>
      Resentido
    </template>
  </v-card >
  <v-card class="mx-5 my-5" max-width="400" height="200">
    <div class="text-center">
      <v-avatar
        color="#FAFAFA"
        size="82">
        <v-img src="https://static.wikia.nocookie.net/youtubepedia/images/a/ac/Fara%C3%B3n_Love_Shady.jpg/revision/latest?cb=20201110210449&path-prefix=es"></v-img>
      </v-avatar>
      <v-card-text >Yo no soy y ni vi'a ser tu bizcochito
        Pero tengo to' lo que tiene delito
        Que me pongan en el sol, que me derrito
       </v-card-text>
    </div>
    <template v-slot:title>
      La Rosalia
    </template>
  </v-card >
      </v-col>
        <v-col cols="12" sm="9" class="border">
               <h1>Resentido</h1>
          <br>

        </v-col>
      <footer>  </footer>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "Message-component"
};
</script>

<style scoped>

</style>