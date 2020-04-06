import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  
  user:User;

  searchUserName(username:string){
  
    this._httpRequest.userRequest(username);
    this.user = this._httpRequest.user;

  }

  constructor(private _httpRequest:HttpRequestService) { }

  ngOnInit(): void {
    this.searchUserName('hamisicodes')
  
  }

}
