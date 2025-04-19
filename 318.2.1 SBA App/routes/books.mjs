import express from 'express'
const router = express.Router();

// Routes
router
.route('/books')
.get((req, res) => {
    res.send('View books');
})
.get( (req, res) => {
    res.send('View books');
})
.post((req, res) => {
    res.send('Add you favorites');
})
.put((req, res) => {
    res.send('Books[index]');
})
.delete((req, res) => {
    res.send('Delete book');
});

export default router;