// Script - Store


// Class Store
class Store{ 

    static start = 0 ;

    products = [new Product('Milk',11,'Dairy products',12,0) , new Product('bread',22,'Pastries',17,783), new Product('Coca-Cola',22,'Sweet drink',22,1967), new Product('Cheese',10,'Dairy products',5,350), new Product('Soda',12,'Sweet drink',34,256)];
    
    constructor(){
    } 

    // Add new product
    addNewProduct(nameProduct, code, category, price, amount){
        const p = new Product(nameProduct, code, category, price, amount);
        // this.products.push(p); 
        this.products = [...this.products, p];
        const newList = createList(this.products);
        const ul = document.querySelector('ul');
        ul.replaceWith(newList);  
        document.getElementById("detailsForm").style.display = "none";  
    }   

    changePrice(productName, price){
        for (let i = 0 ; i < this.products.length ; i++) {
            if(this.products[i].nameProduct === productName){
               this.products[i].price = +price;
                break;
            }
        }
        const newList = createList(this.products);
        const ul = document.querySelector('ul');
        ul.replaceWith(newList);    
    }

    addAmountToProduct(productName, amount){
        for (let i = 0 ; i < this.products.length ; i++) {
            if(this.products[i].nameProduct === productName){
               this.products[i].amount += +amount;
                break;
            }
        }
        const newList = createList(this.products);
        const ul = document.querySelector('ul');
        ul.replaceWith(newList); 
        document.getElementById('inputNameToAdd').value = '';
        document.getElementById('inputAmountToAdd').value = '';
    }

    removeAmountToProduct(productName, amount){
        for (let i = 0 ; i < this.products.length ; i++) {
            if(this.products[i].nameProduct === productName){
               this.products[i].amount -= +amount;
               if(this.products[i].amount < 0){
                   this.products[i].amount = 0 ;
               }
                break;
            }
        }
        const newList = createList(this.products);
        const ul = document.querySelector('ul');
        ul.replaceWith(newList); 
}
}




// Search כunctions
function searchByPrice() {
    document.getElementById("range").style.display = "inherit";
}

function searchByName(){
    document.getElementById("inputNameDiv").style.display = "inherit";
}

function searchByCategory(){
    document.getElementById("inputCategoryDiv").style.display = "inherit";

}

function searchOutOfStock(){
    const filterProductsByOutOfStock = store.products.filter(item => item.amount <= 0);
    const filteredList = createList(filterProductsByOutOfStock);
    const ul = document.querySelector('ul'); // first ul
     ul.replaceWith(filteredList);
     
}



// Create a product list for the html page
function createList(arr) {
    const list = document.createElement('ul');
    const listItems = arr.map(item => {
        const li = document.createElement('li');
        li.textContent = `Product Name: ${item.nameProduct} , Code: ${item.code} , Category: ${item.category} , Price: ${item.price}$ , Amount: ${item.amount}`;
        return li;
    })
    list.append(...listItems);
    return list;
}

//  Start store
function startStore(){

    if(Store.start === 0){
         window.store = new Store();
         document.body.append(createList(store.products));
         Store.start ++;
         
    }
}
 onload = () => startStore(); 