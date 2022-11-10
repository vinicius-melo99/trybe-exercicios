const button = document.querySelector('button');

const addRandomImage = (data) => {
    const randomId = Math.floor(Math.random() * 567) + 1;

    document.getElementById('heroImage').src = data[randomId].images.lg;
    document.querySelector('p').innerHTML = data[randomId].name;
}

button.addEventListener('click', () => {
   fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then( (response) => response.json())
        .then( (data) => addRandomImage(data))
        .catch( (error) => console.log(error.message)); 
});


