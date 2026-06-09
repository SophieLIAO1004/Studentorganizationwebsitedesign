import { images } from './images';

export interface Activity {
  id: string;
  title: { zh: string; jp: string };
  date: string;
  category: { zh: string; jp: string };
  description: { zh: string; jp: string };
  coverImage: string | any;
  gallery: (string | any)[];
}

export const activities: Activity[] = [
  {
    id: 'cultural-exchange-2024',
    title: { zh: '迎新', jp: '新歓' },
    date: '2024-03-15',
    category: { zh: '文化交流', jp: '文化交流' },
    description: {
      zh: '迎新是本社每學期初舉辦的第一個大型活動,透過分組互動讓新舊社員快速熟悉彼此。活動形式多元,曾舉辦分組BBQ結合團康競賽,或在台北市內進行小旅行並完成解謎任務。在輕鬆愉快的氛圍中,促進交流並建立連結。',
      jp: '新歓は毎学期の初めに開催される最初の大型イベントで、新旧メンバーがグループに分かれて交流を深めます。これまでに、グループごとのBBQやレクリエーション大会、台北市内でのミニ旅行と謎解き活動などを実施してきました。リラックスした雰囲気の中で、自然に交流を広げることができます。'
    },
    coverImage: images.welcome.bbq,
    gallery: [
      images.welcome.bbq,
      images.welcome.group16
    ]
  },
  {
    id: 'kyoto-cultural-tour',
    title: { zh: '社課', jp: 'サークルイベント' },
    date: '2024-02-20',
    category: { zh: '文化參訪', jp: '文化訪問' },
    description: {
      zh: '社課是固定舉辦的交流活動,結合文化體驗與互動學習。過去曾舉辦鳳梨酥、綠豆黃、珍珠奶茶等台灣特色美食DIY,也舉辦過台日運動會,透過輕鬆有趣的活動促進彼此交流。',
      jp: 'サークルイベントは固定的に開催している交流イベントで、文化体験とインタラクティブな学びを組み合わせています。これまでに、パイナップルケーキや緑豆菓子、タピオカなどの台湾スイーツ作り体験や、台日運動会を実施してきました。'
    },
    coverImage: images.socialEvent.greenBean,
    gallery: [
      images.socialEvent.greenBean,
      images.socialEvent.first
    ]
  },
  {
    id: 'taiko-performance',
    title: { zh: '語言交換', jp: '言語交換' },
    date: '2024-01-10',
    category: { zh: '藝術表演', jp: '芸術パフォーマンス' },
    description: {
      zh: '語言交換是本社舉辦次數最多的活動,每個月固定舉辦多場。活動中,台灣與日本學生同桌交流,並分為中文時間與日文時間,讓雙方都有機會進行口說練習。',
      jp: '言語交換は本会で最も多く開催されている活動で、毎月複数回実施されています。イベントでは台湾人と日本人が同じテーブルで交流し、中国語タイムと日本語タイムに分けて、お互いに会話練習を行います。'
    },
    coverImage: images.languageExchange.dec,
    gallery: [
      images.languageExchange.dec,
      images.languageExchange.second
    ]
  },
  {
    id: 'temple-visit',
    title: { zh: '桌遊會', jp: 'ボードゲーム会' },
    date: '2023-12-05',
    category: { zh: '文化參訪', jp: '文化訪問' },
    description: {
      zh: '桌遊會是本社每學期固定舉辦多次的活動。在桌遊店內,參與者可以自由挑選喜歡的桌遊,並嘗試用中文或日文向夥伴說明遊戲規則,一起同樂。',
      jp: 'ボードゲーム会は、本会で毎学期複数回開催している定番のイベントです。ボードゲームカフェで好きなゲームを選び、中国語や日本語でルールを説明しながら一緒に楽しみます。'
    },
    coverImage: images.boardGame.first,
    gallery: [
      images.boardGame.first,
      images.boardGame.second
    ]
  },
  {
    id: 'taipei-meetup',
    title: { zh: '日本學校交流', jp: '日本学校交流' },
    date: '2023-11-18',
    category: { zh: '語言交流', jp: '言語交換' },
    description: {
      zh: '日本學校交流是重要活動之一,透過與日本各校或學生組織合作,促進雙方學生的互動與了解。過去曾與關西大學、日本日美學生會議、廣島なぎさ高等学校等共同舉辦交流活動,透過座談、分組討論與文化分享,深化彼此連結,拓展國際視野。',
      jp: '日本学校との交流は重要な活動の一つであり、日本の各学校や学生団体との連携を通じて、学生同士の交流と相互理解を深めています。これまでに、関西大学、日本日米学生会議、広島なぎさ高等学校などと共同で交流イベントを開催してきました。ディスカッションやグループ活動、文化共有を通じて、つながりを深め、国際的な視野を広げています。'
    },
    coverImage: images.schoolExchange.first,
    gallery: [
      images.schoolExchange.first,
      images.schoolExchange.second
    ]
  },
  {
    id: 'outdoor-activities',
    title: { zh: '期末忘年會', jp: '期末忘年会' },
    date: '2023-10-22',
    category: { zh: '戶外活動', jp: 'アウトドア' },
    description: {
      zh: '期末忘年會是每學期期末考結束後舉辦的大型活動,讓大家在學期結束之際一起放鬆與慶祝。活動中會準備餐點與飲品,大家一邊聊天、一邊玩遊戲,在輕鬆歡樂的氛圍中交流互動。就像一場溫馨又熱鬧的派對,為這學期劃下完美句點。',
      jp: '期末忘年会は、毎学期の期末試験終了後に開催される大型イベントで、学期の締めくくりとしてリラックスしながら皆でお祝いします。食事やドリンクを楽しみながら、会話やゲームで交流を深めることができます。温かく賑やかなパーティーのような雰囲気の中で、学期を締めくくるひとときです。'
    },
    coverImage: images.yearEnd.first,
    gallery: [
      images.yearEnd.first,
      images.yearEnd.second
    ]
  },
  {
    id: 'cooking-class',
    title: { zh: '社遊', jp: 'サークル旅行' },
    date: '2023-09-15',
    category: { zh: '文化體驗', jp: '文化体験' },
    description: {
      zh: '社遊是戶外交流活動,帶領大家走訪台灣各地,透過實地體驗認識在地文化。過去曾前往宜蘭體驗蔥油餅DIY、參觀林業園區,也到台中高美濕地欣賞夕陽,或在三峽老街體驗客家文化、坪林進行採茶活動。',
      jp: 'サークル旅行はアウトドア交流イベントで、台湾各地を訪れながら現地の文化を体験します。これまでに、宜蘭でのネギ餅作り体験や林業園区の見学、台中の高美湿地での夕日鑑賞、三峡老街での客家文化体験、坪林での茶摘み体験などを行ってきました。'
    },
    coverImage: images.trip.second,
    gallery: [
      images.trip.second,
      images.trip.first
    ]
  },
  {
    id: 'calligraphy-workshop',
    title: { zh: '分科會', jp: '分科会' },
    date: '2023-08-10',
    category: { zh: '藝術工作坊', jp: 'アートワークショップ' },
    description: {
      zh: '分科會是以主題討論為核心的交流活動,參與者分組選擇感興趣的主題,探討台灣與日本之間的差異。透過資料整理與討論後進行報告,不僅能培養表達與思考能力,也能從多元觀點深入理解兩地文化,在交流中激發新的想法。',
      jp: '分科会はテーマ別ディスカッションを中心とした交流活動で、参加者はグループごとに興味のあるテーマを選び、台湾と日本の違いについ考察します。調査や議論を重ねた後に発表を行い、表現力や思考力を養うとともに、多角的な視点から両国の文化への理解を深めます。'
    },
    coverImage: images.division.first,
    gallery: [
      images.division.first,
      images.division.second
    ]
  },
  {
    id: 'cherry-blossom-viewing',
    title: { zh: '一起食', jp: '食事会' },
    date: '2023-04-05',
    category: { zh: '季節活動', jp: '季節イベント' },
    description: {
      zh: '一起食是輕鬆的交流活動,台灣與日本成員分組一同用餐,在自在的氛圍中聊天交流。透過日常對話分享彼此的生活與文化,不僅能練習語言,也能更自然地拉近距離。',
      jp: '食事会はリラックスした交流イベントで、台湾人と日本人のメンバーがグループに分かれて一緒に食事を楽しみます。気軽な雰囲気の中で会話を交わしながら、お互いの生活や文化を共有します。語学の練習になるだけでなく、自然に距離を縮めることができます。'
    },
    coverImage: images.dining.first,
    gallery: [
      images.dining.first,
      images.dining.second
    ]
  },
  {
    id: 'summer-festival',
    title: { zh: '日本企業說明會', jp: '日本就職セミナー' },
    date: '2023-07-20',
    category: { zh: '節慶活動', jp: '祭りイベント' },
    description: {
      zh: '日本企業說明會是本社舉辦的重要職涯交流活動,邀請日本企業分享公司業務內容與求職實務知識,並提供求職準備與職涯建議。同時設有Q&A時間,讓學生直接向企業提問。活動對台灣學生與日本留學生皆有助益。過去曾邀請KANAMEL與DISCO等日本企業進行分享。',
      jp: '日本企業説明会は本会が主催する重要なキャリア交流イベントで、日本企業が事業内容や就職に関する実務知識、就職準備やキャリアアドバイスを紹介します。またQ&A時間も設けられ、学生が直接企業へ質問できます。台湾・日本の学生双方に有益な内容となっており、過去にはKANAMELやDISCOなどの日本企業を招いて開催しました。'
    },
    coverImage: images.kanamel.first,
    gallery: [
      images.kanamel.first,
      images.kanamel.second
    ]
  },
  {
    id: 'study-abroad-seminar',
    title: { zh: '電影欣賞會', jp: '映画鑑賞会' },
    date: '2023-06-12',
    category: { zh: '學術交流', jp: '学術交流' },
    description: {
      zh: '電影欣賞會是本社的交流活動之一,會包場影廳一起觀賞上映中的日本電影。透過共同觀影與之後的討論分享,讓台灣與日本成員交流彼此對劇情與文化的看法。',
      jp: '映画鑑賞会は本会の交流イベントの一つで、映画館を貸し切り、上映中の日本映画を一緒に鑑賞します。鑑賞後のディスカッションを通じて、台湾人と日本人のメンバーが作品や文化について意見を共有します。'
    },
    coverImage: images.movie.april,
    gallery: [
      images.movie.april,
      images.movie.heron
    ]
  },
  {
    id: 'year-end-party',
    title: { zh: '聽力練習會', jp: 'リスニング練習会' },
    date: '2023-12-28',
    category: { zh: '聯誼活動', jp: '交流イベント' },
    description: {
      zh: '聽力練習會依照參與者的語言程度分組,使用不同難度的聽力教材。台灣與日本成員兩人一組,互相為對方準備JLPT與TOCFL相關內容,進行提問與說明練習。透過實際互動提升聽解與口語表達能力。',
      jp: 'リスニング練習会は参加者の語学レベルに応じてグループ分けを行い、難易度の異なるリスニング教材を使用します。台湾人と日本人がペアになり、TOCFLやJLPTに関連する内容について互いに問題を出し合い、説明を行う練習をします。実際のやり取りを通じて、聴解力と口頭表現力の向上を目指します。'
    },
    coverImage: images.listening.first,
    gallery: [
      images.listening.first,
      images.listening.second
    ]
  }
];