const express = require('express');
const user = require('../models/user.js');
const request = require('request');


const router = express.Router();





/* GET users listing. */
router.get('/', (req, res) => {
	res.send('respond with a resource');
});

router.post('/adduser', async (req,res)=> {

	let add = {
        first_name: req.body.firstname
    }

    res.status(200).send({message: `${add.first_name}`})
	
})


router.get('/checking', function(req, res, next) {

	request({
	  uri: 'https://api.jikan.moe/v3/character/1',
	}).pipe(res);

})




module.exports = router;
