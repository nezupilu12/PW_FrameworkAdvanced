import { Locator, Page } from "@playwright/test";

export class LoginPage {

    private page: Page;
    email: Locator;
    password: Locator;
    loginButton: Locator;
    card:Locator;
    unsuccessMsg:Locator;
    invalidEmail:Locator;
    blankerrorEmail:Locator;
    blankerrorPswd:Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = this.page.getByPlaceholder('email@example.com');
        this.password = this.page.getByPlaceholder('enter your passsword');
        this.loginButton = this.page.locator("#login");
        this.card=this.page.locator(".card");
        this.unsuccessMsg=this.page.locator("//div[contains(text(),'Incorrect')]");
        this.invalidEmail=this.page.locator("//div[contains(text(),'Enter Valid Email')]");
        this.blankerrorEmail=this.page.locator("//div[contains(text(),'Email is required')]");
        this.blankerrorPswd=this.page.locator("//div[contains(text(),'Password is required')]");

    }

    async enterCreds(email:string ,password:string){
        await this.email.fill(email);
        await this.password.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async checkSuccessLogin(){
        await this.card.first().waitFor();
    }
}