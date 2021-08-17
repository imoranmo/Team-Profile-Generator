const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

function addManager (){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'name',
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
    .then (results => {
       let {name , id , email, office} = results;
       const manager = new Manager (name , id , email, office);
       teamMembers.push(manager);
       addEmployee();
    });

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
          {
            type: 'list',
            message: 'Would you like to add more employees?',
            choices: [
                "Yes",
                "No"
            ],
            name: 'addEmployee',
          },

    ])
    .then( results => {

        let { employee , id , email, role, github, school, addEmployee } = results;

        if (role === "Engineer") {

            const engineer = new Engineer ( employee , id, email, github);
            teamMembers.push(engineer);
        }
        if (role === "Intern") {

            const intern = new Intern ( employee , id, email, school);
            teamMembers.push(intern);
         }})

    .then ( function () {     
        if (addEmployee === "Yes"){
            return addEmployee();
        }
    })

    }

function init(){
    addManager();
}

init();