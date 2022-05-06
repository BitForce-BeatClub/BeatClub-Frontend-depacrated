<template>
  <div>
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
    <v-app-bar color="black" dense dark>
      <v-toolbar color="black" dense>
        <v-btn plain to="/message"> Message </v-btn>
        <br /><br />
        <v-btn plain to="/message"> + </v-btn></v-toolbar
      >
    </v-app-bar>
    <v-container fluid>
      <v-row>
        <v-col cols="6" sm="3" class="border">
          <v-card class="mx-5 my-5" max-width="400">
            <div></div>
            <template v-slot:title>
              <v-avatar size="65">
                <v-img
                  src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/image%2025.png?raw=true"
                />
              </v-avatar>
              <v-card-title > Residente </v-card-title>
            </template>
            <v-card-text>Hola a todos</v-card-text>
          </v-card>
          <v-card class="mx-5 my-5" max-width="400">
            <div></div>
            <template v-slot:title>
              <v-avatar size="65">
                <v-img
                  src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/image%206.png?raw=true"
                />
              </v-avatar>
              <v-card-title > BizzarRap </v-card-title>
            </template>
            <v-card-text>Que tal mi gente</v-card-text>
          </v-card>
          <v-card class="mx-5 my-5" max-width="400">
            <div></div>
            <template v-slot:title>
              <v-avatar size="65">
                <v-img
                  src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/image%2023.png?raw=true"
                />
              </v-avatar>
              <v-card-title > Rene </v-card-title>
            </template>
            <v-card-text>Saludos a todos</v-card-text>
          </v-card>

        </v-col>
        <v-col cols="12" sm="9" class="border">
          <v-container class="fill-height">
            <v-row class="fill-height pb-14" align="end">
              <v-col>
                <div
                  v-for="(item, index) in chat"
                  :key="index"
                  :class="[
                    'd-flex flex-row align-center my-2',
                    item.from == 'user' ? 'justify-end' : null,
                  ]"
                >
                  <span v-if="item.from == 'user'" class="blue--text mr-3">{{
                      item.msg
                    }}</span>
                  <v-avatar
                    :color="item.from == 'user' ? 'indigo' : 'red'"
                    size="36"
                  >
                    <span class="white--text">{{ item.from[0] }}</span>
                  </v-avatar>
                  <span v-if="item.from != 'user'" class="blue--text ml-3">{{
                      item.msg
                    }}</span>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-footer>
      <v-container class="ma-0 pa-0">
        <v-row class="">
          <v-col>
            <div class="d-flex">
              <v-text-field
                v-model="msg"
                placeholder="Type Something"
                @keypress.enter="send"
              ></v-text-field>
              <v-btn icon class="ml-4" @click="send"
              ><v-icon>mdi-send</v-icon></v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Message-component",
  data: function () {
    return {
      chat: [],
      msg: null,
    };
  },
  methods: {
    send: function () {
      this.chat.push({
        from: "user",
        msg: this.msg,
      });
      this.msg = null;
      this.addReply();
    },
    addReply() {
      this.chat.push({
        from: "sushant",
        msg: "Hmm",
      });
    },
  },
};
</script>

<style scoped>
.ancho {
  width: 700px;
}
</style>