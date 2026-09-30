import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Page, Browser, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    loginPage!: LoginPage;

    constructor(options: IWorldOptions){
        super(options);
    }
}

setWorldConstructor(CustomWorld);