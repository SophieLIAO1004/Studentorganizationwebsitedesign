export interface Activity {
  id: string;
  title: { zh: string; jp: string };
  date: string;
  category: { zh: string; jp: string };
  description: { zh: string; jp: string };
  coverImage: string;
  gallery: string[];
}

export const activities: Activity[] = [
  {
    id: 'cultural-exchange-2024',
    title: { zh: '迎新', jp: '新歓' },
    date: '2024-03-15',
    category: { zh: '文化交流', jp: '文化交流' },
    description: {
      zh: '一年一度的新生歡迎活動，透過各種有趣的遊戲和活動，讓台灣和日本的學生們互相認識，建立友誼的橋樑。活動包含自我介紹、破冰遊戲、文化體驗工作坊，以及溫馨的聯誼晚餐。大家在輕鬆愉快的氛圍中交流，分享彼此的文化和經驗。',
      jp: '年に一度の新入生歓迎イベントでは、様々な楽しいゲームやアクティビティを通じて、台湾と日本の学生が互いに知り合い、友情の架け橋を築きました。自己紹介、アイスブレイクゲーム、文化体験ワークショップ、そして温かい交流ディナーが含まれていました。皆さんはリラックスした雰囲気の中で交流し、それぞれの文化や経験を共有しました。'
    },
    coverImage: '/src/imports/LINE_ALBUM_2026315_新歓活動！_260415_1-2.jpg',
    gallery: [
      '/src/imports/LINE_ALBUM_114-1_迎新BBQ114-1_歓迎会BBQ_260416_2.jpg',
      '/src/imports/LINE_ALBUM_114-1_迎新BBQ114-1_歓迎会BBQ_260416_5.jpg',
      '/src/imports/LINE_ALBUM_2024105_迎新_新入生歓迎会🍖_260416_1.jpg',
      '/src/imports/LINE_ALBUM_2025315_迎新新入会員歓迎イベント_260416_1.jpg',
      '/src/imports/LINE_ALBUM_2025315_迎新新入会員歓迎イベント_260416_2.jpg',
      '/src/imports/LINE_ALBUM_20240330迎新新入会員歓迎イベント🌳_260416_1.jpg',
      '/src/imports/LINE_ALBUM_20240330迎新新入会員歓迎イベント🌳_260416_2.jpg',
      '/src/imports/LINE_ALBUM_20240330迎新新入会員歓迎イベント🌳_260416_3.jpg',
      '/src/imports/LINE_ALBUM_第13組_260416_1.jpg',
      '/src/imports/LINE_ALBUM_第16組_260416_1.jpg'
    ]
  },
  {
    id: 'kyoto-cultural-tour',
    title: { zh: '社課', jp: '社課' },
    date: '2024-02-20',
    category: { zh: '文化參訪', jp: '文化訪問' },
    description: {
      zh: '前往日本古都京都，深度體驗傳統日本文化。行程包括參觀清水寺、金閣寺等知名景點，體驗茶道和和服，以及在祗園漫步感受古都風情。這次旅行不僅是視覺的享受，更是心靈的洗滌，讓大家更深入了解日本傳統文化的精髓。',
      jp: '日本の古都・京都を訪れ、伝統的な日本文化を深く��験しました。清水寺や金閣寺などの有名な観光スポットを訪問し、茶道や着物を体験し、祇園を散策して古都の雰囲気を感じました。この旅行は視覚的な楽しみだけでなく、心の洗浄でもあり、日本の伝統文化の本質をより深く理解する機会となりました。'
    },
    coverImage: '/src/imports/LINE_ALBUM_114-1綠豆黃社課サークルイベント_260416_1.jpg',
    gallery: [
      '/src/imports/LINE_ALBUM_114-1綠豆黃社課サークルイベント_260416_1.jpg',
      '/src/imports/LINE_ALBUM_114-1綠豆黃社課サークルイベント_260416_2.jpg',
      '/src/imports/LINE_ALBUM_114-1綠豆黃社課サークルイベント_260416_3.jpg',
      '/src/imports/LINE_ALBUM_2025419第一次社課_260416_1.jpg',
      '/src/imports/LINE_ALBUM_2025419第一次社課_260416_2.jpg',
      '/src/imports/LINE_ALBUM_20231111稻津走訪大稻埕謎解き散策🌾_260416_2.jpg',
      '/src/imports/LINE_ALBUM_20240420_珍的好好喝！珍珠奶茶DIY體驗タピオカミルクティー手作り体験🧋_260416_1.jpg',
      '/src/imports/LINE_ALBUM_20240420_珍的好好喝！珍珠奶茶DIY體驗タピオカミルクティー手作り体験🧋_260416_2.jpg',
      '/src/imports/LINE_ALBUM_20241116_社課-深坑解謎_260416_1.jpg',
      '/src/imports/LINE_ALBUM_20241116_社課-深坑解謎_260416_2.jpg'
    ]
  },
  {
    id: 'taiko-performance',
    title: { zh: '語言交換', jp: '語言交換' },
    date: '2024-01-10',
    category: { zh: '藝術表演', jp: '芸術パフォーマンス' },
    description: {
      zh: '邀請專業太鼓表演團隊帶來震撼的演出，並且讓參與者親自體驗打太鼓的樂趣。透過節奏的律動和團隊合作，大家不僅學習了日本傳統樂器，更感受音樂帶來的力量和團結。活動後還有交流時間，讓大家與表演者深入交流。',
      jp: 'プロの太鼓パフォーマンスチームによる迫力のある演奏を鑑賞し、参加者自身も太鼓を叩く楽しさを体験しました。リズムの律動とチームワークを通じて、日本の伝統楽器を学ぶだけでなく、音楽がもたらす力と団結を感じることができました。イベント後には交流時間も設けられ、パフォーマーと深く交流する機会がありました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1759352856144-dbd50ca5cb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1759352856144-dbd50ca5cb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1603367433430-c54c447530af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'temple-visit',
    title: { zh: '桌遊會', jp: '桌遊会' },
    date: '2023-12-05',
    category: { zh: '文化參訪', jp: '文化訪問' },
    description: {
      zh: '參訪東京周邊的傳統寺廟，了解日本佛教文化和建築之美。在導遊的解說下，我們學習了參拜禮儀、抽籤文化，以及廟建築的歷史背景。寧靜的氛圍讓大家暫時遠離都市喧囂，沉浸在日本傳統宗教文化的氛圍中。',
      jp: '東京周辺の伝統的な寺院を訪問し、日本の仏教文化と建築の美しさについて学びました。ガイドの説明のもと、参拝の礼儀、おみくじ文化、そして寺院建築の歴史的背景を学びました。静かな雰囲気の中で、都会の喧騒から離れ、日本の伝統的な宗教文化に浸ることができました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1769921734987-fbab4b6f235a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1769921734987-fbab4b6f235a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1775113228479-9d7dba75bc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'taipei-meetup',
    title: { zh: '日本學校交流', jp: '日本学校交流' },
    date: '2023-11-18',
    category: { zh: '語言交流', jp: '言語交換' },
    description: {
      zh: '在台北市中心舉辦的輕鬆交流聚會，提供台日學生面對面交流的機會。活動包含語言交換、桌遊競賽、以及美食分享。大家在歡笑中學習對方的語言，分享各自國家的趣事，建立深厚的跨國友誼。',
      jp: '台北市内で開催されたリラックスした交流イベントで、台湾と日本の学生が対面で交流する機会を提供しました。言語交換、ボードゲーム大会、グルメシェアなどが含まれていました。笑顔の中でお互いの言語を学び、それぞれの国の面白い話を共有し、深い国際的な友情を築きました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1603367433430-c54c447530af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759352856144-dbd50ca5cb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'outdoor-activities',
    title: { zh: '期末忘年會', jp: '期末忘年会' },
    date: '2023-10-22',
    category: { zh: '戶外活動', jp: 'アウトドア' },
    description: {
      zh: '來到台灣北部的山區進行戶外團隊建設活動。透過登山、野餐、團隊遊戲等活動，增進成員之間的默契和友誼。在大自然的懷抱中，大家放下平日的壓力，享受彼此陪伴的時光，也欣賞台灣美麗的自然風光。',
      jp: '台湾北部の山岳地帯でアウトドアチームビルディング活動を行いました。登山、ピクニック、チームゲームなどを通じて、メンバー間の連携と友情を深めました。自然の中で、日常のストレスから解放され、お互いの時間を楽しみ、台湾の美しい自然景観を鑑賞しました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1603367433430-c54c447530af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1603367433430-c54c447530af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'cooking-class',
    title: { zh: '社遊', jp: '社遊' },
    date: '2023-09-15',
    category: { zh: '文化體驗', jp: '文化体験' },
    description: {
      zh: '由專業日本料理師傅指導的日式料理課程，學習製作壽司、味噌湯等經典日本美食。參與者不僅學會了料理技巧，更深入了解日本飲食文化的精髓。課程結束後，大家一起享用自己親手製作的美味料理，分享烹飪的樂趣與成就感。',
      jp: 'プロの日本料理シェフによる日本料理教室で、寿司、味噌汁などの定番の日本料理の作り方を学びました。参加者は料理の技術を習得するだけでなく、日本の食文化の本質をより深く理解しました。レッスン後は、自分で作った美味しい料理を一緒に楽しみ、料理の楽しさと達成感を共有しました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1719329468433-6737cdef26c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1719329468433-6737cdef26c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1603367433430-c54c447530af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'calligraphy-workshop',
    title: { zh: '分科會', jp: '分科会' },
    date: '2023-08-10',
    category: { zh: '藝術工作坊', jp: 'アートワークショップ' },
    description: {
      zh: '傳統日本書道體驗工作坊，由經驗豐富的書道老師帶領大家學習毛筆的握法、運筆技巧，以及漢字與平假名的書寫美學。在靜心揮毫的過程中，參與者感受到日本傳統藝術的魅力，並創作出屬於自己的書法作品作為紀念。',
      jp: '伝統的な日本の書道体験ワークショップでは、経験豊富な書道の先生が、筆の持ち方、運筆のテクニック、そして漢字とひらがなの書の美学を教えてくれました。心を落ち着けて筆を振るう過程で、参加者は日本の伝統芸術の魅力を感じ、自分だけの書道作品を記念として創作しました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1486303954368-398fea0e72cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1486303954368-398fea0e72cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1769921734987-fbab4b6f235a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1775113228479-9d7dba75bc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'cherry-blossom-viewing',
    title: { zh: '一起食', jp: '一起食' },
    date: '2023-04-05',
    category: { zh: '季節活動', jp: '季節イベント' },
    description: {
      zh: '春天最期待的賞櫻活動！成員們聚集在櫻花樹下，一邊欣賞粉嫩的櫻花，一邊享用精心準備的日式便當和台灣小吃。大家在浪漫的櫻花雨中拍照留念，分享彼此的故事，度過了一個充滿春天氣息的美好午後。',
      jp: '春に最も楽しみにしていたお花見イベント！メンバーたちが桜の木の下に集まり、淡いピンクの桜を眺めながら、丁寧に用意された日本のお弁当と台湾の軽食を楽しみました。ロマンチッな桜吹雪の中で写真を撮り、お互いの物語を共有し、春の雰囲気に満ちた素晴らしい午後を過ごしました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1775735375198-f50dc78277ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1775735375198-f50dc78277ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1775113228479-9d7dba75bc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1769921734987-fbab4b6f235a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'summer-festival',
    title: { zh: '日本企業講座', jp: '日本企業講座' },
    date: '2023-07-20',
    category: { zh: '節慶活動', jp: '祭りイベント' },
    description: {
      zh: '重現日本傳統夏日祭典的氛圍！成員們穿上浴衣，參加撈金魚、射擊遊戲等經典攤位遊戲，品嚐章魚燒、刨冰等祭典美食。夜晚還有盆舞表演，大家圍成圓圈一起跳舞，體驗最道地的日本夏日風情。',
      jp: '日本の伝統的な夏祭りの雰囲気を再現！メンバーたちは浴衣を着て、金魚すくい、射的などの定番の屋台ゲームに参加し、たこ焼き、かき氷などの祭りの食べ物を味わいました。夜には盆踊りのパフォーマンスあり、皆で輪になって踊り、最も本場の日本の夏の雰囲気を体験しました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1761113031038-f7c7dad3fc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1761113031038-f7c7dad3fc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759352856144-dbd50ca5cb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1775113228479-9d7dba75bc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'study-abroad-seminar',
    title: { zh: '電影欣賞會', jp: '映画鑑賞会' },
    date: '2023-06-12',
    category: { zh: '學術交流', jp: '学術交流' },
    description: {
      zh: '邀請曾在日本留學的學長分享寶貴經驗，包申請流程、獎學金資訊、生活適應等實用資訊。現場設有問答環節，讓有意赴日留學的同學能夠深入了解留生活的真實面貌，並獲得實用的建議和資源。',
      jp: '日本への留学経験のある先輩たちを招待し、申請プロセス、奨学金情報、生活適応などの貴重な経験を共有してもらいました。Q&Aセッションも設けられ、日本への留学を考えている学生が留学生活の実際の様子を深く理解し、実用的なアドバイスとリソースを得ることができました。'
    },
    coverImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1603367433430-c54c447530af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759299983092-89cf8427dfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  },
  {
    id: 'year-end-party',
    title: { zh: '聽力練習會', jp: '聴力練習会' },
    date: '2023-12-28',
    category: { zh: '聯誼活動', jp: '交流イベント' },
    description: {
      zh: '一年的尾聲，全體成員齊聚一堂慶祝這一年的美好回憶。活動包含精彩的才藝表演、年度回顧影片、抽獎活動，以及豐盛的晚宴。大家互相感謝這一年的陪伴與支持，並期待來年能繼續攜手創造更多美好時光。',
      jp: '一年の締めくくりに、全メンバーが集まってこの一年の素晴らしい思い出を祝いました。イベントには、素晴らしいタレントショー、年間レビュービデオ、抽選会、そして豪華なディナーが含まれていました。皆でこの一年の付き合いとサポートに感謝し、来年もまた一緒に素晴らしい時間を作ることを楽しみにしています。'
    },
    coverImage: 'https://images.unsplash.com/photo-1758844899075-22da04c382aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1758844899075-22da04c382aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1759352856144-dbd50ca5cb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1603367433430-c54c447530af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1718590812265-74cb241c5bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ]
  }
];