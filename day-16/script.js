let email = document.getElementById('email')
let password = document.getElementById('password')
let display = document.getElementById('tbldata tbody')

let users = []

const userData = ()  =>{
    let user = {
        email : email.value,
        password : password.value 
    }
    users.push(user)
    displayData()
}

const displayData = () => {
    display.innerHTML= ""
    users.forEach((user , index)=>{
        let row = document.createElement('tr')
        row.innerText = `
              <td>${index+1}</td>
              <td>${user.email}</td>
              <td>${user.password}</td>
        
        `
    })
    console.
}