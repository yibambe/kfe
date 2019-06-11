import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
// new features
import { Users } from "./../../../models/users";

@Component({
  selector: 'app-sign-int-kfe',
  templateUrl: './sign-int-kfe.component.html',
  styleUrls: ['./sign-int-kfe.component.scss']
})
export class SignIntKfeComponent implements OnInit {

  users = new Users("", "");

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(signupForm: any) {
    debugger;
    //console.log(form.value);
    this.router.navigate(['/default-layout/dashboard']);
  }

}
