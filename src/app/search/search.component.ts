import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  newUser = new User("","",0,0,0)

  @Output()
  searchUser:EventEmitter<string> = new EventEmitter<string>()
  

  submitUser(){
    this.searchUser.emit(this.newUser.login);
    this.newUser = new User("","",0,0,0)

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
