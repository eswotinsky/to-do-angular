import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

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

}
