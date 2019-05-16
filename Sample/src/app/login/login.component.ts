import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user:any;
  constructor(private _service:AppService) {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }
  ngOnInit() {
  }
  login(){
    this.user = new User();
    this.user.email = this.form.value.username,
    this.user.password = this.form.value.password
    console.log(this.user);
    this._service.Test(this.user).subscribe(response => {
      console.log(response)
    });
  }

}
