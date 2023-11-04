
const users = JSON.parse(localStorage.getItem('user'))||[]
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
        }
        else if (password.value != confirmPassword.value){
            alert('Password is not matched ')
        }
    else{
        const user = {
            userName : userName.value,
            email: email.value,
            password: password.value
           }
        users.push(user)
        localStorage.setItem('user', JSON.stringify(users))
        alert("regestered successfully")

        const modal = document.getElementById('exampleModal')
        
    }
    }
}
function linkHome(){
    signup()
    window.location.href='../../OLX/main-olx/index.html'
    
}
// --------------local storage:----------------
// local storage is limited to a device
// local storgae. setitem() for addition of data
// local storgae.getitem() for deletion of data
// it doesnot support the object 
// JSON.stringify() use to conver obj or array to string
// .parse() use to convert string to obj 
