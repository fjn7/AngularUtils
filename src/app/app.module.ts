import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from './main-form/main-form.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { OtherInformationComponent } from './other-information/other-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainFormComponent,
    PersonalInformationComponent,
    ProfessionalInformationComponent,
    OtherInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
