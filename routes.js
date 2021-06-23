const express = require('express');
const router = express.Router();
const phone_controller = require('./controller/phone');
const user_controller = require("./controller/user")
//import
/* GET home page. */
function middleware(req, res, next) {
    // document.cookie = "username=John Doe";
    // authentication middleware
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
    // Verify login and password are set and correct
    //todo: here get user based on login, and if everything matches good to go
    user_controller.get_user(login).exec(function (err, user) {
        if (login && password && login === user.email && password === user.password) {
            // Access granted...
            return next()
        }
        // Access denied...
        //res.set('WWW-Authenticate', 'Basic realm="401"')
        //res.status(401).send('Authentication required.') // custom message
        return next()
    })
}
router.get('/', middleware, function (req, res, next) {
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO ANGULAR' });
});

// routing

router.post('/phone', middleware, phone_controller.phone_get_all);                // get all
router.get('/phone/:id', middleware, phone_controller.phone_details);             // get by id
router.post('/phone/add', middleware, phone_controller.phone_create);             // add
router.put('/phone/:id', middleware, phone_controller.phone_update);              // update by id
router.post('/phone/delete/:id', middleware, phone_controller.phone_delete);     // delete by id 

module.exports = router;