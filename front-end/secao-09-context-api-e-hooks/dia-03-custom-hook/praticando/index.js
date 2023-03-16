

const fetchApi = () => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

fetchApi();