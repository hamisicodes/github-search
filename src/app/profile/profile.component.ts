import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    interface APiResponse{
      login:string;
      avatar_url:string;
      folowers:number;
      following:number;
      public_repos:number
    }
   


  }

}
