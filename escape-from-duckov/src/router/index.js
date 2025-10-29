import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import GuideDetailView from '../views/GuideDetailView.vue'
import MapsView from '../views/MapsView.vue'
import ModsView from '../views/ModsView.vue'
import ModDetailView from '../views/ModDetailView.vue'
import WikiView from '../views/wiki/WikiView.vue'
import NotesView from '../views/wiki/NotesView.vue'
import QuestsView from '../views/wiki/QuestsView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/TermsOfServiceView.vue'
import CopyrightView from '../views/CopyrightView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        seo: {
          title: 'Escape from Duckov | Wiki, Guides, Maps, Mods, Quests, Weapons',
          description: 'Explore the ultimate Escape from Duckov hub — detailed guides, quests, maps, weapons, bosses, and survival strategies. Stay updated with all game mechanics and tips.',
          keywords: 'Escape from Duckov, game wiki, maps, quests, weapons, bosses, skills, survival guide, tips, updates',
          type: 'website'
        }
      }
    },
    {
      path: '/guides',
      name: 'guides',
      component: GuideView,
      meta: {
        seo: {
          title: 'Escape from Duckov Guides | Survival & Combat Tips',
          description: 'Master Escape from Duckov with our complete guide collection. Learn beginner strategies, combat tactics, survival tips, and pro walkthroughs to conquer every mission.',
          keywords: 'Escape from Duckov guides, walkthroughs, combat tips, survival strategies, gameplay tactics, pro tips',
          type: 'website'
        }
      }
    },
    {
      path: '/guides/:id',
      name: 'guide-detail',
      component: GuideDetailView,
      meta: {
        seo: {
          title: 'Escape from Duckov Guide | duckovgame.com',
          description: 'Detailed Escape from Duckov strategy guide with expert tips, step-by-step instructions, and advanced techniques.',
          keywords: 'Escape from Duckov guide, strategy tips, gameplay tactics, survival techniques',
          type: 'article'
        }
      }
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView,
      meta: {
        seo: {
          title: 'Escape from Duckov Wiki | Complete Database of Maps, Weapons & Quests',
          description: 'Access the full Escape from Duckov Wiki — your source for maps, weapons, quests, bosses, skills, and game mechanics. Discover everything about Duckov’s survival world.',
          keywords: 'Escape from Duckov wiki, maps, weapons, quests, bosses, skills, survival database, game info, items',
          type: 'website'
        }
      }
    },
    {
      path: '/maps',
      name: 'maps',
      component: MapsView,
      meta: {
        seo: {
          title: 'Escape from Duckov Maps | All Locations, Zones & Extraction Points',
          description: 'Explore every area in Escape from Duckov with our interactive maps. Find loot zones, extraction points, safe routes, and secret locations to master your survival runs.',
          keywords: 'Escape from Duckov maps, locations, zones, extraction points, loot areas, survival routes, map guide',
          type: 'website'
        }
      }
    },
    {
      path: '/mods',
      name: 'mods',
      component: ModsView,
      meta: {
        seo: {
          title: 'Escape from Duckov Mods | Best Custom Weapons, Maps & Gameplay Tweaks',
          description: 'Discover the best Escape from Duckov mods — new weapons, custom maps, enhanced visuals, and gameplay tweaks. Upgrade your survival experience with community creations.',
          keywords: 'Escape from Duckov mods, custom weapons, map mods, gameplay tweaks, visual mods, community content',
          type: 'website'
        }
      }
    },
    {
      path: '/mods/:id',
      name: 'mod-detail',
      component: ModDetailView,
      meta: {
        seo: {
          title: 'Escape from Duckov Mods | Best Custom Weapons, Maps & Gameplay Tweaks',
          description: 'Discover the best Escape from Duckov mods — new weapons, custom maps, enhanced visuals, and gameplay tweaks. Upgrade your survival experience with community creations.',
          keywords: 'Escape from Duckov mods, custom weapons, map mods, gameplay tweaks, visual mods, community content',
          type: 'article'
        }
      }
    },
    {
      path: '/escape-from-duckov-notes',
      name: 'notes',
      component: NotesView,
      meta: {
        seo: {
          title: 'Escape from Duckov Notes | All Collectible Notes Locations & Guide',
          description: 'Complete Escape from Duckov Notes guide featuring all collectible notes, their exact map locations, lore details, and collection tips for every region.',
          keywords: 'Escape from Duckov notes, collectible notes, item locations, lore guide, collection tips, map locations, note list',
          type: 'website'
        }
      }
    },
    {
      path: '/escape-from-duckov-quests',
      name: 'quests',
      component: QuestsView,
      meta: {
        seo: {
          title: 'Escape from Duckov Quests | Full Mission Database',
          description: 'Explore all quests in Escape from Duckov. Track objectives, rewards, task chains, and completion routes with this ultimate quest database and mission guide.',
          keywords: 'Escape from Duckov quests, mission database, task list, quest objectives, rewards, mission guide, completion routes',
          type: 'website'
        }
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      meta: {
        seo: {
          title: 'Privacy Policy & Data Protection | duckovgame.com',
          description: 'DuckovGame privacy policy covering data collection, usage, GDPR compliance, and your privacy rights.',
          keywords: 'privacy policy, data protection, GDPR compliance, privacy rights, DuckovGame',
          type: 'website'
        }
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView,
      meta: {
        seo: {
          title: 'Terms of Service & User Agreement | duckovgame.com',
          description: 'DuckovGame terms of service covering user rights, responsibilities, and website usage conditions.',
          keywords: 'terms of service, user agreement, legal terms, website usage, DuckovGame',
          type: 'website'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView,
      meta: {
        seo: {
          title: 'Copyright & Intellectual Property Rights | duckovgame.com',
          description: 'DuckovGame copyright information covering fair use policies, licensing, and intellectual property rights.',
          keywords: 'copyright, intellectual property, fair use, licensing, DMCA compliance, DuckovGame',
          type: 'website'
        }
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView,
      meta: {
        seo: {
          title: 'About DuckovGame & Our Mission | duckovgame.com',
          description: 'Learn about DuckovGame\'s mission to provide high-quality gaming content and community resources.',
          keywords: 'about DuckovGame, gaming community, quality content, mission, team',
          type: 'website'
        }
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
      meta: {
        seo: {
          title: 'Contact Us & Support | duckovgame.com',
          description: 'Contact DuckovGame for support, feedback, and inquiries. Get help with your questions and suggestions.',
          keywords: 'contact DuckovGame, support, feedback, help, customer service, inquiries',
          type: 'website'
        }
      }
    }
  ],
})

export default router
