import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoRequestService } from '../services/repo-request.service';


@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  username:string = ""
  myRepos:Repository[]

  constructor(private _repoRequest:RepoRequestService){

  }
  searchRepo(){
    this._repoRequest.repoRequest().subscribe(data=>{
      this.myRepos = data
    })
  }

 

  ngOnInit(): void {
    
  }

}
