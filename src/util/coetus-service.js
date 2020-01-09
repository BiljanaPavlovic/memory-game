const BASEURL = 'https://coetus.herokuapp.com'
const API = '/api/gamer'
const MEMORYCARDS = '/memory/cards'
const USERS = '/users'
const SCORES = '/scores'

function getMemoryCards(){
    return fetch(`${BASEURL}${API}${MEMORYCARDS}`)
            .then(res => res.json())
}

function login(user){
    let res = fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}

function register(user){
    return fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(user)
    }).then(res => res.json())
}

function getScores(){
    return fetch(`${BASEURL}${API}${SCORES}`)
        .then(res => res.json())
}

function getUsername(id){
    return fetch(`${BASEURL}${API}${USERS}/${id}`)
            .then(res => res.json())
}

function addScore(score){
    return fetch(`${BASEURL}${API}${SCORES}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(score)
    }).then(res => res.json())
}

function calculateScore(time){
    let score = 1000 / time;
    return score
}

export {
    getMemoryCards,
    login,register,
    getScores,
    getUsername,
    addScore,
    calculateScore
}

