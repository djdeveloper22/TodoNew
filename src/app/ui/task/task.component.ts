import { Component, Inject, OnInit } from '@angular/core';
import { TodoDto } from '../../domain/entities/todo.dto';
import { ITodoRepository } from '../../domain/useCases/todo.repository';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {

  public task: Array<TodoDto> = []

  constructor(@Inject('ITodoRepository') private todoService: ITodoRepository) { }

  ngOnInit(): void {
    this.readTask();
  }

  readTask(){
    this.todoService.read().subscribe((resp: HttpResponse<any>)=>{
      if(resp.status === 200)
        this.task = resp.body;
        console.log(this.task)
    })
  }
}
