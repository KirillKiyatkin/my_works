import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TaskOnePageComponent} from './task-one-page/task-one-page.component';
import {TaskTwoPageComponent} from './task-two-page/task-two-page.component';
import {MainPageComponent} from './main.component';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '../auth.guard';
import { TaskOnePageMiddleComponent } from './task-one-page-middle/task-one-page-middle.component';
import { TaskOnePageHardComponent } from './task-one-page-hard/task-one-page-hard.component';

@NgModule({
  declarations: [
    TaskOnePageComponent,
    TaskTwoPageComponent,
    MainPageComponent,
    TaskOnePageMiddleComponent,
    TaskOnePageHardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'main', component: MainPageComponent, canActivate: [AuthGuard], children: [
          {path: 'task_one', component: TaskOnePageComponent},
          {path: 'task_one_middle', component: TaskOnePageMiddleComponent},
          {path: 'task_one_hard', component: TaskOnePageHardComponent},
          {path: 'task_two', component: TaskTwoPageComponent},
          {path: '**', redirectTo: ''}
        ]},
      {path: '**', redirectTo: ''}
    ])
  ],
  exports: [RouterModule]
})
export class MainPageModule {}
