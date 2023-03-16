import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-system-page',
  templateUrl: './system-page.component.html',
  styleUrls: ['./system-page.component.scss']
})
export class SystemPageComponent implements OnInit {
  opened = true;
  DisplayName = ''


  constructor(private jwtHelperService:JwtHelperService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    const tokenObj = this.token();
    this.DisplayName = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    console.log(this.DisplayName)
  }

  public token = () => {
    const token = localStorage.getItem('token') ?? '';
    const objectToken = this.decodeToken(token);
    return objectToken;
  }

  public decodeToken = (rawToken: string) => this.jwtHelperService?.decodeToken(rawToken);



  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `rgb(208, 241, 239)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    useDividers: false,
    rtlLayout: false
  };

  appitems = [
    {
      label: 'User',
      faIcon: 'fa-solid fa-user',
      externalRedirect: true,
      link: 'system/manager-user',
    },
    {
      label: 'Product',
      faIcon: 'fa-brands fa-product-hunt',
      items: [
        {
          label: 'Items',
          link: 'system/manager-product',
          faIcon: 'fa-regular fa-list'
        },
        {
          label: 'Category',
          faIcon: 'fa-solid fa-c',
          disabled: false,
          link: 'system/manager-category',
        }
      ]
    },
    {
      label: 'Bills',
      faIcon: 'fa-regular fa-cart-shopping',
      items: [
        {
          label: 'Bills',
          link: 'system/manager-bill',
          faIcon: 'fa-solid fa-file-invoice',
          activeIcon: 'favorite',
          navigationExtras: {
            queryParams: { order: 'popular', filter: 'new' },
          }
        }
      ]
    },
  ];


}
