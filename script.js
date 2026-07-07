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

    threadsTitle: "Threads 星球",
    threadsText: "日常更新｜社群互動",

    contactTitle: "CONTACT 補給站",
    contactText1: "預購、商品詢問請優先加入 LINE。",
    contactText2: "IG / FB 會更新最新商品、預購資訊與公告。"
  },

  en: {
    subtitle: "Cards｜Toys｜Preorder｜Collect",
    title: "WELCOME TO UFO",
    enter: "TAP TO ENTER",

    igTitle: "Instagram",
    igText: "Photos｜Stories",
    

    fbTitle: "Facebook",
    fbText: "News｜Events",

    lineTitle: "LINE",
    lineText: "Preorder｜Message us",

    threadsTitle: "Threads",
    threadsText: "Daily｜Community",

    contactTitle: "CONTACT",
    contactText1: "For preorders or product questions, message us on LINE.",
    contactText2: "Follow Instagram / Facebook for new items and updates."
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
const brandLogo = document.querySelector(".brand-logo");

let logoFlipDirection = "left";

if (brandLogo) {
  brandLogo.addEventListener("click", () => {
    brandLogo.classList.remove("flip-left", "flip-right");

    // 強制重置動畫，讓連續點擊也能重新觸發
    void brandLogo.offsetWidth;

    if (logoFlipDirection === "left") {
      brandLogo.classList.add("flip-left");
      logoFlipDirection = "right";
    } else {
      brandLogo.classList.add("flip-right");
      logoFlipDirection = "left";
    }
  });

  brandLogo.addEventListener("animationend", () => {
    brandLogo.classList.remove("flip-left", "flip-right");
  });
}
