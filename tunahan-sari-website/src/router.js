import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main.vue'
import Experience from './components/Experience.vue'
// Import other components as needed
import HomeContent from './components/HomeContent.vue'

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeContent, // A component for your home page content
      },
      {
        path: 'experience',
        name: 'Experience',
        component: Experience,
      },
      // Add other child routes here (e.g., Projects, ContactFAQ)
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
