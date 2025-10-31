import { supportedLanguages } from '../i18n'

/**
 * 从路径中提取基础路径（移除语言前缀）
 */
export function getBasePath(path) {
  let basePath = path
  
  // 移除所有支持的语言前缀（除了英文）
  supportedLanguages.forEach(lang => {
    if (lang !== 'en') {
      const langPrefix = `/${lang}`
      if (basePath.startsWith(langPrefix)) {
        basePath = basePath.substring(langPrefix.length)
      }
    }
  })
  
  // 确保基础路径不为空
  return basePath || '/'
}

/**
 * 根据语言生成完整路径
 * @param {string} basePath - 基础路径
 * @param {string} locale - 语言代码
 * @returns {string} 完整路径
 */
export function getLocalizedPath(basePath, locale = 'en') {
  // 英文不带前缀
  if (locale === 'en') {
    return basePath
  }
  
  // 其他语言带前缀
  const cleanPath = basePath === '/' ? '' : basePath
  return `/${locale}${cleanPath}`
}

/**
 * 切换语言后的路径
 */
export function switchLanguagePath(currentPath, targetLocale) {
  const basePath = getBasePath(currentPath)
  return getLocalizedPath(basePath, targetLocale)
}

