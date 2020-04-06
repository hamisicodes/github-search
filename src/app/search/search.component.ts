import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user:User= new User("Hamisi","",3,5,15)
  

  constructor() { }

  ngOnInit(): void {
  }

}
