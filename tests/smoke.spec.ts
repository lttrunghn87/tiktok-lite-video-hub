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

test("contains only links verified as 59:59 or longer", () => {
  expect(videos.length).toBeGreaterThan(0);
  for (const video of videos) {
    expect(video.durationSec).toBeGreaterThanOrEqual(3599);
  }
});

test("tracks button click colors for each user and resets after 24 hours", async ({ page }) => {
  await page.goto("/");

  const firstButton = page.getByRole("link", { name: "Open Link 1", exact: true });
  await expect(firstButton).not.toHaveAttribute("data-state", /.+/);

  await firstButton.dispatchEvent("click");
  await expect(firstButton).toHaveAttribute("data-state", "one");

  await firstButton.dispatchEvent("click");
  await expect(firstButton).toHaveAttribute("data-state", "two");

  await page.evaluate(() => {
    localStorage.setItem(
      "tiktok-lite-link-states",
      JSON.stringify({
        1: {
          count: 2,
          expiresAt: Date.now() - 1000
        }
      })
    );
  });

  await page.reload();
  await expect(firstButton).not.toHaveAttribute("data-state", /.+/);
});
