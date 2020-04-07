import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  constructor(private http:HttpClient) { }
  repoRequest():Observable<Repository>{
    return this.http.get<Repository>("https://api.github.com/users/hamisicodes/repos");
  }
}
