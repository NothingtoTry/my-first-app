import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationalBackgroundComponent } from './educational-background/educational-background.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { SuccessAlert2Component } from './success-alert2/success-alert2.component';
import { WarningAlert2Component } from './warning-alert2/warning-alert2.component';
import { GameControlComponent } from './game-control/game-control.component';
import { CommonModule } from '@angular/common';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    EvenComponent, 
    OddComponent,
    GameControlComponent,
    AppComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    EducationalBackgroundComponent,
    WorkExperienceComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    SuccessAlert2Component,
    WarningAlert2Component,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
