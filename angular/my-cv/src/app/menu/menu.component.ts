import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: menu[] = [
    new Menu("Home", "/home", "The home page"),
    new Menu("About", "/about", "The about page")
  ];

  constructor() { }

  ngOnInit() {
  }

}
// we made this so we could put the menuItems in an array. List of menu Items to be rendered.