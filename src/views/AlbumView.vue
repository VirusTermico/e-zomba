<script setup>
import SongRow from '../components/SongRow.vue';

import Magnify from 'vue-material-design-icons/Magnify.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import ClockTimeFiveOutline from 'vue-material-design-icons/ClockTimeFiveOutline.vue';
import artist from '../artist.json'

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)

const playFunc = () => {
    if (currentTrack.value) {
        useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
        return
    } 
    useSong.playFromFirst()
}
</script>
<template>
  <div class="w-full h-full ">
    <div
      class="flex items-center justify-between min-w-[590px] mx-8 border-b border-b-[#302d2d] py-2.5 px-1.5"
    >
      <div class="text-xs font-light text-[#aeaeae]">TRACK</div>
      <ClockTimeFiveOutline fillColor="#aeaeae" :size="20" />
    </div>

    <ul
      class="w-full mx-8 pr-16 min-w-[650px]"
      v-for="track in artist.tracks"
      :key="track"
    >
      <SongRow v-if="track" :track="track" />
    </ul>
  </div>
</template>
