import { test, expect } from '@playwright/test';
import { Users } from '../../config';
import { EventsPage, LoginPage } from '../../pages';

let loginPage: LoginPage;
let eventsPage: EventsPage;

const users = [Users.Admin, Users.EventManager];

test.beforeEach(async ({page}) => {
  await page.goto('/login');
  
  loginPage = new LoginPage(page);
  eventsPage = new EventsPage(page);
});

for (const eUser of users) {
  test(`${eUser} should be able to log in`, async ({ page }) => {
    const user = await loginPage.login(eUser);

    await expect(eventsPage.sideMenu.usernameData).toHaveText(user.name);
  });

  test(`${eUser} should be able to log out`, async ({ page }) => {
    await loginPage.login(eUser);
    await eventsPage.sideMenu.logout();

    await expect(page.locator('h4')).toHaveText('Welcome');
  });
};
