const getUsername = document.querySelector("#username");
const getPassword = document.querySelector("#password");
const getForm = document.querySelector("form");

//buat user dan password
const USER = [
    {
        name: "man@gmail.com",
        password: "123",
    },
];

//lakukan perulangan untuk ambi data dari database
USERS.forEach((user) => {
    console.log(user);
    
});

// testing console.log('user')
console.log(USERS);

getForm.addEventListener("submit", (event) => {
//agar ketika user klik login tidak terload browsernya
    event.preventDefault();
// testing ambil dari input username
    alert(getUsername.value);
});

//lakukan percabangan perulangan
USERS.forEach((user) => {
    //percabangan
    if(getUsername.value == user.name && getPassword.value == user.password){
        alert("Oke berhasil login");
    }else{
        alert("Invalid Credentials")
    }
 });


