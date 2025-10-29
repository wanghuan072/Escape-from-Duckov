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
          title: 'Escape from Duckov Guide & Community | duckovgame.com',
          description: 'Complete Escape from Duckov survival guide with maps, mods, quests, and strategies. Expert tips for beginners and advanced players.',
          keywords: 'Escape from Duckov, survival guide, game maps, mods, quests, strategies, tips',
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
          title: 'Strategy Guides & Walkthroughs | duckovgame.com',
          description: 'Master Escape from Duckov with expert guides. Learn survival tactics, combat strategies, and advanced gameplay techniques.',
          keywords: 'Escape from Duckov guides, survival strategies, combat tips, gameplay tactics, walkthrough',
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
          title: 'Detailed Strategy Guide | duckovgame.com',
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
          title: 'Game Wiki & Database | duckovgame.com',
          description: 'Complete Escape from Duckov wiki with quest guides, collectible database, and comprehensive game information.',
          keywords: 'Escape from Duckov wiki, quest database, collectibles, game information, lore',
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
          title: 'Interactive Zone Maps | duckovgame.com',
          description: 'Explore all Escape from Duckov zones with interactive maps. Find loot locations, extraction points, and strategic positions.',
          keywords: 'Escape from Duckov maps, zone layouts, loot locations, extraction points, interactive maps',
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
          title: 'Community Mods & Enhancements | duckovgame.com',
          description: 'Enhance your Escape from Duckov experience with community mods. Utility tools, UI improvements, and gameplay enhancements.',
          keywords: 'Escape from Duckov mods, community modifications, utility tools, UI enhancements, gameplay tweaks',
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
          title: 'Mod Download & Installation | duckovgame.com',
          description: 'Download Escape from Duckov community modification with installation guide and detailed feature descriptions.',
          keywords: 'Escape from Duckov mod, community modification, download, installation guide, features',
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
          title: 'Collectible Notes Guide (56 Notes) | duckovgame.com',
          description: 'Complete guide to all 56 collectible notes in Escape from Duckov. Find exact locations and collection strategies.',
          keywords: 'Escape from Duckov notes, collectible guide, note locations, collection strategies, 56 notes',
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
          title: 'Complete Quest Database (790+ Quests) | duckovgame.com',
          description: 'Complete guide to all 790+ Escape from Duckov quests. Track objectives, rewards, and completion strategies.',
          keywords: 'Escape from Duckov quests, mission guide, quest objectives, rewards, completion strategies',
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
