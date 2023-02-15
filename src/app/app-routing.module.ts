import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { TestComponent } from './test/test.component';
import { PassComponent } from './pass/pass.component';
import { FailComponent } from './fail/fail.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'test', component:TestComponent},
  {path:'pass', component:PassComponent},
  {path:'fail', component:FailComponent},
  {path:'',redirectTo:'/register',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
