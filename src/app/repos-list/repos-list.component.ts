import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoRequestService } from '../services/repo-request.service';



@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  
  myRepos:Repository[]

  constructor(private _repoRequest:RepoRequestService){

  }
  searchRepo(userlogin){
    this._repoRequest.repoRequest(userlogin).subscribe(data=>{
      this.myRepos = data
      
    })
  }

 

  ngOnInit(): void {
    
  
  }

}
