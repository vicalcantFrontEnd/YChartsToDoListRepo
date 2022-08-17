    /**
 * @autor -  Victor Alcantara
 * Interface that defines the structure of a task list.
 * @interface TaskListI - TaskList interface..
 * @property {number} id - Id of the task list.
 * @property {string} title - Title of the task list.
 */
export interface TaskListI {
    /**
     * Id of the task list.
     * @type {number}
     */
    id:       number;  
    /**
     * Name of the task list.
     * @type {string}
     */
    name:     string; // Name of the task list.
}