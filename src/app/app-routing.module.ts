import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationalBackgroundComponent } from './educational-background/educational-background.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';



const routes: Routes = [
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'contact-info', component: ContactInfoComponent },
  { path: 'educational-background', component: EducationalBackgroundComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: '', redirectTo: '/personal-info', pathMatch: 'full' } // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
