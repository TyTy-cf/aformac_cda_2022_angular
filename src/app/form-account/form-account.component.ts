import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Account} from "../../models/steamish/account";
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../url_api/url_api";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {

  formGroupAccount!: FormGroup;
  account: Account = new Account();

  errors: string = '';

  constructor(
    private router: Router,
    private httpService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.formGroupAccount = new FormGroup({
      name: new FormControl(
        this.account.name, [
          Validators.required,
        ]
      ),
      email: new FormControl(
        this.account.email, [
          Validators.required,
        ]
      ),
      nickname: new FormControl(
        this.account.nickname, [
          Validators.required
        ]
      )
    });
  }

  getFields(field: string): AbstractControl {
    return <AbstractControl> this.formGroupAccount.get(field);
  }

  isFieldInvalid(field: string): boolean {
    let formControl: AbstractControl = this.getFields(field);
    return (formControl.dirty || formControl.touched) && formControl.invalid;
  }

  onSubmit(): void {
    this.errors = '';
    if (this.formGroupAccount.valid) {
      this.account.name = this.getFields('name').value;
      this.account.email = this.getFields('email').value;
      this.account.nickname = this.getFields('nickname').value;
      this.httpService.postRequest<Account>(UrlApi.urlAccount, this.account)
        .pipe(
          catchError(err => {
            this.errors = err.status + ' : ' + err.error.detail;
            return throwError(err);
          })
        )
        .subscribe((json) => {
          console.log(json);
        }
      );
    }
  }

}
