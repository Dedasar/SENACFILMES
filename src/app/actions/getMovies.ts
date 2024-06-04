"use server"

export async function getMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGMxODNjZGFjNTIwOGJjZTZmY2M4NGEwYzQ5ODM0OCIsInN1YiI6IjY2NGJkNWY2ODBhNzE4OTg0ODk4NjUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pFoCujroWmq72zKrE-9SfR0piQ71R1vSKJGXrol-Vk8'
        }
    };

    const resp = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-br', options);
    if (resp.ok) {
        const json = await resp.json();
        return json.results;
    } else {
        throw new Error('Erro ao buscar filmes');
    }
}
