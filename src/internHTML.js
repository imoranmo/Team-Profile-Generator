const internHTML = (results) => {

    const school = results.getSchool();

return `  <div class="col">  
<div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3 bg-dark bg-gradient">
        <h2 class="my-0 fw-normal text-white">${results.name}</h2> 
        <h4 class="my-0 fw-normal text-white"><strong>Intern</strong></h4> 
        <h2 class="my-0 fw-normal text-white"><strong><i class="far fa-user-circle"></i></strong> </h2>  
    </div>
    <ul class="list-unstyled mt-3 mb-4">
        <li><i class="far fa-id-card"></i> ID: ${results.id}</li>
        <li><i class="fas fa-envelope-square"></i> Email: <a href="mailto:${results.email}" class="link-dark">${results.email}</a></li>
        <li><i class="fas fa-graduation-cap"></i> School: ${school}</li>
    </ul>
    <div class="card-body">
        
    </div>
</div>
</div> `
}

module.exports = internHTML