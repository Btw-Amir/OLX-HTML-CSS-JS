function login(){
    const allInputs = document.getElementsByTagName('input')
    const email = allInputs[0] 
    const password = allInputs[1] 
    const data = JSON.parse(localStorage.getItem('user'))
    let ddd = false
   for(var i =0;i<data.length;i++){

    if(data[i].password == password.value && data[i].email == email.value){
       ddd  = true; 
        window.location.href='./src/sign-up/sign-up.html'
    }else{
        ddd =false

    }
   }
 if(ddd){
    alert("loginsuccessfull")
 }else{
    alert("fail")
 }
}
function linkHome(){
   window.location.href='../../OLX/main-olx/index.html'
   
}