import { Component, OnInit } from '@angular/core';
import { Task } from 'src/taskModel';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDataService } from 'src/app/task-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title: string;
  taskArray: any = [];
  renderedTasks: any = [];
  // filtered: []

  constructor(
    private taskData: TaskDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
  }


}
