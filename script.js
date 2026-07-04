const translations = {
  zh: {
    subtitle: "卡牌｜玩具｜預購｜收藏",
    title: "WELCOME TO UFO",
    enter: "TAP TO ENTER",

    igTitle: "IG 星球",
    igText: "商品照片｜限動更新",
    igUrl: "https://www.instagram.com/ufo.tcgshop/",

    fbTitle: "FB 基地",
    fbText: "最新公告｜活動資訊",

    lineTitle: "LINE 通訊艙",
    lineText: "預購詢問｜私訊聯絡",

    contactTitle: "CONTACT 補給站",
    contactText1: "預購、商品詢問請優先加入 LINE。",
    contactText2: "IG / FB 會更新最新商品、預購資訊與公告。"
  },

  en: {
    subtitle: "Cards｜Toys｜Pre-order｜Collection",
    title: "WELCOME TO UFO",
    enter: "TAP TO ENTER",

    igTitle: "Instagram",
    igText: "Product photos｜Story updates",
    igUrl: "https://www.instagram.com/ufo.tcgshop/",

    fbTitle: "Facebook",
    fbText: "News｜Events",

    lineTitle: "LINE",
    lineText: "Pre-orders｜Contact us",

    contactTitle: "CONTACT",
    contactText1: "For pre-orders and product questions, please contact us via LINE.",
    contactText2: "Follow Instagram / Facebook for new items and announcements."
  }
};

const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get("lang");

const userLanguage = navigator.language.toLowerCase();

let currentLanguage = "en";

if (langFromUrl && translations[langFromUrl]) {
  currentLanguage = langFromUrl;
} else if (userLanguage.startsWith("zh")) {
  currentLanguage = "zh";
}

const selectedTexts = translations[currentLanguage];

document.documentElement.lang = currentLanguage;

document.querySelectorAll("[data-i18n]").forEach((element) => {
  const key = element.dataset.i18n;

  if (selectedTexts[key]) {
    element.textContent = selectedTexts[key];
  }
});
const igLink = document.querySelector(".portal-ig");

if (igLink && selectedTexts.igUrl) {
  igLink.href = selectedTexts.igUrl;
}

console.log("目前語言：", currentLanguage);