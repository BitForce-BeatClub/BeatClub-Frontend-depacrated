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
      <v-btn plain to="/sign_in" color="white"> Sign In </v-btn>
      <v-btn plain to="/sign_up" color="white"> Sign Up </v-btn>
      <v-btn class="btn-red" to="/sign_in" flat=""> Star Collaborating </v-btn>
    </v-app-bar>
    <div class="img-container">
      <h1 class="font-Bebas text-white">
        the <span style="color: #d90429">world’s #1</span> platform for<br />
        music production
      </h1>
    </div>
    <div style="text-align: left; margin-top: 20px; padding-left: 60px">
      <h1>Trending Tracks</h1>
    </div>
    <v-row>
      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206.png?raw=true"
        ></v-img>

        <v-card-title>Plan A</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Paulo Londra</div>
          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-4.png?raw=true"
        ></v-img>

        <v-card-title> Fuera del mercado</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Danny Ocean</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-3.png?raw=true"
        ></v-img>

        <v-card-title>Una noche en medellin</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Cris Mj</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-1.png?raw=true"
        ></v-img>

        <v-card-title>Enemy(from the series Arca)</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Imagine Dragons J.I.D</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-2.png?raw=true"
        ></v-img>

        <v-card-title>Booker T</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Bad Bunny</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>
    </v-row>
    <div style="text-align: left; margin-top: 20px; padding-left: 60px">
      <h1>Top Producer</h1>
    </div>

    <v-row>
      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/productores/image%206-1.png?raw=true"
        ></v-img>

        <v-card-title>230 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Luny Tunes</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/productores/image%206-3.png?raw=true"
        ></v-img>

        <v-card-title>562 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Tainy</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-3.png?raw=true"
        ></v-img>

        <v-card-title>640 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Bizarrap</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-1.png?raw=true"
        ></v-img>

        <v-card-title>730 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Ovy On The Drums</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-2.png?raw=true"
        ></v-img>

        <v-card-title>3405 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">El Chombo</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>
    </v-row>

    <div style="text-align: left; margin-top: 20px; padding-left: 60px">
      <h1>Top Producer</h1>
    </div>
    <v-row>
      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/productores/image%206-1.png?raw=true"
        ></v-img>

        <v-card-title>230 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Luny Tunes</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/productores/image%206-3.png?raw=true"
        ></v-img>

        <v-card-title>562 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Tainy</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-3.png?raw=true"
        ></v-img>

        <v-card-title>640 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Bizarrap</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-1.png?raw=true"
        ></v-img>

        <v-card-title>730 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">Ovy On The Drums</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>

      <v-card class="mx-auto my-12" max-width="374">
        <template>
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/music/image%206-2.png?raw=true"
        ></v-img>

        <v-card-title>3405 followers</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4 text-subtitle-1">El Chombo</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "main",
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
