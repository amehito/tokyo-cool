export const meta = {
  metadataBase: new URL("https://anti-pit-japan.vercel.app"),
  title: "日本避坑指南 - Japan Anti-Pit Guide",
  description:
    "整理外国游客与新居民在日本容易遇到的骗局与坑点，提供详细的避坑指南：租房、手机卡、退税、交通、黑车等。让你在日本少花冤枉钱，安心生活与旅行。",
  authors: [{ name: "Japan Anti-Pit Editorial Team" }],
  keywords: [
    "日本必坑",
    "日本避坑指南",
    "日本骗局",
    "租房避坑",
    "手机卡陷阱",
    "退税骗局",
    "黑车骗局",
    "日本生活指南",
    "Japan travel scams",
    "Japan anti-pit guide",
  ],
  publisher: "Japan Anti-Pit Editorial Team",
  creator: "Japan Anti-Pit Editorial Team",

  openGraph: {
    type: "website",
    title: "日本避坑指南 - Japan Anti-Pit Guide",
    description:
      "外国人来日本最常见的骗局与避坑方法：租房礼金更新费、手机卡解约陷阱、药妆退税套路、黑车加价等。",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "日本避坑指南 - Japan Anti-Pit Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "日本避坑指南 - Japan Anti-Pit Guide",
    description:
      "避免在日本生活与旅行中踩坑：租房、手机卡、退税、黑车等详细攻略。",
    images: ["/og_image.png"],
    creator: "@your_twitter_handle", // 如果你有推特账号可以填
  },

  alternates: {
    canonical: "https://anti-pit-japan.vercel.app",
  },

  robots: "index, follow",

  hreflang: {
    zh: "https://anti-pit-japan.vercel.app", // 中文主站
    // en: "https://anti-pit-japan.vercel.app/en", // 英文版（可选）
    // ja: "https://anti-pit-japan.vercel.app/ja", // 日文版（可选）
  },
};
