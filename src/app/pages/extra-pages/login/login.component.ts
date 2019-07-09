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

    let tmpParameters = { PersonNumber: 2, Password: "DRAKE" };
    // let tmpresponse = this.service.Execute(JSON.stringify(tmpParameters), "usuario/login", 1).subscribe(
    //   (data) => {
    //         if (data.error === 0 || data.error === '0') {
    //               alert(data.errorDescripcion);
    //         } else {
    //               //this.lfGetAddress(data);
    //                console.dir(data)
    //         }
    //   });

    this.service.Consume("usuario/login", tmpParameters, "POST").subscribe(x => {
      debugger;
      console.dir(x);
    });

    //console.dir(tmpresponse);

  }

  onSubmit() {

    // debugger;

    let tmpdata = JSON.stringify(this.loginForm.value);

    this.service.Consume('usuario/login', tmpdata, "POST").subscribe(
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
