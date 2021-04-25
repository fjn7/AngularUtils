import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.css']
})
export class OtherInformationComponent implements OnInit {

  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form.addControl('comments', new FormControl());
  }

}
