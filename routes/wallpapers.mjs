import { Router } from 'express';
import wallpapersData from '../data/wallpapers_data.js'; // Make sure to provide the correct path to your data

const router = Router();

// Pagination middleware
function paginatedResults(model) {
    return (req, res, next) => {
        if (!Array.isArray(model)) {
            console.error("Model is not an array:", model);
            return res.status(500).json({ message: "Internal Server Error: Model is not an array" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};

        if (endIndex < model.length) {
            results.next = page + 1;
        }

        if (startIndex > 0) {
            results.previousPage = page - 1;
        }

        results.results = model.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    };
}


// Search function
function searchWallpapers(query) {
    return wallpapersData.filter(wallpaper => 
        wallpaper.desc.toLowerCase().includes(query.toLowerCase())
    );
}

// Route for paginated wallpapers
router.get("/wallpapers", paginatedResults(wallpapersData), (req, res) => {
    res.json(res.paginatedResults);
});

// Route for search
router.get("/wallpapers/search", (req, res) => {
    const query = req.query.q;
    if (!query) return res.status(400).json({ message: "Query parameter 'q' is required" });
    
    const results = searchWallpapers(query);
    res.json({ results });
});

export default router;
