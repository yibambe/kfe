import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { map, retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable()
export class SharedService {

  // https://codingpotions.com/angular-login-sesion/
  constructor(private http: HttpClient) {
  }

  // kfe start
  private url: String = 'https://localhost:44348/api';
  // private url: String = 'https://konexusbackend.azurewebsites.net/api';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private options: RequestOptions = new RequestOptions({ headers: this.headers });

  public Consume(actionParam, dataParam, methodParam) {
    // const headerOptions = new HttpHeaders();
    // headerOptions.set('Content-Type', 'application/json');

    // this.http.post("url", "body", {
    //   headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getAuthAccessToken())
    //   .set('Content-Type', 'application/json') 
    // })

    let result = null;
    switch (methodParam) {
      case "GET":
        result = this.http.get(`${this.url}/${actionParam}`).pipe();
        break;

      case "GET2":
        // let tmpParams = JSON.parse(dataParam);
        //result = this.http.get(`${this.url}/${actionParam}`,{ headers: new HttpHeaders().set("Content-Type","application/json").set("params",dataParam)}).pipe();
        result = this.http.get(`${this.url}/${actionParam}`, { params: { dataParam } }).pipe();
        break;

      case "POST":
        result = this.http.post(`${this.url}/${actionParam}`, dataParam).pipe();
        break;

      default:
        break;
    }
    return result;
  }

  // ks end

  // Observable string sources
  private emitChangeSource = new Subject();

  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: string) {
    this.emitChangeSource.next(change);
  }

}