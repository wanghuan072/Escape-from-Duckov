export default [
    {
        id: 1,
        title: '인프라',
        description: '인프라는 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '인프라 퀘스트',
        publishDate: '2025-10-27',
        addressBar: '/infrastructure',
        showDetail: true,
        rewards: [
            '1000 경험치',
            '500 돈',
            '붕대 3개'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '-'
            },
            {
                label: '다음 퀘스트',
                value: '출혈 멈추기, 신호탑'
            }
        ],
        seo: {
            title: '인프라 퀘스트 - Escape from Duckov',
            description: '인프라는 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 인프라, 제프 퀘스트, 기본 작업대, 나무',
        },
        detailsHtml: `
            <h2>인프라</h2>
            <p>인프라는 Escape From Duckov의 퀘스트입니다.</p>
            
            <h3>대화</h3>
            <p>나무 두 조각을 모아 **기본 작업대**를 건설하세요. 주변에 적이 있으니 너무 멀리 가지 마세요. 재료를 확보하면 자판기 옆의 건설 패널을 확인하세요.</p>
            
            <h3>임무</h3>
            <ul>
                <li>기본 작업대 건설</li>
            </ul>
            
            <h3>보상</h3>
            <ul>
                <li>+1000 경험치</li>
                <li>500 돈</li>
                <li>붕대 3개</li>
            </ul>
            
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **나무 2개**를 찾아 **기본 작업대**를 건설해야 합니다.</p>
            `
    },
    {
        id: 2,
        title: '확장 주머니',
        description: '확장 주머니는 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '확장 주머니 퀘스트',
        publishDate: '2025-10-27',
        addressBar: '/expansion-pocket',
        showDetail: true,
        rewards: [
            '+1000 경험치',
            '500 돈'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '-'
            },
            {
                label: '다음 퀘스트',
                value: '사랑 가득, 새로운 사냥꾼'
            }
        ],
        seo: {
            title: '확장 주머니 퀘스트 - Escape from Duckov',
            description: '확장 주머니는 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 확장 주머니, 제프 퀘스트, 운반 한도, 스킬 강화 기계',
        },
        detailsHtml: `
            <h2>확장 주머니</h2>
            <p>확장 주머니는 Escape From Duckov의 퀘스트입니다.</p>
            
            <h3>대화</h3>
            <p>지금은 많이 운반할 수 없습니다. 옆방에 있는 **스킬 강화 기계**를 사용해 운반 능력을 높일 수 있습니다. 하지만 업그레이드에는 일부 재료가 필요하니, 자판기를 확인해 보세요.</p>
            
            <h3>임무</h3>
            <ul>
                <li>운반 한도: 1 잠금 해제</li>
            </ul>
            
            <h3>보상</h3>
            <ul>
                <li>+1000 경험치</li>
                <li>500 돈</li>
            </ul>
            
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **스킬 강화 기계**로 가서 스킬 **운반 한도: 1**을 연구해야 합니다.</p>
            `
    },
    {
        id: 3,
        title: '새로운 사냥꾼',
        description: '새로운 사냥꾼은 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '새로운 사냥꾼 퀘스트',
        publishDate: '2025-10-27',
        addressBar: '/a-new-hunter',
        showDetail: true,
        rewards: [
            '+2000 경험치',
            '380 돈',
            '금속판 2개',
            '너트 1개',
            '볼트 1개'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '확장 주머니'
            },
            {
                label: '다음 퀘스트',
                value: '의료 용품, 머리를 노려라'
            }
        ],
        seo: {
            title: '새로운 사냥꾼 퀘스트 - Escape from Duckov',
            description: '새로운 사냥꾼은 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 새로운 사냥꾼, 제프 퀘스트, 광란의 스캐빈저, 식칼',
        },
        detailsHtml: `
            <h2>새로운 사냥꾼</h2>
            <p>새로운 사냥꾼은 Escape From Duckov의 퀘스트입니다.</p>
            
            <h3>대화</h3>
            <p>괜찮은 무기가 있다면, **식칼**을 든 **광란의 스캐빈저**를 쫓아갈 수 있습니다.</p>
            
            <h3>임무</h3>
            <ul>
                <li>처치: 광란의 스캐빈저 2명</li>
                <li>아이템 제출: 식칼 2개</li>
            </ul>
            
            <h3>보상</h3>
            <ul>
                <li>+2000 경험치</li>
                <li>380 돈</li>
                <li>금속판 2개</li>
                <li>너트 1개</li>
                <li>볼트 1개</li>
            </ul>
            
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **광란의 스캐빈저 2명**을 처치하고 **식칼 2개**를 인계해야 합니다.</p>
            `
    },
    {
        id: 4,
        title: '사랑 가득',
        description: '사랑 가득은 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '사랑 가득',
        publishDate: '2025-10-27',
        addressBar: '/full-of-love',
        showDetail: true,
        rewards: ["500 경험치"],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '확장 주머니'
            },
            {
                label: '다음 퀘스트',
                value: '-'
            }
        ],
        seo: {
            title: '사랑 가득 퀘스트 - Escape from Duckov',
            description: '사랑 가득은 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 사랑 가득, 제프 퀘스트, 돈, 제출',
        },
        detailsHtml: `
            <h2>사랑 가득</h2>
            <p>사랑 가득은 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p></p>
            <h3>임무</h3>
            <ul>
                <li>아이템 제출: 1888 돈</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>500 경험치</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 제프에게 **1888 돈**을 인계해야 합니다.</p>
            `
    },
    {
        id: 5,
        title: '출혈 멈추기',
        description: '출혈 멈추기는 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '출혈 멈추기',
        publishDate: '2025-10-27',
        addressBar: '/stop-bleeding',
        showDetail: true,
        rewards: [
            '+1500 경험치',
            '300 돈',
            '약품 더미 1개',
            '아스피린 상품 잠금 해제'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '인프라'
            },
            {
                label: '다음 퀘스트',
                value: '인프라 - 의료'
            }
        ],
        seo: {
            title: '출혈 멈추기 퀘스트 - Escape from Duckov',
            description: '출혈 멈추기는 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 출혈 멈추기, 제프 퀘스트, 붕대, 출혈',
        },
        detailsHtml: `
            <h2>출혈 멈추기</h2>
            <p>출혈 멈추기는 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>출혈은 매우 치명적입니다. 즉시 죽지는 않더라도 제때 멈추지 않으면 계속 HP를 잃게 됩니다. **붕대**는 출혈을 멈추는 가장 간단한 도구입니다. 붕대를 사용하여 출혈을 멈추도록 노력하세요. 붕대를 찾을 수 없다면 자판기에서 구입할 수 있습니다.</p>
            <h3>임무</h3>
            <ul>
                <li>아이템 사용: 붕대 1개</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>+1500 경험치</li>
                <li>300 돈</li>
                <li>약품 더미 1개</li>
                <li>아스피린 상품 잠금 해제</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **붕대**를 사용해야 합니다.<br/>참고: 붕대는 부상을 입었을 때만 사용할 수 있습니다.</p>
            `
    },
    {
        id: 6,
        title: '신호탑',
        description: '신호탑은 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '신호탑',
        publishDate: '2025-10-27',
        addressBar: '/signal-tower',
        showDetail: true,
        rewards: [
            '+2500 경험치',
            '450 돈'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '인프라'
            },
            {
                label: '다음 퀘스트',
                value: '인프라 - 파트 2, 오랜 친구의 편지'
            }
        ],
        seo: {
            title: '신호탑 퀘스트 - Escape from Duckov',
            description: '신호탑은 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 신호탑, 제프 퀘스트, 일자 드라이버, 신호탑 수리',
        },
        detailsHtml: `
            <h2>신호탑</h2>
            <p>신호탑은 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>보급품을 전달해 줄 상인과 일정을 잡았는데, 벙커 동쪽의 **신호탑**이 고장난 것 같습니다. 그들에게 연락할 수 없어요. 가서 고쳐줄 수 있나요? **일자 드라이버**를 가져가세요. 근처 자판기에서 팔고 있습니다.</p>
            <h3>임무</h3>
            <ul>
                <li>북쪽에 있는 신호탑 수리</li>
                <li style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <img src="/images/wiki/quests06-01.webp" alt="신호탑" />
                    <img src="/images/wiki/quests06-02.webp" alt="신호탑" />
                </li>
                
            </ul>
            <h3>보상</h3>
            <ul>
                <li>+2500 경험치</li>
                <li>450 돈</li>
            </ul>
            <h3>필수 아이템</h3>
            <table>
                <tr>
                    <th>아이콘</th>
                    <th>아이템 이름</th>
                    <th>수량</th>
                    <th>용도</th>
                </tr>
                <tr>
                    <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests06-03.webp" alt="신호탑" /></td>
                    <td>드라이버</td>
                    <td>1</td>
                    <td>수리에 사용해야 합니다.</td>
                </tr>
            </table>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 벙커 입구 동쪽에 있는 **신호탑**을 수리해야 합니다.</p>
            `
    },
    {
        id: 7,
        title: '인프라 - 파트 2',
        description: '인프라 - 파트 2는 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '인프라 - 파트 2',
        publishDate: '2025-10-27',
        addressBar: '/infrastructure-part-2',
        showDetail: true,
        rewards: [
            "1000 경험치",
            "1500 돈"
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '인프라'
            },
            {
                label: '다음 퀘스트',
                value: '인프라 - 파트 4, 부품 도매'
            }
        ],
        seo: {
            title: '인프라 - 파트 2 퀘스트 - Escape from Duckov',
            description: '인프라 - 파트 2는 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 인프라 - 파트 2, 제프 퀘스트, 무기 상점, 건설',
        },
        detailsHtml: `
            <h2>인프라 - 파트 2</h2>
            <p>인프라 - 파트 2는 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>당신 덕분에 신호탑을 고쳐서 오랜 친구와 연락이 닿았습니다. 그는 화기 상인입니다. 그가 제안을 했는데, 우리가 **무기 상점**을 지어주면 바로 입주하겠다고 했습니다.</p>
            <h3>임무</h3>
            <ul>
                <li>무기 상점 건설</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>1000 경험치</li>
                <li>1500 돈</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **무기 상점**을 건설해야 합니다.</p>
            `
    },
    {
        id: 8,
        title: '오랜 친구의 편지',
        description: '오랜 친구의 편지는 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '오랜 친구의 편지',
        publishDate: '2025-10-27',
        addressBar: '/a-letter-from-an-old-friend',
        showDetail: true,
        rewards: [
            '+2500 경험치',
            '450 돈'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '신호탑'
            },
            {
                label: '다음 퀘스트',
                value: '인프라 - 파트 3'
            }
        ],
        seo: {
            title: '오랜 친구의 편지 퀘스트 - Escape from Duckov',
            description: '오랜 친구의 편지는 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 오랜 친구의 편지, 제프 퀘스트, 편지, 제출',
        },
        detailsHtml: `
            <h2>오랜 친구의 편지</h2>
            <p>오랜 친구의 편지는 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>???</p>
            <h3>임무</h3>
            <ul>
                <li>아이템 제출: 오랜 친구의 편지</li>
                <img src="/images/wiki/quests08-01.webp" alt="오랜 친구의 편지" />
            </ul>
            <h3>보상</h3>
            <ul>
                <li>+2500 경험치</li>
                <li>450 돈</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **오랜 친구의 편지**를 인계해야 합니다.</p>
            `
    },
    {
        id: 9,
        title: '의료 용품',
        description: '의료 용품은 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '의료 용품',
        publishDate: '2025-10-27',
        addressBar: '/medical-supplies',
        showDetail: true,
        rewards: [
            '+2500 경험치',
            '응급 처치 키트 "S" 2개',
            '450 돈',
            '응급 처치 키트 "S" 상품 잠금 해제'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '새로운 사냥꾼'
            },
            {
                label: '다음 퀘스트',
                value: '아마도 일반 의약품'
            }
        ],
        seo: {
            title: '의료 용품 퀘스트 - Escape from Duckov',
            description: '의료 용품은 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 의료 용품, 제프 퀘스트, 응급 처치 키트 S, 제출',
        },
        detailsHtml: `
            <h2>의료 용품</h2>
            <p>의료 용품은 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>**의료 용품**은 Duckov에서 매우 중요합니다. 지금 **응급 처치 키트 S**가 필요합니다. 찾으러 가거나 의료 스테이션에서 제작할 수 있습니다.</p>
            <h3>임무</h3>
            <ul>
                <li>아이템 제출: 응급 처치 키트 "S" 3개</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>2500 경험치</li>
                <li>응급 처치 키트 "S" 2개</li>
                <li>450 돈</li>
                <li>응급 처치 키트 "S" 상품 잠금 해제</li>
            </ul>
            <h3>필수 아이템</h3>
            <table>
                <tr>
                    <th>아이콘</th>
                    <th>아이템 이름</th>
                    <th>수량</th>
                    <th>용도</th>
                </tr>
                <tr>
                    <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests09-01.webp" alt="의료 용품" /></td>
                    <td>응급 처치 키트 S</td>
                    <td>3</td>
                    <td>인계해야 합니다.</td>
                </tr>
            </table>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 제프에게 **응급 처치 키트 "S" 3개**를 인계해야 합니다.</p>
            `
    },
    {
        id: 10,
        title: '머리를 노려라',
        description: '머리를 노려라는 Escape From Duckov의 퀘스트입니다.',
        imageUrl: '/images/wiki/quests-01.webp',
        imageAlt: '머리를 노려라',
        publishDate: '2025-10-27',
        addressBar: '/aim-for-the-head',
        showDetail: true,
        rewards: [
            '+2000 경험치',
            '500 돈'
        ],
        rightContent: [
            {
                label: '퀘스트 제공자',
                value: '제프'
            },
            {
                label: '이전 퀘스트',
                value: '인프라'
            },
            {
                label: '다음 퀘스트',
                value: '인프라 - 파트 2, 오랜 친구의 편지'
            }
        ],
        seo: {
            title: '머리를 노려라 퀘스트 - Escape from Duckov',
            description: '머리를 노려라는 Escape From Duckov의 퀘스트입니다.',
            keywords: 'Escape from Duckov, 머리를 노려라, 제프 퀘스트, 헤드샷, 임무',
        },
        detailsHtml: `
            <h2>머리를 노려라</h2>
            <p>머리를 노려라는 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>???</p>
            <h3>임무</h3>
            <ul>
                <li>**그라운드 제로**에서 적 5명을 헤드샷으로 처치</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>2000 경험치</li>
                <li>500 돈</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **적 5명**을 **헤드샷**으로 처치해야 합니다.</p>
            `
    },
    {
        "id": 11,
        "title": "인프라 - 파트 3",
        "description": "인프라 - 파트 3는 Escape From Duckov의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "인프라 - 파트 3",
        "publishDate": "2025-11-06",
        "addressBar": "/infrastructure-part-3",
        "showDetail": true,
        "rewards": ["1500 경험치", "1000 머니"],
        "rightContent": [
            {
                "label": "의뢰인",
                "value": "Jeff"
            },
            {
                "label": "이전 퀘스트",
                "value": "Infrastructure"
            },
            {
                "label": "다음 퀘스트",
                "value": "Fishing Hobbyist"
            }
        ],
        "seo": {
            "title": "인프라 - 파트 3 퀘스트 - Escape from Duckov",
            "description": "인프라 - 파트 3는 Escape From Duckov의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 인프라 - 파트 3, Jeff 퀘스트, 인프라 - 파트 3, 인프라 - 파트 3"
        },
        "detailsHtml": `
            <h2>인프라 - 파트 3</h2>
            <p>인프라 - 파트 3는 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>다른 오랜 친구와 연락이 닿았습니다. 그는 많은 인맥을 가진 장비 상인입니다. 당신이 상점을 설치한 후, 그가 올 것입니다.</p>
            <h3>임무</h3>
            <ul>
                <li>방어구 상점 건설</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>1000 경험치</li>
                <li>1500 머니</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 방어구 상점을 건설해야 합니다.</p>
            `
    },
    {
        "id": 12,
        "title": "인프라 - 의료",
        "description": "인프라 - 의료는 Escape From Duckov의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "인프라 - 의료",
        "publishDate": "2025-11-06",
        "addressBar": "/infrastructure-medical",
        "showDetail": true,
        "rewards": ["1000 경험치", "1000 머니"],
        "rightContent": [
            {
                "label": "의뢰인",
                "value": "Jeff"
            },
            {
                "label": "이전 퀘스트",
                "value": "Infrastructure"
            },
            {
                "label": "다음 퀘스트",
                "value": "Fishing Hobbyist"
            }
        ],
        "seo": {
            "title": "인프라 - 의료 퀘스트 - Escape from Duckov",
            "description": "인프라 - 의료는 Escape From Duckov의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 인프라 - 의료, Jeff 퀘스트, 인프라 - 의료, 인프라 - 의료"
        },
        "detailsHtml": `
            <h2>인프라 - 의료</h2>
            <p>인프라 - 의료는 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>다양한 의료 용품을 우리가 직접 만들 수 있다면 훨씬 더 편리할 것입니다.</p>
            <h3>임무</h3>
            <ul>
                <li>의료 스테이션 건설</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>1000 경험치</li>
                <li>1000 머니</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 의료 스테이션을 건설해야 합니다.</p>
            `
    },
    {
        "id": 13,
        "title": "복제 권총",
        "description": "복제 권총은 Escape From Duckov의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "복제 권총",
        "publishDate": "2025-11-06",
        "addressBar": "/replica-pistol",
        "showDetail": true,
        "rewards": ["1500 경험치", "1000 머니", "PM 상품 잠금 해제"],
        "rightContent": [
            {
                "label": "의뢰인",
                "value": "Jeff"
            },
            {
                "label": "이전 퀘스트",
                "value": "Aim for the Head"
            },
            {
                "label": "다음 퀘스트",
                "value": "Large Capacity<br/>Strange Feather"
            }
        ],
        "seo": {
            "title": "복제 권총 퀘스트 - Escape from Duckov",
            "description": "복제 권총은 Escape From Duckov의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 복제 권총, Jeff 퀘스트, 복제 권총, 복제 권총"
        },
        "detailsHtml": `
            <h2>복제 권총</h2>
            <p>복제 권총은 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>권총 몇 자루를 가져와서 제가 연구할 수 있게 해주세요. 일이 잘 풀리면, 자동판매기에서 권총을 구매할 수 있게 될 것입니다.</p>
            <h3>임무</h3>
            <ul>
                <li>아이템 제출: PM 2개</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>1500 경험치</li>
                <li>1000 머니</li>
                <li>PM 상품 잠금 해제</li>
            </ul>
            <h3>필요 아이템</h3>
            <table>
                <tr>
                    <th>아이콘</th>
                    <th>아이템 이름</th>
                    <th>수량</th>
                    <th>용도</th>
                </tr>
            </table>
            <tr>
                <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests09-01.webp" alt="의료 용품" /></td>
                <td>PM</td>
                <td>2</td>
                <td>제출해야 합니다.</td>
            </tr>
            </table>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 PM 권총 2자루를 찾아서 건네주어야 합니다.</p>
            `
    },
    {
        "id": 14,
        "title": "대용량",
        "description": "대용량은 Escape From Duckov의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "대용량",
        "publishDate": "2025-11-06",
        "addressBar": "/large-capacity",
        "showDetail": true,
        "rewards": ["1000 경험치", "2000 머니"],
        "rightContent": [
            {
                "label": "의뢰인",
                "value": "Jeff"
            },
            {
                "label": "이전 퀘스트",
                "value": "Replica Pistol"
            },
            {
                "label": "다음 퀘스트",
                "value": "-"
            }
        ],
        "seo": {
            "title": "대용량 퀘스트 - Escape from Duckov",
            "description": "대용량은 Escape From Duckov의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 대용량, Jeff 퀘스트, 대용량, 대용량"
        },
        "detailsHtml": `
            <h2>대용량</h2>
            <p>대용량은 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>???</p>
            <h3>임무</h3>
            <ul>
                <li>저장고 레벨 1 잠금 해제</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 저장고 레벨 1 업그레이드를 잠금 해제해야 합니다. (저장고로 이동하여 "저장고 확장"까지 스크롤하세요)</p>
            `
    },
    {
        "id": 15,
        "title": "이상한 깃털",
        "description": "이상한 깃털은 Escape From Duckov의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "이상한 깃털",
        "publishDate": "2025-11-06",
        "addressBar": "/strange-feather",
        "showDetail": true,
        "rewards": ["1000 경험치", "1000 머니", "토템: 닌자"],
        "rightContent": [
            {
                "label": "의뢰인",
                "value": "Jeff"
            },
            {
                "label": "이전 퀘스트",
                "value": "Replica Pistol"
            },
            {
                "label": "다음 퀘스트",
                "value": "-"
            }
        ],
        "seo": {
            "title": "이상한 깃털 퀘스트 - Escape from Duckov",
            "description": "이상한 깃털은 Escape From Duckov의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 이상한 깃털, Jeff 퀘스트, 이상한 깃털, 이상한 깃털"
        },
        "detailsHtml": `
            <h2>이상한 깃털</h2>
            <p>이상한 깃털은 Escape From Duckov의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>???</p>
            <h3>임무</h3>
            <ul>
                <li>아이템 제출: Fading Feather 4개</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>1000 경험치</li>
                <li>1000 머니</li>
                <li>토템: 닌자 I</li>
            </ul>
            <h3>필요 아이템</h3>
            <table>
                <tr>
                    <th>아이콘</th>
                    <th>아이템 이름</th>
                    <th>수량</th>
                    <th>용도</th>
                </tr>
                <tr>
                    <td></td>
                    <td>Fading Feather (바래진 깃털)</td>
                    <td>4</td>
                    <td>제출해야 합니다.</td>
                </tr>
            </table>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 Fading Feather(바래진 깃털) 4개를 찾아서 건네주어야 합니다.</p>
            `
    },
    {
        "id": 16,
        "title": "좋은 사람 (Nice Guy)",
        "description": "좋은 사람은 'Escape From Duckov'의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "좋은 사람",
        "publishDate": "2025-11-06",
        "addressBar": "/nice-guy",
        "showDetail": true,
        "rewards": ["경험치 1000", "998 머니", "트로피", "위시리스트의 힘", "빨간 봉투"],
        "rightContent": [
            {
                "label": "제공자",
                "value": "제프 (Jeff)"
            },
            {
                "label": "이전 퀘스트",
                "value": "Infrastructure - Part 2"
            },
            {
                "label": "다음 퀘스트",
                "value": "-"
            }
        ],
        "seo": {
            "title": "좋은 사람 퀘스트 - Escape from Duckov",
            "description": "좋은 사람은 'Escape From Duckov'의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 좋은 사람, 제프 퀘스트, 좋은 사람, 좋은 사람"
        },
        "detailsHtml": `
            <h2>좋은 사람 (Nice Guy)</h2>
            <p>좋은 사람은 'Escape From Duckov'의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>최근 '위시리스트에 추가해주세요!'라고 반복해서 말하는 이상한 행동을 하는 개발자(저는 아닙니다)를 알고 있습니다. 그는 꽤 좋은 사람이지만, 왜 미쳐버렸는지 모르겠습니다. 그를 돕고 싶으신가요?</p>
            <h3>임무</h3>
            <ul>
                <li>기지 벽에 있는 **파란색 패턴**을 확인하십시오!</li>
            </ul>
            <img src="/images/wiki/quests16-01.webp" alt="파란색 패턴" />
            <h3>보상</h3>
            <ul>
                <li>경험치 1000</li>
                <li>998 머니</li>
                <li>트로피</li>
                <li>위시리스트의 힘</li>
                <li>빨간 봉투</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 "Wishlist"라고 적힌 벽의 **파란색 표시**로 가서 상호작용해야 합니다.</p>
            `
    },
    {
        "id": 17,
        "title": "모기 박멸 (Mosquito Extermination)",
        "description": "모기 박멸은 'Escape From Duckov'의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "모기 박멸",
        "publishDate": "2025-11-06",
        "addressBar": "/mosquito-extermination",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money", "Cannon"],
        "rightContent": [
            {
                "label": "제공자",
                "value": "제프 (Jeff)"
            },
            {
                "label": "이전 퀘스트",
                "value": "???"
            },
            {
                "label": "다음 퀘스트",
                "value": "-"
            }
        ],
        "seo": {
            "title": "모기 박멸 퀘스트 - Escape from Duckov",
            "description": "모기 박멸은 'Escape From Duckov'의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 모기 박멸, 제프 퀘스트, 모기 박멸, 모기 박멸"
        },
        "detailsHtml": `
            <h2>모기 박멸 (Mosquito Extermination)</h2>
            <p>모기 박멸은 'Escape From Duckov'의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>요즘 방의 모기 때문에 잠을 잘 수가 없습니다. 대포는 준비되었지만, 화약이 필요합니다. 작업대에서 일반 탄약을 분해하여 화약을 얻을 수 있습니다.</p>
            <h3>임무</h3>
            <ul>
                <li>아이템 제출: **화약 30개**</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>경험치 1000</li>
                <li>500 머니</li>
                <li>대포</li>
            </ul>
            <h3>필요 아이템</h3>
            <table>
                <tr>
                    <th>아이콘</th>
                    <th>아이템 이름</th>
                    <th>수량</th>
                    <th>사용처</th>
                </tr>
            </table>
            <tr>
                <td><img width="60" height="60" style="margin-bottom: 0;" src="/images/wiki/quests09-01.webp" alt="의료품" /></td>
                <td>화약 (Gunpowder)</td>
                <td>30</td>
                <td>제출해야 합니다.</td>
            </tr>
            </table>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **화약 30개**를 제프에게 **전달**해야 합니다.</p>
            `
    },
    {
        "id": 18,
        "title": "인프라 구축 - 파트 4 (Infrastructure - Part 4)",
        "description": "인프라 구축 - 파트 4는 'Escape From Duckov'의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "인프라 구축 - 파트 4",
        "publishDate": "2025-11-06",
        "addressBar": "/infrastructure-part-4",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money"],
        "rightContent": [
            {
                "label": "제공자",
                "value": "제프 (Jeff)"
            },
            {
                "label": "이전 퀘스트",
                "value": "Infrastructure - Part 2<br/>Infrastructure - Part 3"
            },
            {
                "label": "다음 퀘스트",
                "value": "Unlocking Beacons - Part 1"
            }
        ],
        "seo": {
            "title": "인프라 구축 - 파트 4 퀘스트 - Escape from Duckov",
            "description": "인프라 구축 - 파트 4는 'Escape From Duckov'의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 인프라 구축 - 파트 4, 제프 퀘스트, 인프라 구축 - 파트 4, 인프라 구축 - 파트 4"
        },
        "detailsHtml": `
            <h2>인프라 구축 - 파트 4 (Infrastructure - Part 4)</h2>
            <p>인프라 구축 - 파트 4는 'Escape From Duckov'의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>우리 은신처가 모양을 갖추고 있습니다. 이제 더 멀리 별들 속으로 나아갈 시간입니다! 우리만의 **텔레포터**를 만드는 것이 첫 번째 단계입니다.</p>
            <h3>임무</h3>
            <ul>
                <li>**텔레포터** 건설</li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>경험치 1000</li>
                <li>500 머니</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **텔레포터**를 **건설**해야 합니다.</p>
            `
    },
    {
        "id": 19,
        "title": "비콘 해제 - 파트 1 (Unlocking Beacons - Part 1)",
        "description": "비콘 I을 해제하는 것은 'Escape From Duckov'의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "비콘 해제 - 파트 1",
        "publishDate": "2025-11-06",
        "addressBar": "/unlocking-beacons-part-1",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money"],
        "rightContent": [
            {
                "label": "제공자",
                "value": "제프 (Jeff)"
            },
            {
                "label": "이전 퀘스트",
                "value": "Infrastructure - Part 4"
            },
            {
                "label": "다음 퀘스트",
                "value": "Explore The Warehouses"
            }
        ],
        "seo": {
            "title": "비콘 해제 - 파트 1 퀘스트 - Escape from Duckov",
            "description": "비콘 I을 해제하는 것은 'Escape From Duckov'의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 인프라 구축 - 의료, 제프 퀘스트, 인프라 구축 - 의료, 인프라 구축 - 의료"
        },
        "detailsHtml": `
            <h2>비콘 해제 - 파트 1 (Unlocking Beacons - Part 1)</h2>
            <p>비콘 I을 해제하는 것은 'Escape From Duckov'의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>이제 우리만의 텔레포터를 만들었으니, **그라운드 제로(Ground Zero) 비콘**을 해제합시다. 이 비콘들은 무료 텔레포트를 허용하지만, 좌표가... 안정적이지 않습니다. 정보에 따르면 비콘은 로드 캠프에 있다고 합니다. 위험하니 정신을 바짝 차리세요.</p>
            <h3>임무</h3>
            <ul>
                <li>**그라운드 제로 비콘** 해제</li>
                 <li style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <img src="/images/wiki/quests19-01.webp" alt="그라운드 제로 비콘 해제" />
                    <img src="/images/wiki/quests19-02.webp" alt="그라운드 제로 비콘 해제" />
                </li>
            </ul>
    
            <h3>보상</h3>
            <ul>
                <li>경험치 1000</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 로드 캠프에 도달하여 **그라운드 제로 비콘**을 **해제**하여 텔레포트를 활성화해야 합니다.</p>
            `
    },
    {
        "id": 20,
        "title": "비콘 해제 - 파트 2 (Unlocking Beacons - Part 2)",
        "description": "비콘 II를 해제하는 것은 'Escape From Duckov'의 퀘스트입니다.",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "비콘 해제 - 파트 2",
        "publishDate": "2025-11-06",
        "addressBar": "/unlocking-beacons-part-2",
        "showDetail": true,
        "rewards": ["1000 Experience", "500 Money"],
        "rightContent": [
            {
                "label": "제공자",
                "value": "제프 (Jeff)"
            },
            {
                "label": "이전 퀘스트",
                "value": "Unlocking Beacons - Part 1"
            },
            {
                "label": "다음 퀘스트",
                "value": "-"
            }
        ],
        "seo": {
            "title": "비콘 해제 - 파트 2 퀘스트 - Escape from Duckov",
            "description": "비콘 해제 - 파트 2는 'Escape From Duckov'의 퀘스트입니다.",
            "keywords": "Escape from Duckov, 비콘 해제 - 파트 2, 제프 퀘스트, 비콘 해제 - 파트 2, 비콘 해제 - 파트 2"
        },
        "detailsHtml": `
            <h2>비콘 해제 - 파트 2 (Unlocking Beacons - Part 2)</h2>
            <p>비콘 II를 해제하는 것은 'Escape From Duckov'의 퀘스트입니다.</p>
            <h3>대화</h3>
            <p>드디어 더 멀리 나아갑니다. **창고 지역**으로의 이동을 더 빠르게 하려면, 창고 지역의 **주유소 옆에 있는 텔레포트 비콘**을 활성화해야 합니다.</p>
            <h3>임무</h3>
            <ul>
                <li>**창고 지역 비콘** 해제</li>
                 <li style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <img src="/images/wiki/quests20-01.webp" alt="창고 지역 비콘 해제" />
                    <img src="/images/wiki/quests20-02.webp" alt="창고 지역 비콘 해제" />
                </li>
            </ul>
            <h3>보상</h3>
            <ul>
                <li>경험치 2000</li>
            </ul>
            <h3>퀘스트 가이드</h3>
            <p>이 퀘스트에서는 **창고 지역**의 **주유소 옆**에 있는 텔레포트 비콘을 찾아 활성화하여 빠른 이동을 해제해야 합니다.</p>
            `
    },
    {
        "id": 20,
        "title": "비콘 잠금 해제 - 파트 2",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "비콘 잠금 해제 - 파트 2",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 21,
        "title": "창고 탐험",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "창고 탐험",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1500 경험치",
            "1500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 22,
        "title": "낚시 애호가",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "낚시 애호가",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2000 경험치",
            "1000 머니",
            "손전등 1개",
            "상품 손전등 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 23,
        "title": "낚싯대 업그레이드",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "낚싯대 업그레이드",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "2000 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 24,
        "title": "보급로",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "보급로",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2500 경험치",
            "450 머니",
            "방어구 Lv3",
            "오렌지 방어구 상점에서 상품 방어구 Lv3 잠금 해제",
            "오렌지 방어구 상점에서 상품 SWAT 헬멧 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 25,
        "title": "낚시 애호가 2",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "낚시 애호가 2",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "500 머니",
            "가스 마스크 2개",
            "오렌지 방어구 상점에서 상품 여행 가방 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 26,
        "title": "수자원",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "수자원",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2000 경험치",
            "500 머니",
            "오렌지 방어구 상점에서 상품 GPNVG-18 야간 투시경 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 27,
        "title": "은둔",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "은둔",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2500 경험치",
            "450 머니",
            "오렌지 방어구 상점에서 상품 방어구 Lv4 잠금 해제",
            "오렌지 방어구 상점에서 상품 사이트 PRO 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 28,
        "title": "균형 잡힌 영양 - 파트 3",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "균형 잡힌 영양 - 파트 3",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1500 경험치",
            "1500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 29,
        "title": "피트니스 트레이너",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "피트니스 트레이너",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "500 경험치",
            "1500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 30,
        "title": "자급자족",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "자급자족",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1500 경험치",
            "2000 머니",
            "진통제 2개"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 31,
        "title": "의료 지원",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "의료 지원",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "2500 머니",
            "노란색 주사 2개",
            "체중 부하 주사 2개"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 32,
        "title": "폭풍 저항",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "폭풍 저항",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "3000 경험치",
            "500 머니",
            "우주 폭풍 보호 주사 2개",
            "상품 우주 폭풍 보호 주사 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 33,
        "title": "걸어 다니는 진미",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "걸어 다니는 진미",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "3000 경험치",
            "500 머니",
            "우주 폭풍 보호 주사 2개",
            "A형 순간 접착제 2개"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 34,
        "title": "부품 도매",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "부품 도매",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2000 경험치",
            "2000 머니",
            "자비에르의 무기 상점에서 상품 AK-74U 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 35,
        "title": "성능 테스트",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "성능 테스트",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2000 경험치",
            "1500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 36,
        "title": "징벌자 - 파트 1",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "징벌자 - 파트 1",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2000 경험치",
            "1500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 37,
        "title": "오리 사냥: 차포",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "오리 사냥: 차포",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "3000 경험치",
            "2000 머니",
            "자비에르의 무기 상점에서 상품 SKS-455 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 38,
        "title": "청동 회중시계",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "청동 회중시계",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 39,
        "title": "화물 목록",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "화물 목록",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "15000 경험치",
            "500 머니",
            "자비에르의 무기 상점에서 상품 PPSh 잠금 해제",
            "자비에르의 무기 상점에서 상품 L-일반 탄환 잠금 해제",
            "자비에르의 무기 상점에서 상품 일반 저격 탄환 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 40,
        "title": "새로운 화물",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "새로운 화물",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "500 머니",
            "자비에르의 무기 상점에서 상품 AK-47 잠금 해제",
            "자비에르의 무기 상점에서 상품 Mag-일반 탄환 잠금 해제",
            "자비에르의 무기 상점에서 상품 컨트롤 스톡 I 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 41,
        "title": "저격수 입문",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "저격수 입문",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "3000 경험치",
            "5500 머니",
            "슈퍼 접착제 B 2개"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 42,
        "title": "서부에서 온 남자들",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "서부에서 온 남자들",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2200 경험치",
            "1500 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 43,
        "title": "고급 저격수",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "고급 저격수",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "4000 경험치",
            "3500 머니",
            "자비에르의 무기 상점에서 상품 SV98 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 44,
        "title": "물류 단계",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "물류 단계",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "2000 머니",
            "자비에르의 무기 상점에서 상품 밸런스 스톡 II 잠금 해제",
            "자비에르의 무기 상점에서 상품 2배율 조준경 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 45,
        "title": "도전: 신속한 사령관",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "도전: 신속한 사령관",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "3500 경험치",
            "3000 머니",
            "자비에르의 무기 상점에서 상품 S-저등급-철갑탄 잠금 해제",
            "자비에르의 무기 상점에서 상품 AR-저등급-철갑탄 잠금 해제",
            "자비에르의 무기 상점에서 상품 저등급-철갑 산탄총 탄약 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 46,
        "title": "골드 저격수",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "골드 저격수",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "5000 경험치",
            "4500 머니",
            "자비에르의 무기 상점에서 상품 M107 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 47,
        "title": "캐주얼 스포츠",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "캐주얼 스포츠",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "4000 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 48,
        "title": "궁수",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "궁수",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "4000 경험치",
            "5000 머니",
            "VPO-101 1개"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 49,
        "title": "비다의 도전",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "비다의 도전",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "5000 경험치",
            "6000 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 50,
        "title": "정육점 칼 마스터",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "정육점 칼 마스터",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "6000 경험치",
            "648 머니",
            "황금 별 1개",
            "도전 페리 티켓 3개"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 51,
        "title": "새로운 도전",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "새로운 도전",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "500 머니",
            "지구력 주사 1개",
            "DEMO 궁극 도전 티켓 3개",
            "자동판매기 상점에서 상품 지구력 주사 잠금 해제",
            "자동판매기 상점에서 상품 DEMO 궁극 도전 티켓 잠금 해제"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 52,
        "title": "차포의 도전",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "차포의 도전",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "1000 경험치",
            "998 머니"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    },
    {
        "id": 53,
        "title": "식칼의 신",
        "description": "",
        "imageUrl": "/images/wiki/quests-01.webp",
        "imageAlt": "식칼의 신",
        "publishDate": "2025-10-30",
        "addressBar": "",
        "showDetail": false,
        "rewards": [
            "2800 경험치",
            "648 머니",
            "황금 별 1개",
            "DEMO 궁극 도전 티켓 3개"
        ],
        "rightContent": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "detailsHtml": ""
    }

]

