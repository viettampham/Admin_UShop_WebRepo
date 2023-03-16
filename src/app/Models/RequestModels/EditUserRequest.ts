export class EditUserRequest{
  id:string;
  userName:string;
  name:string;
  address:string;

  constructor(id: string, userName: string, name: string, address: string) {
    this.id = id;
    this.userName = userName;
    this.name = name;
    this.address = address;
  }
}
