export default [
    {
        id: 1,
        title: 'ShowQuestsAreaOnMap (マップにクエストエリアを表示)',
        description: 'アイテムの場所とクエストの場所をマップに表示します。ビーコンクエストは、探索意欲を削ぐことになるためマークされていません。未マークのままにしておくことを好みます—発見こそがこのゲームの醍醐味です。',
        imageUrl: '/images/mod-01.webp',
        imageAlt: 'ShowQuestsAreaOnMap Mod',
        publishDate: '2025-10-27',
        addressBar: '/showquestsareaonmap',
        category: 'utility (ユーティリティ)',
        tags: ['UTILITY', 'MAP', 'QUEST', 'LOCATION', 'DISPLAY'],
        seo: {
            title: 'ShowQuestsAreaOnMap - Escape from Duckov Mod',
            description: 'アイテムの場所とクエストの場所をマップに表示します。ビーコンクエストは、探索意欲を削ぐことになるためマークされていません。',
            keywords: 'Escape from Duckov, クエストマップ, アイテムの場所, マップ表示, ユーティリティMod',
        },
        detailsHtml: `
        <p>このModは、**アイテムの場所とクエストの場所**をマップに直接表示し、ゲームの発見という側面を維持しつつ、探索をより効率的にします。</p>
        
        <h2>機能</h2>
        <p><strong>クエストの場所表示:</strong> クエストの目的とインタラクティブな場所をマップに表示します。</p>
        <p><strong>アイテムの場所マーカー:</strong> アイテムのスポーン位置を表示し、ルート収集を容易にします。</p>
        <p><strong>探索の維持:</strong> 発見の精神を保つため、ビーコンクエストは未マークのままです。</p>
        
        <h2>バグ修正</h2>
        <p><strong>10.26:</strong> 一部のサブマップタスクが誤ってマークされていた問題を修正</p>
        <p><strong>10.26:</strong> コンテナインタラクションタスクが表示されない問題を修正</p>
        <p><strong>10.25:</strong> 配送ミッションの表示を修正</p>
        <p><strong>10.25:</strong> 一部のインタラクティブなタスク位置の表示を修正</p>
        
        <h2>インストール</h2>
        <p>Modリポジトリからダウンロードし、Escape from Duckovの標準的なModインストールプロセスに従ってください。</p>
        
        <h2>推奨</h2>
        <p>クラフト知識向上のために、**アイテムの分解情報**を表示するModを推奨します。</p>
        `
    },
    
    {
        id: 2,
        title: 'Show inventory Count (インベントリ数を表示)',
        description: 'バックパックとストレージ内のインベントリ数を表示します。',
        imageUrl: '/images/mod-02.webp',
        imageAlt: 'Show inventory Count Mod',
        publishDate: '2025-10-27',
        addressBar: '/show-inventory-count',
        category: 'utility (ユーティリティ)',
        tags: ['UTILITY', 'INVENTORY', 'COUNT', 'STORAGE', 'BACKPACK'],
        seo: {
            title: 'Show inventory Count - Escape from Duckov Mod',
            description: 'より良いインベントリ管理のために、バックパックとストレージ内のインベントリ数を表示します。',
            keywords: 'Escape from Duckov, インベントリ数, ストレージ数, バックパック数, ユーティリティMod',
        },
        detailsHtml: `
        <p>このModは、バックパックとストレージコンテナの両方で**インベントリ数**を表示し、インベントリ管理をより効率的にします。</p>
        
        <h2>機能</h2>
        <p><strong>バックパック数の表示:</strong> バックパック内のアイテム数を表示します。</p>
        <p><strong>ストレージ数の表示:</strong> ストレージコンテナ内のアイテム数を表示します。</p>
        <p><strong>リアルタイム更新:</strong> アイテムを移動するたびにカウント情報が更新されます。</p>
        
        <h2>インストール</h2>
        <p>Modリポジトリからダウンロードし、Escape from Duckovの標準的なModインストールプロセスに従ってください。</p>
        `
    },
    
    {
        id: 3,
        title: 'Better Hydration & Energy HUD (より良い水分・エネルギーHUD)',
        description: '水分/食料の「リング」に2行表示します: 上: 満タンに必要な量（差分） 下: 現在値 / 最大値（整数、スペース区切り）。X/Yオフセットとフォントサイズをアイテムごとに制御できます。',
        imageUrl: '/images/mod-03.webp',
        imageAlt: 'Better Hydration & Energy HUD Mod',
        publishDate: '2025-10-27',
        addressBar: '/better-hydration-energy-hud',
        category: 'enhancement (機能強化)',
        tags: ['ENHANCEMENT', 'HUD', 'HYDRATION', 'ENERGY', 'UI'],
        seo: {
            title: 'Better Hydration & Energy HUD - Escape from Duckov Mod',
            description: 'カスタマイズ可能な設定と多言語サポートを備えた、強化された水分・エネルギーHUD表示。',
            keywords: 'Escape from Duckov, 水分HUD, エネルギーHUD, UI強化, カスタマイズ可能な表示',
        },
        detailsHtml: `
        <p>このModは、詳細な**数値情報**と**カスタマイズ可能な設定**により、水分とエネルギーの表示を強化します。</p>
        
        <h2>機能</h2>
        <p><strong>2行表示:</strong> 満タンに必要な量（上）と現在値/最大値（下）を表示します。</p>
        <p><strong>カスタマイズ可能な制御:</strong> X/Yオフセットとフォントサイズをアイテムごとに制御できます。</p>
        <p><strong>多言語サポート:</strong> 中国語（デフォルト）と英語の言語オプション。</p>
        <p><strong>パフォーマンス最適化:</strong> 非常に低いパフォーマンスコストで自動高/低リフレッシュ。</p>
        <p><strong>解像度適応型:</strong> さまざまな画面解像度で動作します。</p>
        
        <h2>インストール</h2>
        <p><strong>Steam Workshop:</strong> Steam WorkshopでModを購読してください。</p>
        <p><strong>インストール場所:</strong> ファイルは SteamLibrary\\steamapps\\workshop\\content\\3167020\\3591875771 にあります。</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/DoreiHime/Better-Hydration-Energy-HUD" target="_blank">https://github.com/DoreiHime/Better-Hydration-Energy-HUD</a></p>
        
        <h2>操作</h2>
        <p><strong>F10:</strong> Mod設定パネルを開く/閉じる（**自動保存**されます）</p>
        <p><strong>デフォルトにリセット:</strong> 設定パネルの上部にボタンがあります</p>
        
        <h2>言語切り替え</h2>
        <p><strong>中国語（デフォルト）:</strong> アクションは不要です</p>
        <p><strong>英語:</strong> BetterHydrationEnergyHUD.dll を言語サブフォルダ内の英語版に置き換えてください</p>
        <p><strong>注:</strong> Steam Workshopのアップデートにより、置き換えたDLLファイルが上書きされる場合があります</p>
        
        <h2>互換性</h2>
        <p><strong>依存関係なし:</strong> 他のModとは独立して動作します</p>
        <p><strong>アセットの変更なし:</strong> ゲームのUIアセットを変更しません</p>
        <p><strong>既知の問題:</strong> HUDCanvasを置き換えたり、リングアイコンを非表示にしたりするModと競合する可能性があります</p>
        
        <h2>FAQ</h2>
        <p><strong>数字が見えない:</strong> Modが有効になっていることを確認し、F10を押して設定を開き、リセットをクリックしてください</p>
        <p><strong>パネルが収まらない:</strong> 低解像度の場合はマウスホイールを使用してスクロールしてください</p>
        <p><strong>1行のみ表示:</strong> 設定で対応する「表示」オプションを切り替えてください</p>
        <p><strong>ブラックスクリーン表示:</strong> シーンの出入り時に発生する既知の問題で、修正予定です</p>
        `
    },
    
    {
        id: 4,
        title: 'Show The Cost (コストを表示)',
        description: 'コストを表示します！ github: https://github.com/xvrsl/duckov_modding （名前は @Sola [RU]が提案）by xvrsl',
        imageUrl: '/images/mod-04.webp',
        imageAlt: 'Show The Cost Mod',
        publishDate: '2025-10-27',
        addressBar: '/show-the-cost',
        category: 'utility (ユーティリティ)',
        tags: ['UTILITY', 'COST', 'DISPLAY', 'ITEMS', 'UI'],
        seo: {
            title: 'Show The Cost - Escape from Duckov Mod',
            description: 'ゲーム内のアイテムのコストを表示します！ github: https://github.com/xvrsl/duckov_modding （名前は @Sola [RU]が提案）by xvrsl',
            keywords: 'Escape from Duckov, コスト表示Mod, アイテムコスト, UI Mod, ユーティリティMod',
        },
        detailsHtml: `
        <p>このModは、**アイテムのコスト**をゲーム内に直接表示し、外部ツールなしでルートの価値を簡単に評価できるようにします。</p>
        
        <h2>機能</h2>
        <p><strong>アイテムコスト表示:</strong> インベントリとコンテナ内のアイテムの金銭的価値を表示します。</p>
        <p><strong>リアルタイム更新:</strong> アイテムを移動するたびにコスト情報が動的に更新されます。</p>
        <p><strong>互換性:</strong> すべてのアイテムタイプとコンテナで動作します。</p>
        
        <h2>インストール</h2>
        <p><strong>GitHub:</strong> <a href="https://github.com/xvrsl/duckov_modding" target="_blank">https://github.com/xvrsl/duckov_modding</a></p>
        <p>GitHubリポジトリからダウンロードし、Escape from Duckovの標準的なModインストールプロセスに従ってください。</p>
        
        <h2>作者</h2>
        <p>**xvrsl**によって作成され、名前は @Sola [RU]が提案しました</p>
        `
    }
]

