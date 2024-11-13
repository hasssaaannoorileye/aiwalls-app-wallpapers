const express = require("express");
const router = express.Router();
const wallpapers = require("../data/wallpapers_data"); // Load wallpapers as an array

router.get("/allwallpapers", (req, res) => {
    res.json(wallpapers);
});

router.get("/wallpapers", paginatedResults(wallpapers), (req, res) => {
    res.json(res.paginatedResults);
});

router.get("/wallpapers/search", (req, res) => {
    const query = req.query.q;
    if (!query) return res.status(400).json({ message: "Query parameter 'q' is required" });

    const results = wallpapers.filter(wallpaper => 
        wallpaper.desc.toLowerCase().includes(query.toLowerCase())
    );
    res.json({ results });
});

function paginatedResults(model) {
    return (req, res, next) => {
        if (!Array.isArray(model)) {
            return res.status(500).json({ message: "Model is not an array" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = {};

        if (endIndex < model.length) results.next = page + 1;
        if (startIndex > 0) results.previous = page - 1;

        results.results = model.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    };
}

module.exports = router;
