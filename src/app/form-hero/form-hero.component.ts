import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Mage} from "../../models/rpg/mage";
import {Warrior} from "../../models/rpg/warrior";
import {Rogue} from "../../models/rpg/rogue";
import {Hunter} from "../../models/rpg/hunter";
import {Hero} from "../../models/rpg/hero";

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.scss']
})
export class FormHeroComponent implements OnInit {

  heroFormGroup!: FormGroup;
  classesChoices = [Mage, Warrior, Rogue, Hunter];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.heroFormGroup = new FormGroup({
      name: new FormControl(
        '', [
          Validators.required,
          Validators.minLength(2)
        ]
      ),
      classes: new FormControl(
        '', [
          Validators.required
        ]
      )
    });
  }

  get name(): AbstractControl {
    return <AbstractControl> this.heroFormGroup.get('name');
  }

  get classes(): AbstractControl {
    return <AbstractControl> this.heroFormGroup.get('classes');
  }

  onSubmit(): void {
    if (this.heroFormGroup.valid) {
      // redirect
      let myHero: Hero = new this.classes.value(this.name.value);
      console.log(myHero);
      // this.router.navigate(['/battleground']).then();
    }
    // alert('ISSOU T AS CRUGE LE FORM ISSOU MDR');
  }

}
