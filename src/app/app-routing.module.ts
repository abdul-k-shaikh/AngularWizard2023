import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
{path: "", redirectTo: "welcome", pathMatch: "full" },
{path: "welcome", component: WelcomeComponent},
{path:"step-1", component: PersonalDetailsComponent },
{path:"step-2", component: ContactDetailsComponent },
{path:"step-3", component: SkillsComponent },
{path:"step-4", component: WorkExperienceComponent },
{path:"wizard-finished", component: WizardFinishedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
