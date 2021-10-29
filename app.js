// const fs = require("fs")
const express = require('express')
const morgan = require('morgan');
const app = express();
// const cors = require('cors')
// const cookieParser = require('cookie-parser')

const port = 3000;
// const books = require('./mock-data/books.json');
// const authors = require('./mock-data/authors.json');

// app.use(cookieParser())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// app.use(cors())

// const movies = JSON.parse(fs.readFileSync("movies.JSON"))

// app.get('/movies', (req, res) => {
//   if(req.query.title){
//     res.send(movies.filter(movie => movie.title.includes(req.query.title)));
//   } else {
//     res.send(movies);
//   }
// });

// app.get('/movies/:movieId', (req, res) => {

// let id = parseInt(req.params.movieId);
//   let matchFound = false;
//   if (id && typeof id === 'number') {
//     for (let i = 0; i < movies.length; i++) {
//       if (movies[i].movieId === id) {
//         res.send(movies[i]);
//         matchFound = true;
//       }
//     }
//     if (!matchFound) {
//       res.status(404)
//         .send(`No movie with ID ${id} found`);
//     }
//   } else {
//     res.status(400)
//       .send('Invalid ID');
//   }
// })

// app.post('/movies',function(req,res){

//     let result;
//     const movieData = req.body;
// /* BODY SHOULD BE
// {
// "id": 200,
// "title": "From Paris With Love",
// "runtime": 94,
// "release_year": 2010,
// "director": "Pierre Morel",
// }, */
//     if(movieData.id && movieData.title && movieData.runtime && movieData.release_year && movieData.director){
//         movies.push({ 
//           movieId: movieData.id,
//           title: movieData.title,
//           runtime: movieData.runtime, 
//           release_year: movieData.release_year, 
//           director: movieData.director
//         })

//         result = {
//             "status": "success",
//             "message": "The movie has been successfully added"
//         }
//     }else{
//         result = {
//             "status": "failed",
//             "message": "The movie has not been added"
//         }
//         res.status(400);
//     }

//     res.json(result);
// });


// app.delete('/movies/:movieId', (req, res) => {
//   let matchFound = false;
//   let id = parseInt(req.params.movieId);
//   if (id && typeof id === 'number') {
//     for (let i = 0; i < movies.length; i++) {
//       if (movies[i].movieId === id) {        
//         console.log(movies[i])
//         movies.splice(i,1)
//         res.send("Resource has been deleted.")
//         matchFound = true;
//       }
//     }
//   if (!matchFound) {
//       res.status(404)
//         .send(`No movie with ID ${id} found`);
//     }
//   } else {
//     res.status(400)
//       .send('Invalid ID');
//   }
// })
  




// app.get('/setCookie', (req, res) => {
//     var opts = {
//         maxAge:9000000
//     }
//     const firstName = req.query.firstName;
//     const lastName = req.query.lastName;
//     if (firstName && lastName) {
//         res.cookie("firstName", firstName, opts )
//             .cookie("lastName", lastName, opts)
//             .status(200)
//             .send("Query submitted, go to http://localhost:3000/readCookie")
//             .end()
//     } else {
//       res.status(404).end()
//     }
// }) 


// app.get('/readCookie', (req, res) => {
//     const nameToDisplay = [req.cookies.firstName , req.cookies.lastName]
//     if (nameToDisplay[0] !== undefined && nameToDisplay[1] !== undefined) {
//         res.send(`${nameToDisplay[0]} ${nameToDisplay[1]}`)
//         res.status(200).end()
//     } else {
//         res.send(`Please set cookie at http://localhost:3000/setCookie`)
//         res.status(403).end()
//     }

// })






app.listen(port, () => {
  console.log(`Knex Example Listening on port: ${port}`);
});