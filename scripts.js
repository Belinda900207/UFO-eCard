const translations = {
  zh: {
    subtitle: "卡牌｜玩具｜預購｜收藏",
    title: "WELCOME TO UFO",
    enter: "TAP TO ENTER",

    igTitle: "IG 星球",
    igText: "商品照片｜限動更新",

    fbTitle: "FB 基地",
    fbText: "最新公告｜活動資訊",

    lineTitle: "LINE 通訊艙",
    lineText: "預購詢問｜私訊聯絡",

    contactTitle: "CONTACT 補給站",
    contactText1: "預購、商品詢問請優先加入 LINE。",
    contactText2: "IG / FB 會更新最新商品、預購資訊與公告。"
  },

  ja: {
    subtitle: "カード｜おもちゃ｜予約｜コレクション",
    title: "WELCOME TO UFO",
    enter: "TAP TO ENTER",

    igTitle: "Instagram",
    igText: "商品写真｜ストーリー更新",

    fbTitle: "Facebook",
    fbText: "最新情報｜イベント告知",

    lineTitle: "LINE",
    lineText: "予約相談｜お問い合わせ",

    contactTitle: "CONTACT",
    contactText1: "予約や商品に関するお問い合わせは LINE からお願いします。",
    contactText2: "Instagram / Facebook では最新商品やお知らせを更新しています。"
  },

  ko: {
    subtitle: "카드｜장난감｜예약｜컬렉션",
    title: "WELCOME TO UFO",
    enter: "TAP TO ENTER",

    igTitle: "Instagram",
    igText: "상품 사진｜스토리 업데이트",

    fbTitle: "Facebook",
    fbText: "최신 소식｜이벤트 안내",

    lineTitle: "LINE",
    lineText: "예약 문의｜상담",

    contactTitle: "CONTACT",
    contactText1: "예약 및 상품 문의는 LINE으로 연락해 주세요.",
    contactText2: "Instagram / Facebook에서 신상품과 공지사항을 확인할 수 있습니다."
  },

  en: {
    subtitle: "Cards｜Toys｜Pre-order｜Collection",
    title: "WELCOME TO UFO",
    enter: "TAP TO ENTER",

    igTitle: "Instagram",
    igText: "Product photos｜Story updates",

    fbTitle: "Facebook",
    fbText: "News｜Events",

    lineTitle: "LINE",
    lineText: "Pre-orders｜Contact us",

    contactTitle: "CONTACT",
    contactText1: "For pre-orders and product questions, please contact us via LINE.",
    contactText2: "Follow Instagram / Facebook for new items and announcements."
  }
};

const userLanguage = navigator.language.toLowerCase();

let currentLanguage = "en";

if (userLanguage.startsWith("zh")) {
  currentLanguage = "zh";
} else if (userLanguage.startsWith("ja")) {
  currentLanguage = "ja";
} else if (userLanguage.startsWith("ko")) {
  currentLanguage = "ko";
}

const selectedTexts = translations[currentLanguage];

document.documentElement.lang = currentLanguage;

document.querySelectorAll("[data-i18n]").forEach((element) => {
  const key = element.dataset.i18n;

  if (selectedTexts[key]) {
    element.textContent = selectedTexts[key];
  }
});