let users = []

function cadastraUser() {

    let nome = document.getElementById("nome").value 
    let email = document.getElementById("email").value 

    if (nome == "" || email == ""){
        alert("Preencha os campos vazios!")
    }else {

    users.push({nome: nome, email: email})

    document.getElementById("nome").value  =  ""
    document.getElementById("email").value  = ""
    showUsers()
}
    
}

function showUsers() {

    document.getElementById("listaUser").textContent = ""

    for (i=0; i < users.length; i++) {

        let itemUser = document.createElement("li")
        let nomeUser = document.createElement("p")
        nomeUser.classList.add("nomeUser")
        nomeUser.textContent = users[i].nome
        let emailUser = document.createElement("p")
        emailUser.textContent = "E-mail: " + users[i].email 

        itemUser.appendChild(nomeUser)
        itemUser.appendChild(emailUser)
        document.getElementById("listaUser").appendChild(itemUser)
       

    }
}

function search() {

    for (i=0; i < users.length; i++) {

        document.getElementById("listaUser").textContent = ""
        let inputSearch = document.getElementById("search").value
        let searchUser = users.filter(user => user.nome.toLowerCase().includes(inputSearch.toLowerCase()))
       

    searchUser.forEach(i => {
    
    let itemUser = document.createElement("li")
    let nomeUser = document.createElement("p")
    nomeUser.classList.add("nomeUser")
    nomeUser.textContent = i.nome
    let emailUser = document.createElement("p")
    emailUser.textContent = "E-mail: " + i.email

    itemUser.appendChild(nomeUser)
    itemUser.appendChild(emailUser)
    document.getElementById("listaUser").appendChild(itemUser)
        });

    }

}

function limpo() {

    let campo = document.getElementById("search").value 

    if (campo === "") {
        showUsers()
    } else {
        search()
    }
}