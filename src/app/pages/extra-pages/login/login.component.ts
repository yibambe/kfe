import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from './../../../layouts/shared-service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SharedService]

})

export class LoginComponent implements OnInit {

  // service: SharedService;
  loginForm: FormGroup;
  data: any = {};
  // public loginForm: FormGroup;
  // favoriteColorControl = new FormControl('');

  constructor(private router: Router, private service: SharedService, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Numero_persona: new FormControl(),
      Contrasena: new FormControl(),
    });
    debugger;
    // http://localhost:65505/api/Values 
    let yibambe = this.http.get("https://kws20190606050927.azurewebsites.net/api/values").pipe().subscribe(x => {
      console.dir(x);
    });

    

  }

  onSubmit() {

    this.service.Execute(JSON.stringify(this.loginForm.value), 'api/login', 1).subscribe(
      data => {
        debugger;
        console.dir(data);
      },
      error => {
        debugger;
        console.log("Error", error);
      }
    );

    // this.service.Execute('', 'api/Login', 0).subscribe(data => {
    //   debugger;
    //   console.dir(data);
    //   this.data = data;
    // });;
    // this.router.navigate(['/default-layout/dashboard']);
  }

}
