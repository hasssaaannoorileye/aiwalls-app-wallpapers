const express = require('express')
const router = express.Router()
const cors = require('cors')
const wallpapers = require('../data/wallpapersData'); // Import wallpapers data


router.get("/allwallpapers", (req, res) => {
    res.json(wallpapers)
})
   
router.get("/wallpapers", paginatedResults(wallpapers), (req, res) => {
    res.json(res.paginatedResults)
});

router.get('search/', paginatedResults(wallpapers), (req, res) => {
     res.json(wallpapers.filter(search(query)))
});


function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}

        if (endIndex < model.length) {
            results.next = page + 1
        }
        
        if (startIndex > 0) {
            results.previousPage = page - 1
        }

        try {
            results.results = model.slice(startIndex, endIndex)//await model.find().limit(limit).skip(endIndex).exec()
            res.paginatedResults = results
            next()
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

module.exports = router
