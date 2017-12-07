import axios from 'axios'

let getTrailsUrl = 'https://www.hikingproject.com/data/get-trails?lat=40.2249632&lon=-109.5423575&maxDistance=30&key=200180338-4bfdf77c160c65d3febdb97a06ebd6c9&maxResults=30';

/**
 * get trails from service and filter by difficulty level, and resolve data via promise
 * @param difficultyLevelsFilter
 * @param cb
 */

//Promise function .then
export const getTrails = (difficultyLevelsFilter) => {
    return new Promise((resolve, reject) => {
        axios.get(getTrailsUrl).then(({data}) => {
            data.trails = data.trails.filter(trail => {
                return difficultyLevelsFilter.indexOf(trail.difficulty) > -1
            })
            resolve(data.trails)
        }).catch(err => {
            reject(err)
        })
    })
}