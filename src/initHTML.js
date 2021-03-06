
const initHTML = (results) => {

    const employee = results.getRole();

    if ( employee === 'Manager') {

 return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    <title>Team</title>
</head>
<body>
 
 <div class ="container-fluid py-5 bg-dark bg-gradient">
     <h1 class ="display-5 fw-bold text-white text-center"> MY TEAM <i class="fas fa-address-book"></i></h1>
 </div>  
 <div class="container py-4 px-5">
 <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
  <div class="col">  
  <div class="card mb-4 rounded-3 shadow-sm ">
      <div class="card-header py-3 bg-dark bg-gradient">
        <h2 class="my-0 fw-normal text-white">${results.name}</h2> 
          <h4 class="my-0 fw-normal text-white"><strong>Manager</strong></h4> 
          <h2 class="my-0 fw-normal text-white"><strong><i class="fas fa-user-circle"></i> </strong> </h2>
      </div>
      <ul class="list-unstyled mt-3 mb-4">
          <li><i class="far fa-id-card"></i> ID: ${results.id}</li>
          <li><i class="fas fa-envelope-square"></i> Email: <a href="mailto:${results.email}" class="link-dark">${results.email}</a></li>
          <li><i class="fas fa-briefcase"></i> Office number: ${results.officenumber}</li>
      </ul>
      <div class="card-body">
          
      </div>
  </div>
</div> `}
}

module.exports = initHTML