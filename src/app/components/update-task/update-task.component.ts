import { Component, OnInit } from '@angular/core';
import { Task } from 'src/taskModel';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDataService } from 'src/app/task-data.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id: number;
  currentTask: Task = new Task();
  updatedTask: Task = new Task();

  constructor(private taskData: TaskDataService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    // this grabs our parameters which come as an array
    // then they are stored in params and equal them to our variable id
    this.route.params.subscribe(params => {
      this.id = +params['id']; 

      this.taskData.getTaskById(this.id).subscribe(res => {
        this.currentTask = res
        console.log(this.currentTask)
    }) 
    
 });

  

  }

  updateTask = () => {
      this.taskData.updateTask(this.id, this.updatedTask).subscribe(response => {
          this.router.navigate(['task']);
          console.log(response);
      })
  }
 
}
