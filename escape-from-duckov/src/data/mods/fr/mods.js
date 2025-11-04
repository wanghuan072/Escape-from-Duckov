export default [
    {
        id: 1,
        title: 'ShowQuestsAreaOnMap (Afficher la Zone de Quêtes sur la Carte)',
        description: 'Affiche les emplacements des objets et des quêtes sur la carte. La quête de balise n\'est pas marquée, car cela freinerait votre envie d\'explorer. Je préfère qu\'elle ne soit pas marquée—la découverte est le cœur de ce jeu.',
        imageUrl: '/images/mod-01.webp',
        imageAlt: 'Mod Afficher la Zone de Quêtes sur la Carte',
        publishDate: '2025-10-27',
        addressBar: '/showquestsareaonmap',
        category: 'utility (utilitaire)',
        tags: ['UTILITAIRE', 'CARTE', 'QUÊTE', 'EMPLACEMENT', 'AFFICHAGE'],
        seo: {
            title: 'ShowQuestsAreaOnMap - Mod Escape from Duckov',
            description: 'Affiche les emplacements des objets et des quêtes sur la carte. La quête de balise n\'est pas marquée, car cela freinerait votre envie d\'explorer.',
            keywords: 'Escape from Duckov, Carte de Quête, Emplacements d\'Objets, Affichage de Carte, Mod Utilitaire',
        },
        detailsHtml: `
        <p>Ce mod affiche les **emplacements des objets et des quêtes** directement sur la carte, rendant l'exploration plus efficace tout en préservant l'aspect de découverte du jeu.</p>
        
        <h2>Fonctionnalités</h2>
        <p><strong>Affichage de l'Emplacement des Quêtes:</strong> Montre les objectifs de quête et les lieux interactifs sur la carte.</p>
        <p><strong>Marqueurs d'Emplacement d'Objets:</strong> Affiche les lieux d'apparition des objets pour un pillage plus facile.</p>
        <p><strong>Exploration Préservée:</strong> La quête de balise reste non marquée pour maintenir l'esprit de découverte.</p>
        
        <h2>Corrections de Bugs</h2>
        <p><strong>26.10:</strong> Correction d'un problème où certaines tâches de sous-carte étaient incorrectement marquées.</p>
        <p><strong>26.10:</strong> Correction du problème où les tâches d'interaction avec les conteneurs n'étaient pas affichées.</p>
        <p><strong>25.10:</strong> Correction de l'affichage des missions de livraison.</p>
        <p><strong>25.10:</strong> Correction de l'affichage de certains emplacements de tâches interactives.</p>
        
        <h2>Installation</h2>
        <p>Téléchargez depuis le répertoire de mods et suivez le processus d'installation standard des mods pour Escape from Duckov.</p>
        
        <h2>Recommandation</h2>
        <p>Recommander un mod qui affiche les informations de **décomposition des objets** pour améliorer les connaissances en artisanat.</p>
        `
    },
    
    {
        id: 2,
        title: 'Show inventory Count (Afficher le Compte d\'Inventaire)',
        description: 'Affiche le compte d\'inventaire dans le sac à dos et dans le stockage.',
        imageUrl: '/images/mod-02.webp',
        imageAlt: 'Mod Afficher le Compte d\'Inventaire',
        publishDate: '2025-10-27',
        addressBar: '/show-inventory-count',
        category: 'utility (utilitaire)',
        tags: ['UTILITAIRE', 'INVENTAIRE', 'COMPTE', 'STOCKAGE', 'SAC À DOS'],
        seo: {
            title: 'Show inventory Count - Mod Escape from Duckov',
            description: 'Affiche le compte d\'inventaire dans le sac à dos et dans le stockage pour une meilleure gestion de l\'inventaire.',
            keywords: 'Escape from Duckov, Compte d\'Inventaire, Compte de Stockage, Compte de Sac à Dos, Mod Utilitaire',
        },
        detailsHtml: `
        <p>Ce mod affiche le **compte d'inventaire** à la fois dans votre sac à dos et dans les conteneurs de stockage, rendant la gestion de l'inventaire plus efficace.</p>
        
        <h2>Fonctionnalités</h2>
        <p><strong>Affichage du Compte du Sac à Dos:</strong> Montre le nombre d'objets dans votre sac à dos.</p>
        <p><strong>Affichage du Compte de Stockage:</strong> Affiche le compte des objets dans les conteneurs de stockage.</p>
        <p><strong>Mises à Jour en Temps Réel:</strong> Les informations de compte se mettent à jour lorsque vous déplacez des objets.</p>
        
        <h2>Installation</h2>
        <p>Téléchargez depuis le répertoire de mods et suivez le processus d'installation standard des mods pour Escape from Duckov.</p>
        `
    },
    
    {
        id: 3,
        title: 'Better Hydration & Energy HUD (Meilleur HUD d\'Hydratation et d\'Énergie)',
        description: 'Aux "anneaux" d\'eau/nourriture, affiche deux lignes: Haut: Quantité nécessaire pour remplir (différence) Bas: Valeur actuelle / Valeur maximale (nombres entiers, espacés). Contrôles par objet pour les décalages X/Y et la taille de la police.',
        imageUrl: '/images/mod-03.webp',
        imageAlt: 'Mod Meilleur HUD d\'Hydratation et d\'Énergie',
        publishDate: '2025-10-27',
        addressBar: '/better-hydration-energy-hud',
        category: 'enhancement (amélioration)',
        tags: ['AMÉLIORATION', 'HUD', 'HYDRATATION', 'ÉNERGIE', 'UI'],
        seo: {
            title: 'Better Hydration & Energy HUD - Mod Escape from Duckov',
            description: 'Affichage HUD d\'hydratation et d\'énergie amélioré avec des paramètres personnalisables et un support multilingue.',
            keywords: 'Escape from Duckov, HUD d\'Hydratation, HUD d\'Énergie, Amélioration de l\'UI, Affichage Personnalisable',
        },
        detailsHtml: `
        <p>Ce mod améliore l'affichage de l'hydratation et de l'énergie avec des **informations numériques détaillées** et des **paramètres personnalisables**.</p>
        
        <h2>Fonctionnalités</h2>
        <p><strong>Affichage Double Ligne:</strong> Montre la quantité nécessaire pour remplir (haut) et les valeurs actuelles/maximales (bas).</p>
        <p><strong>Contrôles Personnalisables:</strong> Contrôles par objet pour les décalages X/Y et la taille de la police.</p>
        <p><strong>Support Multilingue:</strong> Options de langue chinoise (par défaut) et anglaise.</p>
        <p><strong>Performance Optimisée:</strong> Rafraîchissement automatique haut/bas avec un **très faible coût de performance**.</p>
        <p><strong>Adaptatif à la Résolution:</strong> Fonctionne sur différentes résolutions d'écran.</p>
        
        <h2>Installation</h2>
        <p><strong>Steam Workshop:</strong> Abonnez-vous au mod sur Steam Workshop.</p>
        <p><strong>Emplacement d'Installation:</strong> Les fichiers se trouvent dans SteamLibrary\\steamapps\\workshop\\content\\3167020\\3591875771</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/DoreiHime/Better-Hydration-Energy-HUD" target="_blank">https://github.com/DoreiHime/Better-Hydration-Energy-HUD</a></p>
        
        <h2>Contrôles</h2>
        <p><strong>F10:</strong> Ouvrir/fermer le panneau de paramètres du mod (**sauvegarde automatique**)</p>
        <p><strong>Réinitialiser aux Paramètres par Défaut:</strong> Bouton fourni en haut du panneau de paramètres</p>
        
        <h2>Changement de Langue</h2>
        <p><strong>Chinois (Par Défaut):</strong> Aucune action nécessaire</p>
        <p><strong>Anglais:</strong> Remplacez BetterHydrationEnergyHUD.dll par la version anglaise du sous-dossier de langue</p>
        <p><strong>Note:</strong> Les mises à jour de Steam Workshop peuvent écraser les fichiers DLL remplacés</p>
        
        <h2>Compatibilité</h2>
        <p><strong>Aucune Dépendance:</strong> Fonctionne indépendamment sans autres mods</p>
        <p><strong>Aucune Modification d'Actif:</strong> Ne modifie pas les actifs de l'interface utilisateur du jeu</p>
        <p><strong>Problèmes Connus:</strong> Peut entrer en conflit avec des mods qui remplacent HUDCanvas ou masquent les icônes d'anneau</p>
        
        <h2>FAQ</h2>
        <p><strong>Impossible de voir les nombres:</strong> Assurez-vous que le mod est activé, appuyez sur F10 pour ouvrir les paramètres, cliquez sur Réinitialiser</p>
        <p><strong>Le panneau ne rentre pas:</strong> Utilisez la molette de la souris pour faire défiler sur des résolutions basses</p>
        <p><strong>Afficher une seule ligne:</strong> Basculez l'option Afficher respective dans les paramètres</p>
        <p><strong>Affichage d'écran noir:</strong> Problème connu lors de l'entrée/sortie de scènes, sera corrigé</p>
        `
    },
    
    {
        id: 4,
        title: 'Show The Cost (Afficher le Coût)',
        description: 'Affiche le coût! github: https://github.com/xvrsl/duckov_modding (Nom suggéré par @Sola [RU]) par xvrsl',
        imageUrl: '/images/mod-04.webp',
        imageAlt: 'Mod Afficher le Coût',
        publishDate: '2025-10-27',
        addressBar: '/show-the-cost',
        category: 'utility (utilitaire)',
        tags: ['UTILITAIRE', 'COÛT', 'AFFICHAGE', 'OBJETS', 'UI'],
        seo: {
            title: 'Show The Cost - Mod Escape from Duckov',
            description: 'Affiche le coût des objets en jeu! github: https://github.com/xvrsl/duckov_modding (Nom suggéré par @Sola [RU]) par xvrsl',
            keywords: 'Escape from Duckov, Mod Afficher le Coût, Coût d\'Objet, Mod UI, Mod Utilitaire',
        },
        detailsHtml: `
        <p>Ce mod affiche le **coût des objets** directement en jeu, ce qui facilite l'évaluation de la valeur du butin sans outils externes.</p>
        
        <h2>Fonctionnalités</h2>
        <p><strong>Affichage du Coût de l'Objet:</strong> Montre la valeur monétaire des objets dans votre inventaire et vos conteneurs.</p>
        <p><strong>Mises à Jour en Temps Réel:</strong> Les informations de coût se mettent à jour dynamiquement lorsque vous déplacez des objets.</p>
        <p><strong>Compatibilité:</strong> Fonctionne avec tous les types d'objets et de conteneurs.</p>
        
        <h2>Installation</h2>
        <p><strong>GitHub:</strong> <a href="https://github.com/xvrsl/duckov_modding" target="_blank">https://github.com/xvrsl/duckov_modding</a></p>
        <p>Téléchargez depuis le dépôt GitHub et suivez le processus d'installation standard des mods pour Escape from Duckov.</p>
        
        <h2>Auteur</h2>
        <p>Créé par **xvrsl**, nom suggéré par @Sola [RU]</p>
        `
    }
]

