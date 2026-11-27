import test from "@playwright/test";
import { PageLogin } from "../page/pageLogin";

test.describe("testar a pagina de login", () => {
    test("login efetuado com sucesso", async ({ page }) => {
        const pageLogin = new PageLogin(page);
 
        await pageLogin.visitar();
        await pageLogin.login("standard_user", "secret_sauce");

        
    })
})