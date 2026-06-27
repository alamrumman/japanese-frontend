export const site = {
  name: 'KURO NAMI',
  nameJa: '鮨黒浪',
  mark: 'なみ',
  tagline: '味わう、日本の美学。',
  taglineEn: 'Taste the aesthetic of Japan.',
  body: '旬の食材を、職人の技で\n一貫に込めて。\n特別なひとときを、\n大切な人と。',
  address: '〒150-0002 東京都渋谷区広尾2-1-1 青山ファーストビル B1F',
  phone: '03-0000-0000',
  email: 'info@kuronami.jp',
  hours: [
    { day: '火 – 土', time: '18:00 – 23:00' },
    { day: '日曜日', time: '18:00 – 22:00' },
    { day: '月曜日', time: '定休日' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Tabelog', href: '#' },
  ],
  edge: '二〇一四 · 銀座',
};

export const nav = [
  { label: 'ホーム', en: 'Home', href: '/' },
  { label: '私たちについて', en: 'Story', href: '/#story' },
  { label: 'お品書き', en: 'Menu', href: '/menu' },
  { label: '店舗情報', en: 'Contact', href: '/contact' },
  { label: 'ご予約', en: 'Reserve', href: '/#reserve' },
];

export const tickerItems = ['鮨', '天ぷら', '刺身', '懐石', '日本酒', '和食', '鮨', '天ぷら', '刺身', '懐石', '日本酒'];

export const featureCards = [
  {
    id: 'shun',
    title: '旬の食材を、職人の技で\n一貫に込めて。',
    href: '/#story',
    cta: '私たちについて',
    glyph: '旬',
    image: '/craftsmen1.png',
    focal: '50% 50%',
  },
  {
    id: 'toki',
    title: '特別なひとときを、\n大切な人と。',
    href: '/#reserve',
    cta: 'ご予約はこちら',
    glyph: '宴',
    image: '/intimate.png',
    focal: '50% 50%',
  },
  {
    id: 'shiki',
    title: '日本の四季を、\nその一皿に。',
    href: '/menu',
    cta: 'お品書き',
    glyph: '季',
    image: '/seasonality.png',
    focal: '50% 50%',
  },
];

export const featuredMenu = [
  {
    id: 'maguro',
    nameJa: '本鮪 中とろ',
    name: 'Hon-maguro Chū-toro',
    description: '本鮪のとろを軽く熟成し、自家製の煮切りで仕上げます。',
    price: '¥1,800',
    size: 'large',
    image: '/menu%20item1.png',
  },
  {
    id: 'uni',
    nameJa: 'うに軍艦',
    name: 'Uni Gunkan',
    description: '北海道産の馬糞うに。海苔の香りと共に。',
    price: '¥2,200',
    size: 'medium',
    image: '/menu%20item2.png',
  },
  {
    id: 'ikura',
    nameJa: 'いくら軍艦',
    name: 'Ikura Gunkan',
    description: '塩漬けにした北海道産のいくら。粒のひとつひとつが弾けます。',
    price: '¥2,200',
    size: 'medium',
    image: '/menu%20item3.png',
  },
  {
    id: 'anago',
    nameJa: '煮穴子',
    name: 'Nizume Anago',
    description: '伝統の煮詰めで仕上げた、ふっくらとした穴子。',
    price: '¥1,800',
    size: 'large',
    image: '/menu%20item4.png',
  },
];

export const testimonials = [
  {
    quote:
      '茶事のようにゆっくりと、確かに進む夜。来た時より静かに帰ることになりました。',
    name: 'Aoi Tanaka',
    where: '東京 · Brutus 編集',
  },
  {
    quote:
      '三大陸でおまかせを食してきました。黒浪は忘れられたもの——節度を覚えている。',
    name: 'Marcus Lévy',
    where: 'Paris · 食評論家',
  },
  {
    quote:
      '部屋は静か。木は温かい。一貫一貫が、まるで自分のためだけに握られた一品のよう。',
    name: 'Hana Ishikawa',
    where: '京都 · 建築家',
  },
];
