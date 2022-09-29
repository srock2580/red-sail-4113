

const createData =() => {
    let form = document.querySelector('form');
    let fname = form.firstname.value;
    let lname =form.lastName.value;
    let pswd = form.password.value;

    let data = {

        fname,
        lname,
        pswd,
        
    }
    console.log("data",data)

    localStorage.setItem('userdata',JSON.stringify(data));
  
    // window.location.href ='Contect_page.html'
}




