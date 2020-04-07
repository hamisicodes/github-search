import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReposListComponent } from './repos-list/repos-list.component';



const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'repos',component:ReposListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
