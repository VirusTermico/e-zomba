import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'
import BioView from '../views/BioView.vue'
import AlbumView from '../views/AlbumView.vue'
import MemberView from '../views/MemberView.vue'
import GroupView from '../views/GroupView.vue'
import GalleryView from '../views/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/podcasts',
      component: HomeView
    },
    {
      path: '/artist',
      component: ArtistView
    },
    {
      path: '/group',
      component: GroupView,
      children:[
        {
          path: '',
          component: BioView
        },
        {
          path: 'members',
          component: MemberView
        },
        {
          path: 'gallery',
          component: GalleryView
        },
        {
          path: 'songs',
          component: AlbumView
        },
      ]
    },
  ]
})

export default router
