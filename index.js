
import inquirer from 'inquirer';

const firstActionQuestion = [
    {
      type: 'list',
      name: 'firstAction',
      message: 'What would you like to do',
      choices: ["Add Department", "Service", "Update Employee Role", "View All Roles", "Add Role", "View All Departments"]
    },
];

const addDepartmentQuestion = [
    {
      type: 'text',
      name: 'departmentName',
      message: 'What is the name of the department',
    },
];
const addRoleQuestions = [
    {
      type: 'text',
      name: 'roleName',
      message: 'What is the name of the role',
    },
    {
        type: 'text',
        name: 'roleSalary',
        message: 'What is the salary of the role',
    },
    {
        type: 'text',
        name: 'departmentName',
        message: 'What department does the role belong to?',
    },
];

function init() {
    inquirer
        .prompt(firstActionQuestion)
        .then((answer) => { 
            console.log(answer);
            if (answer.FirstAction === "Add Department") {
                console.log('addDepartmentQuestion');
            } else if (answer.FirstAction === "Add Role") { 
                console.log('addDepartmentQuestion'); 
            }
        }); 
}

init();