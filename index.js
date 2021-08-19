const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const InitHTML = require('./src/initHTML');
const engineerHTML = require ('./src/engineerHTML');
const internHTML = require ('./src/internHTML');
const finalHTML = require ('./src/finalHTML');


const teamMembers = [];
const teamHTML = [];

const addManager = () =>{
    return inquirer.prompt([
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
       const managerhtml = InitHTML(manager);
       teamHTML.push(managerhtml);
       console.log (managerhtml)
    });

};

const addEmployee = () =>{
    return inquirer.prompt([
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
            name: 'newEmployee',
          },

    ])
    .then( results => {

        let { employee , id , email, role, github, school, newEmployee } = results;

        if (role === "Engineer") {

            const engineer = new Engineer ( employee , id, email, github);
            const engineerhtml = engineerHTML(engineer);
            teamHTML.push(engineerhtml);
            teamMembers.push(engineer);
            console.log (engineerhtml);
            console.log (teamHTML)
        }
        if (role === "Intern") {

            const intern = new Intern ( employee , id, email, school);
            const internhtml = internHTML(intern);
            teamHTML.push(internhtml);
            teamMembers.push(intern);
         }
         if (newEmployee === "Yes"){
          return addEmployee();
      }

      else {
        
        console.log(teamMembers);
        console.log(typeof (teamMembers))

      
      }
        })
    }

const init = () => {    
addManager()
.then (addEmployee)
.then (() => {
  const final = finalHTML();
  teamHTML.push(final)
})
.then ((teamHTML)=> {

  console.log(teamHTML)
  const html = teamHTML.join();
  fs.writeFile("./dist/team.html", html , err => {

    if (err){
      console.log(err);
      return;
    }
    else {
      console.log("Your Team page has been created!")
    }
  })

})
.catch( (err) => console.log(err))};

init();
