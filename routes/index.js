const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index')
	// render - pass in the name of the view
})

module.exports = router
