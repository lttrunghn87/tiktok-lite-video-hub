import { expect, test } from "@playwright/test";

test("renders the video link list and filters links", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/TikTok Lite Video Dai/);
  await expect(page.locator("[data-card]")).toHaveCount(15);
  await expect(page.getByRole("link", { name: /^Mo / })).toHaveCount(15);

  await page.locator("[data-search]").fill("Link 01");
  await expect(page.locator("[data-card]:not(.hidden)")).toHaveCount(1);

  await page.locator("[data-search]").fill("");
  await expect(page.locator("[data-card]:not(.hidden)")).toHaveCount(15);
});
