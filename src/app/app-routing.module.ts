import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LetsimagineComponent } from './onboarding-module/Components/letsimagine/letsimagine.component'
import { WelcomeComponent } from './onboarding-module/Components/welcome/welcome.component';
import { CareerpathComponent } from './onboarding-module/Components/careerpath/careerpath.component';
import { TriforceComponent } from './onboarding-module/Components/triforce/triforce.component';
import { FciComponent } from './onboarding-module/Components/fci/fci.component';
import { KeypeopleComponent } from './onboarding-module/Components/keypeople/keypeople.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'letsimagine', component:LetsimagineComponent},
  {path:'careerpath', component:CareerpathComponent},
  {path:'triforce', component:TriforceComponent},
  {path:'fci', component:FciComponent},
  {path: 'keypeople', component:KeypeopleComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})


export class AppRoutingModule { }

