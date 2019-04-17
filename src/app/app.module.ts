import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSolutionComponent } from './task-solution/task-solution.component';
import { TriangleComponent } from './triangle/triangle.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import {CommonFunctionsService} from './services/common-functions.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskSolutionComponent,
    TriangleComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
