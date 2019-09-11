import config from '../config'

const BreweryDbApiService = {
    getBeers(query) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/${config.BREWERY_ENDPOINT}/search?key=${config.BREWERY_KEY}&q=${query}&type=beer&withBreweries=y`, {
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                if(!res.data) {
                    throw new Error("No Results Found")
                }
                return res.data 
            })
    },
}

export default BreweryDbApiService