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

test("contains only links verified as 40 minutes or longer", () => {
  expect(videos).toHaveLength(15);
  expect(new Set(videos.map((video) => video.videoId)).size).toBe(videos.length);
  for (const video of videos) {
    expect(video.durationSec).toBeGreaterThanOrEqual(2400);
  }
});

test("renders TikTok Lite open targets instead of plain TikTok web links", async ({ page }) => {
  await page.goto("/");

  const hrefs = await page.locator("[data-link-button]").evaluateAll((buttons) =>
    buttons.map((button) => button.getAttribute("href") ?? "")
  );

  for (const href of hrefs) {
    expect(href.startsWith("https://www.tiktok.com/")).toBe(false);
    expect(
      href.startsWith("https://lite.tiktok.com/t/") ||
        (href.startsWith("intent://") && href.includes("package=com.tiktok.lite.go"))
    ).toBe(true);
  }
});
