import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskComponent } from './components/task/task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

const routes: Routes = [
  { path: "", redirectTo: "task", pathMatch: "full" },
  { path: "task", component: TaskComponent },
  { path: "details/:id", component: TaskDetailsComponent},
  { path: "create", component: CreateTaskComponent},
  { path: "update/:id", component: UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 