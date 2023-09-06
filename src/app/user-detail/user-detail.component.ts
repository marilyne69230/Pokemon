import { Component, Input } from '@angular/core';
import { Iuser } from '../Iuser';

@Component({
  selector: 'app-user-detail',
  templateUrl: `user-detail.component.html`,
})
export class UserDetailComponent {

  @Input() userC: Iuser|undefined;
}
