import express from 'express'
import books from './routes/books.mjs'
// import data from './data.mjs'
import fs from 'fs';




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
// View Engine 
app.engine("books", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
  
      // Here, we take the content of the template file,
      // convert it to a string, and replace sections of
      // it with the values being passed to the engine.
      const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`);
      return callback(null, rendered);
    });
  });

app.set("views", "./views"); // specify the views directory
app.set("view engine", "books"); 

app.get('/template', (req, res) => {
    let options = {title: "Book App", content: "Welcome to open Library"}
    res.render('index', options)
})
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