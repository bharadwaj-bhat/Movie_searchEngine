let cont = document.getElementById('subCont')
var movie;


async function fetching() {

    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=11beb49c&t=${movie}`);
        var response = await res.json();

        console.log(response)
        dispCont(response);
    }
    catch (e) {
        console.log(e);
        console.log('eoorooeo')
        cont.innerHTML = `  <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/aYpmlCXgX9dc09dbpl" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
                 <p id = 'oopss'> OOPS! Search not found </p > `
        
    }
}



function searchM() {
    
    
    movie = document.getElementById('place').value;
    console.log(movie)
    fetching();
}

function dispCont(response) {

    cont.innerHTML = null;
    
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

    var imdb = Number(response.Ratings[0].Value.slice(0, 3))
    console.log(imdb)
     
    if (imdb > 8.5) {
        let div2 = document.createElement('div')
        
        
        div2.innerHTML = ` <i class="fas fa-check-circle"></i> <p id = 'recom'> Recommended </p> <h2> ${response.Title}</h2>`

        div.append(div2, disc, year, director, ratings)
    }
    else {

        let title = document.createElement('h2')
        title.innerText = response.Title;
        div.append(title, disc, year, director, ratings)

    }

    cont.append(image,div)
}