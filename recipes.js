$(document).ready(function () {
    $('#searchButton').on('click', function () {
        const searchResults = document.querySelector('.searchResults');
        searchResults.innerHTML = "";
        $.ajax({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${$('#searchValue').val()}&apiKey=939298d11944417487967a60ba791bf5`
        }).done(function (data) {
            data.results.forEach(recipe => {

                const newItem = document.createElement('div');
                newItem.classList.add('recipe');
                newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
                searchResults.appendChild(newItem);
            });
        });
    });
});
