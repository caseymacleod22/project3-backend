const Stadium = require('../models/stadium')


async function index(req, res) {

    try {
        const stadiums = await Stadium.find({})
        res.status(200).json(stadiums) 
    }  catch (error) {
        console.log(error)
        res.status(400).json({error: 'something went wrong'})
    }
}

async function create(req, res) {
    try {
      const stadiums = await Stadium.create(req.body)
       res.status(201).json(stadiums)
        // index(req, res)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}

async function deleteStadium(req, res) {
    res.json(await Stadium.findByIdAndRemove(req.params.id))
    // res.send('/')
}


module.exports = {
    index,
    create,
    delete: deleteStadium,
}