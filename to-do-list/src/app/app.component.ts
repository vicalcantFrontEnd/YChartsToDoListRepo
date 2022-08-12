import { Component } from '@angular/core';
import { TaskListI } from 'src/interfaces/taskList.interface';
import { TaskService } from 'src/services/task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    taskListData: TaskListI[] = [];

    constructor(private readonly taskService: TaskService) { }

    ngOnInit() {
        this.getTaskList();
    }

    getTaskList() {
        this.taskService.getTasks().subscribe((taskList:any) => {
            const taskArray: TaskListI[] = [];
            taskList.forEach((task: TaskListI) => {
                taskArray.push({
                    id: task.id,
                    name: task.name,
                    complete: task.complete
                });
            });
            this.taskListData = taskArray;
        });
    }
}










