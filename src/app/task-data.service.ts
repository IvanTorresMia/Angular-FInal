import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; // this gives us the avility to access our data
import { Observable, of } from 'rxjs'; // allows us to wait and grab that data

import { Task } from '../taskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  TaskUrl = 'http://localhost:3000/Tasks';

  // Here we have a function that we will use to get all the tasks
  getTask = (): Observable<Task[]> => {
    return this.http.get<Task[]>(this.TaskUrl);
  };

  // This function takes in an id of number and using the Task Model we
  getTaskById = (id: number): Observable<Task> => {
    return this.http.get<Task>(`${this.TaskUrl}/${id}`);
  };

  // method for creating a new task
  createTask(newtask: Task) {
    return this.http.post(this.TaskUrl, newtask)
  }

  // method for updating task by ID
  updateTask(id: number, updatedTask: Task) {
    return this.http.put(`${this.TaskUrl}/${id}`, updatedTask)
  }

  // method for deleted by task ID
  deleteTask(id: number) {
    return this.http.delete(`${this.TaskUrl}/${id}`)
  }






  constructor(private http: HttpClient) {}
}
