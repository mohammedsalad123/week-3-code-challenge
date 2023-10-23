let films = []
document.addEventListener("DOMContentLoaded",()=>{
    getflims ()
})
function getflims (){
    fetch("http://localhost:3000/films")
    .then (res =>res.json())
    
    .then (data=>{
        films = [...data]
        dispalyFlims (films)
        
    })
    
}


function dispalyFlims (films){
    const filmcontainer = document.querySelector("#film")



    films.forEach(film=> {
        filmcontainer.innerHTML += `
<div class="p-2 m-1 col-3">
    <div class="card"id="card" >
         <div class="card-body" >
         <img src="${film.poster}" class="card-img-top" alt="${film.description}">
         <h5 class="card-title">${film.title}</h5>
             <span>
             <ul>
                <li>Runtime:${film.runtime}</li>
               
                <li>Showtime:${film.showtime}</li>
                
              <li>Available Ticket:${film.capacity-film.tickets_sold}</li>

               

               
                
                
             </ul>
             
             
             </span>
             <button id= "btn" >Buy Ticket:</button>

         </div>
    </div>
          
    </div>`
    const button = document.querySelector("#btn")
    button.addEventListener("click",()=>{
        if(film.capacity>film.tickets_sold){
            film.tickets_sold++
            dispalyFlims(films)
        }
    })
        // const card = document.querySelector("#card")
        // const button =document.createElement("button")
        // button.className="btn btn-primary"
        // button.textContent="buy ticket"
        // card.appendChild(button)
   
})





 }   
// function handleticket (films){
//     const ticket = films.capacity-films.tickets_sold
//     if (ticket>0){

//     }else{

//     }

// }


// function buttonDisplay (){
//     const filmcontainer = document.querySelector("#film")
//     for (film of films){
//         filmcontainer.innerHTML += `
//     <div class = "p-2 m-1 col-3">
//     <div class="card">
//         <img src="${film.poster}" class="card-img-top" alt="${film.description}">
//          <div class="card-body">
//          <h5 class="card-title">${film.title}</h5>
//              <span>
//              <ul>
//                 <li>Runtime:${film.runtime}</li>
//                 <li>Capacity:${film.capacity}</li>
//                 <li>Showtime:${film.showtime}</li>
//                 <li>Ticketsold:${film.tickets_sold}</li>
//               <li>Available Ticket:${film.capacity-film.tickets_sold}</li>

                
                
//              </ul>
             
             
//              </span>

//              <div>
            
            
            
        
            

//          </div>
//     </div>`
         
//         }
//         const button = document.querySelector("#dropdownMenu2")
//         button.addEventListener("click",dispalyFlims ())


//     }




function movieList (films){
    const movielist = document.querySelector("#dropdownMenu2")
    films.forEach(films=>{
        movielist.innerHTML +=`<h5 class="card-title">${film.title}</h5>`
    })
}



  

