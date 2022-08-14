import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskListI } from 'src/interfaces/taskList.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskListI> {
    return this.http.get<TaskListI>(`${this.baseUrl}task`);
  }

  addTask(task:any): Observable<TaskListI> {
    return this.http.post<TaskListI>(`${this.baseUrl}task`, task );
  }

  deleteTask(id: number): Observable<TaskListI> {
    return this.http.delete<TaskListI>(`${this.baseUrl}task/${id}`);
  }

}
