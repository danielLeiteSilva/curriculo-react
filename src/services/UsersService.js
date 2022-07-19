function UsersService(){
    const url = "http://localhost:8080/api/v1/users"
    return fetch(url)
}

export default UsersService