function signup(){
    var allInputs = document.getElementsByTagName('input')
    var userName = allInputs[0]
    var email = allInputs[1]
    var password = allInputs[2]
    var confirmPassword = allInputs[3]
    if(userName.value =="" ||email.value =="" ||password.value== "" || confirmPassword.value == ""){
        alert('Please fill all the inputs')
    }
    else{
        if (password.value.length < 8 ){
            alert('enter the password of 8 characters')
        }else if (password.value != confirmPassword.value){
            alert('Password is not matched ')
        }else{
            
        }
    }
   
    
}