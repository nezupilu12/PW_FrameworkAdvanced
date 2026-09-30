import { Before, After, AfterStep } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./world";
import { LoginPage } from "../pages/LoginPage";

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({
        headless: false
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
});

After(async function (this: CustomWorld) {
    await this.browser.close();
})

AfterStep(async function (this: CustomWorld) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
});