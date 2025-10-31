import { createRouter, createWebHistory } from 'vue-router'
import { supportedLanguages } from '../i18n'
import i18n from '../i18n'
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

// 基础路由配置（英文，不带语言前缀）
const baseRoutes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guides',
      name: 'guides',
      component: GuideView
    },
    {
      path: '/guides/:id',
      name: 'guide-detail',
      component: GuideDetailView
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView
    },
    {
      path: '/maps',
      name: 'maps',
      component: MapsView
    },
    {
      path: '/mods',
      name: 'mods',
      component: ModsView
    },
    {
      path: '/mods/:id',
      name: 'mod-detail',
      component: ModDetailView
    },
    { path: '/escape-from-duckov-quests', redirect: '/wiki/quests' },
    {
      path: '/wiki/quests',
      name: 'wiki-quests',
      component: WikiQuestsView
    },
    {
      path: '/wiki/:category/:id',
      name: 'wiki-detail',
      component: WikiDetailView
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsView
    },
    {
      path: '/items/weapons',
      name: 'items-weapons',
      component: ItemsWeaponsView
    },
    {
      path: '/items/equipment',
      name: 'items-equipment',
      component: ItemsEquipmentView
    },
    {
      path: '/items/ammunition',
      name: 'items-ammunition',
      component: ItemsAmmunitionView
    },
    {
      path: '/items/key',
      name: 'items-key',
      component: ItemsKeyView
    },
    {
      path: '/items/fish',
      name: 'items-fish',
      component: ItemsFishView
    },
    {
      path: '/items/:category/:id',
      name: 'items-detail',
      component: ItemsDetailView
    }
]

// 为所有非英文语言生成带前缀的路由
const generateLocalizedRoutes = () => {
  const routes = [...baseRoutes]
  
  supportedLanguages.forEach(lang => {
    if (lang === 'en') return // 英文不带前缀
    
    baseRoutes.forEach(route => {
      routes.push({
        path: `/${lang}${route.path}`,
        name: `${route.name}-${lang}`,
        component: route.component
      })
    })
  })
  
  return routes
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generateLocalizedRoutes()
})

// 从路径检测语言
function detectLanguageFromPath(path) {
  for (const lang of supportedLanguages) {
    if (lang === 'en') continue
    if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
      return lang
    }
  }
  return 'en'
}

// 路由守卫：根据URL设置语言（强制同步）
router.beforeEach(async (to, from, next) => {
  const detectedLang = detectLanguageFromPath(to.path)
  
  // 无论当前语言是什么，都强制与URL路径中的语言同步
  try {
    const { switchLocale } = await import('../i18n')
    await switchLocale(detectedLang)
  } catch (error) {
    console.error('Language switching error:', error)
  }
  
  next()
})

export default router
