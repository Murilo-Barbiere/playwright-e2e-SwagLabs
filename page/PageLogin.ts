import { expect, Locator, Page } from "@playwright/test";

export class PageLogin {
    private readonly pagina: Page;
    private readonly inputUserName: Locator;
    private readonly inputUserPassword: Locator;
    private readonly buttonLogin: Locator;
    private readonly boxError: Locator;

    constructor(pagina: Page){
        this.pagina = pagina;
        this.inputUserName = pagina.locator('[data-test="username"]');
        this.inputUserPassword = pagina.locator('[data-test="password"]');
        this.buttonLogin = pagina.locator('[data-test="login-button"]');
        this.boxError = pagina.locator('[data-test="error"]');
    }

    async visitar(){
        await this.pagina.goto("/");
    }

    async login(user: string, password: string){
        await this.inputUserName.fill(user);
        await this.inputUserPassword.fill(password);

        await this.buttonLogin.click();
    }

    async sucessoLogin(){
        await expect(this.pagina).toHaveURL("/inventory.html");
    }

    async falhaLogin(){
        await expect(this.boxError).toBeVisible();
    }
}