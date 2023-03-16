export class CreateCategoryRequest{
  tittle:string;

  constructor(tittle: string, productsID: string[]) {
    this.tittle = tittle;
  }
}
