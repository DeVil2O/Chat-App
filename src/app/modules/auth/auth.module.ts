import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTabsComponent } from '/home/devi/git/chatapp/src/app/components/auth-tabs/auth-tabs.component';
import { LoginComponent } from '/home/devi/git/chatapp/src/app/components/login/login.component';
import { SignupComponent } from '/home/devi/git/chatapp/src/app/components/signup/signup.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AuthTabsComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthTabsComponent, LoginComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthModule {}
