
//must have app.use(fileUpload) above
const validateMiddleware = (req, res, next) => {
    if(req.files == null || req.body.title == null || req.body.description == null){
        console.log('Something went wrong...')
        return res.redirect('/posts/new/')
    }
    next()
}
app.use('/posts/store/', validateMiddleware)


