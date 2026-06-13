export type VideoLink = {
  id: number;
  videoId: string;
  title: string;
  tag: string;
  duration: string;
  durationSec: number;
  url: string;
  openUrl?: string;
  source: "verified_tiktok_html";
  status: "verified_3600_seconds" | "verified_3599_seconds";
};

const TIKTOK_LITE_PACKAGE = "com.tiktok.lite.go";
const TIKTOK_LITE_STORE_URL = "https://play.google.com/store/apps/details?id=com.tiktok.lite.go";

const tiktokLiteIntentUrl = (videoId: string) =>
  `intent://aweme/detail/${videoId}#Intent;scheme=snssdk1233;package=${TIKTOK_LITE_PACKAGE};S.browser_fallback_url=${encodeURIComponent(
    TIKTOK_LITE_STORE_URL
  )};end`;

export const videos: VideoLink[] = [
  {
    id: 1,
    videoId: "7484635825641229586",
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
    videoId: "7479433046735801608",
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
    videoId: "7484628908965514504",
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
    videoId: "7528487086207421714",
    title: "Japan idle video vol.118",
    tag: "jp 60min",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://lite.tiktok.com/t/ZSSqEvkXF/",
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 5,
    videoId: "7490491110926667014",
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
    videoId: "7473894325714406664",
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
    videoId: "7505321174654553362",
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
    videoId: "7456399375032503560",
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
    videoId: "7643353931040509191",
    title: "Japan TikTok Lite idle task video",
    tag: "jp tiktoklite",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://www.tiktok.com/@cuber_k_/video/7643353931040509191",
    openUrl: tiktokLiteIntentUrl("7643353931040509191"),
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 10,
    videoId: "7402515776411880725",
    title: "Japan 60min silent timer",
    tag: "jp 60min",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://www.tiktok.com/@viwbird/video/7402515776411880725",
    openUrl: tiktokLiteIntentUrl("7402515776411880725"),
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 11,
    videoId: "7576616804462742804",
    title: "Japan TikTok Lite 60min task",
    tag: "jp tiktoklite",
    duration: "1:00:00",
    durationSec: 3600,
    url: "https://www.tiktok.com/@user3749668106613/video/7576616804462742804",
    openUrl: tiktokLiteIntentUrl("7576616804462742804"),
    source: "verified_tiktok_html",
    status: "verified_3600_seconds"
  },
  {
    id: 12,
    videoId: "7522507977799011591",
    title: "Japan 60min wave timer",
    tag: "jp 60min",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@viwbird/video/7522507977799011591",
    openUrl: tiktokLiteIntentUrl("7522507977799011591"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 13,
    videoId: "7581243462704499984",
    title: "Japan TikTok Lite timer 2025-12-08",
    tag: "jp tiktoklite",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@poikatsu_support_jp/video/7581243462704499984",
    openUrl: tiktokLiteIntentUrl("7581243462704499984"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 14,
    videoId: "7580872481079184656",
    title: "Japan TikTok Lite timer 2025-12-07",
    tag: "jp tiktoklite",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@poikatsu_support_jp/video/7580872481079184656",
    openUrl: tiktokLiteIntentUrl("7580872481079184656"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  },
  {
    id: 15,
    videoId: "7390359695346748689",
    title: "Japan TikTok Lite idle task",
    tag: "jp tiktoklite",
    duration: "59:59",
    durationSec: 3599,
    url: "https://www.tiktok.com/@faileskeb7p/video/7390359695346748689",
    openUrl: tiktokLiteIntentUrl("7390359695346748689"),
    source: "verified_tiktok_html",
    status: "verified_3599_seconds"
  }
];
