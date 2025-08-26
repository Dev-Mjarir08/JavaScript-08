let user = {
    name:"Jarir",
    password:"jarir@123",
}
if(user.name == "Jarir"){
    if(user.password == "jarir@123"){
        console.log("Login Successfully");   
    }
    else{
        console.log("Invalid password")
    }
}
else{
    console.log("User not Found");
}