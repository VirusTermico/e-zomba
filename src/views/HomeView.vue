<script setup>
import MixesInspiredBy from "../components/MixesInspiredBy.vue";
import MultiArtistSelect from "../components/MultiArtistSelect.vue";
import CustomCarousel from "../components/CustomCarousel.vue";
import Highlights from "../components/Highlights.vue";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";

let currentSlide = ref(0);

const data = [
  {
    url: "/images/artists/rui_mingas.jpg",
    song: "Foregone",
    by: "In Flames",
    releasedOn: "10/02/2023",
  },
  {
    url: "/images/artists/bangao.jpg",
    song: "Dark Waters",
    by: "Delain",
    releasedOn: "09/01/2023",
  },
  {
    url: "/images/artists/rui_mingas.jpg",
    song: "Foregone",
    by: "In Flames",
    releasedOn: "10/02/2023",
  },
  {
    url: "/images/artists/bangao.jpg",
    song: "Dark Waters",
    by: "Delain",
    releasedOn: "09/01/2023",
  },  {
    url: "/images/artists/rui_mingas.jpg",
    song: "Foregone",
    by: "In Flames",
    releasedOn: "10/02/2023",
  },
  {
    url: "/images/artists/bangao.jpg",
    song: "Dark Waters",
    by: "Delain",
    releasedOn: "09/01/2023",
  },
];

const slideTo = (val) => {
  currentSlide.value=+1
  if (val && currentSlide.value <= 7) {
    let res = currentSlide.value + 4;
    if (res <= 12) {
      currentSlide.value = currentSlide.value + 4;
    } else if (res > 12) {
      currentSlide.value = 12;
    }
  } else if (!val) {
    let res = currentSlide.value - 4;
    if (res > 0) {
      currentSlide.value = currentSlide.value - 4;
    } else if (res < 1) {
      currentSlide.value = 0;
    }
  }
};
</script>

<template>
  <div class="max-w-[1500px] mx-auto">
    <Carousel
      class="mr-8"
      @click="slideTo(true)"
      ref="carousel"
      v-model="currentSlide"
      :autoplay="true"
      :items-to-show="1"
      :items-to-scroll="2"
      :transition="800"
      snapAlign="start"
    >
      <Slide v-for="slide in data" :key="slide" class="flex items-baseline">
        <img class="w-full h-56 object-fill" :src="slide.url" />
      </Slide>
    </Carousel>

    <div class="px-8 mt-8 min-w-[800px] w-full">
      <div class="text-white text-xl font-semibold inline-block">
        Mais populares...
        <div class="text-sm font-light text-[#A2A2AD]">
          Encontre musicas que casem com o teu Estilo Favorito
        </div>
      </div>

      <div class="py-3"></div>

      <div class="flex justify-between w-full gap-8">
        <div class="xl:w-1/3 w-1/2">
          <MixesInspiredBy
            class="pb-1.5"
            text="VAMPIRE (feat. Oli Sykes of Bring Me The Horizon)"
            by="Ic3peak"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Deutchland"
            by="Rammstein"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Fallout"
            by="Masked Wolf"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
        </div>
        <div class="xl:w-1/3 w-1/2">
          <MixesInspiredBy
            class="pb-1.5"
            text="Pray For Plagues"
            by="Bring Me the Horizon"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Candy Truck / You Expected"
            by="Bring Me the Horizon"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="L'efant sauvage"
            by="Gojira"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
        </div>
        <div class="xl:block hidden xl:w-1/3">
          <MixesInspiredBy
            class="pb-1.5"
            text="Bad Life"
            by="Sigrid"
            to="/artist"
            image="https://picsum.photos/id/211/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Dystopia"
            by="Megadeth"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Can You Feel My Heart"
            by="Bring Me the Horizon"
            to="/artist"
            image="/images/artists/banda_maravilha.jpg"
          />
        </div>
      </div>
    </div>

    <div class="px-8 mt-8 min-w-[800px]">
      <div class="text-white text-xl font-semibold inline-block">
        ENTREVISTAS
      </div>

      <div class="py-3"></div>

      <div class="flex justify-start gap-7">
        <MultiArtistSelect
          class="w-1/4"
          category="daily"
          text="Musicas de froma algums sao apenas letras"
          to="/artist"
          :images="{
            one: '/images/artists/banda_maravilha.jpg',
            two: '/images/artists/bangao.jpg',
            three: '/images/artists/carlos_burity.jpg',
            four: '/images/artists/rui_mingas.jpg',
          }"
        />
        <MultiArtistSelect
          class="w-1/4"
          category="daily"
          text="Musicas de froma algums sao apenas letras"
          to="/artist"
          :images="{
            one: '/images/artists/banda_maravilha.jpg',
            two: '/images/artists/bangao.jpg',
            three: '/images/artists/carlos_burity.jpg',
            four: '/images/artists/rui_mingas.jpg',
          }"
        />
        <MultiArtistSelect
          class="w-1/4"
          category="daily"
          text="Musicas de froma algums sao apenas letras"
          to="/artist"
          :images="{
            one: '/images/artists/banda_maravilha.jpg',
            two: '/images/artists/bangao.jpg',
            three: '/images/artists/carlos_burity.jpg',
            four: '/images/artists/rui_mingas.jpg',
          }"
        />
        <MultiArtistSelect
          class="w-1/4"
          category="daily"
          text="Cultura, expresse"
          to="/artist"
          :images="{
            one: '/images/artists/banda_maravilha.jpg',
            two: '/images/artists/bangao.jpg',
            three: '/images/artists/carlos_burity.jpg',
            four: '/images/artists/rui_mingas.jpg',
          }"
        />
      </div>
    </div>

    <div class="px-8 mt-8 min-w-[800px]">
      <div class="py-3"></div>

      <p class="text-center pb-6 text-[#D1D1D6] text-sm">
        Desbloqueie o Flow e deixe o Sistema de Recomendacao encontrar a musica
        ao teu rosto
      </p>

      <div class="flex justify-center gap-7 full">
        <div class="flex items-center justify-center relative">
          <img
            width="100"
            class="absolute -left-36 rounded-full z-0 cursor-pointer"
            src="/images/artists/carlos_burity.jpg"
          />
          <img
            width="115"
            class="absolute -left-[80px] rounded-full z-10 cursor-pointer"
            src="/images/artists/carlos_burity.jpg"
          />
          <img
            width="160"
            class="rounded-full z-20 cursor-pointer"
            src="/images/artists/carlos_burity.jpg"
          />
          <img
            width="115"
            class="absolute -right-[80px] rounded-full z-10 cursor-pointer"
            src="/images/artists/carlos_burity.jpg"
          />
          <img
            width="100"
            class="absolute -right-36 rounded-full z-0 cursor-pointer"
            src="/images/artists/carlos_burity.jpg"
          />
        </div>
      </div>
      <div class="w-full flex justify-center p-3">
        <button
          type="button"
          class="text-white text-[15px] font-semibold rounded-full bg-[#EF5465] hover:bg-[#d8384a] px-8 py-2 text-center"
        >
          ADD ARTISTS
        </button>
      </div>
    </div>

    <div class="mt-8 min-w-[800px]">
      <CustomCarousel
        category="Mais recentes"
        :data="[
          {
            url: '/images/artists/rui_mingas.jpg',
            song: 'Foregone',
            by: 'In Flames',
            releasedOn: '10/02/2023',
          },
          {
            url: '/images/artists/bangao.jpg',
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
            url: '/images/artists/bangao.jpg',
            song: 'Meanwhile',
            by: 'Klone',
            releasedOn: '08/02/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'Truth Decay',
            by: 'You Me At Six',
            releasedOn: '10/01/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'This Is Why',
            by: 'Paramore',
            releasedOn: '10/02/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'The Jaws Of Life',
            by: 'Pierce The Veil',
            releasedOn: '09/23/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'The Future Is Your Past',
            by: 'In The Brian Jonestown Massacre',
            releasedOn: '07/25/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'The Land, The Water, The Sky',
            by: 'Black Belt Eagle Scout',
            releasedOn: '09/22/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'The Day My Father Died',
            by: 'SYML',
            releasedOn: '10/02/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'Complete Mountain Almanac',
            by: 'Complete Mountain Almanac',
            releasedOn: '10/02/2023',
          },
          {
            url: '/images/artists/banda_maravilha.jpg',
            song: 'Music From Montana Story',
            by: 'Kevin Morby',
            releasedOn: '10/01/2023',
          },
        ]"
      />
    </div>

    <div class="px-8 mt-8 min-w-[800px]">
      <div class="text-white text-xl font-semibold inline-block">Destaques</div>

      <div class="py-3"></div>

      <div class="flex items-center gap-8">
        <div class="rounded-lg w-1/2">
          <Highlights
            by="Some Artist 1"
            song="Awsome Song for you!"
            image="/images/artists/carlos_burity.jpg"
          />
        </div>
        <div class="rounded-lg w-1/2">
          <Highlights
            by="Some Artist 2"
            song="Another banger BRUV!"
            image="/images/artists/carlos_burity.jpg"
          />
        </div>
      </div>
    </div>

    <div class="mt-8 min-w-[800px]">
      <CustomCarousel
        category="Popular playlist"
        :data="[
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'Foregone',
            by: 'In Flames',
            releasedOn: '10/02/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'Dark Waters',
            by: 'Delain',
            releasedOn: '09/01/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
            song: 'Heritage',
            by: 'Distant',
            releasedOn: '10/01/2023',
          },
          {
            url: '/images/artists/bangao.jpg',
            song: 'Meanwhile',
            by: 'Klone',
            releasedOn: '08/02/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
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
            url: '/images/artists/carlos_burity.jpg',
            song: 'The Jaws Of Life',
            by: 'Pierce The Veil',
            releasedOn: '09/23/2023',
          },
          {
            url: '/images/artists/carlos_burity.jpg',
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

    <div class="pb-40"></div>
  </div>
</template>
