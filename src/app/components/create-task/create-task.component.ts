import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDataService } from 'src/app/task-data.service';
import { Task } from '../../../taskModel';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  newTask: Task = new Task();

  constructor(private taskData: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.newTask)

  }

  createTask = () => {
    // event.preventDefault();
 
    this.taskData.createTask(this.newTask).subscribe(response => {
      console.log(response)
      this.router.navigate(['task'])
    })
  }


}
