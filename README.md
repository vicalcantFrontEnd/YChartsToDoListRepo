# YCharts Coding Challenge
For this coding challenge, you will be implementing a to-do list application using Angular and TypeScript. 


# Installation / Getting Started
1. Install Node.js and npm from `https://nodejs.org/en/download/`. It is recommended to have Node.js 12+ and npm 6.14.x
2. Enter the directory: `cd ycharts_app_interview`
3. Install Node.js packages: `npm install`
4. Run the backend and Angular servers:
       macOS: `npm run start-mac`
       Windows: `npm run start-windows`
5. Visit `http://localhost:4200/` and you should be all set to get started coding! Please note that this setup does
   not work for Internet Explorer.
6. If you have any trouble getting our provided configuration up and running please do not hesitate to reach out.

# Backend Server
We've provided a simple backend server, powered by `json-server`. You can find the official documentation at 
`https://github.com/typicode/json-server`. `json-server` uses the `db.json` file as a database, which currently contains 
example data about cars. Try accessing the example data by visiting `localhost:3000/cars` or `localhost:3000/cars/2`.

Since the Angular dev server runs on port 4200, we also set up a `proxy.conf.json` file that diverts any urls beginning
with `/api` to the backend server running on port 3000. To see this in action, try visiting `localhost:4200/api/cars`.

You will be responsible for creating a JSON schema that suits the to-do list project. In your project submission,
please initialize `db.json` with data that demonstrates the schema you have implemented.


# Materials Provided
We have already provided you with many of the materials you will need to get up and running:
 * A development server. See the above steps for instructions how to run it. The app will automatically reload 
    if you change any of the source files.
 * Skeleton HTML, which you can find at `https://ycharts-interview.netlify.app/`. Please inspect element to get an 
    exact copy of the HTML.
 * SCSS, found in `src/styles.scss`. No changes need to be made to this file
 * A basic top level Angular component


# Expected Functionality
Your responsibility is to make this app functional with the following features:
  1. You should be able to add a new task to the to-do list by typing into the bottom bar, and clicking the blue + 
     button. The new task should appear at the bottom of the to-do list, and it should be unchecked. 
     Empty or white space input should not be accepted.
  2. You should be able to click the box on the left to check and uncheck each task.
  3. If a task is checked, you should be able to delete it from the list by clicking its `X` button on the right.
  4. If a task is unchecked, attempting to delete it from the list should result in an error. 
     See the example HTML for an example of an error message that should be displayed.
  5. The error message should remain displayed until any other action is completed
     (i.e. adding a new item, checking or unchecking an item, or deleting an item).
  6. On page load, the state stored in the backend should be used to initialize the page. Any changes to the state
     should update the backend accordingly. The exception to this is error messages, which should not be stored in 
     the backend.


# Other Notes
 * Please make sure to document your code using docstrings and comments.
 * Please state any assumptions you are making in the `SOLUTION.md` file.
 * Please feel free to install any additional packages. Just add a note in `SOLUTION.md` explaining why!
 * Unless otherwise specified in the `SOLUTION.md` file, we will be following the steps in the 
     `Installation / Getting Started` section to run your project.

# How to Submit
 * Please email a ZIP file containing the contents of this directory to the hiring manager who reached out to you.
