import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Here is yet another task', 2),
    new Task('Let\'s test some more', 2)
  ];
  selectedTask = null;
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2){
      return "bg-warning";
    }
    else {
      return "bg-info";
    }
  }
  finishedEditing(){
    this.selectedTask = null;
  }
}
