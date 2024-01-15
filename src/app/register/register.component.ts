import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  userCredentials: any;
  constructor(
    public service: UserService,
    public router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.getUserCred();
  }

  logIn() {
    this.service.isLogin = false;
    this.service.isRegister = false;
    this.router.navigate(['/login']);
  }

  getUserCred() {
    return this.service.getUserCred().subscribe((res: any[]) => {
      this.userCredentials = res;
    });
  }

  Registered() {
    const registerFormData = this.registerForm.value;
    this.service.postUserCred(registerFormData).subscribe((res) => {
      this.userCredentials = res;
      this.service.isRegister = false;  
      this.router.navigate(['/login']);
    });
    this.registerForm.reset();
  }

  reSet() {
    this.registerForm.reset();
  }
}
