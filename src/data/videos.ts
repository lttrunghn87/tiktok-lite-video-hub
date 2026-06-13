export type VideoLink = {
  id: number;
  title: string;
  tag: string;
  duration: string;
  durationSec: number;
  url: string;
  openUrl?: string;
  source: "verified_tiktok_html";
  status: "verified_3600_seconds" | "verified_3599_seconds";
};

const TIKTOK_LITE_JP_PACKAGE = "com.ss.android.ugc.tiktok.lite";
const TIKTOK_LITE_JP_STORE_URL =
  "https://play.google.com/store/apps/details?gl=JP&id=com.ss.android.ugc.tiktok.lite";

const tiktokLiteJpIntentUrl = (url: string) => {
  const target = new URL(url);
  return `intent://${target.host}${target.pathname}#Intent;scheme=${target.protocol.replace(
    ":",
    ""
  )};package=${TIKTOK_LITE_JP_PACKAGE};S.browser_fallback_url=${encodeURIComponent(
    TIKTOK_LITE_JP_STORE_URL
  )};end`;
};

export const videos: VideoLink[] = [
  {
    id: 1,
    title: "#1hour - Nhac1hours",
    tag: "1hour",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://lite.tiktok.com/t/ZSrJxNmCK/",
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 2,
    title: "VIDEO 60P - Version 2",
    tag: "60p",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://lite.tiktok.com/t/ZSM43sfyA/",
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 3,
    title: "#1hour - HD Remix",
    tag: "1hour",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://lite.tiktok.com/t/ZSrJxakog/",
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 4,
    title: "VIDEO 60P - Version 2",
    tag: "60p",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://lite.tiktok.com/t/ZSM4coUbQ/",
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 5,
    title: "60 phut khong tieng - part 86",
    tag: "60min silent",
    duration: "59:59",
    durationSec: 3599,
    url: "https://lite.tiktok.com/t/ZSry3KYu7/",
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 6,
    title: "TikTokLite 60min silent task",
    tag: "60min silent",
    duration: "59:59",
    durationSec: 3599,
    url: "https://lite.tiktok.com/t/ZSrjqdo5Q/",
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 7,
    title: "Video 60 phut 009",
    tag: "video60phut",
    duration: "59:59",
    durationSec: 3599,
    url: "https://lite.tiktok.com/t/ZShX3CRbr/",
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 8,
    title: "60min idle video",
    tag: "60min silent",
    duration: "59:59",
    durationSec: 3599,
    url: "https://lite.tiktok.com/t/ZShVmu2pc/",
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 9,
    title: "Japan TikTok Lite idle task video",
    tag: "jp tiktoklite",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://www.tiktok.com/@cuber_k_/video/7643353931040509191",
    openUrl: tiktokLiteJpIntentUrl("https://www.tiktok.com/@cuber_k_/video/7643353931040509191"),
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 10,
    title: "Japan 60min silent timer",
    tag: "jp 60min",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://www.tiktok.com/@viwbird/video/7402515776411880725",
    openUrl: tiktokLiteJpIntentUrl("https://www.tiktok.com/@viwbird/video/7402515776411880725"),
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 11,
    title: "Japan TikTok Lite 60min task",
    tag: "jp tiktoklite",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://www.tiktok.com/@user3749668106613/video/7576616804462742804",
    openUrl: tiktokLiteJpIntentUrl("https://www.tiktok.com/@user3749668106613/video/7576616804462742804"),
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 12,
    title: "Japan 60min wave timer",
    tag: "jp 60min",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@viwbird/video/7522507977799011591",
    openUrl: tiktokLiteJpIntentUrl("https://www.tiktok.com/@viwbird/video/7522507977799011591"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 13,
    title: "Japan TikTok Lite timer 2025-12-08",
    tag: "jp tiktoklite",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@poikatsu_support_jp/video/7581243462704499984",
    openUrl: tiktokLiteJpIntentUrl("https://www.tiktok.com/@poikatsu_support_jp/video/7581243462704499984"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 14,
    title: "Japan TikTok Lite timer 2025-12-07",
    tag: "jp tiktoklite",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@poikatsu_support_jp/video/7580872481079184656",
    openUrl: tiktokLiteJpIntentUrl("https://www.tiktok.com/@poikatsu_support_jp/video/7580872481079184656"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 15,
    title: "Japan TikTok Lite idle task",
    tag: "jp tiktoklite",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@faileskeb7p/video/7390359695346748689",
    openUrl: tiktokLiteJpIntentUrl("https://www.tiktok.com/@faileskeb7p/video/7390359695346748689"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  }
];
