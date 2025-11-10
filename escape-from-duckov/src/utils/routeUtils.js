import { supportedLanguages } from '../i18n'

/**
 * 从路径中提取基础路径（移除语言前缀）
 */
export function getBasePath(path) {
  let basePath = path || '/'
  if (!basePath.startsWith('/')) {
    basePath = `/${basePath}`
  }
  
  // 匹配 /xx/ 或 /xx 等语言前缀（exclude en）
  const langMatch = basePath.match(/^\/([a-z]{2})(?=\/|$|[?#])/)
  if (langMatch) {
    const lang = langMatch[1]
    if (lang !== 'en' && supportedLanguages.includes(lang)) {
      basePath = basePath.substring(langMatch[0].length) || '/'
    }
  }
  
  if (!basePath.startsWith('/')) {
    basePath = `/${basePath}`
  }
  
  return basePath || '/'
}

/**
 * 根据语言生成完整路径
 * @param {string} basePath - 基础路径
 * @param {string} locale - 语言代码
 * @returns {string} 完整路径
 */
export function getLocalizedPath(basePath, locale = 'en') {
  const normalizedPath = basePath ? (basePath.startsWith('/') ? basePath : `/${basePath}`) : '/'
  if (locale === 'en') {
    return normalizedPath
  }
  const cleanPath = normalizedPath === '/' ? '' : normalizedPath
  return `/${locale}${cleanPath}`
}

/**
 * 切换语言后的路径
 */
export function switchLanguagePath(currentPath, targetLocale) {
  const basePath = getBasePath(currentPath)
  return getLocalizedPath(basePath, targetLocale)
}


