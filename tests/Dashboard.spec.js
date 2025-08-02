import "../utils/hook.js";
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { DashboardPage } from "../pages/DashboardPage.js";
import fs from 'fs/promises';

let loginData;

test.beforeAll(async () => {
    const raw = await fs.readFile('./testData/loginData.json', 'utf-8');
    loginData = JSON.parse(raw);
});

test.describe("🟢 Positive Dashboard Test Cases @positive", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.gotoLoginPage();
        await loginPage.login(loginData.valid.username, loginData.valid.password);
        await expect(dashboardPage.dashboardMenu).toBeVisible();
    });

    test("TC-Dashboard-001-P Counting Dashboard Menus is 12", async ({ page }) => {
        const dashboardPage = new DashboardPage(page);

        await test.step("Check Counting Dashboard Menus is 12", async () => {
            const count = await dashboardPage.countDashboardMenu();
            await expect(count).toBe(12);
        });
    });

    test("TC-Dashboard-002-P Go to Admin Menu from Dashboard", async ({ page }) => {
        const dashboardPage = new DashboardPage(page);
        
        await test.step("Click Admin Menu", async () => {
            await dashboardPage.gotoAdminMenu();
            await page.waitForTimeout(5000);

        });
    });
});
