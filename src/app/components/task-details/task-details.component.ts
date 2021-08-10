import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDataService } from 'src/app/task-data.service';
import { Task } from '../../../taskModel';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {


  id: number;
  myTask: Task = new Task();

  constructor(private taskData: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this grabs our parameters which come as an array
    // then they are stored in params and equal them to our variable id
    this.route.params.subscribe(params => {
      this.id = +params['id']; 

      this.taskData.getTaskById(this.id).subscribe(res => {
        this.myTask = res
        console.log(this.myTask)
    }) 
    
    });

  

  }


  deleteTask = (id:number) => {
    this.taskData.deleteTask(id).subscribe(response => {
     this.router.navigate(['task'])
    })
  }

}
