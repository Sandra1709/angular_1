export class Product{
    productId:number;
    desc:string;
    brand:string;
    availqty:number;
    price:number;
    constructor(productId:number,desc:string,brand:string,availqty:number,price:number){
        this.productId=productId;
        this.desc=desc;
        this.brand=brand;
        this.availqty=availqty;
        this.price=price;
    }
}