import { Component } from '@angular/core';
import { TaskListI } from 'src/interfaces/taskList.interface';
import { TaskService } from 'src/services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    taskForm: FormGroup;
    task: TaskListI;
    sizeTaskArray:number; 
    taskName: any;
    completeTask: boolean = false;
    selectedTask: any;
    displayMessage: boolean = false;
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
                    name: task.name
                });
            });
            this.taskListData = taskArray;
            this.sizeTaskArray = taskArray.length;
            this.assignTask(this.taskListData[0].name);

        });
    }

    assignTask(task: any) {
        this.selectedTask = task;
    }

    addTask() {
        this.task = this.taskForm.value;
        this.taskService.addTask(this.task).subscribe((newTask: TaskListI) => {
            this.taskListData.push(newTask);
            this.taskForm.reset();
        }
        );
    }
    onCheckBoxChange(event: any) {
        event.target.checked ? this.completeTask = true : this.completeTask = false
    }

    deleteTask(idTask: number) {
        if (this.completeTask === true) {
            this.taskService.deleteTask(idTask).subscribe(() => {
                this.taskListData = this.taskListData.filter(task => task.id !== idTask);
                this.displayMessage = false;
            });
            this.completeTask = false;
        } else {
            this.displayMessage = true;
            this.taskListData.forEach((task: TaskListI) => {
                if (task.id === idTask) {
                    this.taskName = task.name;
                }
            }
            );
        }
    }
}