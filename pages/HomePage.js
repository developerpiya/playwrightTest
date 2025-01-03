exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = "//div[@id='tbodyid']/div/div/div/h4/a"
        this.addToCartBtn = "//a[normalize-space()='Add to cart']"
        this.cartTab = '#cartur'
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        for (const prodct of productList) {
            if (productName === await prodct.textContent()) {
                console.log('condition satisfied.......')
                await prodct.click();
                break;
            }
        }
        await this.page.on('dialog', async dialog => {
           if(dialog.message().includes('added')){
            await dialog.accept();
           }
        })
        await this.page.locator(this.addToCartBtn).click();
    }

    async gotoCart(){
        await this.page.locator(this.cartTab).click();
    }

}