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

  constructor(private _httpRequest:HttpRequestService) { }

  ngOnInit(): void {
    this._httpRequest.userRequest("hamisicodes");
    this.user = this._httpRequest.user;

  }

}
