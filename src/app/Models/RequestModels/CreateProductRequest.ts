export class CreateProductRequest{
  name:string;
  description:string;
  imageURL:string;
  quantityAvailable:number;
  price:number;
  size:string
  brand:string;
  categoryIDs:string[]

  constructor(name: string, description: string, imageURL: string, quantityAvailable: number, price: number, size: string, brand: string, categoryIDs: string[]) {
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.size = size;
    this.brand = brand;
    this.categoryIDs = categoryIDs;
  }
}
