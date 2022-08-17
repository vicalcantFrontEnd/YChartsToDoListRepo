import { Component } from '@angular/core';
import { TaskListI } from 'src/interfaces/taskList.interface';
import { TaskService } from 'src/services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Component that handles the tasks.
 * @author - Victor Alcantara
 * @class - AppComponent - Component that handles the tasks.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
/**
 * class to handle the tasks.
 * @class - AppComponent - Component that handles the tasks.
 */
export class AppComponent {
    /**
     * taskForm { FormGroup } - Form that will be used to add a new task.
     */
    taskForm: FormGroup;
    /**
     * task { string} - Task to be added.
     */
    task: string;
    /**
     * sizeTaskArray { number } - Size to array used for validations.
     */
    sizeTaskArray: number;
    /**
     * taskName { string } - Name of the task to be deleted.
     */
    taskName: string;
    /**
     * completeTask { boolean } - Boolean that will be used to check if the task is completed.
     */
    completeTask: boolean = false;
    /**
     * displayMessage { boolean } - Boolean that will be used to check if the message will be displayed.
     */
    displayMessage: boolean = false;
    /**
     * missingMessage { boolean } - Boolean that will be used to check if the message will be displayed.
     */
    missingMessage: boolean = false;
    /**
     * taskListData { TaskListI[] } - Array that will be used to display the tasks.
     */
    taskListData: TaskListI[] = [];

    /**
     * Constructor of the class.
     * @constructor - AppComponent - Component that handles the tasks.
     * @param taskService - TaskService service.
     * @param formBuilder - FormBuilder service.
     */
    constructor(private readonly taskService: TaskService,
        private formBuilder: FormBuilder) {
        this.taskForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    /**
     * OnInit function that will be triggered when the component is initialized.
     */
    ngOnInit() {
        this.getTaskList();
    }

    /**
     * this function will return all the tasks listed on the json db.json file.
     * @memberof AppComponent
     * @method getTaskList
     */
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
        });
    }


    /**
     * this function will posted a new task on the json db.json file, and will return the new task list.
     */
    addTask() {
        if (this.taskForm.valid) {
            this.task = this.taskForm.value;
            this.taskService.addTask(this.task).subscribe((newTask: TaskListI) => {
                this.taskListData.push(newTask);
                this.taskForm.reset();
            });
            this.missingMessage = false;
        } else {
            this.missingMessage = true;
        }

    }

    /**
     * this function assign the task to complete to true.
     * @param event - Event that will be triggered when the checkbox is checked.
     */
    onCheckBoxChange(event: any) {
        event.target.checked ? this.completeTask = true : this.completeTask = false
    }

    /**
     * this function will delete a task on the json db.json file, and will return the new task list.
     * @param idTask - Id of the task to be deleted.
     */
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