import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { 

  appRoutes: Routes=[
    { path: 'create-account', component: RegisterComponent },
    { path: '', component: LoginComponent },
  ]
}
