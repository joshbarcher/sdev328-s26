import { getMalls, getMallById, getLocations } from '../service/mall-service.js';

export const allMalls = (req, res) => {
    const malls = getMalls();

    res.status(200).json(malls);
}

export const mallById = (req, res) => {
    const id = Number(req.query.id);
    console.log(`received query value: ${id}`);
    const mallFound = getMallById(id);

    if (mallFound) {
        res.status(200).json(mallFound);
    } else {
        res.status(404).json({
            message: `Mall not found with id ${id}`
        })
    }
}

export const mallLocations = (req, res) => {
    const locs = getLocations();
    res.status(200);
    res.json(locs);
}