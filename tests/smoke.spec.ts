import { expect, test } from "@playwright/test";
import { videos } from "../src/data/videos";

test("renders verified TikTok Lite link buttons", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/TikTok Lite Links/);
  await expect(page.locator("[data-link-button]")).toHaveCount(videos.length);
  await expect
    .poll(async () =>
      page.locator(".link-grid").evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length)
    )
    .toBe(3);

  for (let index = 1; index <= videos.length; index += 1) {
    await expect(page.getByRole("link", { name: `Open Link ${index}`, exact: true })).toBeVisible();
  }
});

test("contains only verified long TikTok Lite links", () => {
  expect(videos).toHaveLength(15);
  expect(new Set(videos.map((video) => video.videoId)).size).toBeGreaterThanOrEqual(13);
  for (const video of videos) {
    expect(video.source).toBe("verified_tiktok_html");
    expect(video.durationSec).toBeGreaterThanOrEqual(1740);
  }
});

test("renders TikTok Lite open targets instead of plain TikTok web links", async ({ page }) => {
  await page.goto("/");

  const hrefs = await page.locator("[data-link-button]").evaluateAll((buttons) =>
    buttons.map((button) => button.getAttribute("href") ?? "")
  );

  for (const href of hrefs) {
    expect(href.startsWith("https://www.tiktok.com/")).toBe(false);
    expect(href.startsWith("intent://")).toBe(false);
    expect(href.startsWith("https://lite.tiktok.com/t/")).toBe(true);
  }
});
