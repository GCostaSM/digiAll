import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule, MatCheckboxModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ChatComponent } from './chat/chat.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
let routes = new AppRoutingModule().appRoutes;

@NgModule({
  entryComponents: [ChatComponent],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    ChatComponent
  ],
  imports: [
    FormsModule,      
    MatCheckboxModule,
    MatSidenavModule,
    RouterModule.forRoot(
      routes
    ),
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
