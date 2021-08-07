import { Component, OnInit } from '@angular/core';
import { TaskDataService } from 'src/app/task-data.service';
import { Task } from '../../../taskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

// 
task: Task[];

// creating an instance of TaskDataService, and using it's methods
  constructor(private taskData: TaskDataService ) {
    // Setting the data from Task service to our task variable
this.taskData.getTask().subscribe(response => (this.task = response));

   }

  ngOnInit(): void {
  }

}
