import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoDto } from '../../domain/entities/todo.dto';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {

  @Input() public listTask: any;
  @Output() emitListTaskdelete = new EventEmitter<any>();
  public hidden: boolean = true;

  delete(payload: TodoDto): void{
    this.emitListTaskdelete.emit(payload.id);
  }

  readTask(): void{
    this.listTask;
  }

  update(): void{

  }

  actionHidden(): void{
    this.hidden = !this.hidden;
  }
}
