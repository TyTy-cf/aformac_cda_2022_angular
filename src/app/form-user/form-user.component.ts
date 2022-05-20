import { Component } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  user: User = new User();

  onSubmit(): void {
    console.log('dans le submit');
    console.log(this.user);
  }
}
