const express = require('express')
const router = express.Router()

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


const wallpapers = [
    {
        "thumb": "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/trees-on-a-dark-forest-1671325/",
        "tags": "Dark Forest Dark-Forest nature jungle"
    },
    {
        "thumb": "https://images.pexels.com/photos/14304725/pexels-photo-14304725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/14304725/pexels-photo-14304725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-trees-near-river-14304725/",
        "tags": "Forest Trees Jungle Nature"
    },
    {
        "thumb": "https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/photography-of-waterfalls-between-trees-788200/",
        "tags": "Forest jungle nature trees water waterfall"
    },
    {
        "thumb": "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/scenic-view-of-mountain-1666021/",
        "tags": "Forest jungle nature water lake mountain"
    },
    {
        "thumb": "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=600",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/scenic-view-of-forest-from-car-1261731/",
        "tags": "forest nature green dark"
    },
    {
        "thumb": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&w=600",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-leafed-plant-1784577/",
        "tags": "Nature green forest jungle trees"
    },
    {
        "thumb": "https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/tall-brown-trees-1995730/",
        "tags": "Nature green forest jungle trees down"
    },
    {
        "thumb": "https://images.pexels.com/photos/6485071/pexels-photo-6485071.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/6485071/pexels-photo-6485071.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-lush-leaves-on-trees-6485071/",
        "tags": "Nature green forest trees"
    },
    {
        "thumb": "https://images.pexels.com/photos/9588839/pexels-photo-9588839.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/9588839/pexels-photo-9588839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/a-low-angle-shot-of-trees-with-green-leaves-9588839/",
        "tags": "Nature Forest trees leaves"
    },
    {
        "thumb": "https://images.pexels.com/photos/1787426/pexels-photo-1787426.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/1787426/pexels-photo-1787426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-leaf-plant-in-brown-pot-1787426/",
        "tags": "Nature forest dark green road"
    },
    {
        "thumb": "https://images.pexels.com/photos/2973031/pexels-photo-2973031.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/2973031/pexels-photo-2973031.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/forest-during-day-2973031/",
        "tags": "Nature green leaf forest trees"
    },
    {
        "thumb": "https://images.pexels.com/photos/3389538/pexels-photo-3389538.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/3389538/pexels-photo-3389538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-and-brown-trees-on-mountain-3389538/",
        "tags": "Forest trees jungle autumn"
    },
    {
        "thumb": "https://images.pexels.com/photos/1765729/pexels-photo-1765729.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/1765729/pexels-photo-1765729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/dirt-road-between-trees-1765729/",
        "tags": "Nature Forest dark"
    },
    {
        "thumb": "https://images.pexels.com/photos/1697489/pexels-photo-1697489.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/1697489/pexels-photo-1697489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/photo-of-pathway-in-forest-1697489/",
        "tags": "Green nature forest Leaves"
    },
    {
        "thumb": "https://images.pexels.com/photos/6272155/pexels-photo-6272155.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/6272155/pexels-photo-6272155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/lush-pine-trees-glowing-in-woods-6272155/",
        "tags": "Forest nature"
    },
    {
        "thumb": "https://cdn.pixabay.com/photo/2022/09/07/14/56/ferns-7438928_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2022/09/07/14/56/ferns-7438928_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/ferns-foliage-plants-forest-macro-7438928/",
        "tags": "ferns foliage plants"
    },
    {
     "thumb": "https://cdn.pixabay.com/photo/2020/01/25/12/46/cabin-4792470_1280.jpg",
      "full": "https://cdn.pixabay.com/photo/2020/01/25/12/46/cabin-4792470_1280.jpg",
       "lic": "pixabay",
       "pg": "https://pixabay.com/photos/cabin-house-trees-lake-rural-4792470/",
       "tags": "Cabin House Trees lake"
    },
    {
        "thumb": "https://cdn.pixabay.com/photo/2019/10/17/06/52/glass-ball-4556170_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2019/10/17/06/52/glass-ball-4556170_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/glass-ball-forest-nature-reflection-4556170/",
        "tags": "Glass ball Forest Nature "
    },
    {
        "thumb": "https://cdn.pixabay.com/photo/2019/07/19/04/19/trees-4347932_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2019/07/19/04/19/trees-4347932_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/trees-lake-paddle-kayak-canoe-4347932/",
        "tags": "Trees Lake Paddle image"
    },
    {
        "thumb": "https://cdn.pixabay.com/photo/2015/05/14/22/14/elsach-767590_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2015/05/14/22/14/elsach-767590_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/elsach-bach-moss-nature-767590/",
        "tags": "Elsach Bach Moss image"
    },
    {
        "thumb": "https://cdn.pixabay.com/photo/2013/02/27/14/49/swamp-86611_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2013/02/27/14/49/swamp-86611_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/swamp-trees-sunset-silhouette-86611/",
        "tags": "Swamp Trees Sunset"
    },
    {
        "thumb": "https://w0.peakpx.com/wallpaper/801/796/HD-wallpaper-nature-forest-trees.jpg",
        "full": "https://w0.peakpx.com/wallpaper/801/796/HD-wallpaper-nature-forest-trees.jpg",
        "lic": "peakpx",
        "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-kxjct",
        "tags": "Nature forest trees HD wallpaper"
    },
    {
        "thumb": "https://w0.peakpx.com/wallpaper/230/93/HD-wallpaper-blue-river-forest-landscape-nature-rocks-trees-water-yellow-leaves.jpg",
        "full": "https://w0.peakpx.com/wallpaper/230/93/HD-wallpaper-blue-river-forest-landscape-nature-rocks-trees-water-yellow-leaves.jpg",
        "lic": "peakpx",
        "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-fwgfw",
        "tags": "Blue-river forest landscape nature rocks trees water yellow-leaves HD wallpaper"
    },
    {
        "thumb": "https://w0.peakpx.com/wallpaper/997/485/HD-wallpaper-nature-view-forest-lake-new-nice.jpg",
        "full": "https://w0.peakpx.com/wallpaper/997/485/HD-wallpaper-nature-view-forest-lake-new-nice.jpg",
        "lic": "peakpx",
        "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-nvebv",
        "tags": "Nature-view forest lake river landscape HD wallpaper"
    },
    {
        "thumb": "https://w0.peakpx.com/wallpaper/617/810/HD-wallpaper-road-in-the-rainy-forest-trees-nature-jungle.jpg",
        "full": "https://w0.peakpx.com/wallpaper/617/810/HD-wallpaper-road-in-the-rainy-forest-trees-nature-jungle.jpg",
        "lic": "peakpx",
        "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-kpzxn",
        "tags": "trees nature jungle HD-wallpaper"
    },
    {
        "thumb": "https://w0.peakpx.com/wallpaper/974/894/HD-wallpaper-rainy-forest-forest-green-nature-new-rain-road.jpg",
        "full": "https://w0.peakpx.com/wallpaper/974/894/HD-wallpaper-rainy-forest-forest-green-nature-new-rain-road.jpg",
        "lic": "peakpx",
        "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-pxntv",
        "tags": "Rainy-Forest forest green nature new rain road HD-wallpaper"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1429198739803-7db875882052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1429198739803-7db875882052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/SPd9CSoWCkY",
        "tags": "Nature forest autumn trees leaves"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1538580619159-6c19131e1062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1538580619159-6c19131e1062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1538580619159-6c19131e1062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/rN3m7aTH3io",
        "tags": "Autumn Leaf Maple-Leaf "
    },
    {
        "thumb": "https://images.unsplash.com/photo-1508490385390-2b0baa98f428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1508490385390-2b0baa98f428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/KAukBWGvPWQ",
        "tags": "Nature Autumn forest leaves"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1574962960264-d2aff47bdbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw4ODU5NjcwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1574962960264-d2aff47bdbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/QtuoMO1FiQo",
        "tags": "Nature forest autumn leaves"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1445503061048-e03cd48b1f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1445503061048-e03cd48b1f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/OyQ1iCTwLMY",
        "tags": "Autumn leaves nature"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1444910828267-0e498d90e406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1444910828267-0e498d90e406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/ko30VIRDbGQ",
        "tags": "Leaves yellow-leaf nature autumn"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1445998559126-132150395033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1445998559126-132150395033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/AtDUYurMJIU",
        "tags": "Forest nature autumn leaves lake water trees"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1477160842278-0609ba502d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1477160842278-0609ba502d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/x1UDiq1LQMw",
        "tags": "Nature relax Autumn"
    },
     {
        "thumb": "https://images.unsplash.com/photo-1582568424975-1b50058458de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1582568424975-1b50058458de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/42-Y3M51tJE",
        "tags": "Autumn leaves mood nature"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1665933141713-7fb2cde7e8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1665933141713-7fb2cde7e8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/A2rI9jXnpMc",
        "tags": "Autumn chair leaves"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1627324213643-0875f8005490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1627324213643-0875f8005490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/VV3aywihPCo",
        "tags": "Tree autumn leaves nature"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1604395902307-b77230007cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1604395902307-b77230007cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/SfWNnBR15cQ",
        "tags": "Autumn leaves trees nature"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1604395924777-061c7319f90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1604395924777-061c7319f90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/1sSiaQSpgFc",
        "tags": "Leaves autumn house nature"
    },
    {
        "thumb": "https://images.unsplash.com/photo-1505063308224-3f7ac7cee660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "full": "https://images.unsplash.com/photo-1505063308224-3f7ac7cee660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
        "lic": "unsplash",
        "pg": "https://unsplash.com/photos/B3mFxDDzUx8",
        "tags": "Mountain nature autumn trees forest"
    },
    {
        "thumb": "https://images.pexels.com/photos/10573527/pexels-photo-10573527.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/10573527/pexels-photo-10573527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/close-up-of-dried-leaves-with-water-droplets-10573527/",
        "tags": "Autumn nature leaf"
    },
    {
        "thumb": "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/photo-of-a-pathway-in-a-forest-1496373/",
        "tags": "Nature autumn forest leaves"
    },
     {
        "thumb": "https://images.pexels.com/photos/10719940/pexels-photo-10719940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/10719940/pexels-photo-10719940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/dried-leaves-in-a-puddle-10719940/",
        "tags": "Autumn leaves nature water lake"
    },
    {
        "thumb": "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/red-trees-1547813/",
        "tags": "Autumn trees nature"
    },
    {
        "thumb": "https://images.pexels.com/photos/3130385/pexels-photo-3130385.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/3130385/pexels-photo-3130385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/maple-leaves-on-water-3130385/",
        "tags": "Lake autumn water nature"
    },
    {
        "thumb": "https://images.pexels.com/photos/1846608/pexels-photo-1846608.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/1846608/pexels-photo-1846608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/fallen-trees-on-forest-1846608/",
        "tags": "Autumn nature forest trees"
    },
    {
        "thumb": "https://images.pexels.com/photos/3086784/pexels-photo-3086784.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/3086784/pexels-photo-3086784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/pathway-between-trees-and-plants-3086784/",
        "tags": "Autumn Fall-Leaves leaves nature"
    },
    {
        "thumb": "https://images.pexels.com/photos/3086782/pexels-photo-3086782.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/3086782/pexels-photo-3086782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/empty-pathway-3086782/",
        "tags": "Autumn nature wood trees"
    },
    {
        "thumb": "https://images.pexels.com/photos/9858991/pexels-photo-9858991.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/9858991/pexels-photo-9858991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/autumn-trees-at-the-park-9858991/",
        "tags": "Autumn nature trees river street"
    },
    {
        "thumb": "https://images.pexels.com/photos/1846608/pexels-photo-1846608.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/1846608/pexels-photo-1846608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/fallen-trees-on-forest-1846608/",
        "tags": "Autumn forest jungle river leaves"
    },
    {
        "thumb": "https://e1.pxfuel.com/desktop-wallpaper/380/395/desktop-wallpaper-sunset-tree-lake-landscape-autumn.jpg",
        "full": "https://e1.pxfuel.com/desktop-wallpaper/380/395/desktop-wallpaper-sunset-tree-lake-landscape-autumn.jpg",
        "lic": "pxfuel",
        "pg": "https://www.pxfuel.com/en/desktop-wallpaper-fiefa",
        "tags": "Sunset tree lake landscape autumn HD-wallpaper"
    },
    {
        "thumb": "https://e0.pxfuel.com/wallpapers/182/1011/desktop-wallpaper-cities-trees-autumn-cars-city-street.jpg",
        "full": "https://e0.pxfuel.com/wallpapers/182/1011/desktop-wallpaper-cities-trees-autumn-cars-city-street.jpg",
        "lic": "pxfuel",
        "pg": "https://www.pxfuel.com/en/desktop-wallpaper-ogntd",
        "tags": "Trees Autumn Car City Street HD-wallpaper"
    },
    {
        "thumb": "https://e0.pxfuel.com/wallpapers/603/321/desktop-wallpaper-nature-autumn-leaves-blur-smooth-branches.jpg",
        "full": "https://e0.pxfuel.com/wallpapers/603/321/desktop-wallpaper-nature-autumn-leaves-blur-smooth-branches.jpg",
        "lic": "pxfuel",
        "pg": "https://www.pxfuel.com/en/desktop-wallpaper-omfid",
        "tags": "Nature Autumn Leaves Blur Smooth Branches HD-wallpaper"
    },
    {
        "thumb": "https://e1.pxfuel.com/desktop-wallpaper/747/87/desktop-wallpaper-autumn-lake-forest-nature-autumn-lake-iphone.jpg",
        "full": "https://e1.pxfuel.com/desktop-wallpaper/747/87/desktop-wallpaper-autumn-lake-forest-nature-autumn-lake-iphone.jpg",
        "lic": "pxfuel",
        "pg": "https://www.pxfuel.com/en/desktop-wallpaper-kcqzo",
        "tags": "Autumn lake forest Nature HD-wallpaper"
    },
    {
        "thumb": "https://images.pexels.com/photos/11029006/pexels-photo-11029006.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/11029006/pexels-photo-11029006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-leaves-with-water-droplets-11029006/",
        "tags": "After Rain Fresh Green Leaves Plants Raindrops Water Droplets Water Drops Wet"
      },
      {
        "thumb": "https://images.pexels.com/photos/13759530/pexels-photo-13759530.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/13759530/pexels-photo-13759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/water-droplets-on-green-leaves-13759530/",
        "tags": "Drop green rain water wet leaf"
      },
      {
        "thumb": "https://images.pexels.com/photos/12255262/pexels-photo-12255262.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/12255262/pexels-photo-12255262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/water-droplets-on-a-green-plant-12255262/",
        "tags": "leaf green drop rain wet water plant"
      },
      {
        "thumb": "https://images.pexels.com/photos/9767759/pexels-photo-9767759.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/9767759/pexels-photo-9767759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-leaves-with-water-droplets-9767759/",
        "tags": "Drop rain water green leaf nature"
      },
      {
        "thumb": "https://images.pexels.com/photos/11974270/pexels-photo-11974270.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/11974270/pexels-photo-11974270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/water-droplets-on-green-leaves-11974270/",
        "tags": "green nature drop leaf plant"
      },
      {
        "thumb": "https://images.pexels.com/photos/2137388/pexels-photo-2137388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/2137388/pexels-photo-2137388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/close-up-photo-of-leaves-with-droplets-2137388/",
        "tags": "green nature leaf drop water"
      },
      {
        "thumb": "https://images.pexels.com/photos/6765808/pexels-photo-6765808.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/6765808/pexels-photo-6765808.jpeg?auto=compress&cs=tinysrgb&w=600",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/blossoming-red-rose-with-dew-on-tender-petals-6765808/",
        "tags": "flower nature drop rose"
      },
      {
        "thumb": "https://images.pexels.com/photos/6765813/pexels-photo-6765813.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/6765813/pexels-photo-6765813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/blooming-red-rose-with-pleasant-aroma-and-dew-6765813/",
        "tags": "rose flower drop"
      },
      {
        "thumb": "https://images.pexels.com/photos/4497991/pexels-photo-4497991.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/4497991/pexels-photo-4497991.jpeg?auto=compress&cs=tinysrgb&w=600",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/green-fresh-leave-with-clean-water-drops-4497991/",
        "tags": "nature drop green leaf"
      },
      {
        "thumb": "https://images.pexels.com/photos/4114968/pexels-photo-4114968.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/4114968/pexels-photo-4114968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/droplets-on-surface-of-window-4114968/",
        "tags": "drop water wet glass"
      },
      {
        "thumb": "https://images.pexels.com/photos/4188700/pexels-photo-4188700.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/4188700/pexels-photo-4188700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/dynamic-splash-on-blue-water-with-ripples-4188700/",
        "tags": "Drop water blur"
      },
      {
        "thumb": "https://images.pexels.com/photos/4251895/pexels-photo-4251895.jpeg?auto=compress&cs=tinysrgb&w=600",
        "full": "https://images.pexels.com/photos/4251895/pexels-photo-4251895.jpeg?auto=compress&cs=tinysrgb&w=600",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/background-of-tropical-taupata-shrub-with-droplets-on-leaves-4251895/",
        "tags": "nature rain green drop leave"
      },
      {
        "thumb": "https://images.pexels.com/photos/5003708/pexels-photo-5003708.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "full": "https://images.pexels.com/photos/5003708/pexels-photo-5003708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "lic": "pexels",
        "pg": "https://www.pexels.com/photo/water-drop-on-green-leaf-in-garden-5003708/",
        "tags": "Drop rain water nature leaf"
      },
      {
        "thumb": "https://cdn.pixabay.com/photo/2015/10/22/17/45/leaf-1001679_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2015/10/22/17/45/leaf-1001679_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/leaf-green-foliage-green-leaves-1001679/",
        "tags": "Beautiful nature Hd-wallpaper Nature-wallpaper"
      },
      {
        "thumb": "https://cdn.pixabay.com/photo/2015/10/24/11/09/drop-1004250_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2015/10/24/11/09/drop-1004250_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/drop-splash-impact-ripples-water-1004250/",
        "tags": "Drop Splash Impact"
      },
      {
        "thumb": "https://cdn.pixabay.com/photo/2016/10/22/03/35/drop-1759703_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2016/10/22/03/35/drop-1759703_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/drop-splash-impact-ripples-water-1759703/",
        "tags": "Drop Splash Impact "
      },
      {
        "thumb": "https://cdn.pixabay.com/photo/2017/11/29/18/54/leaf-2986837_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2017/11/29/18/54/leaf-2986837_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/leaf-droplets-reflection-grass-2986837/",
        "tags": "Drop Leaf Droplets Reflection"
      },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/01/06/02/29/ai-generated-7700293_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/01/06/02/29/ai-generated-7700293_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/ai-generated-tulips-flowers-7700293/",
         "tags": "Ai-generated Tulips Flowers"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/nature-tulip-flora-flower-summer-3263198/",
         "tags": "Nature Tulip Flora"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/05/02/21/32/tulip-7966187_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/05/02/21/32/tulip-7966187_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/tulip-flower-petals-springtime-7966187/",
         "tags": "Tulip Flower Petals"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2019/01/08/09/01/red-3920682_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2019/01/08/09/01/red-3920682_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/red-red-rose-love-romantic-roses-3920682/",
         "tags": "Red Red-flower rose flower Love"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2019/01/08/09/01/rose-3920679__480.jpg",
        "full": "https://cdn.pixabay.com/photo/2019/01/08/09/01/rose-3920679_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/rose-valentine-s-valentine-s-day-3920679/",
         "tags": "Flower Red Rose Valentine's-image"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2019/01/08/08/58/rose-3920658__480.jpg",
        "full": "https://cdn.pixabay.com/photo/2019/01/08/08/58/rose-3920658_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/rose-rose-petals-red-rose-romantic-3920658/",
         "tags": "Rose Rose-petals Red-rose"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2018/03/01/17/49/tulip-3191257__480.jpg",
        "full": "https://cdn.pixabay.com/photo/2018/03/01/17/49/tulip-3191257_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/tulip-nature-plant-flower-color-3191257/",
         "tags": "Tulip Nature Plant "
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/01/17/00/12/ai-generated-7723526_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/01/17/00/12/ai-generated-7723526_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/ai-generated-tulip-flower-red-tulip-7723526/",
         "tags": "Happy-mothers-day Ai-generated Tulip-image"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/05/02/11/49/tulips-7965058_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/05/02/11/49/tulips-7965058_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/tulips-flower-early-bloomer-spring-7965058/",
         "tags": "Tulips Flower Early-bloomer"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/04/23/14/43/tulips-7945859__480.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/04/23/14/43/tulips-7945859_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/tulips-season-flower-spring-7945859/",
         "tags": "Tulips Season Flower-image"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/04/27/23/41/ai-generated-7955548__480.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/04/27/23/41/ai-generated-7955547_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/illustrations/ai-generated-flower-petals-blossom-7955548/",
         "tags": "Ai-generated Flower Petals"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2013/09/03/19/05/rose-178682_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2013/09/03/19/05/rose-178682_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/rose-flower-petals-orange-rose-178682/",
         "tags": "Rose Flower Petals"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2018/07/08/14/19/marigold-3524000_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2018/07/08/14/19/marigold-3524000_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/marigold-flower-blossom-bloom-3524000/",
         "tags": "Marigold Flower Blossom"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/lotus-flower-bloom-blossom-978659/",
         "tags": "Lotus, Flower, Bloom"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2014/06/11/11/39/tulips-366661_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2014/06/11/11/39/tulips-366661_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/tulips-flowers-field-bloom-blossom-366661/",
         "tags": "Tulips Flowers Field"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2021/09/13/08/13/dahlia-6620610_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2021/09/13/08/13/dahlia-6620610_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/dahlia-purple-dahlia-purple-flower-6620610/",
         "tags": "Dahlia Purple-dahlia Purple flower"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2013/10/18/09/15/flower-197343_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2013/10/18/09/15/flower-197343_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/flower-dahlia-garden-pink-flower-197343/",
         "tags": "Flower Dahlia Garden"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2021/09/13/08/13/dahlia-6620610_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2021/09/13/08/13/dahlia-6620610_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/dahlia-purple-dahlia-purple-flower-6620610/",
         "tags": "Dahlia Purple-dahlia Purple-flower"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2020/02/28/06/38/tulips-4886604_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2020/02/28/06/38/tulips-4886604_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/tulips-flowers-petal-color-spring-4886604/",
         "tags": "Tulips Flowers Petal "
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2019/11/17/17/50/flower-4632987_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2019/11/17/17/50/flower-4632987_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/flower-lotus-botany-growth-nature-4632987/",
         "tags": "Flower Lotus Botany"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2020/12/18/05/56/flowers-5841251_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2020/12/18/05/56/flowers-5841251_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/flowers-petals-stem-flora-plant-5841251/",
         "tags": "Flowers Petals Stem"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2021/05/18/15/00/macro-6263605__480.jpg",
        "full": "https://cdn.pixabay.com/photo/2021/05/18/15/00/macro-6263605_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/macro-flora-flower-nature-plant-6263605/",
         "tags": "Macro Flora Flower"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2020/12/24/03/33/rose-5856406__480.jpg",
        "full": "https://cdn.pixabay.com/photo/2020/12/24/03/33/rose-5856406_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/rose-bud-flower-plant-flora-5856406/",
         "tags": "Rose Bud Flower"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2020/06/30/14/50/red-5356634_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2020/06/30/14/50/red-5356634_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/red-flower-love-bloom-garden-5356634/",
         "tags": "Red Flower Love"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2017/09/03/14/32/flower-2710504_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2017/09/03/14/32/flower-2710504_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/flower-blossom-bloom-sunflower-2710504/",
         "tags": "Flower Blossom Bloom"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2018/09/21/22/08/sunflower-3694132_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2018/09/21/22/08/sunflower-3694132_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/sunflower-petals-yellow-bright-3694132/",
         "tags": "Sunflower Petals Yellow flower"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/04/27/23/41/ai-generated-7955547_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/04/27/23/41/ai-generated-7955547_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/ai-generated-flowers-tulips-blossom-7955547/",
         "tags": "Ai-generated Flowers"
        },
      {
        "thumb": "https://cdn.pixabay.com/photo/2023/05/02/11/49/tulips-7965058_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2023/05/02/11/49/tulips-7965058_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/tulips-flower-early-bloomer-spring-7965058/",
         "tags": "Tulips Flower Early bloomer image."
        },
        {
        "thumb": "https://cdn.pixabay.com/photo/2013/06/29/06/24/lotus-142028_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2013/06/29/06/24/lotus-142028_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/lotus-flower-plant-petals-142028/",
         "tags": "Lotus Flower Plant image"
        },
        {
        "thumb": "https://cdn.pixabay.com/photo/2013/12/29/00/51/flower-234952_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2013/12/29/00/51/flower-234952_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/flower-plant-tender-fine-blossom-234952/",
         "tags": "Flower Plant Tender image"
        },
        {
        "thumb": "https://cdn.pixabay.com/photo/2018/07/08/14/19/marigold-3524000_1280.jpg",
        "full": "https://cdn.pixabay.com/photo/2018/07/08/14/19/marigold-3524000_1280.jpg",
        "lic": "pixabay",
        "pg": "https://pixabay.com/photos/marigold-flower-blossom-bloom-3524000/",
         "tags": "Marigold Flower Blossom image"
        },
        {
            "thumb": "https://w0.peakpx.com/wallpaper/981/865/HD-wallpaper-leaves-macro-green-plant.jpg",
             "full": "https://w0.peakpx.com/wallpaper/981/865/HD-wallpaper-leaves-macro-green-plant.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-oprgu",
             "tags": "leaves macro green plant HD-wallpaper"
            },
             {
            "thumb": "https://w0.peakpx.com/wallpaper/52/62/HD-wallpaper-mint-green-leaves-texture-plant-textures-leaves-green-backgrounds-leaves-texture-green-leaves-green-leaf-macro-leaf-pattern-leaf-textures.jpg",
             "full": "https://w0.peakpx.com/wallpaper/52/62/HD-wallpaper-mint-green-leaves-texture-plant-textures-leaves-green-backgrounds-leaves-texture-green-leaves-green-leaf-macro-leaf-pattern-leaf-textures.jpg",
             "lic":"Peakpx",
             "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-krhpl",
             "tags": "mint green-leaves-texture plant-textures leaves green-backgrounds leaves-texture green-leaves green-eaf macro leaf-pattern leaf-textures HD-wallpaper"
            },
             {
                "thumb": "https://w0.peakpx.com/wallpaper/866/877/HD-wallpaper-nature-butterfly-leaf-leaves-neon.jpg",
                "full": "https://w0.peakpx.com/wallpaper/866/877/HD-wallpaper-nature-butterfly-leaf-leaves-neon.jpg",
                "lic":"Peakpx",
                "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-vxznv",
                "tags": "Nature butterfly leaf leaves neon HD-wallpaper"
            },
            {
                "thumb": "https://w0.peakpx.com/wallpaper/530/807/HD-wallpaper-cinematic-colors-dark-leaves-light-nature-neon.jpg",
                "full":"https://w0.peakpx.com/wallpaper/530/807/HD-wallpaper-cinematic-colors-dark-leaves-light-nature-neon.jpg",
                "lic":"Peakpx",
                "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-nkjoh",
                "tags": "Cinematic colors dark-leaves light nature neon HD-wallpaper"
            },
            {
                "thumb": "https://w0.peakpx.com/wallpaper/308/876/HD-wallpaper-nature-green-kerala-land-paddy-field-sunset.jpg",
                "full":"https://w0.peakpx.com/wallpaper/308/876/HD-wallpaper-nature-green-kerala-land-paddy-field-sunset.jpg",
                "lic":"Peakpx",
                "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-konzr",
                "tags": "Nature green kerala land paddy-field sunset HD-wallpaper"
            },
            {
                "thumb": "https://e0.pxfuel.com/wallpapers/781/241/desktop-wallpaper-nature-beautiful-natural-nature.jpg",
                "full":"https://e0.pxfuel.com/wallpapers/781/241/desktop-wallpaper-nature-beautiful-natural-nature.jpg",
                "lic":"pxfuel",
                "pg":"https://www.pxfuel.com/en/desktop-wallpaper-olthu",
                "tags": "Nature Beautiful Natural Nature HD-wallpaper"
            },
            {
                "thumb": "https://e0.pxfuel.com/wallpapers/191/224/desktop-wallpaper-computer-background-nature-beauty-41.jpg",
                "full":"https://e0.pxfuel.com/wallpapers/191/224/desktop-wallpaper-computer-background-nature-beauty-41.jpg",
                "lic":"pxfuel",
                "pg":"https://www.pxfuel.com/en/desktop-wallpaper-tsafr",
                "tags": "Computer background nature beauty HD-wallpaper"
            },
            {
                "thumb": "https://cdn.pixabay.com/photo/2015/06/25/14/13/fern-821293_1280.jpg",
                "full":"https://cdn.pixabay.com/photo/2015/06/25/14/13/fern-821293_1280.jpg",
                "lic":"pixabay",
                "pg":"https://pixabay.com/photos/fern-leaves-foliage-green-nature-821293/",
                "tags": "Fern Leaves Foliage-image"
            },
            {
                "thumb": "https://e0.pxfuel.com/wallpapers/331/765/desktop-wallpaper-flowers-drops-freshness-sharpness-exotic-exotics-plumeria.jpg",
                "full":"https://e0.pxfuel.com/wallpapers/331/765/desktop-wallpaper-flowers-drops-freshness-sharpness-exotic-exotics-plumeria.jpg",
                "lic":"pxfuel",
                "pg":"https://www.pxfuel.com/en/desktop-wallpaper-obcbf",
                "tags": "Flowers Drops Freshness Sharpness Exotic Exotics HD-wallpaper"
            },
            {
                "thumb": "https://e0.pxfuel.com/wallpapers/231/3/desktop-wallpaper-green-leaves-rain-drops-close-up.jpg",
                "full":"https://e0.pxfuel.com/wallpapers/231/3/desktop-wallpaper-green-leaves-rain-drops-close-up.jpg",
                "lic":"Peakpx",
                "pg":"https://www.pxfuel.com/en/desktop-wallpaper-oajno",
                "tags": "Green leaves rain-drops HD-wallpaper"
            },
            {
                "thumb": "https://e0.pxfuel.com/wallpapers/395/876/desktop-wallpaper-leaves-macro-blur-smooth-close-up.jpg",
                "full":"https://e0.pxfuel.com/wallpapers/395/876/desktop-wallpaper-leaves-macro-blur-smooth-close-up.jpg",
                "lic":"Peakpx",
                "pg":"https://www.pxfuel.com/en/desktop-wallpaper-ognrr",
                "tags": "Leaves Macro Blur Smooth HD-wallpaper"
            },
            {
             "thumb": "https://w0.peakpx.com/wallpaper/771/197/HD-wallpaper-leaves-plant-green-veins-macro-thumbnail.jpg",
             "full":"https://w0.peakpx.com/wallpaper/771/197/HD-wallpaper-leaves-plant-green-veins-macro.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-owmge",
             "tags": "leaves plant veins macro green leaf Nature wallpaper"
           },
            {
             "thumb": "https://e0.pxfuel.com/wallpapers/901/254/desktop-wallpaper-nature-cell-phone-mobile-nature-android.jpg",
             "full":"https://e0.pxfuel.com/wallpapers/901/254/desktop-wallpaper-nature-cell-phone-mobile-nature-android.jpg",
             "lic":"Pxfuel",
             "pg":"https://www.pxfuel.com/en/desktop-wallpaper-opgvr",
             "tags": "plant Cell-Phone green Mobile Nature wallpaper"
           },
              {
             "thumb": "https://e0.pxfuel.com/wallpapers/412/168/desktop-wallpaper-beautiful-flowers-roses-nature-background.jpg",
             "full":"https://e0.pxfuel.com/wallpapers/412/168/desktop-wallpaper-beautiful-flowers-roses-nature-background.jpg",
             "lic":"Pxfuel",
             "pg":"https://www.pxfuel.com/en/desktop-wallpaper-olasi",
             "tags": "Beautiful Flowers Roses Nature"
           },
            
            {
             "thumb": "https://w0.peakpx.com/wallpaper/203/1010/HD-wallpaper-forest-flora-forest-vithurshan-dark-europe-faded-green-leaf-mood-moody-sri-lanka-vithurshan-jpeg-wood.jpg",
             "full":"https://w0.peakpx.com/wallpaper/203/1010/HD-wallpaper-forest-flora-forest-vithurshan-dark-europe-faded-green-leaf-mood-moody-sri-lanka-vithurshan-jpeg-wood.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-asuuz",
             "tags": "dark green leaf Nature wallpaper"
           },
            {
             "thumb": "https://w0.peakpx.com/wallpaper/12/315/HD-wallpaper-four-leaf-clover-green.jpg",
             "full":"https://w0.peakpx.com/wallpaper/12/315/HD-wallpaper-four-leaf-clover-green.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-oetmi",
             "tags": "Leaf green Clover Nature wallpaper"
           },
            {
             "thumb": "https://w0.peakpx.com/wallpaper/176/142/HD-wallpaper-neon-design-green-leaves-leaves-nature-neon-lights.jpg",
             "full":"https://w0.peakpx.com/wallpaper/176/142/HD-wallpaper-neon-design-green-leaves-leaves-nature-neon-lights.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-aegha",
             "tags": "Neon green leaves Nature wallpaper"
           },
            {
             "thumb": "https://w0.peakpx.com/wallpaper/222/149/HD-wallpaper-nature-plants-ferns-macro-green-leaves.jpg",
             "full":"https://w0.peakpx.com/wallpaper/222/149/HD-wallpaper-nature-plants-ferns-macro-green-leaves.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-nnvwm",
             "tags": "green plants macro Nature wallpaper"
           },
            {
             "thumb": "https://w0.peakpx.com/wallpaper/694/196/HD-wallpaper-green-leaves-close-up-plants-nature.jpg",
             "full":"https://w0.peakpx.com/wallpaper/694/196/HD-wallpaper-green-leaves-close-up-plants-nature.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-aktah",
             "tags": "green leaves plants Nature wallpaper"
           },
            
            {
             "thumb": "https://w0.peakpx.com/wallpaper/179/537/HD-wallpaper-rose-drops-flower.jpg",
             "full":"https://w0.peakpx.com/wallpaper/179/537/HD-wallpaper-rose-drops-flower.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-aikhk",
             "tags": "Rose Drop Flower Nature wallpaper"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/360/76/HD-wallpaper-water-drop-water-drop-nature-leaf-bokeh.jpg",
             "full":"https://w0.peakpx.com/wallpaper/360/76/HD-wallpaper-water-drop-water-drop-nature-leaf-bokeh.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-kpmsz",
             "tags": "Water Drop nature leaf bokeh wallpaper"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/945/410/HD-wallpaper-leaf-water-drops-leaves-water-drops.jpg",
             "full":"https://w0.peakpx.com/wallpaper/945/410/HD-wallpaper-leaf-water-drops-leaves-water-drops.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-vgeoq",
             "tags": "Leaf water-drops leaves-wallpaper"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/172/106/HD-wallpaper-water-drop-on-leaves-nature.jpg",
             "full":"https://w0.peakpx.com/wallpaper/172/106/HD-wallpaper-water-drop-on-leaves-nature.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-givkv",
             "tags": "wallpaper Water Drop Leaves nature"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/966/828/HD-wallpaper-graphy-water-drop-graphy-water-drop-thumbnail.jpg",
             "full":"https://w0.peakpx.com/wallpaper/966/828/HD-wallpaper-graphy-water-drop-graphy-water-drop.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-kpiwc",
             "tags": "nature drop water wallpaper"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/93/525/HD-wallpaper-leaves-beauty-black-bokeh-leaf-red-thumbnail.jpg",
             "full":"https://w0.peakpx.com/wallpaper/93/525/HD-wallpaper-leaves-beauty-black-bokeh-leaf-red.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-kjepf",
             "tags": "black Leaves beauty bokeh leaf"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/316/721/HD-wallpaper-green-leaves-dark-green-leaf-leaves-premium.jpg",
             "full":"https://w0.peakpx.com/wallpaper/316/721/HD-wallpaper-green-leaves-dark-green-leaf-leaves-premium.jpg",
             "lic":"Peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-fqhqe",
             "tags": "Green Leaves Dark green leaf"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/219/973/HD-wallpaper-green-clover-leaf-leave-nature.jpg",
             "full": "https://w0.peakpx.com/wallpaper/219/973/HD-wallpaper-green-clover-leaf-leave-nature.jpg",
             "lic":"Peakpx",
             "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-vkxas",
             "tags": "Green clover leaf nature wallpaper"
           },
           
           {
             "thumb": "https://cdn.pixabay.com/photo/2012/12/14/11/36/leaves-69999_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2012/12/14/11/36/leaves-69999_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/leaves-twigs-floral-reflection-69999",
             "tags": "Leaves Twigs Floral Reflection Water"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2023/04/11/15/26/tree-trunk-7917515_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/04/11/15/26/tree-trunk-7917515_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/photos/tree-trunk-reflection-woods-forest-7917515/",
             "tags": "Tree Trunk Reflection Woods Forest"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2023/04/28/14/35/leaf-7956829_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/04/28/14/35/leaf-7956829_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/photos/leaf-rowan-baum-green-garden-7956829/",
             "tags": "Leaf Rowan Baum Green Garden"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2023/01/05/22/35/flower-7700011_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/01/05/22/35/flower-7700011_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/photos/flower-dandelion-wildflower-nature-7700011/",
             "tags": "Flower Dandelion Wildflower Nature"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2012/03/04/00/52/pond-22118_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2012/03/04/00/52/pond-22118_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/photos/pond-forest-nature-fog-mist-rain-22118/",
             "tags": "Pond Forest Nature Fog Mist Rain Raindrops"
           },
            {
             "thumb": "https://cdn.pixabay.com/photo/2022/12/30/10/52/mountain-7686642_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2022/12/30/10/52/mountain-7686642_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/mountain-ai-generated-lake-forest-7686642/",
             "tags": "Mountain Ai Generated Lake Forest"
           },
            {
             "thumb": "https://cdn.pixabay.com/photo/2023/03/18/01/58/ai-generated-7859706_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/03/18/01/58/ai-generated-7859706_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/ai-generated-flower-flora-blur-7859706/",
             "tags": "Ai Generated Flower Flora Blur To Flourish Plant"
           },
            {
             "thumb": "https://cdn.pixabay.com/photo/2022/12/30/10/49/giant-water-lilies-7686641_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2022/12/30/10/49/giant-water-lilies-7686641_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/giant-water-lilies-lake-forest-7686641/",
             "tags": "Giant Water Lilies Lake Forest Panorama"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2022/12/30/10/40/red-sky-7686623_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2022/12/30/10/40/red-sky-7686623_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/red-sky-twilight-sunset-painting-7686623/",
             "tags": "Red Sky Twilight Sunset Painting Landscape"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2023/04/27/23/41/ai-generated-7955548_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/04/27/23/41/ai-generated-7955548_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/ai-generated-flower-petals-blossom-7955548/",
             "tags": "Ai-Generated Flower Petals Blossom"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2023/01/26/22/11/ai-generated-7747125_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/01/26/22/11/ai-generated-7747125_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/ai-generated-iris-purple-flower-7747125/",
             "tags": "Ai-Generated Iris Purple-Flower Flower"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2023/02/04/16/05/ai-generated-7767510_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/02/04/16/05/ai-generated-7767510_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/ai-generated-flowers-colors-nature-7767510/",
             "tags": "Ai-Generated Flowers Colors Nature"
           },
           {
             "thumb": "https://cdn.pixabay.com/photo/2023/03/05/15/35/ai-generated-7831688_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/03/05/15/35/ai-generated-7831688_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/ai-generated-waterfall-sunrise-7831688/",
             "tags": "Ai-Generated Waterfall Sunrise Nature morning"
           },
            {
             "thumb": "https://cdn.pixabay.com/photo/2023/01/03/22/43/ai-generated-7695512_1280.jpg",
             "full":"https://cdn.pixabay.com/photo/2023/01/03/22/43/ai-generated-7695512_1280.jpg",
             "lic":"Pixabay",
             "pg":"https://pixabay.com/illustrations/ai-generated-jungle-forest-7695512/",
             "tags": "Ai-Generated Nature Jungle Forest Tree House"
           },
           {
             "thumb": "https://img1.wallspic.com/previews/9/0/4/5/6/165409/165409-nature-atmosphere-world-blue-light-500x.jpg",
             "full":"https://img1.wallspic.com/previews/9/0/4/5/6/165409/165409-nature-atmosphere-world-blue-light-x750.jpg",
             "lic":"wallspic",
             "pg":"https://wallspic.com/image/165409-nature-atmosphere-world-blue-light",
             "tags": "Nature Atmosphere World Blue Light-Wallpaper"
           },
           {
             "thumb": "https://w0.peakpx.com/wallpaper/238/682/HD-wallpaper-fire-nature.jpg",
             "full":"https://w0.peakpx.com/wallpaper/238/682/HD-wallpaper-fire-nature.jpg",
             "lic":"peakpx",
             "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-kbphy",
             "tags": "Fire nature HD-wallpaper"
           },
           {
            "thumb": "https://cdn.pixabay.com/photo/2019/04/08/16/49/blooming-4112348_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2019/04/08/16/49/blooming-4112348_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/blooming-spring-garden-blossom-4112348/",
            "tags": "Blooming Spring Garden "
         },
        {
            "thumb": "https://cdn.pixabay.com/photo/2016/07/08/10/27/cherries-1503977_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2016/07/08/10/27/cherries-1503977_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/cherries-fruit-sweet-cherry-1503977/",
            "tags": "Cherries Fruit Sweet-cherry"
         },
        {
            "thumb": "https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
            "lic": "unsplash",
            "pg": "https://unsplash.com/photos/FXmn2BZn2A4",
            "tags": "Garden Green Leaf-Backgrounds Leaves Nature Plant"
         },
        {
            "thumb": "https://images.unsplash.com/photo-1599685315640-9ceab2f58148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1599685315640-9ceab2f58148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic": "pixabay",
            "pg": "https://unsplash.com/photos/ktd2fT6R-QM",
            "tags": "Garden Path Rainforest Palm"
         },
         {
            "thumb": "https://cdn.pixabay.com/photo/2023/05/10/18/20/plant-7984681_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/05/10/18/20/plant-7984681_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/plant-leaves-hosta-botany-foliage-7984681/",
            "tags": "Plant Leaves Hosta image"
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2023/04/28/14/35/leaf-7956829_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/04/28/14/35/leaf-7956829_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/leaf-rowan-baum-green-garden-7956829/",
            "tags": "leaf rowan baum green"
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2020/03/23/12/08/plant-4960675_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2020/03/23/12/08/plant-4960675_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/plant-nature-leaves-macro-garden-4960675/",
            "tags": "Plant Nature Leaves image"
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2020/01/26/22/27/leaf-4796054_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2020/01/26/22/27/leaf-4796054_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/leaf-nature-forest-autumn-natural-4796054/",
            "tags": "Leaf Nature Forest image"
        },
        {
            "thumb":"https://images.pexels.com/photos/6924280/pexels-photo-6924280.jpeg?auto=compress&cs=tinysrgb&w=400",
            "full":"https://images.pexels.com/photos/6924280/pexels-photo-6924280.jpeg?auto=compress&cs=tinysrgb&w=400",
            "lic":"pexels",
            "pg":"https://www.pexels.com/photo/wet-plant-with-colorful-leaves-6924280/",
            "tags": "Blur drop nature background"
          },
          {
            "thumb":"https://images.pexels.com/photos/4592135/pexels-photo-4592135.jpeg?auto=compress&cs=tinysrgb&w=400",
            "full":"https://images.pexels.com/photos/4592135/pexels-photo-4592135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"pexels",
            "pg":"https://www.pexels.com/photo/lush-green-plant-leaves-on-black-background-4592135/",
            "tags": "Blur Leaf green drop"
          },
          {
            "thumb":"https://images.pexels.com/photos/4439975/pexels-photo-4439975.jpeg?auto=compress&cs=tinysrgb&w=400",
            "full":"https://images.pexels.com/photos/4439975/pexels-photo-4439975.jpeg?auto=compress&cs=tinysrgb&w=400",
            "lic":"pexels",
            "pg":"https://www.pexels.com/photo/tinospora-cordifolia-exotic-plant-and-fern-growing-in-forest-4439975/",
            "tags": "Green Drop Botanic Botany Calm"
          },
          {
            "thumb":"https://images.pexels.com/photos/4497991/pexels-photo-4497991.jpeg?auto=compress&cs=tinysrgb&w=400",
            "full":"https://images.pexels.com/photos/4497991/pexels-photo-4497991.jpeg?auto=compress&cs=tinysrgb&w=400",
            "lic":"pexels",
            "pg":"https://www.pexels.com/photo/green-fresh-leave-with-clean-water-drops-4497991/",
            "tags": "Green drop leaf"
          },
          {
            "thumb":"https://images.pexels.com/photos/5686712/pexels-photo-5686712.jpeg?auto=compress&cs=tinysrgb&w=400",
            "full":"https://images.pexels.com/photos/5686712/pexels-photo-5686712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"pexels",
            "pg":"https://www.pexels.com/photo/green-leaves-of-wet-plant-in-nature-5686712/",
            "tags": "Nature Green Blur drop"
          },
          {
            "thumb":"https://images.pexels.com/photos/2598762/pexels-photo-2598762.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            "full":"https://images.pexels.com/photos/2598762/pexels-photo-2598762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"pexels",
            "pg":"https://www.pexels.com/photo/close-up-photo-of-wet-green-leaves-2598762/",
            "tags": "Nature green drop leaves"
          },
          {
            "thumb":"https://images.pexels.com/photos/1883932/pexels-photo-1883932.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/1883932/pexels-photo-1883932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"pexels",
            "pg":"https://www.pexels.com/photo/close-up-photography-of-green-leaf-with-water-dew-1883932/",
            "tags": "Green nature drop leaves"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2023/01/06/02/29/ai-generated-7700293_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/01/06/02/29/ai-generated-7700293_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/ai-generated-tulips-flowers-7700293/",
             "tags": "Ai-generated Tulips Flowers"
            },
            {
            "thumb": "https://cdn.pixabay.com/photo/2023/05/02/21/32/tulip-7966187_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/05/02/21/32/tulip-7966187_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/tulip-flower-petals-springtime-7966187/",
             "tags": "Tulip Flower Petals"
            },
        {
            "thumb": "https://cdn.pixabay.com/photo/2023/05/02/11/49/tulips-7965058_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/05/02/11/49/tulips-7965058_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/tulips-flower-early-bloomer-spring-7965058/",
             "tags": "Tulips Flower Early bloomer image."
            },
          {
          "thumb":"https://e0.pxfuel.com/wallpapers/1015/1004/desktop-wallpaper-abstract-background-dark-glare-blur-smooth.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/1015/1004/desktop-wallpaper-abstract-background-dark-glare-blur-smooth.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-ogvzk",
            "tags": "Abstract Background Dark Glare Blur Smooth HD-wallpaper"
          },
           {
          "thumb":"https://e0.pxfuel.com/wallpapers/586/500/desktop-wallpaper-abstract-shine-flower-brilliance-glare-fractal.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/586/500/desktop-wallpaper-abstract-shine-flower-brilliance-glare-fractal.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-onfbi",
            "tags": "Abstract Shine Flower Brilliance Glare HD-wallpaper"
          },
           {
          "thumb":"https://e0.pxfuel.com/wallpapers/521/162/desktop-wallpaper-dslr-blur-background-ideas-dslr-blur-background-hop-digital-background-dslr-background.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/521/162/desktop-wallpaper-dslr-blur-background-ideas-dslr-blur-background-hop-digital-background-dslr-background.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-qzetl",
            "tags": "blur-background digital background HD-wallpaper"
          },
           {
          "thumb":"https://e0.pxfuel.com/wallpapers/60/907/desktop-wallpaper-picsart-background-picsart-blur.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/60/907/desktop-wallpaper-picsart-background-picsart-blur.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-zrhuc",
            "tags": "Picsart Background Picsart Blur HD-wallpaper"
          },
          {
          "thumb":"https://e1.pxfuel.com/desktop-wallpaper/476/809/desktop-wallpaper-new-cb-backgrounds-for-picsart-editing-zip-picsart-editing.jpg",
            "full": "https://e1.pxfuel.com/desktop-wallpaper/476/809/desktop-wallpaper-new-cb-backgrounds-for-picsart-editing-zip-picsart-editing.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-ngzle",
            "tags": "HD-wallpaper"
          },
           {
          "thumb":"https://e1.pxfuel.com/desktop-wallpaper/25/429/desktop-wallpaper-new-cb-backgrounds-cb-backgrounds-zip-file-in-2019-cb-background.jpg",
            "full": "https://e1.pxfuel.com/desktop-wallpaper/25/429/desktop-wallpaper-new-cb-backgrounds-cb-backgrounds-zip-file-in-2019-cb-background.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-ficll",
            "tags": "backgrounds HD-wallpaper"
          },
           {
          "thumb":"https://e1.pxfuel.com/desktop-wallpaper/13/453/desktop-wallpaper-studio-backgrounds-for-hop-studio-backgrounds.jpg",
            "full": "https://e1.pxfuel.com/desktop-wallpaper/13/453/desktop-wallpaper-studio-backgrounds-for-hop-studio-backgrounds.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-fipjr",
            "tags": "Backgrounds HD-wallpaper"
          },
          {
          "thumb":"https://e1.pxfuel.com/desktop-wallpaper/551/320/desktop-wallpaper-amoled-nature-sunset-amoled.jpg",
            "full": "https://e1.pxfuel.com/desktop-wallpaper/551/320/desktop-wallpaper-amoled-nature-sunset-amoled.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-hlbfq",
            "tags": "AMOLED Nature sunset HD-wallpaper"
          },
           {
          "thumb":"https://e0.pxfuel.com/wallpapers/14/346/desktop-wallpaper-amoled-flower-android-blue-amoled.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/14/346/desktop-wallpaper-amoled-flower-android-blue-amoled.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-ofuvp",
            "tags": "Amoled Flower Android Blue-Amoled HD-wallpaper"
          },
           {
          "thumb":"https://e1.pxfuel.com/desktop-wallpaper/902/508/desktop-wallpaper-amoled-nature-black-amoled-landscape.jpg",
            "full": "https://e1.pxfuel.com/desktop-wallpaper/902/508/desktop-wallpaper-amoled-nature-black-amoled-landscape.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-faagy",
            "tags": "AMOLED Nature black landscape HD-wallpaper"
          },
          {
          "thumb":"https://e0.pxfuel.com/wallpapers/899/953/desktop-wallpaper-nature-asphalt-curve-dark-screen-lock-screen-landscape-curve-road.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/899/953/desktop-wallpaper-nature-asphalt-curve-dark-screen-lock-screen-landscape-curve-road.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-tdyky",
            "tags": "Nature Asphalt Curve Dark Screen Lock screen Landscape Curve Road HD-wallpaper"
          },
           {
          "thumb":"https://w0.peakpx.com/wallpaper/591/488/HD-wallpaper-amoled-green-leaf-black-macro-nature-q-s8-vivid.jpg",
            "full": "https://w0.peakpx.com/wallpaper/591/488/HD-wallpaper-amoled-green-leaf-black-macro-nature-q-s8-vivid.jpg",
            "lic": "peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-gpbyi",
            "tags": "AMOLED green leaf black macro nature HD-wallpaper"
          },
           {
          "thumb":"https://w0.peakpx.com/wallpaper/5/643/HD-wallpaper-rainy-day-nature-rain.jpg",
            "full": "https://w0.peakpx.com/wallpaper/5/643/HD-wallpaper-rainy-day-nature-rain.jpg",
            "lic": "peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-vnoxb",
            "tags": "Rainy Day nature rain HD-wallpaper"
          },
          {
            "thumb":"https://w0.peakpx.com/wallpaper/127/681/HD-wallpaper-dandelion-plant-close-up-macro-dandelion-plant-flowers-nature-macro.jpg",
            "full": "https://w0.peakpx.com/wallpaper/127/681/HD-wallpaper-dandelion-plant-close-up-macro-dandelion-plant-flowers-nature-macro.jpg",
            "lic": "Peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-kvlte",
            "tags": "Dandelion Macro plant flower Macro Wallpapers Nature"
          },
          {
            "thumb":"https://w0.peakpx.com/wallpaper/716/383/HD-wallpaper-close-up-dandelions-dandelion-plant-flowers-nature-macro.jpg",
            "full": "https://w0.peakpx.com/wallpaper/716/383/HD-wallpaper-close-up-dandelions-dandelion-plant-flowers-nature-macro.jpg",
            "lic": "Peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-koemq",
            "tags": "Dandelion plant flowers macro Wallpapers Nature"
          },
          {
            "thumb":"https://w0.peakpx.com/wallpaper/464/488/HD-wallpaper-grass-landscape-depth-of-field-nature-macro-sunlight-plants-flowers-bokeh-dandelion.jpg",
            "full": "https://w0.peakpx.com/wallpaper/464/488/HD-wallpaper-grass-landscape-depth-of-field-nature-macro-sunlight-plants-flowers-bokeh-dandelion.jpg",
            "lic": "Peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-kdbkd",
            "tags": "dandelion sunset macro sunlight plant flower bokeh Wallpaper Nature"
          },
          {
            "thumb":"https://w0.peakpx.com/wallpaper/267/535/HD-wallpaper-green-field-grass-landscape-nature-graphy-scenery-sky.jpg",
            "full": "https://w0.peakpx.com/wallpaper/267/535/HD-wallpaper-green-field-grass-landscape-nature-graphy-scenery-sky.jpg",
            "lic": "Peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-ayski",
            "tags": "Green-Field grass graphy scenery sky Wallpapers Nature"
          },
          {
            "thumb":"https://w0.peakpx.com/wallpaper/172/98/HD-wallpaper-indian-flag-scenery-blue-field-flag-grass-green-nature-sky.jpg",
            "full": "https://w0.peakpx.com/wallpaper/172/98/HD-wallpaper-indian-flag-scenery-blue-field-flag-grass-green-nature-sky.jpg",
            "lic": "Peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-autlx",
            "tags": "grass green sky Wallpapers Nature"
          },
          {
            "thumb":"https://w0.peakpx.com/wallpaper/477/767/HD-wallpaper-cloudy-sky-clouds-field-grass-green.jpg",
            "full": "https://w0.peakpx.com/wallpaper/477/767/HD-wallpaper-cloudy-sky-clouds-field-grass-green.jpg",
            "lic": "Peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-kjvve",
            "tags": "cloudy-sky clouds field-grass green Wallpapers Nature"
          },
          
          
          {
            "thumb":"https://img2.wallspic.com/previews/6/5/4/3/7/173456/173456-tablet-ram-android-32_gb-operating_system-500x.jpg",
            "full": "https://img2.wallspic.com/previews/6/5/4/3/7/173456/173456-tablet-ram-android-32_gb-operating_system-x750.jpg",
            "lic": "wallspic",
            "pg": "https://wallspic.com/image/173456-tablet-ram-android-32_gb-operating_system",
            "tags": "Abstract Android-Wallpapers Nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1601275869137-c3a1cbee2392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1601275869137-c3a1cbee2392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            "lic": "Unsplash",
            "pg": "https://unsplash.com/photos/9AvozLh0FvI",
            "tags": "Autumn Leaf Drop Wallpapers Nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1593275324407-288bc8db3f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjBkcm9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1593275324407-288bc8db3f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
            "lic": "Unsplash",
            "pg": "https://unsplash.com/photos/rm6uSdUMMyE",
            "tags": "Rose Drop Macro Wallpapers Nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1593275496115-f43c90f4a1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1593275496115-f43c90f4a1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
            "lic": "Unsplash",
            "pg": "https://unsplash.com/photos/-xu11KGEvjA",
            "tags": "Rain Macro Drop Leaf Bokeh Wallpapers Nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1609342432142-53128e7090e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJva2VofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1609342432142-53128e7090e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic": "Unsplash",
            "pg": "https://unsplash.com/photos/GwT85ykUo_E",
            "tags": "Bokeh Sunset Wallpapers Nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1654962900838-bd872b71dfa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDI3NTMyNHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1654962900838-bd872b71dfa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=495&q=80",
            "lic": "Unsplash",
            "pg": "https://unsplash.com/photos/rVk7NXidQFY",
            "tags": "Plant Flower Wallpapers Nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1667138325583-a30e62c66e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw4OTUzMTg5fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1667138325583-a30e62c66e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic":"Unsplash",
            "pg": "https://unsplash.com/photos/AgPVsu54j8Q",
            "tags": "Autumn Wallpapers Nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1667210211813-9a0bbbaa5623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1667210211813-9a0bbbaa5623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic":"Unsplash",
            "pg": "https://unsplash.com/photos/7ioacLIs_Is",
            "tags": "Tree Deep Green Nature Plant wallpaper"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1600763321472-944c177e3944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzJ8MjE3MDY5MHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1600763321472-944c177e3944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=374&q=80",
            "lic":"Unsplash",
            "pg": "https://unsplash.com/photos/X6Uy-bscT1A",
            "tags": "Sunset Dusk Sunrise Dawn Nature wallpaper water tree"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1666022395153-76ed7a23a72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5NTYzMTN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1666022395153-76ed7a23a72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            "lic":"Unsplash",
            "pg": "https://unsplash.com/photos/KUME1JqxVYE",
            "tags": "view sea beach wallpaper nature"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1587499211757-86eeee9c75da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjBkcm9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1587499211757-86eeee9c75da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "lic":"Unsplash",
            "pg": "https://unsplash.com/photos/CfimHDZtG3o",
            "tags": "Rain Drop Leaf nature wallpaper"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1630975220044-64824947aef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1630975220044-64824947aef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            "lic":"Unsplash",
            "pg": "https://unsplash.com/photos/U9mVSOtrgR0",
            "tags": "Drop Rain Nature Wallpaper leaf"
          },
          {
            "thumb": "https://w0.peakpx.com/wallpaper/248/405/HD-wallpaper-violet-leaves-plant-close-up-leaves.jpg",
            "full":"https://w0.peakpx.com/wallpaper/248/405/HD-wallpaper-violet-leaves-plant-close-up-leaves.jpg",
            "lic":"peakpx",
            "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-nemdm",
            "tags": "Nature Wallpaper violet leaves plant leaves"
          },
          {
            "thumb": "https://w0.peakpx.com/wallpaper/597/1020/HD-wallpaper-plants-succulents-close-up.jpg",
            "full":"https://w0.peakpx.com/wallpaper/597/1020/HD-wallpaper-plants-succulents-close-up.jpg",
            "lic":"peakpx",
            "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-opeyd",
            "tags": "Nature Wallpaper plants succulents"
          },
          {
            "thumb": "https://w0.peakpx.com/wallpaper/983/204/HD-wallpaper-nature-landscape.jpg",
            "full":"https://w0.peakpx.com/wallpaper/983/204/HD-wallpaper-nature-landscape.jpg",
            "lic":"peakpx",
            "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-kqbpa",
            "tags": "Nature Wallpaper Autumn"
          },
          {
            "thumb": "https://w0.peakpx.com/wallpaper/638/1018/HD-wallpaper-autumn-fall-nature-fall-nature-scenery-fall-scenes-scenes-city-season-landscapes.jpg",
            "full":"https://w0.peakpx.com/wallpaper/638/1018/HD-wallpaper-autumn-fall-nature-fall-nature-scenery-fall-scenes-scenes-city-season-landscapes.jpg",
            "lic":"peakpx",
            "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-abnkr",
            "tags": "Nature Wallpaper Autumn fall season"
          },
          {
            "thumb": "https://w0.peakpx.com/wallpaper/615/949/HD-wallpaper-fall-autumn-beautiful-red-nature-beauty-landscapes-scenery.jpg",
            "full":"https://w0.peakpx.com/wallpaper/615/949/HD-wallpaper-fall-autumn-beautiful-red-nature-beauty-landscapes-scenery.jpg",
            "lic":"peakpx",
            "pg":"https://www.peakpx.com/en/hd-wallpaper-desktop-gpeld",
            "tags": "Nature Wallpaper Fall autumn bonito red beauty"
          },
          
          {
            "thumb": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/photo-of-stream-during-daytime-3225517/",
            "tags": "Nature Wallpaper Water"
          },
          {
            "thumb": "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/first-perspective-photography-of-hanging-bridge-1761279/",
            "tags": "Tree Bridge Forest Nature Wallpaper"
          },
          {
            "thumb": "https://images.pexels.com/photos/2770933/pexels-photo-2770933.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/2770933/pexels-photo-2770933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/car-on-road-2770933/",
            "tags": "Drone Road Nature Green Wallpaper"
          },
          {
            "thumb": "https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&w=600",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/tall-brown-trees-1995730/",
            "tags": "Flower Dandelion Wildflower Nature"
          },
          {
            "thumb": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/lake-and-mountain-417074/",
            "tags": "Beautiful Background Hd Wallpaper Nature Mountain Green Rain Wallpaper"
          },
           {
            "thumb": "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/watercrafts-on-river-3464632//",
            "tags": "Aerial View Nature Wallpaper"
          },
           {
            "thumb": "https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/wide-angle-photo-of-mountains-2896668/",
            "tags": "Mountain Background Mountain Wallpaper Nature HD Wallpaper"
          },
           {
            "thumb": "https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/mountain-photography-2444429/",
            "tags": "4k Wallpaper Lake Mountain Nature Reflection"
          },
          {
            "thumb": "https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=600",
            "full":"https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/photo-of-green-leaves-3571551/",
            "tags": "Green Leaves Leaves Nature Wallpaper"
          },
          {
            "thumb": "https://images.pexels.com/photos/4504585/pexels-photo-4504585.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            "full":"https://images.pexels.com/photos/4504585/pexels-photo-4504585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/water-droplets-on-green-leaf-4504585/",
            "tags": "Green Leaves Nature Wallpaper"
          },
          {
            "thumb": "https://images.pexels.com/photos/4448371/pexels-photo-4448371.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            "full":"https://images.pexels.com/photos/4448371/pexels-photo-4448371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "lic":"Pexels",
            "pg":"https://www.pexels.com/photo/green-leaves-in-close-up-photography-4448371/",
            "tags": "Green Leaves Nature Wallpaper"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "full":"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
            "lic":"Unsplash",
            "pg":"https://unsplash.com/photos/lsoogGC_5dg",
            "tags": "Nature Dusk Horizon Nature Sunset"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            "full":"https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80",
            "lic":"Unsplash",
            "pg":"https://unsplash.com/photos/DD1fSz2HF1s",
            "tags": "Sea Aerial View Drone Nature Beach"
          },
           {
            "thumb": "https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            "full":"https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic":"Unsplash",
            "pg":"https://unsplash.com/photos/5-jtsfuaLBw",
            "tags": "River Nature Waterfall Forest Tree Wallpaper"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1508528075895-be7a6cabd37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            "full":"https://images.unsplash.com/photo-1508528075895-be7a6cabd37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic":"Unsplash",
            "pg":"https://unsplash.com/photos/oD_NEGqfT2A",
            "tags": "River Nature Waterfall Forest Tree Wallpaper"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            "full":"https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic":"peakpx",
            "pg":"https://unsplash.com/photos/v4bkVOl1sTI",
            "tags": "Flower nature HD phone wallpaper"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2023/04/23/14/43/tulips-7945859__480.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/04/23/14/43/tulips-7945859_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/tulips-season-flower-spring-7945859/",
            "tags": "Rose Tulips Season Flower-image"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2023/01/02/10/59/tulip-7691846__480.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/01/02/10/59/tulip-7691846_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/tulip-blossomed-spring-nature-7691846/",
            "tags": "Rose Flower Tulip Blossomed Spring"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2023/01/22/15/55/tulip-7736739__480.jpg",
            "full": "https://cdn.pixabay.com/photo/2023/01/22/15/55/tulip-7736739_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/tulip-red-tulip-red-flower-flower-7736739/",
            "tags": "Rose Tulip Red tulip Red-flower"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2016/09/03/23/18/rose-1642970_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2016/09/03/23/18/rose-1642970_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-flower-dew-dewdrops-droplets-1642970/",
            "tags": "Rose Flower Dew-image"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2016/03/27/22/51/rose-1284579__480.jpg",
            "full": "https://cdn.pixabay.com/photo/2016/03/27/22/51/rose-1284579_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-red-nature-flower-rose-petals-1284579/",
            "tags": "Rose Red Nature"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2017/12/17/15/44/poinsettia-3024434_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2017/12/17/15/44/poinsettia-3024434_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/poinsettia-christmas-3024434/",
            "tags": "Rose Flower Poinsettia"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/flower-rose-red-love-flora-nature-3115353/",
            "tags": "Flower Rose Red "
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2019/01/08/08/57/rose-3920657_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2019/01/08/08/57/rose-3920657_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-rose-petals-red-rose-romantic-3920657/",
            "tags": "Rose Red Flower nature Rose-petals"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2017/08/06/11/47/rose-2591720_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2017/08/06/11/47/rose-2591720_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-red-drop-rain-red-rose-2591720/",
            "tags": "Rose Red Drop"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2020/02/18/04/03/rose-4858381_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2020/02/18/04/03/rose-4858381_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-flower-red-dark-4858381/",
            "tags": "Rose Red Dark Flower"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2019/09/29/19/42/flower-4514202_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2019/09/29/19/42/flower-4514202_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/flower-blossom-bloom-background-4514202/",
            "tags": "Rose Flower Blossom Bloom"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2021/08/17/15/16/roses-6553269_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2021/08/17/15/16/roses-6553269_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/roses-flowers-red-rose-rose-bloom-6553269/",
            "tags": "Roses Flowers Red-rose"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2014/07/08/14/09/background-387414_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2014/07/08/14/09/background-387414_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/background-black-rose-flower-roses-387414/",
            "tags": "Black Flower Rose"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2021/04/25/18/25/rose-6207228_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2021/04/25/18/25/rose-6207228_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-flower-petals-red-rose-6207228/",
            "tags": "Rose Flower Petals"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2019/02/14/19/54/red-3997292_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2019/02/14/19/54/red-3997292_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/red-rose-flower-petals-close-up-3997292/",
            "tags": "Red Rose Flower"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2022/09/13/12/06/wallpaper-7451780_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2022/09/13/12/06/wallpaper-7451780_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/wallpaper-flower-nature-rose-7451780/",
            "tags": "Rose Wallpaper Flower"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2022/10/18/02/43/rose-7529074_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2022/10/18/02/43/rose-7529074_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-red-flower-plant-bloom-7529074/",
            "tags": "wallpaper Rose Red"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2021/05/25/21/14/rose-6283584_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2021/05/25/21/14/rose-6283584_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-rose-petal-stone-black-6283584/",
            "tags": "Rose Rose-petal Stone"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2018/08/29/10/25/rose-3639573_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2018/08/29/10/25/rose-3639573_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-flower-plant-nature-red-rose-3639573/",
            "tags": "Rose Flower Plant"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2021/05/25/21/14/rose-6283587_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2021/05/25/21/14/rose-6283587_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/rose-rose-petal-stone-black-6283587/",
            "tags": "Rose Rose-petal Stone"
          },
          {
            "thumb": "https://cdn.pixabay.com/photo/2019/09/17/05/42/red-rose-4482541_1280.jpg",
            "full": "https://cdn.pixabay.com/photo/2019/09/17/05/42/red-rose-4482541_1280.jpg",
            "lic": "pixabay",
            "pg": "https://pixabay.com/photos/red-rose-rose-feeling-passion-4482541/",
            "tags": "Red-rose Rose Feeling"
          },
          {
            "thumb": "https://w0.peakpx.com/wallpaper/571/30/HD-wallpaper-perfectrose-beautiful-flower-flowers-glow-love-pretty-red-rose-roses.jpg",
            "full": "https://w0.peakpx.com/wallpaper/571/30/HD-wallpaper-perfectrose-beautiful-flower-flowers-glow-love-pretty-red-rose-roses.jpg",
            "lic": "peakpx",
            "pg": "https://www.peakpx.com/en/hd-wallpaper-desktop-ktinq",
            "tags": "PerfectRose bonito flower flowers glow love red rose HD-wallpaper"
          },
          {
            "thumb": "https://e0.pxfuel.com/wallpapers/636/386/desktop-wallpaper-beautiful-red-rose-flower-beautiful-red-rose.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/636/386/desktop-wallpaper-beautiful-red-rose-flower-beautiful-red-rose.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-olzzr",
            "tags": "Beautiful Red Rose Flower Beautiful Red Rose HD-wallpaper"
          },
          {
            "thumb": "https://e0.pxfuel.com/wallpapers/887/962/desktop-wallpaper-beautiful-red-rose-flower-beautiful-flower.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/887/962/desktop-wallpaper-beautiful-red-rose-flower-beautiful-flower.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-olzcz",
            "tags": "Beautiful Red Rose Flower Beautiful Flower HD-wallpaper"
          },
           {
            "thumb": "https://e0.pxfuel.com/wallpapers/691/410/desktop-wallpaper-rose-fresh-red-flowers.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/691/410/desktop-wallpaper-rose-fresh-red-flowers.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-ohhdf",
            "tags": "Rose fresh red flowers HD-wallpaper"
          },
          {
            "thumb": "https://e0.pxfuel.com/wallpapers/50/664/desktop-wallpaper-drops-macro-rose-flower-rose-bud-dew.jpg",
            "full": "https://e0.pxfuel.com/wallpapers/50/664/desktop-wallpaper-drops-macro-rose-flower-rose-bud-dew.jpg",
            "lic": "pxfuel",
            "pg": "https://www.pxfuel.com/en/desktop-wallpaper-eoazv",
            "tags": "Drops Macro Rose Flower Rose Bud Dew HD-wallpaper"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1519873174361-37788c5a73c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1519873174361-37788c5a73c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=341&q=80",
            "lic": "unsplash",
            "pg": "https://unsplash.com/photos/close-up-photography-of-droplets-eMX1aIAp9Nw",
            "tags": "Water nature black"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdhdGVyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic": "unsplash",
            "pg": "https://unsplash.com/photos/wEgR12N01Tk",
            "tags": "water ocean nature drop lake"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "lic": "unsplash",
            "pg": "https://unsplash.com/photos/LoGnr-w1D8E",
            "tags": "water drop nature bokeh"
          },
          {
            "thumb": "https://images.unsplash.com/photo-1570651001583-e88b352507b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
            "full": "https://images.unsplash.com/photo-1570651001583-e88b352507b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "lic": "unsplash",
            "pg": "https://unsplash.com/photos/pGDd2IA56tM",
            "tags": "nature water rain"
          }
]

router.get("/allnaturewallpapers", (req, res) => {
    res.json(wallpapers)
})
   
router.get("/naturewallpapers", paginatedResults(wallpapers), (req, res) => {
    res.json(res.paginatedResults)
});

module.exports = router