const api = `https://dummyapi.online/api/movies`;
let array = [];
fetch(api)
.then((data) => data.json())
// .then((data)=>console.log("data is sinside promise",data))
.then((data)=>{
    const tablebody = document.querySelector("tbody");
    data.forEach(element => {
        array.concat(element);
        addraw(tablebody, element);
    });
})
.catch((err)=>console.log(err))
.finally(()=>console.log("Every function are executed"));

function addraw(tablebody, data){
    const row = document.createElement('tr');
    row.innerHTML += `
    <tr>
    <td>${data.id}</td>
    <td>${data.movie}</td>
    <td>${data.rating}</td>
    <td><img src = "${data.imdb_url} alt = "this is image"></td>
    <td><button onclick = >Edit</button></td>
    </tr>`;
    tablebody.appendChild(row);
}
