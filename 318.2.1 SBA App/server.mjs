import express from 'express'
import books from './routes/books.mjs'




//initialize express into a variable
const app = express();
const PORT = 3000 || 3001

// MiddleWare
app.use(express.json());

const logReq = function(req, res, next){
    console.log('Request Received')
    next();
}
app.use(logReq);

app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});

// // Routes
// //routes to view books
app.use('./books', books)

app
.route('/books')
.get((req, res) => {
    res.send('View books');
})
.get((req, res) => {
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

// Listener

app.listen(PORT, () => {
    console.log('Server Running on Port: ${3000})');
})