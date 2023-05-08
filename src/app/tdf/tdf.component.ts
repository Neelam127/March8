import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  user = new User;

  ngSubmit(){
    this.AddUserInDatabase();
  }

  AddUserInDatabase(){
    this.userService.addUser(this.user).subscribe(
      data=>{console.log(data)}
    )
  }
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
