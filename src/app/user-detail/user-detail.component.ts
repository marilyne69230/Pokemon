import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../Iuser';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: `user-detail.component.html`,
})
export class UserDetailComponent {

  @Input() userC: Iuser|undefined;

  selectAddUser: Iuser|undefined;

  constructor(
    private service:UserService,
    private router:ActivatedRoute
  ){}

  ngOnInit(){

    }

}
