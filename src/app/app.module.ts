import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './ui/task/task.component';
import { ListTaskComponent } from './ui/list-task/list-task.component';
import { ModalComponent } from './shared/modal/modal.component';
import { TodoService } from './core/application/services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ListTaskComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'ITodoRepository', useClass: TodoService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
