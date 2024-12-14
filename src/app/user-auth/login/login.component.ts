import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  color: string = 'red';
  bgColor:string='yellow'

  count = 0;
  isShow: boolean = false;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }

  updateColor() {
    this.color = 'blue';
    this.bgColor='pink'
  }
}
