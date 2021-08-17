const fs = require('fs');
const inquirer = require('inquirer');

function addManager (){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'manager',
          },
          {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
          },
          {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
          },
          
    ])
    .then ({manager , id, email, office})

};

function addEmployee(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employees name?',
            name: 'employee',
          },
          {
            type: 'input',
            message: 'What is the employees ID number?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'What is the employees email address?',
            name: 'email',
          },
          {
            type: 'list',
            message: 'What is the employees role?',
            choices: [
                "Engineer",
                "Intern"
            ],
            name: 'role',
          },
          {
            type: 'input',
            message: 'What is the employees github name?',
            name: 'github',
            when: (input) => input.role === "Engineer",
          },
          {
            type: 'input',
            message: 'What is the employees school name?',
            name: 'school',
            when: (input) => input.role === "Intern",
          },

    ])
}