import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import firebase from "firebase/compat";
loadFonts().then()

const firebaseConfig = {
  apiKey: "AIzaSyDpAkHDAXXJm2dZ837aVGqlYNdwP_lDmEQ",
  authDomain: "beatclub-bb8c5.firebaseapp.com",
  projectId: "beatclub-bb8c5",
  storageBucket: "beatclub-bb8c5.appspot.com",
  messagingSenderId: "1042692386525",
  appId: "1:1042692386525:web:2652c383c7250939fb7534",
  measurementId: "G-5YSJSTF7N9"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).use(vuetify).mount("#app");
