
let apiKey = `c3b0098c88ef946671443a4e96078041`

let id
async function getData(){
    // let query = document.querySelector("#search").value

    // let url = `https://www.omdbapi.com/?s=${query}&apikey=a3757b0`
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`

    let res = await fetch(url)
    let data = await res.json()

    console.log(data)
    append(data.results)
}
getData()

function append(data){
    let container  = document.querySelector("#container")
    // container.innerHTML = null

    // console.log(data)
    data.forEach(function(elem){
        let box = document.createElement("div")

        let name = document.createElement("p")
        name.innerText = elem.name || elem.title
        name.setAttribute('class', 'name')

        let overview = document.createElement("p")
        overview.innerText = elem.overview
    
        box.append(name, overview)
        container.append(box)
    })
}

// function movieAppend(el){
//     console.log(el)
//     let container = document.querySelector("#movieDiv")

//     container.innerHTML = null
    
//     let poster = document.createElement("img")
//     poster.src = el.Poster
//     poster.setAttribute("class", 'poster')

//     let text = document.createElement("div")
//     text.setAttribute('class', 'box')

//     let released = document.createElement("p")
//     released.innerText = `Released: ${el.Year}`
//     released.setAttribute("class", 'date')

//     let name = document.createElement("p")
//     name.innerText = el.Title
//     name.setAttribute("class", 'name')


//     text.append(released, name)
//     container.append(poster,text)
// }



// async function main(){
//     let data = await getData()

//     // console.log(data)
//     append(data)
// }

// function debouncing(func, delay){
//     if(id){
//         clearTimeout(id)
//     }

//     id = setTimeout(function(delay){
//         func()
//     }, delay)
// }