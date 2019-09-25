import config from '../config'
import TokenServices from './TokenService'

const BeerDiaryApiService = {
    postBeer(beer) {
        return fetch(`${config.API_ENDPOINT}/beers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            },
            body: JSON.stringify(beer),
    })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    postReview(userReview) {
        return fetch(`${config.API_ENDPOINT}/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            },
            body: JSON.stringify(userReview),
    })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getUserDiary() {
        return fetch(`${config.API_ENDPOINT}/reviews/user`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            },
    })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    deleteReview(review_id, callback) {
        return fetch(`${config.API_ENDPOINT}/reviews/${review_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            },
    })
        .then(data => {
            callback(review_id)
        })
        .catch(error => {
            console.error(error)
        })
    },
    updateReview(newReview, review_id) {
        return fetch(`${config.API_ENDPOINT}/reviews/${review_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            },
            body: JSON.stringify(newReview),
    })
        .then(res =>{
            if(!res.ok) {
                throw new Error(res.status)
            }
        })
    },
    getReview(review_id) {
        return fetch(`${config.API_ENDPOINT}/reviews/${review_id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            },
    })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getOtherUserReviews(beer_id) {
        return fetch(`${config.API_ENDPOINT}/reviews/beers/${beer_id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            },
    })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
}

export default BeerDiaryApiService