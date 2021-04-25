import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form.addControl('name', new FormControl);
    this.form.addControl('surname', new FormControl);
    this.form.addControl('address', new FormControl);
    this.form.addControl('postalCode', new FormControl);
  }

}
