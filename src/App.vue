<style scoped>
.v-btn {
  color: white;
}
</style>
<template>
  <v-app>
    <v-main>


      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),

  methods: {
    redirectTo() {
      return this.$router.push("/home");
    },
  },
};
</script>
