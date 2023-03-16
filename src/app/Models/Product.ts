export class Product{
  productID:string;
  name:string;
  description:string;
  imageURL:string;
  quantityAvailable:string;
  price:number
  displayPrice:string;
  size:string;
  brand:string;
  categorys:string


  constructor(productID: string, name: string, description: string, imageURL: string, quantityAvailable: string, price: number, displayPrice: string, size: string, brand: string, categorys: string) {
    this.productID = productID;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.displayPrice = displayPrice;
    this.size = size;
    this.brand = brand;
    this.categorys = categorys;
  }
}
