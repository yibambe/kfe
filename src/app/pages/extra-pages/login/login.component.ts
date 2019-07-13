import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from './../../../layouts/shared-service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { DebugRenderer2 } from '@angular/core/src/view/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SharedService]

})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  data: any = {};

  constructor(private router: Router, private service: SharedService, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      PersonNumber: new FormControl(),
      Password: new FormControl(),
    });
  }

  onSubmit() {
    event.preventDefault();

    this.service.Consume('usuario/login', this.loginForm.value, "POST").subscribe(
      (data) => {
        console.dir(data);
        this.service.setUserLoggedIn(data);
        let tmp = this.service.getUserLoggedIn();
        console.dir(tmp);
        debugger;

        this.router.navigate(['/default-layout/dashboard']);
      },
      (error) => {
        debugger;
        // TODO
        // alert error custom
        console.log("Error", error);
      }
    );
  }

}
