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
          title: 'Escape from Duckov - Official Community Site',
          description: 'The ultimate community resource for Escape from Duckov. Find guides, maps, mods, quests, notes, and strategies to survive in Duckov.',
          keywords: 'Escape from Duckov, survival game, guides, maps, mods, quests, notes, community, strategies',
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
          title: 'Escape from Duckov Guides - Complete Strategy Hub',
          description: 'Comprehensive guides and strategies for Escape from Duckov. Learn survival tips, combat techniques, resource management, and advanced gameplay mechanics.',
          keywords: 'Escape from Duckov guides, survival strategies, combat tips, resource management, gameplay mechanics',
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
          title: 'Escape from Duckov Guide - {{title}}',
          description: 'Detailed guide for Escape from Duckov: {{description}}',
          keywords: 'Escape from Duckov guide, {{tags}}',
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
          title: 'Escape from Duckov Wiki - Complete Game Information',
          description: 'The unofficial wiki for Escape from Duckov, providing guides, information, and community tools for players.',
          keywords: 'Escape from Duckov wiki, game information, quests, notes, community tools',
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
          title: 'Escape from Duckov Maps - Interactive Zone Guide',
          description: 'Explore detailed layouts and strategies for every location in Escape from Duckov. Interactive maps for all zones including Bunker, Ground Zero, Farm, Warehouse, J-Lab, and Storm Area.',
          keywords: 'Escape from Duckov maps, zone layouts, interactive maps, Bunker, Ground Zero, Farm, Warehouse, J-Lab, Storm Area',
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
          title: 'Escape from Duckov Mods - Community Modifications',
          description: 'Enhance your gameplay experience with community-created modifications for Escape from Duckov. Find utility mods, enhancements, and visual improvements.',
          keywords: 'Escape from Duckov mods, community modifications, utility mods, enhancements, visual improvements',
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
          title: 'Escape from Duckov Mod - {{title}}',
          description: '{{description}} - Escape from Duckov community modification',
          keywords: 'Escape from Duckov mod, {{tags}}',
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
          title: 'Escape from Duckov Notes - Complete Collection Guide',
          description: 'Complete guide to all 56 collectible notes in Escape from Duckov. Find locations, strategies, and lore information for every note.',
          keywords: 'Escape from Duckov notes, collectible notes, note locations, lore, collection guide',
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
                  title: 'Escape from Duckov Quests - Complete Quest Guide',
                  description: 'Complete guide to all quests and missions in Escape from Duckov. Track progress, find objectives, and complete every available quest.',
                  keywords: 'Escape from Duckov quests, mission guide, quest objectives, progress tracking, quest completion',
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
                  title: 'Privacy Policy - DuckovGame',
                  description: 'Learn how DuckovGame protects and handles your personal information. Our comprehensive privacy policy covers data collection, usage, and your rights.',
                  keywords: 'privacy policy, data protection, personal information, DuckovGame privacy',
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
                  title: 'Terms of Service - DuckovGame',
                  description: 'Terms and conditions for using DuckovGame website. Read our terms of service to understand your rights and responsibilities.',
                  keywords: 'terms of service, terms and conditions, DuckovGame terms, user agreement',
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
                  title: 'Copyright Information - DuckovGame',
                  description: 'Copyright information and usage guidelines for DuckovGame content. Learn about fair use, licensing, and intellectual property rights.',
                  keywords: 'copyright, intellectual property, fair use, licensing, DuckovGame copyright',
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
                  title: 'About Us - DuckovGame',
                  description: 'Learn more about DuckovGame, our mission, and commitment to providing high-quality content and community resources.',
                  keywords: 'about us, DuckovGame team, mission, community, quality content',
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
                  title: 'Contact Us - DuckovGame',
                  description: 'Get in touch with DuckovGame team. Contact information, response times, and how we can help with your questions and feedback.',
                  keywords: 'contact us, support, help, feedback, DuckovGame contact',
                  type: 'website'
                }
              }
            }
  ],
})

export default router
