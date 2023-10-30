function signup(){
    var allInputs = document.getElementsByTagName('input')
    var userName = allInputs[0]
    var email = allInputs[1]
    var pasword = allInputs[2]
    var confirmPassword = allInputs[3]
    if(userName.value =="" ||email.value =="" ||password.value== "" || confirmPassword.value == ""){
        alert('Please fill all the inputs')
        return
    }
    if (pasword.value.length < 8 ){
        alert('enter the password of 8 characters')
        return
    }
    if (pasword.value != confirmPassword.value){
        alert('Password is not matched ')
        return
    }
    
}