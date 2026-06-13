export type VideoLink = {
  id: number;
  title: string;
  tag: string;
  duration: string;
  durationSec: number;
  url: string;
  source: "verified_tiktok_html";
  status: "verified_3600_seconds" | "verified_3599_seconds";
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
  }
];
