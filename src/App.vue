<script setup>
import { onBeforeMount } from "vue";
import { RouterView, RouterLink } from "vue-router";

import Magnify from "vue-material-design-icons/Magnify.vue";
import Bell from "vue-material-design-icons/Bell.vue";
import SideMenuItem from "./components/SideMenuItem.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import SongLyrics from "./components/SongLyrics.vue";

import { useSongStore } from "./stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const { isPlaying, currentTrack, isLyrics, trackTime } = storeToRefs(useSong);

onBeforeMount(() => {
  isPlaying.value = false;
  isLyrics.value = false;
  trackTime.value = "0:00";
});
</script>

<template>
  <div
    id="TopNav"
    class="fixed right-0 flex  justify-between w-[calc(100%-240px)] h-[56px] border-b border-b-[#32323D]"
  >
    <ul class="flex flex-row justify-between items-center">
      <li>
        <SideMenuItem
          iconString="podcast"
          :iconSize="20"
          pageUrl="/podcasts"
          name="INICIO"
        />
      </li>
      <li>
        <SideMenuItem
          iconString="explore"
          :iconSize="20"
          pageUrl="/artist"
          name="ENTREVISTAS"
        />
      </li>
      <li>
        <SideMenuItem
          iconString="favourite"
          :iconSize="20"
          pageUrl="/group"
          name="ARTISTAS!GRUPOS"
        />
      </li>
      
    </ul>
  </div>

  <div
    class="fixed w-[calc(100%)] h-[calc(100%-56px)] mt-[56px] overflow-x-auto"
  >
    <RouterView />
  </div>

  <MusicPlayer v-if="currentTrack" />

  <SongLyrics
    v-if="isLyrics"
    :class="{
      'animate__animated animate__slideInUp animate__faster': isLyrics,
    }"
  />
</template>
