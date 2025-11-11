import { createI18n } from 'vue-i18n'

// 只导入英文作为默认语言，其他语言按需加载
import en from '../locales/en.json'

// 支持的语言列表
const supportedLanguages = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru', 'pt', 'zh']

// 从路径检测语言
function detectLanguageFromPath(path) {
    for (const lang of supportedLanguages) {
        if (lang === 'en') continue // 英文是默认语言，不需要前缀
        if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
            return lang
        }
    }
    return 'en'
}

// 获取初始语言（优先从URL检测）
const getInitialLocale = () => {
    // 1. 最优先检查URL中的语言（最重要，不能覆盖）
    const path = window.location.pathname
    const pathLang = detectLanguageFromPath(path)
    // 如果URL中有语言前缀，直接返回，忽略 localStorage 和浏览器语言
    if (pathLang !== 'en') {
        return pathLang
    }

    // 2. URL中没有语言前缀，才检查localStorage（仅用于首次访问或英文页面）
    const saved = localStorage.getItem('language')
    if (saved && supportedLanguages.includes(saved)) {
        // 如果 localStorage 是英文，直接返回
        if (saved === 'en') {
            return 'en'
        }
        // 如果 localStorage 不是英文，但URL是英文路径，说明用户可能在英文页面
        // 这种情况下保持英文，不应用 localStorage 的非英文语言
        // 因为URL中没有语言前缀，说明应该是英文页面
        return 'en'
    }

    // 3. 检查浏览器语言（仅当URL是英文且没有localStorage时）
    const browserLang = navigator.language.split('-')[0]
    if (supportedLanguages.includes(browserLang)) {
        // 同样，如果URL是英文路径，应该保持英文
        return 'en'
    }

    // 4. 默认英文
    return 'en'
}

// 创建i18n实例 - 只包含英文，其他语言按需加载
const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages: {
        en // 只包含英文，其他语言动态加载
    },
    warnHtmlMessage: false,
    allowComposition: true,
    missingWarn: false,
    fallbackWarn: false
})

i18n.global.setLocaleMessage('en', en)

// 动态加载语言文件
const loadLocale = async (locale) => {
    if (locale === 'en') {
        i18n.global.setLocaleMessage('en', en)
        return en
    }
    
    try {
        const messages = await import(`../locales/${locale}.json`)
        i18n.global.setLocaleMessage(locale, messages.default)
        return messages.default
    } catch (error) {
        console.warn(`Failed to load locale ${locale}:`, error)
        i18n.global.setLocaleMessage('en', en)
        return en
    }
}

// 导出i18n实例
export default i18n

// 导出语言切换函数 - 支持动态加载
export const switchLocale = async (locale) => {
    if (supportedLanguages.includes(locale)) {
        // 动态加载语言文件
        await loadLocale(locale)
        i18n.global.locale.value = locale
        localStorage.setItem('language', locale)
        document.documentElement.lang = locale
    }
}

// 导出当前语言
export const getCurrentLocale = () => {
    return i18n.global.locale.value
}

// 导出支持的语言列表
export { supportedLanguages }

// 导出loadLocale函数
export { loadLocale }

// 导出detectLanguageFromPath函数
export { detectLanguageFromPath }

