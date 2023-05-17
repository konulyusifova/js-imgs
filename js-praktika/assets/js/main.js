let row = document.querySelector(".row")

// axios.get('http://api.disneyapi.dev/character?page=2&pageSize=12').then(resp => {

//     for (let i = 0; i < resp.data.data.length; i++) {       
//         console.log(resp.data.data[i])
//         row.innerHTML += ` <div class="col-3"> <div class="card">
//         <img src="${resp.data.data[i].imageUrl}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${resp.data.data[i].name}</h5>
//           <a href="#" class="btn btn-primary">Details</a></div></div></div> `  
//     }
// });

var nextpage = 'http://api.disneyapi.dev/character?page=1&pageSize=12';
getDatas(nextpage)
function getDatas(url) {
    axios.get(url).then(resp => {
        var list = resp.data.data;
        nextpage = resp.data.data.nextPage;
        row.innerHTML='';
        list.forEach(el => {
            row.innerHTML += ` <div class="col-3"> <div class="card">
        <img src="${el.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <a href="#" class="btn btn-primary">Details</a></div></div></div> `
        });
    });
    nextpage=resp.data.data.nextPage
}

document.querySelector('button').addEventListener('click', function () {
    getDatas(nextpage)
})