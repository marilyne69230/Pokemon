import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: `nav-bar.component.html`
})
export class NavBarComponent {

  // Cette variable se charge à la connexion
  isConnected: number = 0;

}
