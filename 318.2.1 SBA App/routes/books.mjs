import express from 'express'
import data from '../data/data.mjs';
const router = express.Router();
;
// Routes
router
.route('/books')
.post((req, res) => {
    const {id, title, author, status} = req.body;
    if(!id || !title || !author || !status){
        return res.status(400).send({message: 'Missing required field'})
    }
    data[id] = {id, title, author, status};
    res.status(201).send(data[id]);   
})
.get((req, res) => {
    res.send(Object.values(data));
})

router
.route('/books/:id')
.get((req, res) => {
    const book = data[req.params.id];
    book ? res.send(book) : res.status(404).send({message: 'Book not found'})
})
.put((req, res) => {
    if(!data[req.params.id]) {
        return res.status(404).send({message: 'Book not found'})
    }
    data[req.params.id] = {...data[req.params.id], ...req.body};
    res.send(data[req.params.id]);
})
.delete((req, res) => {
    if(!data[req.params.id]) {
        return res.status(404).send({message: 'Book not found'})
    }
    const deleteBook = data[req.params.id];
    delete data[req.params.id];
    res.send(deleteBook);
});

export default router;