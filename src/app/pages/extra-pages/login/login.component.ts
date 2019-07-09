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

  // service: SharedService;
  loginForm: FormGroup;
  data: any = {};
  // public loginForm: FormGroup;
  // favoriteColorControl = new FormControl('');

  constructor(private router: Router, private service: SharedService, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      PersonNumber: new FormControl(),
      Password: new FormControl(),
    });

    this.service.ConsumeOptional();
    
  }

  onSubmit() {

    // debugger;

    // let tmpdata = JSON.stringify(this.loginForm.value);
    let tmpdata = { PersonNumber: 2, Password: "DRAKE" };
    let tmpdata2 = JSON.stringify(tmpdata);

    this.service.Consume('usuario/login', tmpdata2, "POST").subscribe(
      data => {
        debugger;
        console.dir(data);
      },
      error => {
        debugger;
        console.log("Error", error);
      }
    );
    // this.router.navigate(['/default-layout/dashboard']);
  }

}
