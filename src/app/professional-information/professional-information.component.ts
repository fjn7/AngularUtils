import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-professional-information',
  templateUrl: './professional-information.component.html',
  styleUrls: ['./professional-information.component.css']
})
export class ProfessionalInformationComponent implements OnInit {

  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form.addControl('sector', new FormControl());
    this.form.addControl('job', new FormControl());
    this.form.addControl('experience', new FormControl());
  }

}
