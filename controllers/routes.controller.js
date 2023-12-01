const router = require('express').Router();

// TODO Get All
/* 
* Quick Challenge:
    - Frame a GET route
        - No endpoint is required to access. It will "Get All" based off /routes
            - note: Where is "/routes" coming from?
    
    No need to work through the logic within the code block.
*/

// TODO GET One
/* 
    Syntax:
        URL - /:id
            - denotes a paramter value. Endpoint is expecting a reference value.
        
        example URL with a parameter:
            http://localhost:4000/routes/1
        
        "1" would reference a paramter or fleible string to reference.
            - This could be a name of something or value expected to target.
*/

// TODO Query
/* 
    - Anything after the endpoint can be extracted from it.
    ex: /routes/query/?firstName="Joe"
*/

module.exports = router;