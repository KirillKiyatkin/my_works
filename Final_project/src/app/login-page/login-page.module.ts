import {NgModule} from '@angular/core';
import {LoginPageComponent} from './login-page.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: LoginPageComponent},
    ])
  ],
  exports: [RouterModule]
})
export class LoginPageModule {}
