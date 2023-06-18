import { Locator, Page } from "@playwright/test";

export class SideMenu {
  usernameData: Locator;
  logoutButton: Locator;

  constructor(private page: Page) {
    this.usernameData = this.page.getByTestId('username-data');
    this.logoutButton = this.page.getByTestId('logout-button');
  }

  async logout() {
    await this.usernameData.click();

    await Promise.all([
      this.page.waitForURL('**/login', {
        waitUntil: 'networkidle'
      }),
      this.logoutButton.click()
    ]);
  }
}
