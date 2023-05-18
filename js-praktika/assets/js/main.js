
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

// axios.get('http://api.disneyapi.dev/character').then(resp => {
//         var list=resp.data.data;
//         list.forEach(el => {
//             row.innerHTML += ` <div class="col-3"> <div class="card">
//         <img src="${el.imageUrl}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${el.name}</h5>
//           <a href="#" class="btn btn-primary">Details</a></div></div></div> `
//         });
//     });



let row = document.querySelector(".row")

fetch('http://api.disneyapi.dev/character')
    .then(res => res.json())
    .then(json =>{
        console.log(json)
        json.data.forEach(el => {
            row.innerHTML += ` <div class="col-3"> <div class="card">
        <img src="${el.imageUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <a href="${el.sourceUrl}" class="btn btn-primary">Details</a></div></div></div> `
        })
    }
        
    )
