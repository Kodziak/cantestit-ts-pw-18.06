import { Locator, Page } from "@playwright/test";
import { Users, getUser } from "../config";

export class LoginPage {
  usernameInput: Locator
  passwordInput: Locator
  loginButton: Locator

  constructor(private page: Page) {
    this.usernameInput = this.page.getByTestId('username-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByTestId('login-button');
  }

  async login(user: Users) {
    const dbUser = getUser(user);

    await this.usernameInput.fill(dbUser.username);
    await this.passwordInput.fill(dbUser.password);

    await Promise.all([
      this.page.waitForURL('**/', {
        waitUntil: 'networkidle'
      }),
      this.loginButton.click()
    ]);

    return dbUser;
  }
}
