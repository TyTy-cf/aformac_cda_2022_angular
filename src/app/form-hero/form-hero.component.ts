import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.scss']
})
export class FormHeroComponent implements OnInit {

  heroFormGroup!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.heroFormGroup = new FormGroup({
      name: new FormControl(
        '', [
          Validators.required,
          Validators.minLength(2)
        ]
      ),
      email: new FormControl(
        '', [
          Validators.required,
        ]
      ),
      // classes: new FormControl(
      //   '', [
      //     Validators.required
      //   ]
      // )
    });
  }

  get name(): AbstractControl {
    return <AbstractControl> this.heroFormGroup.get('name');
  }

  get email(): AbstractControl {
    return <AbstractControl> this.heroFormGroup.get('email');
  }

  get classes(): AbstractControl {
    return <AbstractControl> this.heroFormGroup.get('classes');
  }

  onSubmit(): void {
    if (this.heroFormGroup.valid) {
      // redirect
      console.log(this.name.value);
      // this.router.navigate(['/battleground']).then();
    }
    // alert('ISSOU T AS CRUGE LE FORM ISSOU MDR');
  }

}
