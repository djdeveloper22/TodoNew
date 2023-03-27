import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";

export interface CrudBase<T> {
  create(payload: T): Observable<HttpResponse<any>>;
  delete(payload: T): Observable<HttpResponse<any>>;
  update(payload: T): Observable<HttpResponse<any>>;
  read(): Observable<HttpResponse<T>>;
}
