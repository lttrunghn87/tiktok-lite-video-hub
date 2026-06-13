export type VideoLink = {
  id: number;
  title: string;
  tag: string;
  duration: string;
  durationSec: number;
  url: string;
  source: "verified_tiktok_html";
  status: "verified_3600_seconds";
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
  }
];
