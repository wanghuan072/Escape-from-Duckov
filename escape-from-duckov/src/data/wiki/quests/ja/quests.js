export default [
    {
        id: 1,
        title: 'インフラストラクチャー',
        description: 'インフラストラクチャーはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'インフラストラクチャー クエスト',
        publishDate: '2025-10-27',
        addressBar: '/infrastructure',
        showDetail: true,
        rewards: [
            '1000 経験値',
            '500 お金',
            '3 包帯'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: '-'
            },
            {
                label: '次',
                value: '出血を止める, 信号塔'
            }
        ],
        seo: {
            title: 'インフラストラクチャー クエスト - Escape from Duckov',
            description: 'インフラストラクチャーはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, インフラストラクチャー, ジェフ クエスト, 基本作業台, 木材',
        },
        detailsHtml: `
            <h2>インフラストラクチャー</h2>
            <p>インフラストラクチャーはEscape From Duckovのクエストです。</p>
            
            <h3>ダイアログ</h3>
            <p>木材を2つ集めて、基本作業台を建設してください。近くに敵がいるので、遠くへは行かないでください。材料が揃ったら、自動販売機の隣にある建築パネルを確認してください。</p>
            
            <h3>タスク</h3>
            <ul>
                <li>基本作業台を建設する</li>
            </ul>
            
            <h3>報酬</h3>
            <ul>
                <li>+1000 経験値</li>
                <li>500 お金</li>
                <li>3 包帯</li>
            </ul>
            
            <h3>クエストガイド</h3>
            <p>このクエストでは、**木材**を**2つ**見つけて**基本作業台**を建設する必要があります。</p>
            `
    },
    {
        id: 2,
        title: '拡張ポケット',
        description: '拡張ポケットはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '拡張ポケット クエスト',
        publishDate: '2025-10-27',
        addressBar: '/expansion-pocket',
        showDetail: true,
        rewards: [
            '+1000 経験値',
            '500 お金'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: '-'
            },
            {
                label: '次',
                value: '愛がいっぱい, 新しいハンター'
            }
        ],
        seo: {
            title: '拡張ポケット クエスト - Escape from Duckov',
            description: '拡張ポケットはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 拡張ポケット, ジェフ クエスト, 所持制限, スキル強化機',
        },
        detailsHtml: `
            <h2>拡張ポケット</h2>
            <p>拡張ポケットはEscape From Duckovのクエストです。</p>
            
            <h3>ダイアログ</h3>
            <p>今はあまり多くのものを持ち運べません。隣の部屋にある**スキル強化機**を使って所持容量を増やすことができます。ただし、アップグレードにはいくつかの材料が必要です。自動販売機をチェックしてみてください。</p>
            
            <h3>タスク</h3>
            <ul>
                <li>所持制限: 1 をアンロックする</li>
            </ul>
            
            <h3>報酬</h3>
            <ul>
                <li>+1000 経験値</li>
                <li>500 お金</li>
            </ul>
            
            <h3>クエストガイド</h3>
            <p>このクエストでは、**スキル強化機**に行き、**スキル「所持制限: 1」**をリサーチする必要があります。</p>
            `
    },
    {
        id: 3,
        title: '新しいハンター',
        description: '新しいハンターはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '新しいハンター クエスト',
        publishDate: '2025-10-27',
        addressBar: '/a-new-hunter',
        showDetail: true,
        rewards: [
            '+2000 経験値',
            '380 お金',
            '2 金属板',
            '1 ナット',
            '1 ボルト'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: '拡張ポケット'
            },
            {
                label: '次',
                value: '医療品, 頭を狙え'
            }
        ],
        seo: {
            title: '新しいハンター クエスト - Escape from Duckov',
            description: '新しいハンターはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 新しいハンター, ジェフ クエスト, 暴走スカベンジャー, クリーバー',
        },
        detailsHtml: `
            <h2>新しいハンター</h2>
            <p>新しいハンターはEscape From Duckovのクエストです。</p>
            
            <h3>ダイアログ</h3>
            <p>良い武器を持っているなら、暴走している**スカベンジャー**、**クリーバー**を持っている奴らを追ってみることができます。</p>
            
            <h3>タスク</h3>
            <ul>
                <li>キル: 暴走スカベンジャー 2体</li>
                <li>アイテムを提出: クリーバー 2個</li>
            </ul>
            
            <h3>報酬</h3>
            <ul>
                <li>+2000 経験値</li>
                <li>380 お金</li>
                <li>2 金属板</li>
                <li>1 ナット</li>
                <li>1 ボルト</li>
            </ul>
            
            <h3>クエストガイド</h3>
            <p>このクエストでは、**暴走スカベンジャー**を**2体**倒し、**クリーバー**を**2個**渡す必要があります。</p>
            `
    },
    {
        id: 4,
        title: '愛がいっぱい',
        description: '愛がいっぱいはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '愛がいっぱい',
        publishDate: '2025-10-27',
        addressBar: '/full-of-love',
        showDetail: true,
        rewards: ["500 経験値"],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: '拡張ポケット'
            },
            {
                label: '次',
                value: '-'
            }
        ],
        seo: {
            title: '愛がいっぱい - Escape from Duckov',
            description: '愛がいっぱいはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 愛がいっぱい, ジェフ クエスト, 暴走スカベンジャー, クリーバー',
        },
        detailsHtml: `
            <h2>愛がいっぱい</h2>
            <p>愛がいっぱいはEscape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p></p>
            <h3>タスク</h3>
            <ul>
                <li>アイテムを提出: 1888 お金</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>500 経験値</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**1888 お金**を**ジェフ**に渡す必要があります。</p>
            `
    },
    {
        id: 5,
        title: '出血を止める',
        description: '出血を止めるはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '出血を止める',
        publishDate: '2025-10-27',
        addressBar: '/stop-bleeding',
        showDetail: true,
        rewards: [
            '+1500 経験値',
            '300 お金',
            '1 薬の山',
            'マーチャンダイズ アスピリンをアンロック'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: 'インフラストラクチャー'
            },
            {
                label: '次',
                value: 'インフラストラクチャー - 医療'
            }
        ],
        seo: {
            title: '出血を止める クエスト - Escape from Duckov',
            description: '出血を止めるはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 出血を止める, ジェフ クエスト, 包帯, 出血',
        },
        detailsHtml: `
            <h2>出血を止める</h2>
            <p>出血を止めるはEscape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>出血は非常に致命的です。すぐに死ぬわけではありませんが、時間内に出血を止めないとHPを失い続けます。**包帯**は出血を止めるための最も簡単なツールです。それを使って出血を止めようとしてください。包帯が見つからない場合は、自動販売機から購入できます。</p>
            <h3>タスク</h3>
            <ul>
                <li>アイテムを使用: 包帯 1個</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>+1500 経験値</li>
                <li>300 お金</li>
                <li>1 薬の山</li>
                <li>マーチャンダイズ アスピリンをアンロック</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**包帯**を使用する必要があります。<br/>注: 包帯は負傷しているときのみ使用できます。</p>
            `
    },
    {
        id: 6,
        title: '信号塔',
        description: '信号塔はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '信号塔',
        publishDate: '2025-10-27',
        addressBar: '/signal-tower',
        showDetail: true,
        rewards: [
            '+2500 経験値',
            '450 お金'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: 'インフラストラクチャー'
            },
            {
                label: '次',
                value: 'インフラストラクチャー - パート2 古い友人からの手紙'
            }
        ],
        seo: {
            title: '信号塔 クエスト - Escape from Duckov',
            description: '信号塔はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 信号塔, ジェフ クエスト, マイナスドライバー, 信号塔',
        },
        detailsHtml: `
            <h2>信号塔</h2>
            <p>信号塔はEscape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>物資を届ける商人を手配しましたが、バンカーの東にある**信号塔**が故障しているようです。彼らに連絡できません - 修理に行ってくれませんか？**マイナスドライバー**を持ってきてください。近くの自動販売機で売っています。</p>
            <h3>タスク</h3>
            <ul>
                <li>北側にある**信号塔**を修理する</li>
                <li style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <img src="/images/wiki/quests06-01.webp" alt="信号塔" />
                    <img src="/images/wiki/quests06-02.webp" alt="信号塔" />
                </li>
                
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>+2500 経験値</li>
                <li>450 お金</li>
            </ul>
            <h3>必要なアイテム</h3>
            <table>
                <tr>
                    <th>アイコン</th>
                    <th>アイテム名</th>
                    <th>数量</th>
                    <th>使用方法</th>
                </tr>
                <tr>
                    <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests06-03.webp" alt="信号塔" /></td>
                    <td>ドライバー</td>
                    <td>1</td>
                    <td>修理に使用する必要があります。</td>
                </tr>
            </table>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**バンカーの入り口の東にある信号塔**を修理する必要があります。</p>
            `
    },
    {
        id: 7,
        title: 'インフラストラクチャー - パート2',
        description: 'インフラストラクチャー - パート2はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'インフラストラクチャー - パート2',
        publishDate: '2025-10-27',
        addressBar: '/infrastructure-part-2',
        showDetail: true,
        rewards: [
            "1000 経験値",
            "1500 お金"
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: 'インフラストラクチャー'
            },
            {
                label: '次',
                value: 'インフラストラクチャー - パート4 部品卸売'
            }
        ],
        seo: {
            title: 'インフラストラクチャー - パート2 クエスト - Escape from Duckov',
            description: 'インフラストラクチャー - パート2はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, インフラストラクチャー - パート2, ジェフ クエスト, 武器店, 建設',
        },
        detailsHtml: `
            <h2>インフラストラクチャー - パート2</h2>
            <p>インフラストラクチャー - パート2はEscape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>信号塔を直してくれたおかげで、古い友人と連絡が取れました。彼は銃器商人です。彼が提案をしてきました。もし私たちが**武器店**を建設できれば、彼はすぐに引っ越してきてくれるとのことです。</p>
            <h3>タスク</h3>
            <ul>
                <li>武器店を建設する</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>1000 経験値</li>
                <li>1500 お金</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**武器店**を建設する必要があります。</p>
            `
    },
    {
        id: 8,
        title: '古い友人からの手紙',
        description: '古い友人からの手紙はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '古い友人からの手紙',
        publishDate: '2025-10-27',
        addressBar: '/a-letter-from-an-old-friend',
        showDetail: true,
        rewards: [
            '+2500 経験値',
            '450 お金'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: '信号塔'
            },
            {
                label: '次',
                value: 'インフラストラクチャー - パート3'
            }
        ],
        seo: {
            title: '古い友人からの手紙 クエスト - Escape from Duckov',
            description: '古い友人からの手紙はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 古い友人からの手紙, ジェフ クエスト, 古い友人からの手紙, 古い友人からの手紙',
        },
        detailsHtml: `
            <h2>古い友人からの手紙</h2>
            <p>古い友人からの手紙はEscape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>???</p>
            <h3>タスク</h3>
            <ul>
                <li>アイテムを提出: 古い友人からの手紙</li>
                <img src="/images/wiki/quests08-01.webp" alt="古い友人からの手紙" />
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>+2500 経験値</li>
                <li>450 お金</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**古い友人からの手紙**を渡す必要があります。</p>
            `
    },
    {
        id: 9,
        title: '医療品',
        description: '医療品はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '医療品',
        publishDate: '2025-10-27',
        addressBar: '/medical-supplies',
        showDetail: true,
        rewards: [
            '+2500 経験値',
            '2 応急処置キット "S"',
            '450 お金',
            'マーチャンダイズ 応急処置キット "S"をアンロック'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: '新しいハンター'
            },
            {
                label: '次',
                value: 'たぶん一般薬'
            }
        ],
        seo: {
            title: '医療品 クエスト - Escape from Duckov',
            description: '医療品はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 医療品, ジェフ クエスト, 応急処置キット S, 医療品',
        },
        detailsHtml: `
            <h2>医療品</h2>
            <p>医療品はEscape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>**医療品**はDuckovでは非常に重要です。今、**応急処置キット S**がいくつか必要です。見つけるか、**医療ステーション**でクラフトすることができます。</p>
            <h3>タスク</h3>
            <ul>
                <li>アイテムを提出: 応急処置キット "S" 3個</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>2500 経験値</li>
                <li>2 応急処置キット "S"</li>
                <li>450 お金</li>
                <li>マーチャンダイズ 応急処置キット "S"をアンロック</li>
            </ul>
            <h3>必要なアイテム</h3>
            <table>
                <tr>
                    <th>アイコン</th>
                    <th>アイテム名</th>
                    <th>数量</th>
                    <th>使用方法</th>
                </tr>
                <tr>
                    <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests09-01.webp" alt="医療品" /></td>
                    <td>応急処置キット S</td>
                    <td>3</td>
                    <td>提出する必要があります。</td>
                </tr>
            </table>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**応急処置キット "S"**を**3個**ジェフに渡す必要があります。</p>
            `
    },
    {
        id: 10,
        title: '頭を狙え',
        description: '頭を狙えはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '頭を狙え',
        publishDate: '2025-10-27',
        addressBar: '/aim-for-the-head',
        showDetail: true,
        rewards: [
            '+2000 経験値',
            '500 お金'
        ],
        rightContent: [
            {
                label: '依頼者',
                value: 'ジェフ'
            },
            {
                label: '前',
                value: 'インフラストラクチャー'
            },
            {
                label: '次',
                value: 'インフラストラクチャー - パート2 古い友人からの手紙'
            }
        ],
        seo: {
            title: '頭を狙え クエスト - Escape from Duckov',
            description: '頭を狙えはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 頭を狙え, ジェフ クエスト, 頭を狙え, 頭を狙え',
        },
        detailsHtml: `
            <h2>頭を狙え</h2>
            <p>頭を狙えはEscape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>???</p>
            <h3>タスク</h3>
            <ul>
                <li>グラウンドゼロで任意の敵を5体ヘッドショットする</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>2000 経験値</li>
                <li>500 お金</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**敵を5体ヘッドショット**する必要があります。</p>
            `
    },
    {
        "id": 11,
        "title": "インフラストラクチャ - パート 3",
        "description": "インフラストラクチャ - パート 3は、Escape From Duckovのクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "インフラストラクチャ - パート 3",
        "publishDate": "2025-11-06",
        "addressBar": "/infrastructure-part-3",
        "showDetail": true,
        "rewards": ["1500 経験値", "1000 マネー"],
        "rightContent": [
            {
                "label": "依頼者",
                "value": "Jeff"
            },
            {
                "label": "前クエスト",
                "value": "Infrastructure"
            },
            {
                "label": "次クエスト",
                "value": "Fishing Hobbyist"
            }
        ],
        "seo": {
            "title": "クエスト インフラストラクチャ - パート 3 - Escape from Duckov",
            "description": "インフラストラクチャ - パート 3は、Escape From Duckovのクエストです。",
            "keywords": "Escape from Duckov, インフラストラクチャ - パート 3, Jeff クエスト, インフラストラクチャ - パート 3, インフラストラクチャ - パート 3"
        },
        "detailsHtml": `
            <h2>インフラストラクチャ - パート 3</h2>
            <p>インフラストラクチャ - パート 3は、Escape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>別の旧友と連絡を取りました。彼は多くのコネクションを持つ装備商人です。あなたが店を設置した後、彼はやってくるでしょう。</p>
            <h3>タスク</h3>
            <ul>
                <li>アーマーショップを建設する</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>1000 経験値</li>
                <li>1500 マネー</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、アーマーショップを建設する必要があります。</p>
            `
    },
    {
        "id": 12,
        "title": "インフラストラクチャ - 医療",
        "description": "インフラストラクチャ - 医療は、Escape From Duckovのクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "インフラストラクチャ - 医療",
        "publishDate": "2025-11-06",
        "addressBar": "/infrastructure-medical",
        "showDetail": true,
        "rewards": ["1000 経験値", "1000 マネー"],
        "rightContent": [
            {
                "label": "依頼者",
                "value": "Jeff"
            },
            {
                "label": "前クエスト",
                "value": "Infrastructure"
            },
            {
                "label": "次クエスト",
                "value": "Fishing Hobbyist"
            }
        ],
        "seo": {
            "title": "クエスト インフラストラクチャ - 医療 - Escape from Duckov",
            "description": "インフラストラクチャ - 医療は、Escape From Duckovのクエストです。",
            "keywords": "Escape from Duckov, インフラストラクチャ - 医療, Jeff クエスト, インフラストラクチャ - 医療, インフラストラクチャ - 医療"
        },
        "detailsHtml": `
            <h2>インフラストラクチャ - 医療</h2>
            <p>インフラストラクチャ - 医療は、Escape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>様々な医療品を自作できれば、もっと便利になるでしょう。</p>
            <h3>タスク</h3>
            <ul>
                <li>メディックステーションを建設する</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>1000 経験値</li>
                <li>1000 マネー</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、メディックステーションを建設する必要があります。</p>
            `
    },
    {
        "id": 13,
        "title": "レプリカピストル",
        "description": "レプリカピストルは、Escape From Duckovのクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "レプリカピストル",
        "publishDate": "2025-11-06",
        "addressBar": "/replica-pistol",
        "showDetail": true,
        "rewards": ["1500 経験値", "1000 マネー", "商品PMをアンロック"],
        "rightContent": [
            {
                "label": "依頼者",
                "value": "Jeff"
            },
            {
                "label": "前クエスト",
                "value": "Aim for the Head"
            },
            {
                "label": "次クエスト",
                "value": "Large Capacity<br/>Strange Feather"
            }
        ],
        "seo": {
            "title": "クエスト レプリカピストル - Escape from Duckov",
            "description": "レプリカピストルは、Escape From Duckovのクエストです。",
            "keywords": "Escape from Duckov, レプリカピストル, Jeff クエスト, レプリカピストル, レプリカピストル"
        },
        "detailsHtml": `
            <h2>レプリカピストル</h2>
            <p>レプリカピストルは、Escape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>ピストルをいくつか持ってきて、私に研究させてください。うまくいけば、自動販売機からピストルを買えるようになるでしょう。</p>
            <h3>タスク</h3>
            <ul>
                <li>アイテムを提出: PM 2個</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>1500 経験値</li>
                <li>1000 マネー</li>
                <li>商品PMをアンロック</li>
            </ul>
            <h3>必須アイテム</h3>
            <table>
                <tr>
                    <th>アイコン</th>
                    <th>アイテム名</th>
                    <th>数量</th>
                    <th>用途</th>
                </tr>
            </table>
            <tr>
                <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests09-01.webp" alt="医療品" /></td>
                <td>PM</td>
                <td>2</td>
                <td>提出が必要です。</td>
            </tr>
            </table>
            <h3>クエストガイド</h3>
            <p>このクエストでは、PMピストルを2丁見つけて引き渡す必要があります。</p>
            `
    },
    {
        "id": 14,
        "title": "大容量",
        "description": "大容量は、Escape From Duckovのクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "大容量",
        "publishDate": "2025-11-06",
        "addressBar": "/large-capacity",
        "showDetail": true,
        "rewards": ["1000 経験値", "2000 マネー"],
        "rightContent": [
            {
                "label": "依頼者",
                "value": "Jeff"
            },
            {
                "label": "前クエスト",
                "value": "Replica Pistol"
            },
            {
                "label": "次クエスト",
                "value": "-"
            }
        ],
        "seo": {
            "title": "クエスト 大容量 - Escape from Duckov",
            "description": "大容量は、Escape From Duckovのクエストです。",
            "keywords": "Escape from Duckov, 大容量, Jeff クエスト, 大容量, 大容量"
        },
        "detailsHtml": `
            <h2>大容量</h2>
            <p>大容量は、Escape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>???</p>
            <h3>タスク</h3>
            <ul>
                <li>ストレージレベル1をアンロックする</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、ストレージレベル1のアップグレードをアンロックする必要があります。（ストレージに行き、「ストレージ拡張」までスクロールしてください）</p>
            `
    },
    {
        "id": 15,
        "title": "奇妙な羽",
        "description": "奇妙な羽は、Escape From Duckovのクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "奇妙な羽",
        "publishDate": "2025-11-06",
        "addressBar": "/strange-feather",
        "showDetail": true,
        "rewards": ["1000 経験値", "1000 マネー", "トーテム: ニンジャ"],
        "rightContent": [
            {
                "label": "依頼者",
                "value": "Jeff"
            },
            {
                "label": "前クエスト",
                "value": "Replica Pistol"
            },
            {
                "label": "次クエスト",
                "value": "-"
            }
        ],
        "seo": {
            "title": "クエスト 奇妙な羽 - Escape from Duckov",
            "description": "奇妙な羽は、Escape From Duckovのクエストです。",
            "keywords": "Escape from Duckov, 奇妙な羽, Jeff クエスト, 奇妙な羽, 奇妙な羽"
        },
        "detailsHtml": `
            <h2>奇妙な羽</h2>
            <p>奇妙な羽は、Escape From Duckovのクエストです。</p>
            <h3>ダイアログ</h3>
            <p>???</p>
            <h3>タスク</h3>
            <ul>
                <li>アイテムを提出: Fading Feather 4個</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>1000 経験値</li>
                <li>1000 マネー</li>
                <li>トーテム: ニンジャ I</li>
            </ul>
            <h3>必須アイテム</h3>
            <table>
                <tr>
                    <th>アイコン</th>
                    <th>アイテム名</th>
                    <th>数量</th>
                    <th>用途</th>
                </tr>
                <tr>
                    <td></td>
                    <td>Fading Feather (色あせた羽)</td>
                    <td>4</td>
                    <td>提出が必要です。</td>
                </tr>
            </table>
            <h3>クエストガイド</h3>
            <p>このクエストでは、Fading Feather（色あせた羽）を4枚見つけて引き渡す必要があります。</p>
            `
    },
    {
        "id": 16,
        "title": "ナイスガイ (Nice Guy)",
        "description": "ナイスガイは『Escape From Duckov』のクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "ナイスガイ",
        "publishDate": "2025-11-06",
        "addressBar": "/nice-guy",
        "showDetail": true,
        "rewards": ["経験値1000", "998 マネー", "トロフィー", "ウィッシュリストの力", "赤い封筒"],
        "rightContent": [
            {
                "label": "提供者",
                "value": "ジェフ (Jeff)"
            },
            {
                "label": "前クエスト",
                "value": "Infrastructure - Part 2"
            },
            {
                "label": "次クエスト",
                "value": "-"
            }
        ],
        "seo": {
            "title": "ナイスガイ クエスト - Escape from Duckov",
            "description": "ナイスガイは『Escape From Duckov』のクエストです。",
            "keywords": "Escape from Duckov, ナイスガイ, ジェフのクエスト, ナイスガイ, ナイスガイ"
        },
        "detailsHtml": `
            <h2>ナイスガイ (Nice Guy)</h2>
            <p>ナイスガイは『Escape From Duckov』のクエストです。</p>
            <h3>ダイアログ</h3>
            <p>最近、奇妙な行動を取り、「ウィッシュリストに追加してください！」と繰り返し言っている開発者（私ではない）を知っています。彼はかなり良い人なのですが、なぜ気が狂ってしまったのかわかりません。彼を助けてくれませんか？</p>
            <h3>タスク</h3>
            <ul>
                <li>自分の基地の壁にある**青い模様**を確認する！</li>
            </ul>
            <img src="/images/wiki/quests16-01.webp" alt="青い模様" />
            <h3>報酬</h3>
            <ul>
                <li>経験値 1000</li>
                <li>998 マネー</li>
                <li>トロフィー</li>
                <li>ウィッシュリストの力</li>
                <li>赤い封筒</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、「Wishlist」と書かれた壁の**青いマーク**のところへ行き、それと**相互作用**する必要があります。</p>
            `
    },
    {
        "id": 17,
        "title": "蚊の駆除 (Mosquito Extermination)",
        "description": "蚊の駆除は『Escape From Duckov』のクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "蚊の駆除",
        "publishDate": "2025-11-06",
        "addressBar": "/mosquito-extermination",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money", "Cannon"],
        "rightContent": [
            {
                "label": "提供者",
                "value": "ジェフ (Jeff)"
            },
            {
                "label": "前クエスト",
                "value": "???"
            },
            {
                "label": "次クエスト",
                "value": "-"
            }
        ],
        "seo": {
            "title": "蚊の駆除 クエスト - Escape from Duckov",
            "description": "蚊の駆除は『Escape From Duckov』のクエストです。",
            "keywords": "Escape from Duckov, 蚊の駆除, ジェフのクエスト, 蚊の駆除, 蚊の駆除"
        },
        "detailsHtml": `
            <h2>蚊の駆除 (Mosquito Extermination)</h2>
            <p>蚊の駆除は『Escape From Duckov』のクエストです。</p>
            <h3>ダイアログ</h3>
            <p>最近、部屋の蚊のせいで眠れません。大砲は準備できているのですが、火薬が必要です。火薬は、作業台で普通の弾薬を分解することで入手できます。</p>
            <h3>タスク</h3>
            <ul>
                <li>アイテムを提出：**火薬 30個**</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>経験値 1000</li>
                <li>500 マネー</li>
                <li>大砲</li>
            </ul>
            <h3>必須アイテム</h3>
            <table>
                <tr>
                    <th>アイコン</th>
                    <th>アイテム名</th>
                    <th>数量</th>
                    <th>用途</th>
                </tr>
            </table>
            <tr>
                <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests09-01.webp" alt="医療品" /></td>
                <td>火薬 (Gunpowder)</td>
                <td>30</td>
                <td>提出する必要があります。</td>
            </tr>
            </table>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**火薬 30個**をジェフに**引き渡す**必要があります。</p>
            `
    },
    {
        "id": 18,
        "title": "インフラ整備 - パート4 (Infrastructure - Part 4)",
        "description": "インフラ整備 - パート4は『Escape From Duckov』のクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "インフラ整備 - パート4",
        "publishDate": "2025-11-06",
        "addressBar": "/infrastructure-part-4",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money"],
        "rightContent": [
            {
                "label": "提供者",
                "value": "ジェフ (Jeff)"
            },
            {
                "label": "前クエスト",
                "value": "Infrastructure - Part 2<br/>Infrastructure - Part 3"
            },
            {
                "label": "次クエスト",
                "value": "Unlocking Beacons - Part 1"
            }
        ],
        "seo": {
            "title": "インフラ整備 - パート4 クエスト - Escape from Duckov",
            "description": "インフラ整備 - パート4は『Escape From Duckov』のクエストです。",
            "keywords": "Escape from Duckov, インフラ整備 - パート4, ジェフのクエスト, インフラ整備 - パート4, インフラ整備 - パート4"
        },
        "detailsHtml": `
            <h2>インフラ整備 - パート4 (Infrastructure - Part 4)</h2>
            <p>インフラ整備 - パート4は『Escape From Duckov』のクエストです。</p>
            <h3>ダイアログ</h3>
            <p>私たちの隠れ家は形になってきました。いよいよ星のさらに奥地へ進出する時です！テレポート装置の建設が最初のステップとなります。</p>
            <h3>タスク</h3>
            <ul>
                <li>**テレポート装置**を建設する</li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>経験値 1000</li>
                <li>500 マネー</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**テレポート装置**を**建設**する必要があります。</p>
            `
    },
    {
        "id": 19,
        "title": "ビーコンの解除 - パート1 (Unlocking Beacons - Part 1)",
        "description": "ビーコンIを解除するは『Escape From Duckov』のクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "ビーコンの解除 - パート1",
        "publishDate": "2025-11-06",
        "addressBar": "/unlocking-beacons-part-1",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money"],
        "rightContent": [
            {
                "label": "提供者",
                "value": "ジェフ (Jeff)"
            },
            {
                "label": "前クエスト",
                "value": "Infrastructure - Part 4"
            },
            {
                "label": "次クエスト",
                "value": "Explore The Warehouses"
            }
        ],
        "seo": {
            "title": "ビーコンの解除 - パート1 クエスト - Escape from Duckov",
            "description": "インフラ整備 - 医療は『Escape From Duckov』のクエストです。",
            "keywords": "Escape from Duckov, インフラ整備 - 医療, ジェフのクエスト, インフラ整備 - 医療, インフラ整備 - 医療"
        },
        "detailsHtml": `
            <h2>ビーコンの解除 - パート1 (Unlocking Beacons - Part 1)</h2>
            <p>ビーコンIを解除するは『Escape From Duckov』のクエストです。</p>
            <h3>ダイアログ</h3>
            <p>これで私たちのテレポート装置が完成したので、**グラウンド・ゼロ**のビーコンを解除しましょう。これらのビーコンは無料のテレポートを可能にしますが、座標が...不安定です。情報によると、ビーコンは道路キャンプにあるとのことです。危険なので、気を抜かないように。</p>
            <h3>タスク</h3>
            <ul>
                <li>**グラウンド・ゼロ ビーコン**を解除する</li>
                 <li style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <img src="/images/wiki/quests19-01.webp" alt="グラウンド・ゼロ ビーコンを解除する" />
                    <img src="/images/wiki/quests19-02.webp" alt="グラウンド・ゼロ ビーコンを解除する" />
                </li>
            </ul>
    
            <h3>報酬</h3>
            <ul>
                <li>経験値 1000</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、道路キャンプに到達し、テレポートを可能にするために**グラウンド・ゼロ ビーコン**を**解除**する必要があります。</p>
            `
    },
    {
        "id": 20,
        "title": "ビーコンの解除 - パート2 (Unlocking Beacons - Part 2)",
        "description": "ビーコンIIを解除するは『Escape From Duckov』のクエストです。",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "ビーコンの解除 - パート2",
        "publishDate": "2025-11-06",
        "addressBar": "/unlocking-beacons-part-2",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money"],
        "rightContent": [
            {
                "label": "提供者",
                "value": "ジェフ (Jeff)"
            },
            {
                "label": "前クエスト",
                "value": "Unlocking Beacons - Part 1"
            },
            {
                "label": "次クエスト",
                "value": "-"
            }
        ],
        "seo": {
            "title": "ビーコンの解除 - パート2 クエスト - Escape from Duckov",
            "description": "ビーコンの解除 - パート2は『Escape From Duckov』のクエストです。",
            "keywords": "Escape from Duckov, ビーコンの解除 - パート2, ジェフのクエスト, ビーコンの解除 - パート2, ビーコンの解除 - パート2"
        },
        "detailsHtml": `
            <h2>ビーコンの解除 - パート2 (Unlocking Beacons - Part 2)</h2>
            <p>ビーコンIIを解除するは『Escape From Duckov』のクエストです。</p>
            <h3>ダイアログ</h3>
            <p>ついにさらに遠くへ向かいます。**倉庫エリア**への移動を速くするために、倉庫エリアのガソリンスタンドの隣にあるテレポートビーコンを起動する必要があります。</p>
            <h3>タスク</h3>
            <ul>
                <li>**倉庫エリア ビーコン**を解除する</li>
                 <li style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <img src="/images/wiki/quests20-01.webp" alt="倉庫エリア ビーコンを解除する" />
                    <img src="/images/wiki/quests20-02.webp" alt="倉庫エリア ビーコンを解除する" />
                </li>
            </ul>
            <h3>報酬</h3>
            <ul>
                <li>経験値 2000</li>
            </ul>
            <h3>クエストガイド</h3>
            <p>このクエストでは、**倉庫エリア**の**ガソリンスタンド**の隣にあるテレポートビーコンを見つけて**起動**し、高速移動を解除する必要があります。</p>
            `
    },
    {
        id: 21,
        title: '倉庫を探索',
        description: '倉庫を探索はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '倉庫を探索',
        publishDate: '2025-10-30',
        addressBar: '/explore-the-warehouses',
        showDetail: false,
        rewards: ["1500 経験値", "1500 お金"],
        rightContent: [],
        seo: {
            title: '倉庫を探索 クエスト - Escape from Duckov',
            description: '倉庫を探索はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 倉庫を探索, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 22,
        title: '釣り愛好家',
        description: '釣り愛好家はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '釣り愛好家',
        publishDate: '2025-10-30',
        addressBar: '/fishing-hobbyist',
        showDetail: false,
        rewards: ["2000 経験値", "1000 お金", "1 懐中電灯", "マーチャンダイズ 懐中電灯をアンロック"],
        rightContent: [],
        seo: {
            title: '釣り愛好家 クエスト - Escape from Duckov',
            description: '釣り愛好家はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 釣り愛好家, クエスト, 懐中電灯',
        },
        detailsHtml: ``
    },
    {
        id: 23,
        title: '釣り竿のアップグレード',
        description: '釣り竿のアップグレードはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '釣り竿のアップグレード',
        publishDate: '2025-10-30',
        addressBar: '/upgrade-fishing-rod',
        showDetail: false,
        rewards: ["1000 経験値", "2000 お金"],
        rightContent: [],
        seo: {
            title: '釣り竿のアップグレード クエスト - Escape from Duckov',
            description: '釣り竿のアップグレードはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 釣り竿のアップグレード, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 24,
        title: '補給ルート',
        description: '補給ルートはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '補給ルート',
        publishDate: '2025-10-30',
        addressBar: '/supply-route',
        showDetail: false,
        rewards: ["2500 経験値", "450 お金", "アーマー Lv3", "オレンジのアーマーショップでマーチャンダイズ アーマー Lv3をアンロック", "オレンジのアーマーショップでマーチャンダイズ SWAT ヘルメットをアンロック"],
        rightContent: [],
        seo: {
            title: '補給ルート クエスト - Escape from Duckov',
            description: '補給ルートはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 補給ルート, クエスト, アーマー Lv3, SWAT ヘルメット',
        },
        detailsHtml: ``
    },
    {
        id: 25,
        title: '釣り愛好家 2',
        description: '釣り愛好家 2はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '釣り愛好家 2',
        publishDate: '2025-10-30',
        addressBar: '/fishing-hobbyist-2',
        showDetail: false,
        rewards: ["1000 経験値", "500 お金", "2 ガスマスク", "オレンジのアーマーショップでマーチャンダイズ トラベルバッグをアンロック"],
        rightContent: [],
        seo: {
            title: '釣り愛好家 2 クエスト - Escape from Duckov',
            description: '釣り愛好家 2はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 釣り愛好家 2, クエスト, ガスマスク, トラベルバッグ',
        },
        detailsHtml: ``
    },
    {
        id: 26,
        title: '水資源',
        description: '水資源はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '水資源',
        publishDate: '2025-10-30',
        addressBar: '/water-resource',
        showDetail: false,
        rewards: ["2000 経験値", "500 お金", "オレンジのアーマーショップでマーチャンダイズ GPNVG-18 ナイトビジョンゴーグルをアンロック"],
        rightContent: [],
        seo: {
            title: '水資源 クエスト - Escape from Duckov',
            description: '水資源はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 水資源, クエスト, GPNVG-18 ナイトビジョンゴーグル',
        },
        detailsHtml: ``
    },
    {
        id: 27,
        title: '孤立',
        description: '孤立はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '孤立',
        publishDate: '2025-10-30',
        addressBar: '/seclusion',
        showDetail: false,
        rewards: ["2500 経験値", "450 お金", "オレンジのアーマーショップでマーチャンダイズ アーマー Lv4をアンロック", "オレンジのアーマーショップでマーチャンダイズ サイト PROをアンロック"],
        rightContent: [],
        seo: {
            title: '孤立 クエスト - Escape from Duckov',
            description: '孤立はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 孤立, クエスト, アーマー Lv4, サイト PRO',
        },
        detailsHtml: ``
    },
    {
        id: 28,
        title: 'バランスの取れた栄養 - パート3',
        description: 'バランスの取れた栄養 - パート3はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'バランスの取れた栄養 - パート3',
        publishDate: '2025-10-30',
        addressBar: '/balanced-nutrition-part-3',
        showDetail: false,
        rewards: ["1500 経験値", "1500 お金"],
        rightContent: [],
        seo: {
            title: 'バランスの取れた栄養 - パート3 クエスト - Escape from Duckov',
            description: 'バランスの取れた栄養 - パート3はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, バランスの取れた栄養 - パート3, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 29,
        title: 'フィットネストレーナー',
        description: 'フィットネストレーナーはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'フィットネストレーナー',
        publishDate: '2025-10-30',
        addressBar: '/fitness-trainer',
        showDetail: false,
        rewards: ["500 経験値", "1500 お金"],
        rightContent: [],
        seo: {
            title: 'フィットネストレーナー クエスト - Escape from Duckov',
            description: 'フィットネストレーナーはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, フィットネストレーナー, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 30,
        title: '自給自足',
        description: '自給自足はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '自給自足',
        publishDate: '2025-10-30',
        addressBar: '/self-sufficient',
        showDetail: false,
        rewards: ["1500 経験値", "2000 お金", "2 鎮痛剤"],
        rightContent: [],
        seo: {
            title: '自給自足 クエスト - Escape from Duckov',
            description: '自給自足はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 自給自足, クエスト, 鎮痛剤',
        },
        detailsHtml: ``
    },
    {
        id: 31,
        title: '医療支援',
        description: '医療支援はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '医療支援',
        publishDate: '2025-10-30',
        addressBar: '/medical-assistance',
        showDetail: false,
        rewards: ["1000 経験値", "2500 お金", "2 黄色の注射器", "2 耐荷重注射器"],
        rightContent: [],
        seo: {
            title: '医療支援 クエスト - Escape from Duckov',
            description: '医療支援はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 医療支援, クエスト, 黄色の注射器, 耐荷重注射器',
        },
        detailsHtml: ``
    },
    {
        id: 32,
        title: '嵐への抵抗',
        description: '嵐への抵抗はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '嵐への抵抗',
        publishDate: '2025-10-30',
        addressBar: '/storm-resistance',
        showDetail: false,
        rewards: ["3000 経験値", "500 お金", "2 スペースストーム防御ショット", "マーチャンダイズ スペースストーム防御ショットをアンロック"],
        rightContent: [],
        seo: {
            title: '嵐への抵抗 クエスト - Escape from Duckov',
            description: '嵐への抵抗はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 嵐への抵抗, クエスト, スペースストーム防御ショット',
        },
        detailsHtml: ``
    },
    {
        id: 33,
        title: '歩く珍味',
        description: '歩く珍味はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '歩く珍味',
        publishDate: '2025-10-30',
        addressBar: '/walking-delicacy',
        showDetail: false,
        rewards: ["3000 経験値", "500 お金", "2 スペースストーム防御ショット", "2 A型超強力接着剤"],
        rightContent: [],
        seo: {
            title: '歩く珍味 クエスト - Escape from Duckov',
            description: '歩く珍味はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 歩く珍味, クエスト, A型超強力接着剤',
        },
        detailsHtml: ``
    },
    {
        id: 34,
        title: '部品の卸売',
        description: '部品の卸売はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '部品の卸売',
        publishDate: '2025-10-30',
        addressBar: '/parts-wholesale',
        showDetail: false,
        rewards: ["2000 経験値", "2000 お金", "グザヴィエの武器ショップでマーチャンダイズ AK-74Uをアンロック"],
        rightContent: [],
        seo: {
            title: '部品の卸売 クエスト - Escape from Duckov',
            description: '部品の卸売はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 部品の卸売, クエスト, AK-74U',
        },
        detailsHtml: ``
    },
    {
        id: 35,
        title: '性能テスト',
        description: '性能テストはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '性能テスト',
        publishDate: '2025-10-30',
        addressBar: '/performance-test',
        showDetail: false,
        rewards: ["2000 経験値", "1500 お金"],
        rightContent: [],
        seo: {
            title: '性能テスト クエスト - Escape from Duckov',
            description: '性能テストはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 性能テスト, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 36,
        title: 'パニッシャー - パート1',
        description: 'パニッシャー - パート1はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'パニッシャー - パート1',
        publishDate: '2025-10-30',
        addressBar: '/punisher-part-1',
        showDetail: false,
        rewards: ["2000 経験値", "1500 お金"],
        rightContent: [],
        seo: {
            title: 'パニッシャー - パート1 クエスト - Escape from Duckov',
            description: 'パニッシャー - パート1はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, パニッシャー - パート1, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 37,
        title: 'アヒル狩り: チャポ',
        description: 'アヒル狩り: チャポはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'アヒル狩り: チャポ',
        publishDate: '2025-10-30',
        addressBar: '/duck-hunting-chapo',
        showDetail: false,
        rewards: ["3000 経験値", "2000 お金", "グザヴィエの武器ショップでマーチャンダイズ SKS-455をアンロック"],
        rightContent: [],
        seo: {
            title: 'アヒル狩り: チャポ クエスト - Escape from Duckov',
            description: 'アヒル狩り: チャポはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, アヒル狩り: チャポ, クエスト, SKS-455',
        },
        detailsHtml: ``
    },
    {
        id: 38,
        title: 'ブロンズ懐中時計',
        description: 'ブロンズ懐中時計はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'ブロンズ懐中時計',
        publishDate: '2025-10-30',
        addressBar: '/bronze-pocket-watch',
        showDetail: false,
        rewards: ["1000 経験値", "500 お金"],
        rightContent: [],
        seo: {
            title: 'ブロンズ懐中時計 クエスト - Escape from Duckov',
            description: 'ブロンズ懐中時計はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, ブロンズ懐中時計, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 39,
        title: '貨物リスト',
        description: '貨物リストはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '貨物リスト',
        publishDate: '2025-10-30',
        addressBar: '/cargo-list',
        showDetail: false,
        rewards: ["15000 経験値", "500 お金", "グザヴィエの武器ショップでマーチャンダイズ PPShをアンロック", "グザヴィエの武器ショップでマーチャンダイズ L-ノーマル弾をアンロック", "グザヴィエの武器ショップでマーチャンダイズ ノーマルスナイパー弾をアンロック"],
        rightContent: [],
        seo: {
            title: '貨物リスト クエスト - Escape from Duckov',
            description: '貨物リストはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 貨物リスト, クエスト, PPSh, L-ノーマル弾, ノーマルスナイパー弾',
        },
        detailsHtml: ``
    },
    {
        id: 40,
        title: '新しい貨物',
        description: '新しい貨物はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '新しい貨物',
        publishDate: '2025-10-30',
        addressBar: '/new-cargo',
        showDetail: false,
        rewards: ["1000 経験値", "500 お金", "グザヴィエの武器ショップでマーチャンダイズ AK-47をアンロック", "グザヴィエの武器ショップでマーチャンダイズ Mag-ノーマル弾をアンロック", "グザヴィエの武器ショップでマーチャンダイズ コントロールストック Iをアンロック"],
        rightContent: [],
        seo: {
            title: '新しい貨物 クエスト - Escape from Duckov',
            description: '新しい貨物はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 新しい貨物, クエスト, AK-47, Mag-ノーマル弾, コントロールストック I',
        },
        detailsHtml: ``
    },
    {
        id: 41,
        title: 'スナイパー入門',
        description: 'スナイパー入門はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'スナイパー入門',
        publishDate: '2025-10-30',
        addressBar: '/sniper-initiation',
        showDetail: false,
        rewards: ["3000 経験値", "5500 お金", "2 超強力接着剤 B"],
        rightContent: [],
        seo: {
            title: 'スナイパー入門 クエスト - Escape from Duckov',
            description: 'スナイパー入門はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, スナイパー入門, クエスト, 超強力接着剤 B',
        },
        detailsHtml: ``
    },
    {
        id: 42,
        title: '西からの男たち',
        description: '西からの男たちはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '西からの男たち',
        publishDate: '2025-10-30',
        addressBar: '/men-from-the-west',
        showDetail: false,
        rewards: ["2200 経験値", "1500 お金"],
        rightContent: [],
        seo: {
            title: '西からの男たち クエスト - Escape from Duckov',
            description: '西からの男たちはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 西からの男たち, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 43,
        title: '上級スナイパー',
        description: '上級スナイパーはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '上級スナイパー',
        publishDate: '2025-10-30',
        addressBar: '/advanced-sniper',
        showDetail: false,
        rewards: ["4000 経験値", "3500 お金", "グザヴィエの武器ショップでマーチャンダイズ SV98をアンロック"],
        rightContent: [],
        seo: {
            title: '上級スナイパー クエスト - Escape from Duckov',
            description: '上級スナイパーはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 上級スナイパー, クエスト, SV98',
        },
        detailsHtml: ``
    },
    {
        id: 44,
        title: 'ロジスティクスフェーズ',
        description: 'ロジスティクスフェーズはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'ロジスティクスフェーズ',
        publishDate: '2025-10-30',
        addressBar: '/logistics-phase',
        showDetail: false,
        rewards: ["1000 経験値", "2000 お金", "グザヴィエの武器ショップでマーチャンダイズ バランスストック IIをアンロック", "グザヴィエの武器ショップでマーチャンダイズ 2倍スコープをアンロック"],
        rightContent: [],
        seo: {
            title: 'ロジスティクスフェーズ クエスト - Escape from Duckov',
            description: 'ロジスティクスフェーズはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, ロジスティクスフェーズ, クエスト, バランスストック II, 2倍スコープ',
        },
        detailsHtml: ``
    },
    {
        id: 45,
        title: 'チャレンジ: スピーディコマンダー',
        description: 'チャレンジ: スピーディコマンダーはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'チャレンジ: スピーディコマンダー',
        publishDate: '2025-10-30',
        addressBar: '/challenge-speedy-commander',
        showDetail: false,
        rewards: ["3500 経験値", "3000 お金", "グザヴィエの武器ショップでマーチャンダイズ S-低レベル徹甲弾をアンロック", "グザヴィエの武器ショップでマーチャンダイズ AR-低レベル徹甲弾をアンロック", "グザヴィエの武器ショップでマーチャンダイズ 低級徹甲散弾をアンロック"],
        rightContent: [],
        seo: {
            title: 'チャレンジ: スピーディコマンダー クエスト - Escape from Duckov',
            description: 'チャレンジ: スピーディコマンダーはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, チャレンジ: スピーディコマンダー, クエスト, S-低レベル徹甲弾, AR-低レベル徹甲弾, 低級徹甲散弾',
        },
        detailsHtml: ``
    },
    {
        id: 46,
        title: 'ゴールドスナイパー',
        description: 'ゴールドスナイパーはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'ゴールドスナイパー',
        publishDate: '2025-10-30',
        addressBar: '/gold-sniper',
        showDetail: false,
        rewards: ["5000 経験値", "4500 お金", "グザヴィエの武器ショップでマーチャンダイズ M107をアンロック"],
        rightContent: [],
        seo: {
            title: 'ゴールドスナイパー クエスト - Escape from Duckov',
            description: 'ゴールドスナイパーはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, ゴールドスナイパー, クエスト, M107',
        },
        detailsHtml: ``
    },
    {
        id: 47,
        title: 'カジュアルスポーツ',
        description: 'カジュアルスポーツはEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'カジュアルスポーツ',
        publishDate: '2025-10-30',
        addressBar: '/casual-sports',
        showDetail: false,
        rewards: ["1000 経験値", "4000 お金"],
        rightContent: [],
        seo: {
            title: 'カジュアルスポーツ クエスト - Escape from Duckov',
            description: 'カジュアルスポーツはEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, カジュアルスポーツ, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 48,
        title: '射手',
        description: '射手はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '射手',
        publishDate: '2025-10-30',
        addressBar: '/archer',
        showDetail: false,
        rewards: ["4000 経験値", "5000 お金", "1 VPO-101"],
        rightContent: [],
        seo: {
            title: '射手 クエスト - Escape from Duckov',
            description: '射手はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 射手, クエスト, VPO-101',
        },
        detailsHtml: ``
    },
    {
        id: 49,
        title: 'ヴィダの挑戦',
        description: 'ヴィダの挑戦はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'ヴィダの挑戦',
        publishDate: '2025-10-30',
        addressBar: '/vidas-challenge',
        showDetail: false,
        rewards: ["5000 経験値", "6000 お金"],
        rightContent: [],
        seo: {
            title: 'ヴィダの挑戦 クエスト - Escape from Duckov',
            description: 'ヴィダの挑戦はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, ヴィダの挑戦, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 50,
        title: '包丁の達人',
        description: '包丁の達人はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '包丁の達人',
        publishDate: '2025-10-30',
        addressBar: '/butcher-knife-master',
        showDetail: false,
        rewards: ["6000 経験値", "648 お金", "1 ゴールデンスター", "3 チャレンジフェリーチケット"],
        rightContent: [],
        seo: {
            title: '包丁の達人 クエスト - Escape from Duckov',
            description: '包丁の達人はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 包丁の達人, クエスト, ゴールデンスター, チャレンジフェリーチケット',
        },
        detailsHtml: ``
    },
    {
        id: 51,
        title: '新しい挑戦',
        description: '新しい挑戦はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '新しい挑戦',
        publishDate: '2025-10-30',
        addressBar: '/new-challenge',
        showDetail: false,
        rewards: ["1000 経験値", "500 お金", "1 スタミナショット", "3 DEMO究極チャレンジチケット", "自動販売機ショップでマーチャンダイズ スタミナショットをアンロック", "自動販売機ショップでマーチャンダイズ DEMO究極チャレンジチケットをアンロック"],
        rightContent: [],
        seo: {
            title: '新しい挑戦 クエスト - Escape from Duckov',
            description: '新しい挑戦はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 新しい挑戦, クエスト, スタミナショット, DEMO究極チャレンジチケット',
        },
        detailsHtml: ``
    },
    {
        id: 52,
        title: 'チャポの挑戦',
        description: 'チャポの挑戦はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: 'チャポの挑戦',
        publishDate: '2025-10-30',
        addressBar: '/chapo-challenge',
        showDetail: false,
        rewards: ["1000 経験値", "998 お金"],
        rightContent: [],
        seo: {
            title: 'チャポの挑戦 クエスト - Escape from Duckov',
            description: 'チャポの挑戦はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, チャポの挑戦, クエスト',
        },
        detailsHtml: ``
    },
    {
        id: 53,
        title: '包丁の神',
        description: '包丁の神はEscape From Duckovのクエストです。',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '包丁の神',
        publishDate: '2025-10-30',
        addressBar: '/god-of-cleaver',
        showDetail: false,
        rewards: ["2800 経験値", "648 お金", "1 ゴールデンスター", "3 DEMO究極チャレンジチケット"],
        rightContent: [],
        seo: {
            title: '包丁の神 クエスト - Escape from Duckov',
            description: '包丁の神はEscape From Duckovのクエストです。',
            keywords: 'Escape from Duckov, 包丁の神, クエスト, ゴールデンスター, DEMO究極チャレンジチケット',
        },
        detailsHtml: ``
    }

]

