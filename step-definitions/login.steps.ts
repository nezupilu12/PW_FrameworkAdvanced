import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";
import { URLs } from '../config/urls';

Given('User is on the login page', async function (this: CustomWorld) {
  await this.page.goto(URLs.rsEcommerceURL);
});

When('User enters valid Username and Password', async function (this: CustomWorld) {
  await this.loginPage.enterCreds(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);
});

When('User enters valid Username and Invalid Password', async function (this: CustomWorld) {
  await this.loginPage.enterCreds(process.env.LOGIN_USERNAME!, "invalidPswd");
});

When('User enters Invalid Username and Invalid Password', async function (this: CustomWorld) {
  await this.loginPage.enterCreds("invalidemail", "invalidPswd");
});

When('User enters Blank Username and Blank Password', async function (this: CustomWorld) {
  await this.loginPage.enterCreds("", "");
});

When('User clicks on login Button', async function (this: CustomWorld) {
  await this.loginPage.clickLoginButton();
});

Then('User should be logged in successfuly', async function (this: CustomWorld) {
  await this.loginPage.checkSuccessLogin();
  await expect(this.page.url()).toContain('dashboard/dash');
});

Then('User should not be logged in successfuly for invalid password', async function (this: CustomWorld) {
  await expect(this.loginPage.unsuccessMsg).toBeVisible();
  await expect(this.page.url()).not.toContain('dashboard/dash');
});

Then('User should not be logged in successfuly for invalid email', async function (this: CustomWorld) {
  await expect(this.loginPage.invalidEmail).toBeVisible();
  await expect(this.page.url()).not.toContain('dashboard/dash');
});

Then('User should not be logged in successfuly for blank email and blank password', async function (this: CustomWorld) {
  await expect(this.loginPage.blankerrorEmail).toBeVisible();
  await expect(this.loginPage.blankerrorPswd).toBeVisible();
  await expect(this.page.url()).not.toContain('dashboard/dash');
});



