import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import { Iuser } from '../Iuser'; 

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styles: []
})
export class UserComponent implements OnInit{

  parentUser : Iuser|undefined;

  constructor(private service:UserService){}

  users:Iuser[] = []
  usersParent : Iuser | undefined ;
  ngOnInit() {
    this.getUser();
    console.log('marche');
  }

  getUser(){
    this.service.fetchAll().subscribe( data =>{
      this.users = data;
      console.log(this.users);
      return this.users;

    })
  }

  selectUser(user:Iuser){
    this.usersParent = user;
  }

}