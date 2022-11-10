import './style.css'

const randomDog = document.querySelector('#randomDog');
const randomCat = document.querySelector('#randomCat');
const surprise = document.querySelector('#surprise');
const background = document.querySelector('#petImageBackground');


const getRandomDog = () => {
    const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random'

    fetch(DOG_API_URL).then( (response) => response.json())
        .then( ({ message }) => {
            background.src = message;
            background.style.display = 'block';
    }).catch( (error) => {
        alert(error.message);
    })
        

    }

randomDog.addEventListener('click', getRandomDog);
    
const getRandomCat = () => {
    const CAT_API_URL = 'https://aws.random.cat/meow';
    
    fetch(CAT_API_URL).then( (resposne) => resposne.json())
    .then( ({ file }) => {
            background.src = file;
            background.style.display = 'block';
        })
    .catch( (error) => {
        alert(error.message);
    })
}

randomCat.addEventListener('click', getRandomCat)
    
surprise.addEventListener('click', () => {
    Promise.any([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://aws.random.cat/meow')
    ]).then((response) => response.json())
        .then( (data) => {
            if(Object.keys(data).includes('message')){
                background.src = data.message;
                background.style.display = 'block';
            } else {
                background.src = data.file;
                background.style.display = 'block';
            }
        })
})