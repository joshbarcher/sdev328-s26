import { allMonuments } from '../services/monuments.service.js';

export const getMons = (req, res) => {
    const monArray = allMonuments();
    return res.status(200).json(monArray);
}