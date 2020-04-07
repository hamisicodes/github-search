import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  user:User;
  


  constructor(private http:HttpClient) { 
    this.user = new User("","",0,0,0);
  }

  userRequest(username:string){
    interface ApiResponse{
      login:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repos:number
    }
    let newPromise  = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+ username + environment.apiKey).toPromise().then(response=>{
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.public_repos = response.public_repos

        resolve()

      },error=>{
        this.user.login = "none"
        this.user.avatar_url = "none"
        this.user.followers = 0
        this.user.following = 0
        this.user.public_repos = 0

        reject(error)

      })

    })
    return newPromise

  }
  
}
