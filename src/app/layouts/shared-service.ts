import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { map, retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable()
export class SharedService {


  http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  // kfe start
  private url: String = 'https://localhost:44348/api';
  // private url: String = 'https://konexusbackend.azurewebsites.net/api';

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private options: RequestOptions = new RequestOptions({ headers: this.headers });

  
  public ConsumeOptional() {

    let tmp = "{ PersonNumber: 2 , Password: 'DRAKE' }";
    let uri = `${this.url}/usuario/login`;
    console.dir(uri);
    this.http.post(uri, tmp).subscribe(data => {
      debugger;
      console.dir(data);
    });
  }

  // public Consume(actionParam) {
  //   return this.http.get(actionParam).pipe();
  // }

  public Consume(actionParam, dataParam, methodParam) {

    let result = null;

    switch (methodParam) {
      case "GET":
        result = this.http.get(`${this.url}/${actionParam}`).subscribe(x=>{
          console.dir(x);
        },(error)=> {
          console.dir(error);
        });
        break;

      case "POST":
        result = this.http.post(`${this.url}/${actionParam}`, dataParam, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).pipe().subscribe(x=>{
          console.dir(x);
        });
        break;

      default:
        break;
    }
    return result;
  }

  public Execute(dataParam, actionParam, methodParam) {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    let request = null;
    let data = '';

    if (dataParam !== '') {
      data = JSON.parse(dataParam);
      // data = (dataParam);
    }

    switch (methodParam) {
      // GET 
      // case 0:
      //   request = this.http.get(`${this.url}/${actionParam}`).pipe(map(x => { return x.json(); }));
      //   request.next();
      //   break;
      // POST
      case 1:
        // request = this.http2.post(`${this.url}/${actionParam}`, data, this.options).pipe(map(x => { return x.json(); }));
        // request.next();

      //  request = this.http2.post(`${this.url}/${actionParam}`, { responseType: 'text', headers }).pipe(retry(3), catchError(this.handleError));

        break;
      // // PUT
      // case 2:
      //   request = this.http.put(`${this.url}/${actionParam}`, data, this.options).pipe(map(x => { return x.json(); }));
      //   request.next();
      //   break;
      // // PATCH
      // case 3:
      //   request = this.http.put(`${this.url}/${actionParam}`, data, this.options).pipe(map(x => { return x.json(); }));
      //   request.next();
      //   break;
      // // DELETE
      // case 4:
      //   request = this.http.delete(`${this.url}/${actionParam}`, this.options).pipe(map(x => { return x.json(); }));
      //   request.next();
      //   break;

      default:
        break;
    }
    return request;
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