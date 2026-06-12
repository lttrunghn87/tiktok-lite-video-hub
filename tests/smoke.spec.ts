import { expect, test } from "@playwright/test";

test("renders 15 simple TikTok Lite link buttons", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/TikTok Lite Links/);
  await expect(page.locator("[data-link-button]")).toHaveCount(15);

  for (let index = 1; index <= 15; index += 1) {
    await expect(page.getByRole("link", { name: `Open Link ${index}`, exact: true })).toBeVisible();
  }
});
