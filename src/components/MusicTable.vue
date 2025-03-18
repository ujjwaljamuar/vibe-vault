<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card flat>
      <template v-slot:text>
          <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              hide-details
              single-line
          ></v-text-field>
      </template>

      <v-data-table
          :headers="headers"
          :items="musicTracks"
          :search="search"
          :loading="loading"
      >
          <template #item.thumbnail="{ item }">
              <v-img
                  :src="item.thumbnail"
                  height="50"
                  width="50"
                  contain
              ></v-img>
          </template>
      </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";

const search = ref("");
const loading = ref(true);
const musicTracks = ref([]);

const headers = [
  { key: "thumbnail", title: "Cover", sortable: false },
  { key: "title", title: "Title" },
  { key: "artist", title: "Artist" },
  { key: "album", title: "Album" },
  { key: "duration", title: "Duration" },
];

const fetchMusicData = async () => {
  try {
      const response = await fetch(
          "https://ujjwaljamuar.github.io/JSONsAPIs/All_Liked_Songs.json"
      );
      const data = await response.json();
      musicTracks.value = data.items;
  } catch (error) {
      console.error("Error fetching music data:", error);
  } finally {
      loading.value = false;
  }
};

onMounted(fetchMusicData);
</script>
