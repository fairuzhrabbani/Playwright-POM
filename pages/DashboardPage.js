import { expect } from '@playwright/test';

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
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }

    async gotoPimMenu() {

        await this.pimMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    }

    async gotoLeaveMenu() {

        await this.leaveMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

    async gotoTimeMenu() {

        await this.timeMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

    async gotoRecruitmentMenu() {

        await this.recruitmentMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

    async gotoMyInfoMenu() {

        await this.myInfoMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

    async gotoPerformanceMenu() {

        await this.performanceMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

    async gotoDashboardMenu() {

        await this.dashboardMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

    async gotoDirectoryMenu() {

        await this.directoryMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

    async gotomMaintenanceMenu() {

        await this.maintenanceMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

      async gotomClaimMenu() {

        await this.claimMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }
    async gotomBuzzMenu() {

        await this.buzzMenu.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
    }

}