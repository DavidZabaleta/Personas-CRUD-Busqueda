import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleRegisterComponent } from './components/people-register/people-register.component';
import { PeopleUpdateComponent } from './components/people-update/people-update.component';


const routes: Routes = [
  {path: 'people-register', component: PeopleRegisterComponent},
  {path: 'people-update', component: PeopleUpdateComponent},
  {path: 'people-list', component: PeopleListComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
