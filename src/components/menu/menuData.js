export const chapters = [
  { id: 'nigiri', label: '鮨', en: 'Nigiri', number: '一' },
  { id: 'gunkan', label: '軍艦', en: 'Gunkan', number: '二' },
  { id: 'sashimi', label: '刺身', en: 'Sashimi', number: '三' },
  { id: 'seasonal', label: '季節', en: 'Seasonal', number: '四' },
  { id: 'desserts', label: '甘味', en: 'Sweets', number: '五' },
];

export const nigiri = {
  description:
    '握りは、毎朝豊洲で選ばれた魚と、自家製のシャリで仕上げます。',
  items: [
    {
      nameJa: '本鮪 中とろ',
      name: 'Hon-maguro Chū-toro',
      description: '本鮪のとろを軽く熟成し、自家製の煮切りで仕上げます。',
      ingredients: '本鮪 · 自家煮切り · シャリ',
      price: '¥1,800',
      image: '/menu%20item1.png',
    },
    {
      nameJa: '赤身 漬け',
      name: 'Akami Zuke',
      description:
        '醤油漬けにした赤身。鮨飯との一体感をお楽しみください。',
      ingredients: '赤身 · 醤油漬け',
      price: '¥1,200',
    },
    {
      nameJa: '鯛',
      name: 'Tai',
      description: '昆布締めにした白身魚の代表。淡白で、後味が長く。',
      ingredients: '鯛 · 昆布締め',
      price: '¥900',
    },
  ],
};

export const gunkan = {
  description:
    '海苔の香りと、ひとつひとつの粒が弾ける一貫。',
  items: [
    {
      nameJa: 'うに軍艦',
      name: 'Uni Gunkan',
      description: '北海道産の馬糞うに。海苔の香りと共に。',
      ingredients: 'バフンウニ · 海苔',
      price: '¥2,200',
      image: '/menu%20item2.png',
    },
    {
      nameJa: 'いくら軍艦',
      name: 'Ikura Gunkan',
      description:
        '塩漬けにした北海道産のいくら。粒のひとつひとつが弾けます。',
      ingredients: 'いくら · 塩漬け · 海苔',
      price: '¥2,200',
      image: '/menu%20item3.png',
    },
  ],
};

export const sashimi = {
  description: '魚そのものの香り、温度、余韻を味わう。',
  items: [
    {
      nameJa: '本鮪 三種盛り',
      name: 'Maguro Sanshu',
      description: '赤身、中とろ、大とろの三種をひと皿に。',
      ingredients: '本鮪 三種',
      price: '¥3,800',
      image: '/sushi.png',
    },
    {
      nameJa: '〆鯖',
      name: 'Shime-saba',
      description: '酢で〆た真鯖。香り高く、口溶け良く。',
      ingredients: '真鯖 · 米酢',
      price: '¥1,800',
    },
    {
      nameJa: 'ヒラメ 薄造り',
      name: 'Hirame Usuzukuri',
      description: '透けるほど薄く引いた平目。ポン酢と共に。',
      ingredients: '平目 · ポン酢',
      price: '¥2,400',
    },
  ],
};

export const seasonal = {
  subtitle: '秋',
  nameJa: '秋刀魚 炙り',
  name: 'Aki-no Sanma',
  sentence: '夜が深まるほど、一皿の温度が記憶に残る。',
  description:
    '一夜干しの秋刀魚を、藁で軽く炙り、すだちと自家製の塩で仕上げます。',
  pairing: '純米吟醸 「黒帯」',
  price: '¥1,600',
  image: '/menu%20item4.png',
};

export const desserts = {
  description: '一杯のお茶のように、静かに余韻を結ぶ。',
  items: [
    {
      nameJa: '抹茶アイス',
      name: 'Matcha Ice',
      description: '宇治抹茶の濃厚なアイス。和三盆の薄甘さと共に。',
      ingredients: '宇治抹茶 · 和三盆',
      price: '¥800',
      image: '/dessert-matcha.png',
    },
    {
      nameJa: '黒胡麻プリン',
      name: 'Kuro-goma Purin',
      description: '練り胡麻と豆乳の優しい甘さ。',
      ingredients: '黒胡麻 · 豆乳 · きび糖',
      price: '¥900',
      image: '/dessert-goma.png',
    },
  ],
};

export const teaSake = {
  description: '一杯ごとに、夜の温度が変わる。',
  tea: [
    { nameJa: '玉露', name: 'Gyokuro', note: '京都 · 宇治', price: '¥1,200' },
    { nameJa: '抹茶', name: 'Matcha', note: '一保堂', price: '¥1,400' },
    { nameJa: 'ほうじ茶', name: 'Hōjicha', note: '焙煎香ばし', price: '¥800' },
  ],
  sake: [
    { nameJa: '大吟醸 「黒龍」', name: 'Daiginjo Kokuryū', note: '福井', price: '¥2,400' },
    { nameJa: '純米吟醸 「黒帯」', name: 'Junmai Ginjo Kuroobi', note: '石川', price: '¥1,800' },
    { nameJa: '純米 「亀の翁」', name: 'Junmai Kame-no-O', note: '新潟', price: '¥1,400' },
  ],
};

export const chefQuotes = [
  '一貫が、前の一貫の記憶よりも先に消えるように。',
  '魚は語る。料理人はただ、聞くだけ。',
];

export const finale = {
  signature: '森 春人',
  quote: '本日のおまかせ、心を込めて。',
  reserveCta: 'ご予約を承る',
};
