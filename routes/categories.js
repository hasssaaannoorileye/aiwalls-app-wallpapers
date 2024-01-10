const express = require('express')
const router = express.Router()

const categories = [

]

router.get("/allcategories", (req, res) => {
    res.json(wallpapers)
})
   
router.get("/categories", paginatedResults(categories), (req, res) => {
    res.json(res.paginatedResults)
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