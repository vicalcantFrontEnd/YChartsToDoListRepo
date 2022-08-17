import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskListI } from 'src/interfaces/taskList.interface';
/**
 * @author - Victor Alcantara
 * Service that handles the tasks.
*/
@Injectable({
  providedIn: 'root'
})
/**
 * class to handle the tasks.
 * @class - TaskService - Service that handles the tasks.
 */
export class TaskService {
  /**
   * base url of the json db.json file.
 
   */
  private baseUrl = 'http://localhost:3000/';

  /**
   * constructor to inject the http service.
   * @constructor - TaskService - Service that handles the tasks.
   * @param http {HttpClient} - HttpClient service.
   * @private - Private decorator.
   */
  constructor(private http: HttpClient) { }

  /**
   * this function will return all the tasks listed on the json db.json file. 
   * @returns {array}- Returns an Observable of type @interface TaskListI with an array of task list.
   * @type {TaskListI[]}

   */
  getTasks(): Observable<TaskListI> {
    return this.http.get<TaskListI>(`${this.baseUrl}task`);
  }

  /**
   * this function will posted a new task on the json db.json file, and will return the new task list.
   * @param task {string} - Task to be added.
   * @returns {string} - Returns an Observable of type @interface - TaskListI  the task added. 
   * @type {TaskListI}
   */
  addTask(task: string): Observable<TaskListI> {
    return this.http.post<TaskListI>(`${this.baseUrl}task`, task);
  }

  /**
   * this function will delete a task on the json db.json file, and will return the new task list.
   * @param id {number} - Id of the task to be deleted.
   * @returns {string}- Returns the task deleted. 
   * @type {TaskListI}
   */
  deleteTask(id: number): Observable<TaskListI> {
    return this.http.delete<TaskListI>(`${this.baseUrl}task/${id}`);
  }
}
