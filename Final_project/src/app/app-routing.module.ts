import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// http://localhost:4200/ -> авторизация
// http://localhost:4200/main -> страница с навигацией по заданиям
// http://localhost:4200/main/task_one -> задание 1
// http://localhost:4200/main/task_two -> задание 2
const routes: Routes = [
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
