export const mods = [
    {
        id: 1,
        title: 'ShowQuestsAreaOnMap',
        description: 'Display item locations and quest locations on the map. The beacon quest isn\'t marked, because that would dampen your urge to explore. I prefer it unmarked—discovery is the heart of this game.',
        imageUrl: '/images/mod-01.webp',
        imageAlt: 'ShowQuestsAreaOnMap Mod',
        publishDate: '2025-10-27',
        addressBar: '/showquestsareaonmap',
        category: 'utility',
        tags: ['UTILITY', 'MAP', 'QUEST', 'LOCATION', 'DISPLAY'],
        seo: {
            title: 'ShowQuestsAreaOnMap - Escape from Duckov Mod',
            description: 'Display item locations and quest locations on the map. The beacon quest isn\'t marked, because that would dampen your urge to explore.',
            keywords: 'Escape from Duckov, Quest Map, Item Locations, Map Display, Utility Mod',
        },
        detailsHtml: `
        <p>This mod displays item locations and quest locations directly on the map, making exploration more efficient while preserving the discovery aspect of the game.</p>
        
        <h2>Features</h2>
        <p><strong>Quest Location Display:</strong> Shows quest objectives and interactive locations on the map.</p>
        <p><strong>Item Location Markers:</strong> Displays item spawn locations for easier looting.</p>
        <p><strong>Preserved Exploration:</strong> Beacon quest remains unmarked to maintain the spirit of discovery.</p>
        
        <h2>Bug Fixes</h2>
        <p><strong>10.26:</strong> Fixed an issue where some sub-map tasks were incorrectly marked</p>
        <p><strong>10.26:</strong> Fixed the issue where container interaction tasks were not displayed</p>
        <p><strong>10.25:</strong> Deliver mission display fix</p>
        <p><strong>10.25:</strong> Fixed display of some interactive task locations</p>
        
        <h2>Installation</h2>
        <p>Download from the mod repository and follow the standard mod installation process for Escape from Duckov.</p>
        
        <h2>Recommendation</h2>
        <p>Recommend a mod that displays item decomposition information for enhanced crafting knowledge.</p>
        `
    },
    
    {
        id: 2,
        title: 'Show inventory Count',
        description: 'Show inventory count in backpack and in storage',
        imageUrl: '/images/mod-02.webp',
        imageAlt: 'Show inventory Count Mod',
        publishDate: '2025-10-27',
        addressBar: '/show-inventory-count',
        category: 'utility',
        tags: ['UTILITY', 'INVENTORY', 'COUNT', 'STORAGE', 'BACKPACK'],
        seo: {
            title: 'Show inventory Count - Escape from Duckov Mod',
            description: 'Show inventory count in backpack and in storage for better inventory management.',
            keywords: 'Escape from Duckov, Inventory Count, Storage Count, Backpack Count, Utility Mod',
        },
        detailsHtml: `
        <p>This mod displays inventory counts in both your backpack and storage containers, making inventory management more efficient.</p>
        
        <h2>Features</h2>
        <p><strong>Backpack Count Display:</strong> Shows the number of items in your backpack.</p>
        <p><strong>Storage Count Display:</strong> Displays item counts in storage containers.</p>
        <p><strong>Real-time Updates:</strong> Count information updates as you move items around.</p>
        
        <h2>Installation</h2>
        <p>Download from the mod repository and follow the standard mod installation process for Escape from Duckov.</p>
        `
    },
    
    {
        id: 3,
        title: 'Better Hydration & Energy HUD',
        description: 'At the water/food "rings," show two lines: Top: Amount needed to fill (difference) Bottom: Current value / Max value (integers, spaced). Per-item controls for X/Y offsets and font size.',
        imageUrl: '/images/mod-03.webp',
        imageAlt: 'Better Hydration & Energy HUD Mod',
        publishDate: '2025-10-27',
        addressBar: '/better-hydration-energy-hud',
        category: 'enhancement',
        tags: ['ENHANCEMENT', 'HUD', 'HYDRATION', 'ENERGY', 'UI'],
        seo: {
            title: 'Better Hydration & Energy HUD - Escape from Duckov Mod',
            description: 'Enhanced hydration and energy HUD display with customizable settings and multilingual support.',
            keywords: 'Escape from Duckov, Hydration HUD, Energy HUD, UI Enhancement, Customizable Display',
        },
        detailsHtml: `
        <p>This mod enhances the hydration and energy display with detailed numerical information and customizable settings.</p>
        
        <h2>Features</h2>
        <p><strong>Dual Line Display:</strong> Shows amount needed to fill (top) and current/max values (bottom).</p>
        <p><strong>Customizable Controls:</strong> Per-item controls for X/Y offsets and font size.</p>
        <p><strong>Multilingual Support:</strong> Chinese (default) and English language options.</p>
        <p><strong>Performance Optimized:</strong> Auto high/low refresh with very low performance cost.</p>
        <p><strong>Resolution Adaptive:</strong> Works across different screen resolutions.</p>
        
        <h2>Installation</h2>
        <p><strong>Steam Workshop:</strong> Subscribe to the mod on Steam Workshop.</p>
        <p><strong>Install Location:</strong> Files are located at SteamLibrary\\steamapps\\workshop\\content\\3167020\\3591875771</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/DoreiHime/Better-Hydration-Energy-HUD" target="_blank">https://github.com/DoreiHime/Better-Hydration-Energy-HUD</a></p>
        
        <h2>Controls</h2>
        <p><strong>F10:</strong> Open/close mod settings panel (auto-saves)</p>
        <p><strong>Reset to Default:</strong> Button provided at the top of settings panel</p>
        
        <h2>Language Switching</h2>
        <p><strong>Chinese (Default):</strong> No action needed</p>
        <p><strong>English:</strong> Replace BetterHydrationEnergyHUD.dll with the English version from the language subfolder</p>
        <p><strong>Note:</strong> Steam Workshop updates may overwrite replaced DLL files</p>
        
        <h2>Compatibility</h2>
        <p><strong>No Dependencies:</strong> Works independently without other mods</p>
        <p><strong>No Asset Modification:</strong> Does not modify game UI assets</p>
        <p><strong>Known Issues:</strong> May conflict with mods that replace HUDCanvas or hide ring icons</p>
        
        <h2>FAQ</h2>
        <p><strong>Can't see numbers:</strong> Ensure mod is enabled, press F10 to open settings, click Reset</p>
        <p><strong>Panel doesn't fit:</strong> Use mouse wheel to scroll on low resolutions</p>
        <p><strong>Show only one line:</strong> Toggle respective Show option in settings</p>
        <p><strong>Black screen display:</strong> Known issue when entering/exiting scenes, will be fixed</p>
        `
    },
    
    {
        id: 4,
        title: 'Show The Cost',
        description: 'Shows the cost! github: https://github.com/xvrsl/duckov_modding (Name suggested by @Sola [RU]) by xvrsl',
        imageUrl: '/images/mod-04.webp',
        imageAlt: 'Show The Cost Mod',
        publishDate: '2025-10-27',
        addressBar: '/show-the-cost',
        category: 'utility',
        tags: ['UTILITY', 'COST', 'DISPLAY', 'ITEMS', 'UI'],
        seo: {
            title: 'Show The Cost - Escape from Duckov Mod',
            description: 'Shows the cost of items in-game! github: https://github.com/xvrsl/duckov_modding (Name suggested by @Sola [RU]) by xvrsl',
            keywords: 'Escape from Duckov, Show Cost Mod, Item Cost, UI Mod, Utility Mod',
        },
        detailsHtml: `
        <p>This mod displays the cost of items directly in-game, making it easier to evaluate loot value without external tools.</p>
        
        <h2>Features</h2>
        <p><strong>Item Cost Display:</strong> Shows the monetary value of items in your inventory and containers.</p>
        <p><strong>Real-time Updates:</strong> Cost information updates dynamically as you move items around.</p>
        <p><strong>Compatibility:</strong> Works with all item types and containers.</p>
        
        <h2>Installation</h2>
        <p><strong>GitHub:</strong> <a href="https://github.com/xvrsl/duckov_modding" target="_blank">https://github.com/xvrsl/duckov_modding</a></p>
        <p>Download from the GitHub repository and follow the standard mod installation process for Escape from Duckov.</p>
        
        <h2>Author</h2>
        <p>Created by xvrsl, name suggested by @Sola [RU]</p>
        `
    }
]