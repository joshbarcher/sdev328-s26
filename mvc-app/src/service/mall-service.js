import { data, appName } from '../model/data.js';

export const getMallById = (id) => data.find(el => el.id === id);

export const getMalls = () => {
    //just select the fields I want to return
    const records = data.map(el => {
        return {
            id: el.id,
            name: el.name,
            sqft: el.squareFeet,
            numStores: el.numberOfStores
        }
    })

    return records;
}
