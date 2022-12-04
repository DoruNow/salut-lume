<template>
  <div class="d-flex flex-column align-center">
    <v-app-bar app class="orange lighten-3">
      <v-toolbar-title
        @click="$router.push('/friends-of-code')"
        style="cursor: pointer"
      >
        <div class="d-flex align-center">
          <v-icon>mdi-party-popper</v-icon>
          <span class="pl-2">Friends Of Code</span>
        </div>
      </v-toolbar-title>
    </v-app-bar>

    <focTitle v-if="$route.query.id" :detailMode="true" />
    <focTitle v-else />

    <div class="d-flex flex-wrap main-div justify-center" v-if="!id">
      <div v-for="friend in friends" :key="friend.id">
        <focFriend :friend="friend" />
      </div>
    </div>
    <div v-if="id">
      <focFriend :friend="friends[id]" :detailMode="true" />
    </div>
  </div>
</template>

<script>
import focFriend from "@/grupe/friendsOfCode/components/focFriend.vue";
import focTitle from "@/grupe/friendsOfCode/components/focTitle.vue";

export default {
  props: ["id"],
  components: {
    focFriend,
    focTitle,
  },
  computed: {
    filteredFriends() {
      return this.data;
    },
  },
  data() {
    return {
      filter: [],
      friends: [
        {
          id: 0,
          nume: "Quacky",
          adresaPozei: "https://random-d.uk/api/randomimg",
          descriere: "Unu si cu unu fac unu",
          detalii:
            "Imi plac plimbarile si activitatile pe uscat. Am si maini. Mac.",
        },
        {
          id: 1,
          nume: "Duck Duck",
          adresaPozei: "https://random-d.uk/api/randomimg",
          descriere: "Unu si cu unu fac 121",
          detalii:
            "Imi plac plimbarile si activitatile pe uscat. Am si maini. Mac.",
        },
        {
          id: 2,
          nume: "Feathermac",
          adresaPozei: "https://random-d.uk/api/randomimg",
          descriere: "Unu si cu unu fac 33",
          detalii:
            "Imi plac plimbarile si activitatile pe uscat. Am si maini. Mac.",
        },
        {
          id: 3,
          nume: "MacMacIntosh",
          adresaPozei: "https://random-d.uk/api/randomimg",
          descriere: "Unu si cu unu fac 24",
          detalii:
            "Imi plac plimbarile si activitatile pe uscat. Am si maini. Mac.",
        },
        {
          id: 4,
          nume: "Quacko",
          adresaPozei: "https://random-d.uk/api/randomimg",
          descriere: "Unu si cu unu fac 51",
          detalii:
            "Imi plac plimbarile si activitatile pe uscat. Am si maini. Mac.",
        },
        {
          id: 5,
          nume: "Albert Bread",
          adresaPozei: "https://random-d.uk/api/randomimg",
          descriere: "Unu si cu unu fac 12",
          detalii:
            "Imi plac plimbarile si activitatile pe uscat. Am si maini. Mac.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-div {
  max-width: 1000px;
}
</style>