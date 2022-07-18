function StarWarsService(){
    const url = "https://swapi.dev/api/people"
    return fetch(url)
}

export default StarWarsService