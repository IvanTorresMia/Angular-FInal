import { Component, OnInit } from '@angular/core';
import { TaskDataService } from 'src/app/task-data.service';
import { Task } from '../../../taskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

// variable where we store the tasks that we recieve from api
task: Task[] = [];
title: string;
taskArray: any = [];
renderedTasks: any = [];
newTask: Task = new Task();


// creating an instance of TaskDataService, and using it's methods
  constructor(private taskData: TaskDataService ) {
    // Setting the data from Task service to our task variable

 
   }

  ngOnInit(): void {

    this.taskData.getTask().subscribe((response) => {
      this.task = response
      this.taskArray = response;
      console.log(response);
    });
  }

  deleteTask = (id:number) => {
    this.taskData.deleteTask(id).subscribe(response => {
      this.ngOnInit();
    })
  }

// Probably wont use this
  handleChange = (event) => {
    this.title = event;

    if (this.renderedTasks.length == 0) {
      for (let i = 0; i < this.taskArray.length; i++) {
        if (this.taskArray[i].title.includes(this.title)) {
          // console.log(this.taskArray[i], this.title)
          this.renderedTasks.push(this.taskArray[i]);
        }
      }
    } else if (this.title == '') {
      this.renderedTasks = []
    } else {
      for (let j = 0; j < this.renderedTasks.length; j++) {
        console.log('loop works');
        if (this.renderedTasks[j].title.includes(this.title)) {
          console.log('worked');
        } else {
          console.log('this worked');
          for (let i = 0; i < this.taskArray.length; i++) {
            if (this.taskArray[i].title.includes(this.title)) {
              // console.log(this.taskArray[i], this.title)
              this.renderedTasks.push(this.taskArray[i]);
            }
          }
        }
      }
    }

    console.log(this.renderedTasks);
  };

  createTask = () => {
    // event.preventDefault();
 
    this.taskData.createTask(this.newTask).subscribe(response => {
      console.log(response)
      this.ngOnInit();
      // this.router.navigate(['task'])
    })
  }






}
