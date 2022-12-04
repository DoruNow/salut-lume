<template>
  <v-card
    class="ma-2"
    :width="detailMode && $vuetify.breakpoint.mdAndUp ? '600px' : '300px'"
  >
    <v-img
      :src="friend.adresaPozei"
      :height="detailMode && $vuetify.breakpoint.mdAndUp ? '400px' : '200px'"
      @click="showDetails()"
      style="cursor: pointer"
    >
    </v-img>
    <v-card-title primary-title class="pb-0">
      <v-slide-x-transition appear v-if="!detailMode">
        <div>
          <p class="subtitle-1 mb-1">{{ friend.nume }}</p>
        </div>
      </v-slide-x-transition>
      <v-slide-x-reverse-transition appear v-else>
        <div>
          <p class="subtitle-1 mb-1">{{ friend.nume }}</p>
          <p class="subtitle-2 mb-1">#{{ friend.descriere }}</p>
        </div>
      </v-slide-x-reverse-transition>
    </v-card-title>
    <v-card-actions class="pt-0" v-if="!detailMode">
      <v-slide-x-transition appear>
        <v-btn text color="orange" @click="showDetails"> detalii </v-btn>
      </v-slide-x-transition>
    </v-card-actions>

    <div v-else>
      <v-card-title primary-title class="d-flex flex-column align-start pb-0">
        <p class="subtitle">Bio</p>
        <p class="body-1">{{ friend.detalii }}</p>
      </v-card-title>

      <v-card-actions class="pt-0 d-flex justify-end">
        <v-slide-x-transition appear>
          <v-btn
            fab
            color="orange lighten-3"
            @click="$router.push('/friends-of-code')"
          >
            <v-icon>mdi-keyboard-backspace</v-icon>
          </v-btn>
        </v-slide-x-transition>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["friend", "detailMode"],
  methods: {
    showDetails() {
      this.$router.push(`/friends-of-code?id=${this.friend.id}`);
    },
  },
};
</script>
