import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListUserserviceService {

  constructor(private http:HttpClient) {

  }


  public getUsers() : Observable <any> {
   return this.http.get('https://api.github.com/users?since=135>; rel="next"')

  }

  public getsingleuser() : Observable <any> {
    return this.http.get('https://api.github.com/users/username')
   }
}
