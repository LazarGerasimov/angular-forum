import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['test1'],
    email: ['testemail'],
    ext: ['00359'],
    tel: ['328139812'],
    pass: this.fb.group({
      password: ['test2'],
      rePassword: ['test2']
    }, {
      validators: []
    })
  })

  constructor(private fb: FormBuilder) { }
}
