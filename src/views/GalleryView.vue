<script setup>
import artists from "../artist.json";
import CustomCarousel from "../components/CustomCarousel.vue";
import Highlights from "../components/Highlights.vue";
</script>

<template>
  <div class="w-full h-full">
    <div class="px-8 mt-8 min-w-[800px]">
      <div class="text-white text-xl font-semibold inline-block">IMAGENS</div>

      <div class="py-3"></div>

      <div class="flex items-center gap-8">
        <div class="rounded-lg w-1/2">
          <Highlights
            by="Some Artist 1"
            song="Awsome Song for you!"
            image="/images/artists/rui_mingas.jpg"
          />
        </div>
        <div class="rounded-lg w-1/2">
          <Highlights
            by="Some Artist 2"
            song="Another banger BRUV!"
            image="/images/artists/rui_mingas.jpg"
          />
        </div>
      </div>
    </div>

    <CustomCarousel
      category="VIDEOS E ENTREVISTAS"
      :data="[
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'Foregone',
          by: 'In Flames',
          releasedOn: '10/02/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'Dark Waters',
          by: 'Delain',
          releasedOn: '09/01/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'Heritage',
          by: 'Distant',
          releasedOn: '10/01/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'Meanwhile',
          by: 'Klone',
          releasedOn: '08/02/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'Truth Decay',
          by: 'You Me At Six',
          releasedOn: '10/01/2023',
        },
        {
          url: '/images/artists/bangao.jpg',
          song: 'This Is Why',
          by: 'Paramore',
          releasedOn: '10/02/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'The Jaws Of Life',
          by: 'Pierce The Veil',
          releasedOn: '09/23/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'The Future Is Your Past',
          by: 'In The Brian Jonestown Massacre',
          releasedOn: '07/25/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'The Land, The Water, The Sky',
          by: 'Black Belt Eagle Scout',
          releasedOn: '09/22/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'The Day My Father Died',
          by: 'SYML',
          releasedOn: '10/02/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'Complete Mountain Almanac',
          by: 'Complete Mountain Almanac',
          releasedOn: '10/02/2023',
        },
        {
          url: '/images/artists/rui_mingas.jpg',
          song: 'Music From Montana Story',
          by: 'Kevin Morby',
          releasedOn: '10/01/2023',
        },
      ]"
    />
  </div>
</template>
