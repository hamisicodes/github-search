import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { ReposListComponent } from '../repos-list/repos-list.component';
import { NotFoundComponent } from '../not-found/not-found.component';



const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'repos',component:ReposListComponent},
  { path: '', redirectTo:"profile", pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
