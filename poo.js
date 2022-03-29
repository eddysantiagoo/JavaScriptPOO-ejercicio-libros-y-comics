const _private = new WeakMap();


class Book{

    constructor(title,author,price){

        const properties = {

         _title: title,
         _author: author,
         _price: price

        }

        _private.set(this, {properties});
    }

    get title(){
        return _private.get(this).properties['_title'];
    }
     
    set title(newTitle) {
        return _private.set(this).properties['_title'] = newTitle;
    }

    get author(){
        return _private.get(this).properties['_author'];
    }
     
    set author(newAuthor) {
        return _private.set(this).properties['_author'] = newAuthor;
    }

    get price(){
        return _private.get(this).properties['_price'];
    }
     
    set price(newPrice) {
        return _private.set(this).properties['_price'] = newPrice;

    }

    getAllData(){
        console.log( `Titulo del ejemplar: ${this.title}, Autor: ${this.author} Precio: ${this.price}`);
    }
}

class Comic extends Book{
    constructor(name,author,price,ilustrators){

        super(name,author,price);

        this.ilustrators = ilustrators;
        
    }

    addIlustrator(newIlustrator = []){
        this.ilustrators.push(newIlustrator);
    }

    getAllData(){
        super.getAllData();
        console.log(`Los ilustradores del comic son: ${this.ilustrators}`);
    }

}

class ShoppingCart {
    constructor(){
        this.products = [];
    }

    addProduct(amount, price){
        
        this.products.push( ...Array(amount).fill(price) );
    }

    showProducts(){
        console.log(this.products);
    }

    cartTotal(){
        return this.products
        .map( price => price)
        .reduce( (ac, price) => ac + price, 0);
    }

    printTicket(){
        console.log( `Total a pagar $${this.cartTotal()}.000 por todas las unidades`);
    }
}

const book1 = new Book('1984', 'George Orwell', 52.000 );
const comic1 = new Comic ('The killing Joke', 'Alan Moore', 132.000, ['Brian Bolland, John Higgins']);


comic1.addIlustrator('J.H');
console.log(comic1.ilustrators);


const cart =  new ShoppingCart();

cart.addProduct(2, comic1.price);
cart.addProduct(3, book1.price);
cart.showProducts();
cart.printTicket();

book1.getAllData();
comic1.getAllData();