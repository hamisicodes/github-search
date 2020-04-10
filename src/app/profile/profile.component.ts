import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpRequestService } from '../services/http-request.service';
import { RepoRequestService } from '../services/repo-request.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  
  user:User;
  repo:Repository[]

  searchUserName(username:string){
  
    this._httpRequest.userRequest(username);
    this.user = this._httpRequest.user;
    this._repo.repoRequest(username).subscribe(data=>{
      this.repo = data
      
    })

  }

  constructor(private _httpRequest:HttpRequestService,private _repo:RepoRequestService) {
 
   }
 

  ngOnInit(): void {
    this.searchUserName('hamisicodes')
    
  
  }

}
