const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html',{title: 'Brewer'})
}
)
router.get('/contact.html', (req, res) => {
    res.render('contact.html',{title: 'Brewer - Contacto'})
}
)

router.get('/menu.html', (req, res) => {
    res.render('menu.html' ,{title: 'Brewer - Carta'})
}
)



module.exports = router;