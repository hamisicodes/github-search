import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  constructor(private http:HttpClient) { }

  repoRequest(username):Observable<Repository[]>{
    return this.http.get<Repository[]>("https://api.github.com/users/" + username + "/repos" + environment.apiKey);
  }
}
