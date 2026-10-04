import { Before, After, AfterStep } from "@cucumber/cucumber";
import { Browser, chromium, firefox, webkit } from "@playwright/test";
import { CustomWorld } from "./world";
import { LoginPage } from "../pages/LoginPage";
import {config} from "../config/config";

Before(async function (this: CustomWorld) {
    let browser:Browser;

    switch(config.browser.toLowerCase()){
        case "firefox":
            browser=await firefox.launch({
                headless:config.headless
            });
            break;

        case "webkit":
            browser=await webkit.launch({
                headless:config.headless
            });
            break;

        case "chromium":
            default:
            browser=await chromium.launch({
                headless:config.headless
            });
            break;
    }
    this.browser = browser;
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