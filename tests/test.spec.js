// @ts-check
import { test, expect } from "@playwright/test";

test("Login User", async ({ page, context }) => {
  await context.setDefaultNavigationTimeout(60000); // optional: set a longer navigation timeout

  await page.goto("https://automationexercise.com", {
    waitUntil: "domcontentloaded", // ensure the DOM is fully loaded
  });
});
