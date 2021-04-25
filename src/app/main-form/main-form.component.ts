import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  form: FormGroup;
  identificationValue: string = '';
  nameValue: string = '';
  surnameValue: string = '';
  addressValue: string = '';
  postalCodeValue: string = '';
  sectorValue: string = '';
  jobValue: string = '';
  experienceValue: string = '';
  commentsValue: string = '';

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.form.addControl('identificationField', new FormControl());
  }

  public onSubmit() {
    let formResult = this.form.value;
    this.identificationValue = formResult['identificationField'];
    this.nameValue = formResult['name'];
    this.surnameValue = formResult['surname'];
    this.addressValue = formResult['address'];
    this.postalCodeValue = formResult['postalCode'];
    this.sectorValue = formResult['sector'];
    this.jobValue = formResult['job'];
    this.experienceValue = formResult['experience'];
    this.commentsValue = formResult['comments'];
  }

}
