exports.LoginPage =
    class LoginPage {
        constructor(page) {
            this.page = page;
            this.loginTab = '#login2';
            this.username_textbox = '#loginusername';
            this.password_textbox = '#loginpassword';
            this.loginButton = "//button[normalize-space()='Log in']";
        }
    
        async gotoLoginPage() {
            await this.page.goto('https://demoblaze.com/')
        }
    
        async login(username, password) {
            await this.page.locator(this.loginTab).click();
            await this.page.locator(this.username_textbox).fill(username);
            await this.page.locator(this.password_textbox).fill(password);
            await this.page.click(this.loginButton);
        }
    }
