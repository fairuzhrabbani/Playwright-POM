import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator("//button[normalize-space()='Login']");
        this.loginLogo = page.getByAltText("company-branding");
        this.loginDashboard = page.locator("//h6[normalize-space()='Dashboard']");
        this.errorMessage = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
        this.errorRequired = page.locator("//span[text()='Required']");
    }

    async gotoLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
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
    async validateRequired(expectedErrorRequired) {
        await expect(this.errorRequired).toBeVisible();
        await expect(this.errorRequired).toHaveText(expectedErrorRequired);
    }

}
