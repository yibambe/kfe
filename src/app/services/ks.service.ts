import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KsService {
  private url: String = 'konexusbackend.azurewebsites.net';

  constructor(public http: HttpClient) { }

  public Consume() {
    return this.http.get(`${this.url}/api/login`).subscribe(data => {
      console.dir(data);
    });
  }
}
