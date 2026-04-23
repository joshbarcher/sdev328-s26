
export const printName = (req, res) => {
    console.log(req.params);
    const { fname, lname, nickname } = req.params;

    res.status(200).json({ 
        message: `Hello ${fname} ${lname} (${nickname})` 
    });
}

export const printAge = (req, res) => {
    const { age } = req.params;

    res.status(200).json({
        message: `You are ${age} yrs old!`
    });
}