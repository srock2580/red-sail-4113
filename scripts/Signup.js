
const next=() => {

    const createData =() => {

        let email = form.email.value;
      
    
        let data = {
    
         email,
            
        }
        console.log("data",data)
    
        localStorage.setItem('userdata',JSON.stringify(data));
      
        // window.location.href ='Contect_page.html'
    }
    
    

}