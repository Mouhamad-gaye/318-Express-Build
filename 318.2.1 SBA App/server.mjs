import express from 'express'
import books from './routes/books.mjs'
// import data from './data.mjs'
import fs from 'fs';


//initialize express into a variable
const app = express();
const PORT = 3000 || 3001
app.use(express.static("./styles"));

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
    let options = {title: "Book App", content: `Welcome to open Library. n/ 
        One web page for every book ever published. It's a lofty but achievable goal. \n

To build Open Library, we need hundreds of millions of book records, a wiki interface, \n 
and lots of people who are willing to contribute their time and effort to building the site.

To date, we have gathered over 20 million records from a variety of large catalogs as well as single contributions, \n
with more on the way.n/

Open Library is an open project: the software is open, the data are open, the documentation is open, \n
and we welcome your contribution. Whether you fix a typo, add a book, or write a widget--it's all welcome. \n
We have a small team of fantastic programmers who have accomplished a lot, but we can't do it alone!

Open Library is a project of the non-profit Internet Archive, and has been funded in part by a grant \n 
from the California State Library and the Kahle/Austin Foundation.`}
    res.render('index', options)
})


// Listener

app.listen(PORT, () => {
    console.log('Server Running on Port: ${3000})');
})