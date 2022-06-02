// Script - Product

class Product{
    nameProduct;
    code;
    category;
    price;
    amount;

    constructor(nameProduct, code, category, price, amount){
        this.nameProduct=nameProduct;
        this.code=code;
        this.category=category;
        this.price=price;
        this.amount=amount;
    }

    addProductToStock(num){
        this.amount += num;
    }

    removeProductToStock(num){
        if(this.amount - num >= 0){
            this.amount -= num;
        }
        else{
            this.amount = 0;
        }
    }
    
    updatePrice(newPrice){
        this.price = newPrice;
    }
} 