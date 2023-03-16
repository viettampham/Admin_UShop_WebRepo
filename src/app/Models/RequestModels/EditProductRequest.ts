export class EditProductRequest{
  productID:string;
  name:string;
  description:string;
  imageURL:string;
  quantityAvailable:number;
  price:number;
  size:string;
  brand:string;
  categorieIDs:string[]

  constructor(productID: string, name: string, description: string, imageURL: string, quantityAvailable: number, price: number, size: string, brand: string, categorieIDs: string[]) {
    this.productID = productID;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.size = size;
    this.brand = brand;
    this.categorieIDs = categorieIDs;
  }
}
