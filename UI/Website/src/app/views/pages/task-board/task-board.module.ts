import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskBoardRoutingModule } from './task-board-routing.module';
import { TaskBoardComponent } from './task-board.component';


@NgModule({
  declarations: [TaskBoardComponent],
  imports: [
    CommonModule,
    TaskBoardRoutingModule
  ]
})
export class TaskBoardModule { }
