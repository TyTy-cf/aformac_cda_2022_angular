import { Component, OnInit } from '@angular/core';
import {Publisher} from "../../models/steamish/publisher";
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../services/http-client.service";
import {Country} from "../../models/steamish/country";
import {Game} from "../../models/steamish/game";
import {UrlApi} from "../../url_api/url_api";
import {sprintf} from "sprintf-js";
import {IApiResponse} from "../../models/steamish/i-api-response";

@Component({
  selector: 'app-form-publisher',
  templateUrl: './form-publisher.component.html',
  styleUrls: ['./form-publisher.component.scss']
})
export class FormPublisherComponent implements OnInit {

  publisher: Publisher = new Publisher();
  countries: Country[] = [];
  gamesArray: Game[] = [];
  formPublisher!: FormGroup;

  constructor(
    private httpService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.formPublisher = new FormGroup({
      name: new FormControl(
        this.publisher.name, [
          Validators.required
        ]
      ),
      website: new FormControl(
        this.publisher.website, [
          Validators.required
        ]
      ),
      country: new FormControl(
        this.publisher.country, [
          Validators.required
        ]
      ),
      games: new FormArray([
        new FormControl('')
      ])
    });
    // Get tous les jeux pour les afficher dans le select option
    this.httpService.getRequest<IApiResponse<Game>>(sprintf(UrlApi.urlGameFilter, 'name', 'ASC', 50)).subscribe((json) => {
      this.gamesArray = json.items;
    });
    // Get all country : ici c'est un paliatif car all country pas créé à ce moment là
    this.httpService.getRequest<Game>(sprintf(UrlApi.urlGameBySLug, 'La-League-des-Legendes')).subscribe((json) => {
      this.countries = json.countries.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  get games(): FormArray {
    return <FormArray> this.formPublisher.get('games');
  }

  getFields(field: string): AbstractControl {
    return <AbstractControl> this.formPublisher.get(field);
  }

  isFieldInvalid(field: string): boolean {
    let formControl: AbstractControl = this.getFields(field);
    return (formControl.dirty || formControl.touched) && formControl.invalid;
  }

  onSubmit(): void {
    if (this.formPublisher) {
      this.publisher.name = this.getFields('name').value
      this.publisher.website = this.getFields('website').value;
      this.publisher.country = this.getFields('country').value;
      this.games.controls.forEach((items) => {
        this.publisher.games.push(items.value);
      });
      console.log(this.publisher)
      // this.httpService.postRequest<Publisher>(UrlApi.urlPublisher, this.publisher).subscribe();
    }
  }

  addNewForm(): void {
    this.games.controls.push(new FormControl(''));
  }

  removeForm(indexFormControl: number): void {
    this.games.removeAt(indexFormControl);
  }
}
