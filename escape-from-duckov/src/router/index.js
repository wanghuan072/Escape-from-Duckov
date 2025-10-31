import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import GuideDetailView from '../views/GuideDetailView.vue'
import MapsView from '../views/MapsView.vue'
import ModsView from '../views/ModsView.vue'
import ModDetailView from '../views/ModDetailView.vue'
import WikiView from '../views/wiki/WikiView.vue'
// Generic wiki category listing
import WikiQuestsView from '../views/wiki/WikiQuestsView.vue'
import WikiDetailView from '../views/wiki/WikiDetailView.vue'
import ItemsView from '../views/items/ItemsView.vue'
import ItemsWeaponsView from '../views/items/ItemsWeaponsView.vue'
import ItemsEquipmentView from '../views/items/ItemsEquipmentView.vue'
import ItemsAmmunitionView from '../views/items/ItemsAmmunitionView.vue'
import ItemsKeyView from '../views/items/ItemsKeyView.vue'
import ItemsFishView from '../views/items/ItemsFishView.vue'
import ItemsDetailView from '../views/items/ItemsDetailView.vue'
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
    { path: '/escape-from-duckov-quests', redirect: '/wiki/quests' },
    {
      path: '/wiki/quests',
      name: 'wiki-quests',
      component: WikiQuestsView,
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
      path: '/wiki/:category/:id',
      name: 'wiki-detail',
      component: WikiDetailView,
      meta: {
        seo: {
          title: 'Escape from Duckov Wiki | Complete Game Database & Information',
          description: 'Access detailed Escape from Duckov wiki information including quests, missions, objectives, rewards, and game mechanics. Complete reference database for all Duckov gameplay content.',
          keywords: 'Escape from Duckov wiki, quest database, mission guide, game information, objectives, rewards, NPCs, detailed guide',
          type: 'article'
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
    ,
    {
      path: '/items',
      name: 'items',
      component: ItemsView,
      meta: {
        seo: {
          title: 'Escape from Duckov Items | Complete Weapon & Equipment Database',
          description: 'Browse the complete Escape from Duckov items database featuring weapons, equipment, ammunition, keys, and fishing gear. Find detailed stats, descriptions, and information for every item in Duckov.',
          keywords: 'Escape from Duckov items, weapons database, equipment catalog, ammunition, keys, fishing gear, item stats, weapon details',
          type: 'website'
        }
      }
    },
    {
      path: '/items/weapons',
      name: 'items-weapons',
      component: ItemsWeaponsView,
      meta: {
        seo: {
          title: 'Escape from Duckov Weapons | Complete Firearms & Melee Database',
          description: 'Complete Escape from Duckov weapons database featuring all firearms, melee weapons, pistols, rifles, shotguns, and combat tools. Find detailed weapon stats, descriptions, and specifications for every weapon in Duckov.',
          keywords: 'Escape from Duckov weapons, firearms database, melee weapons, pistols, rifles, shotguns, weapon stats, combat tools, weapon specifications',
          type: 'website'
        }
      }
    },
    {
      path: '/items/equipment',
      name: 'items-equipment',
      component: ItemsEquipmentView,
      meta: {
        seo: {
          title: 'Escape from Duckov Equipment | Complete Armor & Protection Database',
          description: 'Complete Escape from Duckov equipment database featuring helmets, armor, body protection, backpacks, earphones, and tactical gear. Browse Level 2-5 helmets, SWAT gear, and protective equipment with detailed stats.',
          keywords: 'Escape from Duckov equipment, armor database, helmets, body protection, backpacks, SWAT gear, protective equipment, Level 2-5 helmets, tactical gear',
          type: 'website'
        }
      }
    },
    {
      path: '/items/ammunition',
      name: 'items-ammunition',
      component: ItemsAmmunitionView,
      meta: {
        seo: {
          title: 'Escape from Duckov Ammunition | Complete Bullet & Round Database',
          description: 'Complete Escape from Duckov ammunition database with all bullet types, calibers, and rounds. Browse pistol ammunition, rifle cartridges, shotgun shells, and special rounds with detailed damage stats and weapon compatibility information.',
          keywords: 'Escape from Duckov ammunition, ammo database, bullets, cartridges, rounds, 9mm, 5.56mm, 7.62mm, pistol rounds, rifle cartridges, shotgun shells, weapon compatibility',
          type: 'website'
        }
      }
    },
    {
      path: '/items/key',
      name: 'items-key',
      component: ItemsKeyView,
      meta: {
        seo: {
          title: 'Escape from Duckov Keys | Complete Access Card & Key Database',
          description: 'Complete Escape from Duckov keys database featuring J-Lab certificates, access cards, factory keys, dormitory keys, and location-specific keys. Browse Level 1-3 J-Lab certificates, colored access cards, and special tickets with location information.',
          keywords: 'Escape from Duckov keys, access cards database, J-Lab certificates, keycards, security keys, factory keys, dormitory keys, Level 1-3 certificates, colored access cards',
          type: 'website'
        }
      }
    },
    {
      path: '/items/fish',
      name: 'items-fish',
      component: ItemsFishView,
      meta: {
        seo: {
          title: 'Escape from Duckov Fishing Guide | Complete Fish & Fishing Equipment Database',
          description: 'Complete Escape from Duckov fishing guide featuring all catchable fish species, fishing rods, baits, and fishing gear. Learn about fishing mechanics, fish habits, location distribution, time-of-day catches, weather patterns, and bait recipes.',
          keywords: 'Escape from Duckov fishing, fish database, fishing rods, fish baits, fishing spots, fishing mechanics, fish species, time-of-day catches, weather patterns, bait recipes, Buddha NPC, fishing mini-game',
          type: 'website'
        }
      }
    },
    {
      path: '/items/:category/:id',
      name: 'items-detail',
      component: ItemsDetailView,
      meta: {
        seo: {
          title: 'Escape from Duckov Item | Complete Item Details & Stats',
          description: 'Detailed Escape from Duckov item information including stats, descriptions, specifications, and usage guides. Complete reference for weapons, equipment, ammunition, keys, and fishing gear in Duckov.',
          keywords: 'Escape from Duckov item, weapon details, equipment stats, item specifications, weapon information, equipment information, item guide',
          type: 'article'
        }
      }
    }
  ],
})

export default router
