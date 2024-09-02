var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://admin:adminadmin@cluster0.zyqippa.mongodb.net/mongodbut?retryWrites=true&w=majority')
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catsRouter = require('./routes/cats');
var tasksRouter = require('./routes/tasks');
var dogsRouter = require('./routes/dogs');
var booksRouter = require('./routes/books');
var carsRouter = require('./routes/cars');
var moviesRouter = require('./routes/movies');
var employeesRouter = require('./routes/employees');
var eventsRouter = require('./routes/events');
var productsRouter = require('./routes/products');
var reviewsRouter = require('./routes/reviews');
var musicalbumsRouter = require('./routes/musicalbums');
var sportteamsRouter = require('./routes/sportteams');
var playlistsRouter = require('./routes/playlists');
var coursesRouter = require('./routes/courses');
var citiesRouter = require('./routes/cities');
var attendancesRouter = require('./routes/attendances');
var commentsRouter = require('./routes/comments');
var photosRouter = require('./routes/photos');
var videogamesRouter = require('./routes/videogames');
var podcastsRouter = require('./routes/podcasts');
var restaurantsRouter = require('./routes/restaurants');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//http://localhost:3000/cats/
app.use('/cats', catsRouter);
app.use('/tasks', tasksRouter);
app.use('/dogs', dogsRouter);
app.use('/books', booksRouter);
app.use('/cars', carsRouter);
app.use('/movies', moviesRouter);
app.use('/employees', employeesRouter);
app.use('/events', eventsRouter);
app.use('/products', productsRouter);
app.use('/reviews', reviewsRouter);
app.use('/musicalbums', musicalbumsRouter);
app.use('/sportteams', sportteamsRouter);
app.use('/playlists', playlistsRouter);
app.use('/courses', coursesRouter);
app.use('/cities', citiesRouter);
app.use('/attendances', attendancesRouter);
app.use('/comments', commentsRouter);
app.use('/photos', photosRouter);
app.use('/videogames', videogamesRouter);
app.use('/podcasts', podcastsRouter);
app.use('/restaurants', restaurantsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
