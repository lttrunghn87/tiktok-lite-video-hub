export type VideoLink = {
  id: number;
  videoId: string;
  title: string;
  tag: string;
  duration: string;
  durationSec: number;
  url: string;
  source: "sample_site" | "verified_tiktok_html";
  status: "sample_site_link" | "verified_3600_seconds" | "verified_3599_seconds";
};

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
    videoId: "7389890599555566849",
    title: "Sample Link 1",
    tag: "sample",
    duration: "sample",
    durationSec: 0,
    url: "https://lite.tiktok.com/t/ZS6rUywGN/",
    source: "sample_site",
    status: "sample_site_link"
  },
  {
    id: 10,
    videoId: "7380604897227574535",
    title: "Sample Link 2",
    tag: "sample",
    duration: "sample",
    durationSec: 0,
    url: "https://lite.tiktok.com/t/ZSrGTDx7a/",
    source: "sample_site",
    status: "sample_site_link"
  },
  {
    id: 11,
    videoId: "7437380860212514066",
    title: "Sample Link 4",
    tag: "sample",
    duration: "sample",
    durationSec: 0,
    url: "https://lite.tiktok.com/t/ZS6rUtJ2s/",
    source: "sample_site",
    status: "sample_site_link"
  },
  {
    id: 12,
    videoId: "7558683024137735431",
    title: "Sample Link 5",
    tag: "sample",
    duration: "sample",
    durationSec: 0,
    url: "https://lite.tiktok.com/t/ZSUQcMJeP/",
    source: "sample_site",
    status: "sample_site_link"
  },
  {
    id: 13,
    videoId: "7557907308131585287",
    title: "Sample Link 6",
    tag: "sample",
    duration: "sample",
    durationSec: 0,
    url: "https://lite.tiktok.com/t/ZSUQ3d9WK/",
    source: "sample_site",
    status: "sample_site_link"
  },
  {
    id: 14,
    videoId: "7555698653738847495",
    title: "Sample Link 7",
    tag: "sample",
    duration: "sample",
    durationSec: 0,
    url: "https://lite.tiktok.com/t/ZSUQcXHY8/",
    source: "sample_site",
    status: "sample_site_link"
  },
  {
    id: 15,
    videoId: "7545049771946396946",
    title: "Sample Link 8",
    tag: "sample",
    duration: "sample",
    durationSec: 0,
    url: "https://lite.tiktok.com/t/ZSUQToALd/",
    source: "sample_site",
    status: "sample_site_link"
  }
];
