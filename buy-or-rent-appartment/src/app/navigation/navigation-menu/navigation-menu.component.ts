import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  menuItems: { title: string, url: string }[] = [
    {
      title: 'Calculator',
      url: '/',
    },
    {
      title: 'Info',
      url: '/about/info',
    },
    {
      title: 'Privacy',
      url: '/about/privacy',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
