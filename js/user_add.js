 var submitUser = document.querySelector('#submiter')



 const saveUser = async() => {

     let response = await fetch('http://localhost:8080/users/getUsers')
     console.log(response);
 }


 submitUser.addEventListener('click', saveUser);