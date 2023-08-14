const express = require('express')

const controllerPublication = require('../controllers/publications')


const router = express.Router()

router.post('/create', controllerPublication.create)
router.get('/', controllerPublication.getPublication)

module.exports = router