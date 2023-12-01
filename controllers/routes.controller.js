const router = require('express').Router();
const db = require('../db.json');

/* 
* Quick Challenge:
    - Frame a GET route
        - No endpoint is required to access. It will "Get All" based off /routes
            - note: Where is "/routes" coming from?
    
    No need to work through the logic within the code block.
*/
router.get('/', (req,res) => {
    try {

        res.status(200).json({
            results: db
        })
        
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

/* 
    Syntax:
        URL - /:id
            - denotes a paramter value. Endpoint is expecting a reference value.
        
        example URL with a parameter:
            http://localhost:4000/routes/1
        
        "1" would reference a paramter or flexible string to reference.
            - This could be a name of something or value expected to target.
*/
router.get('/id/:id', (req,res) => {
    // console.log(req.params)

    /* 
        - used to help us locate one item in our database
        - ID typically has a unique value to help us find that ONE item.
    */

    try {
        
        let { id } = req.params;
        let results = db.filter(i => i.id == id);

        // console.log(results);
        res.status(200).json({
            results: results[0]
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }    
})

// TODO Query
/* 
    - Anything after the endpoint can be extracted from it.
    ex: /routes/query/?firstName="Joe"
*/
router.get('/query/', (req,res) => {
    // res.send(req.query);

    try {
        
        const { firstName, lastName } = req.query;

        res.status(200).json({
            results: {
                first: firstName,
                last: lastName,
                full: `${firstName} ${lastName}`
            }
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

module.exports = router;