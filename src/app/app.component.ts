import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes = [{
    name: 'Home',
    path: '/home',
    icon: 'home'
  }, {

    name: 'Contact',
    path: '/contact',
    icon: 'contact'

  }, {

    name: 'About Us',
    path: '/about_us',
    icon: 'about_us'
  }];

  title = 'demo-project';
  panelOpenState = false;
}
