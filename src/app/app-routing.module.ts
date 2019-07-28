import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { 

  appRoutes: Routes=[
    { path: 'chat', component: ChatComponent },
    { path: 'forget-account', component: ForgetComponent },
    { path: 'create-account', component: RegisterComponent },
    { path: '', component: LoginComponent },
  ]
}
