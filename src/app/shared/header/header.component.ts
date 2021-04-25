import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formSearch: FormGroup;

  constructor() {
    this.formSearch = new FormGroup({
      searchField: new FormControl()
    });
    //    this.formSearch.addControl('searchField', new FormControl(''));
  }

  ngOnInit(): void {

  }

  public onSubmit() {
    // How to get the value of the search field:
    // this.formSearch.value['searchField']
    alert('Sorry but we are not ready to search. We will be able to do it soon.');
  }

}
