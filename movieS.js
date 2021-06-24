let cont = document.getElementById('subCont')
var movie;


async function fetching() {
    let res = await fetch(`http://www.omdbapi.com/?apikey=11beb49c&t=${movie}`);
    var response = await res.json();

    console.log(response)
    dispCont(response);
}



function searchM() {
    
    
    movie = document.getElementById('place').value;
    console.log(movie)
    fetching();
}

function dispCont(response) {

    cont.innerText = null;
    
    cont.classList.add('border')
    let image = document.createElement('img');
    image.src = response.Poster;

    let div = document.createElement('div');

    let disc = document.createElement('p');
    disc.innerText = response.Plot;

    let year = document.createElement('p');
    year.innerText = `Released :- ${response.Year}`;

    let director = document.createElement('p')
    director.innerText = ` Directed By:- ${response.Director}`;

    let ratings = document.createElement('p');
    ratings.innerText = response.Ratings[0].Value;
        
    let title = document.createElement('h2')
    title.innerText = response.Title;

    div.append(title,disc,year,director, ratings)

    cont.append(image,div)
}