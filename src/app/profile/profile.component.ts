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
      followers:number;
      following:number;
      public_repos:number
    }

    this.http.get<APiResponse>("https://api.github.com/users/hamisicodes").subscribe(data=>{
      this.user = new User(data.login,data.avatar_url,data.followers,data.following,data.public_repos)
    })
   


  }

}
