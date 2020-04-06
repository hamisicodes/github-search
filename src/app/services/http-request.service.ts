import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  user:User;


  constructor(private http:HttpClient) { }
}
