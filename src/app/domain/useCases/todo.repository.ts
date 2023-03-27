import { CrudBase } from '../../core/application/contract/todo.contract';
import { TodoDto } from '../entities/todo.dto';

export interface ITodoRepository extends CrudBase<TodoDto> { }
