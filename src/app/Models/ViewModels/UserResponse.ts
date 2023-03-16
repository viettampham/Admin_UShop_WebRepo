export class UserResponse{
  id:string;
  username:string;
  name:string;
  address:string;
  email:string;

  constructor(id: string, username: string, name: string, address: string, email: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.address = address;
    this.email = email;
  }
}
