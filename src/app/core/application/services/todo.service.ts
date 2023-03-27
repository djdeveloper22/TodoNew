import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoDto } from 'src/app/domain/entities/todo.dto';
import { ITodoRepository } from '../../../domain/useCases/todo.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService implements ITodoRepository {

  constructor(private http: HttpClient) { }

  create(payload: TodoDto): Observable<HttpResponse<any>> {
    return this.http.post('https://622b473014ccb950d23522d1.mockapi.io/api/todo', payload, {observe: 'response'});
  }

  delete(payload: TodoDto): Observable<HttpResponse<any>> {
    return this.http.delete(`https://622b473014ccb950d23522d1.mockapi.io/api/todo/${payload.id}`,{observe: 'response'})
  }

  update(payload: TodoDto): Observable<HttpResponse<TodoDto>> {
    throw new Error('Method not implemented.');
  }

  read(): Observable<HttpResponse<any>> {
    return this.http.get('https://622b473014ccb950d23522d1.mockapi.io/api/todo', {observe: 'response'});
  }
}
