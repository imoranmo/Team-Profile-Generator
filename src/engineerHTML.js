const Engineer = require("../lib/Engineer");

const engineerHTML = (results) => {

const employee = results.getRole();
const github = results.getGithub();

if ( employee === 'Engineer'){
 
    let engineercode = `<div class="col">  
<div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3 bg-dark bg-gradient">
        <h2 class="my-0 fw-normal text-white">${results.name}</h2> 
        <h4 class="my-0 fw-normal text-white"><strong>Engineer</strong></h4>
        <h2 class="my-0 fw-normal text-white"><strong><i class="far fa-user-circle"></i></strong> </h2>   
    </div>
    <ul class="list-unstyled mt-3 mb-4">
        <li><i class="far fa-id-card"></i> ID:</li>
        <li> <i class="fas fa-envelope-square"></i> Email: <a href="mailto:${results.email}" class="link-dark">${results.email}</a></li>
        <li><i class="fab fa-github"></i> Github: <a href="https://github.com/${github}" class="link-dark">${github}</a> </li>
    </ul>
    <div class="card-body">
        
    </div>
</div>
</div>`;

return engineercode}
}

module.exports = engineerHTML