import { Component } from '@angular/core';
import { TaskListI } from 'src/interfaces/taskList.interface';
import { TaskService } from 'src/services/task.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    taskForm: FormGroup;
    task: TaskListI;
    completeTask: boolean = false;
    taskListData: TaskListI[] = [];


    constructor(private readonly taskService: TaskService,
        private formBuilder: FormBuilder) {
        this.taskForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.getTaskList();
    }

    getTaskList() {
        this.taskService.getTasks().subscribe((taskList: any) => {
            const taskArray: TaskListI[] = [];
            taskList.forEach((task: TaskListI) => {
                taskArray.push({
                    id: task.id,
                    name: task.name,
                    complete: this.completeTask
                });
            });
            this.taskListData = taskArray;
            console.log(this.taskListData);
        });
    }

    addTask() {
        this.task = this.taskForm.value;
        this.taskService.addTask(this.task).subscribe((newTask: TaskListI) => {
            this.taskListData.push(newTask);
            this.taskForm.reset();
        }
        );
    }

    deleteTask(idTask: number) {
        this.taskService.deleteTask(idTask).subscribe((deletedTask: TaskListI) => {
            this.taskListData = this.taskListData.filter(task => task.id !== idTask);
        }
        );
    }
}