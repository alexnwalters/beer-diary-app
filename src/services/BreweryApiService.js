import config from '../config'

const BreweryDbApiService = {
    getBeers(query) {
        return fetch(`${config.BREWERY_ENDPOINT}/search?q=${query}&type=beer&withBreweries=y`, {
            method: 'GET',
            headers: {
                'Authorization': `${config.BREWERY_KEY}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default BreweryDbApiService