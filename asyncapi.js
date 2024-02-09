const api = `https://dummyapi.online/api/movies`;
const array = [];
console.log(array);
document.addEventListener("DOMContentLoaded", async()=>{
    const tablebody = document.querySelector("tbody");
    const searchinput = document.getElementById("search");
    const response = await fetch(api);
    const data = await response.json();
    data.forEach(element => {
        array.push(element);
        addraw(tablebody, element)   
    });
    searchinput.addEventListener("input",()=>{
        const searchterm = searchinput.value.toLowerCase().trim();
        const filtereddata = filterdata(array,searchterm);
        console.log("filtere data is ",filtereddata);
        showtable(filtereddata);
    })
})

function filterdata(data, searchItem){
    return data.filter(item=>item.movie.toLowerCase().includes(searchItem));
}

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

function sort(field) {   
    array.sort((a, b) => {
        switch (field) {
            case 'movie':
                return a.movie.localeCompare(b.movie);
            
            case 'rating':
                return -(a.rating - b.rating);

            
            case 'id':
                return a.id - b.id;

            default:
                return -1;
        }
    });
    showtable(array);
    console.log(array);
}


function showtable(data){
    const tablebody = document.querySelector("tbody");
    if(tablebody){
        tablebody.innerHTML = "";
    }
    data.forEach((data)=>{
        addraw(tablebody, data);
    });
}