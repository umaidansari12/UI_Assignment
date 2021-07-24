const submitbtn = document.querySelector('#save').addEventListener('click',add);
const cancelbtn = document.querySelector('#cancel').addEventListener('click',remove);

function add(e){
    var title = document.querySelector('#title').value;
    var tags = document.querySelector('#tags').value;
    const myul = document.querySelector(".my-ul");
    if(title=="" || tags==""){
        alert("Cannot Enter Blank!");
    }else{
        e.preventDefault();
        const li = document.createElement("li");
        li.innerHTML = `<h3>${title}</h3><h5>${tags}</h5>`;
        myul.appendChild(li);
        document.querySelector('#title').value = '';
        document.querySelector('#tags').value = '';
    }
    
}

function remove(e){
    document.getElementById('title').value = '';
    document.getElementById('tags').value = '';
}