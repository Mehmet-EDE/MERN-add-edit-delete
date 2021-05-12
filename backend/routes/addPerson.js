const router = require('express').Router();
let Persons = require('../models/person.model');
router.route('/').get((req, res) => {
    Persons.find()
        .then(Persons => res.json(Persons))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/add').post((req, res) => {
    debugger
    const name = req.body.name
    const surname = req.body.surname
    const email = req.body.email
    const photo = req.body.photo
    const hiringdate=req.body.hiringdate
    const newEmployee = new Persons({
        name,
        surname,
        email,
        photo,
        hiringdate
    })
    newEmployee.save()
        .then(() => res.json('New Employee hiring '))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').get((req, res) => {
    Persons.findById(req.params.id)
        .then(person => res.json(person))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/delete/:id').delete((req, res) => {
    Persons.findByIdAndDelete(req.params.id)
        .then(() => res.json('Selected Employee fired'))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/update/:id').post((req, res) => {
    Persons.findById(req.params.id)
        .then(personData => {
             personData.name = req.body.name
             personData.surname = req.body.surname
             personData.email = req.body.email
             personData.photo = req.body.photo
             personData.hiringdate=req.body.hiringdate
             personData.save()
             .then(()=>res.json('Employee Update'))
             .catch(err=>res.status(400).json('Error: '+err.message))
        })
        .catch(err=>res.status(400).json('Error: '+err))
})
module.exports = router;