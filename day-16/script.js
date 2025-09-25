let email = document.getElementById('email');
let password = document.getElementById('password');
let display = document.querySelector('#tbldata tbody');

let users = [];
let editId = null; // global edit id

email.focus()
const userData = () => {

     let user = {
            id: Date.now(),
            email: email.value,
            password: password.value
        };
        users.push(user);
    if (editId == null) {
        users.push({...user , id :date>now()})
    }
    else{
        users=users.map((user) =>{
            if(user.id == editId){
                user = {...user , ...user}    
            }
            return user;
        })
    }
    editId=null;
   

    displayData();
    email.value = "";
    password.value = "";
};

const displayData = () => {
    display.innerHTML = '';
    users.forEach((user, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
                <button class="btn btn-warning" onclick="editUser(${user.id})">Edit</button>
            </td>
        `;
        display.appendChild(row);
    });
};

const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    displayData();
};

const editUser = (id) => {
    const userToEdit = users.find(user => user.id === id);
    if (userToEdit) {
        email.value = userToEdit.email;
        password.value = userToEdit.password;
        editId = id;
    }
}; 