import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//modules
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCarouselModule } from '@ngmodule/material-carousel';


//Components
import { InputUserNameComponent } from './Components/input-user-name/input-user-name.component';
import { LetsimagineComponent } from './Components/letsimagine/letsimagine.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CareerpathComponent } from './Components/careerpath/careerpath.component';
import { TriforceComponent } from './Components/triforce/triforce.component';
import { FciComponent } from './Components/fci/fci.component';
import { KeypeopleComponent } from './Components/keypeople/keypeople.component';
import { CardpeopleComponent } from './Components/cardpeople/cardpeople.component';
import { ReadyComponent } from './Components/ready/ready.component';
import { StudiosComponent } from './Components/studios/studios.component';



@NgModule({
  declarations: [
    InputUserNameComponent,
    LetsimagineComponent,
    WelcomeComponent,
    CareerpathComponent,
    TriforceComponent,
    FciComponent,
    KeypeopleComponent,
    CardpeopleComponent,
    ReadyComponent,
    StudiosComponent],
  imports: [
    CommonModule, BrowserModule, 
    FormsModule, ReactiveFormsModule, 
    AppRoutingModule, MatExpansionModule,
    BrowserAnimationsModule, MatTabsModule,
    MatCarouselModule
  ],
  exports: [InputUserNameComponent,
    LetsimagineComponent,
    WelcomeComponent]
})
export class OnboardingModuleModule { }
