import '../utils/hook.js';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import fs from 'fs/promises';

let loginData;

test.beforeAll(async () => {
  const raw = await fs.readFile('./testData/loginData.json', 'utf-8');
  loginData = JSON.parse(raw);
});

test.describe('🟢 Positive Login Test Cases @positive', () => {

  test('TC-Login-001-P Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to Login Page', async () => {
      await loginPage.gotoLoginPage();
    });
    await test.step('Submit Valid Credentials', async () => {
      await loginPage.login(loginData.valid.username, loginData.valid.password);
      await page.waitForTimeout(5000);
    });
    await test.step('Verify dashboard is visible', async () => {
      await expect(loginPage.loginDashboard).toBeVisible();
    });

    // await page.screenshot({ path: `screenshots/Login/${testInfo.title.replace(/\s+/g, '-')}.png` });
    // await page.close();
  });

});

test.describe('🔴 Negative Login Test Cases @negative', () => {

  test('TC-Login-002-N Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to Login Page', async () => {
      await loginPage.gotoLoginPage();
    });

    await test.step('Submit with Invalid Credentials', async () => {
      await loginPage.login(loginData.invalid.username, loginData.invalid.password);
      await page.waitForTimeout(5000);
    });

    await test.step('Verify Invalid with Credential', async () => {
      await loginPage.validateInvalidLogin(loginData.invalid.expectedError);
    });

  });

  test('TC-Login-003-N Login without input Username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to Login Page', async () => {
      await loginPage.gotoLoginPage();
    });

    await test.step('Submit without Input Username', async () => {
      await loginPage.login(loginData.requiredUsername.username, loginData.requiredUsername.password);
      await page.waitForTimeout(5000);
    });

    await test.step('Verify without Input Username', async () => {
      await loginPage.validateRequired(loginData.requiredUsername.expectedError);
    });

  });

  test('TC-Login-004-N Login without input Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to Login Page', async () => {
      await loginPage.gotoLoginPage();
    });

    await test.step('Submit without Input Password', async () => {
      await loginPage.login(loginData.requiredPassword.username, loginData.requiredPassword.password);
      await page.waitForTimeout(5000);
    });

    await test.step('Verify without Input Password', async () => {
      await loginPage.validateRequired(loginData.requiredPassword.expectedError);
    });

  });

  test('TC-Login-005-N Login without input Username and Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to Login Page', async () => {
      await loginPage.gotoLoginPage();
    });

    await test.step('Submit without Input Username and Password', async () => {
      await loginPage.login(loginData.requiredUsernamePassword.username, loginData.requiredUsernamePassword.password);
      await page.waitForTimeout(5000);
    });

    await test.step('Verify without Input Username and Password', async () => {
      await loginPage.validateRequired(loginData.requiredUsernamePassword.expectedError);
    });

  });

});

