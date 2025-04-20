import express from 'express'
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
    books[id] = {id, title, author, status};
    res.status(201).send(books[id]);   
})
.get((req, res) => {
    res.send(Object.values(books));
})

router
.route('/books/:id')
.get((req, res) => {
    const book = books[req.params.id];
    book ? res.send(book) : res.status(404).send({message: 'Book not found'})
})
.put((req, res) => {
    if(!books[req.params.id]) {
        return res.status(404).send({message: 'Book not found'})
    }
    books[req.params.id] = {...books[req.params.id], ...req.body};
    res.send(books[req.params.id]);
})
.delete((req, res) => {
    if(!books[req.params.id]) {
        return res.status(404).send({message: 'Book not found'})
    }
    const deleteBook = books[req.params.id];
    delete books[req.params.id];
    res.send(deleteBook);
});

export default router;