import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';


@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  username:string = ""
  myRepos:Repository[]=[
    new Repository("hamso","my first repo","master","python"),
    new Repository("salo","second repo","master","java"),
    new Repository("sheba","my thi","master","html")
  ]



 

  ngOnInit(): void {

  }

}
