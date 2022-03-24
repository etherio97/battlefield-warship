import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  nicknameControl!: FormControl;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.nicknameControl = this._fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]);
  }
}
