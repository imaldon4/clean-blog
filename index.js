const express = require('express') 
const app = new express() 
const ejs = require('ejs')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 4000
const validateMiddleware = require('./middleware/validationMiddleware')
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginUserController = require('./controllers/loginUser')

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

app.use('/posts/store', validateMiddleware)

app.get('/posts/new', newPostController)
app.get('/', homeController)
app.get('/post/:id', getPostController)
app.get('/auth/register', newUserController)

app.post('/posts/store', storePostController)
app.post('/users/register', storeUserController)
app.post('/users/login', loginUserController)

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`) })