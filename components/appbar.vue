<template>
  <!-- <v-card class="mx-auto" max-width="448"> -->
  <v-layout>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>Child Meal</v-app-bar-title>
      <template v-slot:append>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <!-- <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template> -->
    </v-app-bar>
    <v-card>
      <!-- <v-layout> -->
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
            to="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
            to="total"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- <v-main style="height: 250px">
          <div class="d-flex justify-center align-center h-100">
            <v-btn color="primary" @click.stop="drawer = !drawer">
              Toggle
            </v-btn>
          </div>
        </v-main>
      </v-layout> -->
    </v-card>
    <!-- <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="n in 8" :key="n" cols="3">
              <v-sheet color="grey-lighten-2" height="96"></v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main> -->
  </v-layout>
  <!-- </v-card> -->
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
