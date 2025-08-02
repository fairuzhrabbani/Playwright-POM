import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;
        // this.usernameInput = page.getByPlaceholder('Username');
        // this.usernameInput = page.locator('input[name="username"]');
        this.usernameInput = page.getByRole('textbox', { name: 'username' });
        this.passwordInput = page.getByRole('textbox', { name: 'password' });
        // this.loginButton = page.locator("//button[normalize-space()='Login']");
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.loginLogo = page.getByAltText("company-branding");
        this.loginDashboard = page.locator("//h6[normalize-space()='Dashboard']");
        this.errorMessage = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
        // this.errorRequired = page.locator("//span[text()='Required']");
        this.errorUsernameRequired = page.getByText('Required').first();
        this.errorPasswordRequired = page.getByText('Required').nth(1);
    }

    async gotoLoginPage() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async inputUsername(username) {
        await this.usernameInput.fill(username);
        await this.loginButton.click();
    }

    async inputPassword(password) {
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async validateInvalidLogin(expectedErrorMessages) {
        await expect(this.errorMessage).toBeVisible();
        const actualErrorMessage = await this.errorMessage.textContent();
        console.log(actualErrorMessage);

        // Check if actual message is in the list of expected messages
        await expect(expectedErrorMessages).toContain(actualErrorMessage.trim());
    }
    async validateUsernameRequired(expectedErrorRequired) {
        await expect(this.errorUsernameRequired).toBeVisible();
        await expect(this.errorUsernameRequired).toHaveText(expectedErrorRequired);
    }

    async validatePasswordRequired(expectedErrorRequired) {
        await expect(this.errorPasswordRequired).toBeVisible();
        await expect(this.errorPasswordRequired).toHaveText(expectedErrorRequired);
    }

    async validateUsernameAndPasswordRequired(expectedErrorRequired) {
        await expect(this.errorUsernameRequired).toBeVisible();
        await expect(this.errorPasswordRequired).toBeVisible();
        await expect(this.errorUsernameRequired).toHaveText(expectedErrorRequired);
        await expect(this.errorPasswordRequired).toHaveText(expectedErrorRequired);
    }

}
