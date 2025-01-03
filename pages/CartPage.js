exports.cartPage = class cartPage{
    constructor(page){
        this.page = page;
        this.noOfProducts = "//tbody[@id='tbodyid']/tr/td[2]";
    }

    async checkProductInCart(productName){
        const productsInCart = await this.page.$$(this.noOfProducts);
        for(const product of productsInCart){
            if(await product.textContent() === productName){
                return true;
                break;
            }   
        } 
    }
}