import { expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class DashboardPage {

    constructor(page) {
        this.page = page;
        // this.adminMenu = page.locator("//ul[@class='oxd-main-menu']//li/a/span[text()='Admin']")
        this.adminMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Admin' });
        this.pimMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'PIM' });
        this.leaveMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Leave' });
        this.timeMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Time' });
        this.recruitmentMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Recruitment' });
        this.myInfoMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'My Info' });
        this.performanceMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Performance' });
        this.dashboardMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Dashboard' });
        this.directoryMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Directory' });
        this.maintenanceMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Maintenance' });
        this.claimMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Claim' });
        this.BuzzMenu = page.locator('ul.oxd-main-menu li a span', { hasText: 'Buzz' });
    }

    async countDashboardMenu() {
        const menuItems = this.page.locator('ul.oxd-main-menu li a');
        const count = await menuItems.count();
        console.log(`Total dashboard menu items: ${count}`);
        return count;
    }
    async gotoAdminMenu() {

        await this.adminMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.ADMIN_URL}`);
    }

    async gotoPimMenu() {

        await this.pimMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.PIM_URL}`);
    }

    async gotoLeaveMenu() {

        await this.leaveMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.LEAVE_URL}`);
    }

    async gotoTimeMenu() {

        await this.timeMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.TIME_URL}`);
    }

    async gotoRecruitmentMenu() {

        await this.recruitmentMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.RECRUITMENT_URL}`);
    }

    async gotoMyInfoMenu() {

        await this.myInfoMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.MYINFO_URL}`);
    }

    async gotoPerformanceMenu() {

        await this.performanceMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.PERFORMANCE_URL}`);
    }

    async gotoDashboardMenu() {

        await this.dashboardMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.DASHBOARD_URL}`);
    }

    async gotoDirectoryMenu() {

        await this.directoryMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.DIRECTORY_URL}`);
    }

    async gotomMaintenanceMenu() {

        await this.maintenanceMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.MAINTENANCE_URL}`);
    }

      async gotomClaimMenu() {

        await this.claimMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.CLAIM_URL}`);
    }
    async gotomBuzzMenu() {

        await this.buzzMenu.click();
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}${process.env.BUZZ_URL}`);
    }

}