const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

//app use
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));


//app set
app.set('views', './views')
app.set('view engine', 'ejs')


//app listen
app.listen(port, function(){
    console.log(`server is running: ${port }`)
})

const  data = {
    email : "admin@gmail.com",
    password : "admin123"
}


//routing
app.post('/login', (req, res)=>{
    if(req.body.email == data.email && req.body.password == data.password){
        req.session.user = req.body.email;
        res.redirect('/hompage');
        //res.end("Login Successful...!");
    }else{
        res.end("Invalid Username")
    }
})

app.get('/', (req,res)=>{
    res.render('login')
})



app.get('/hompage', function(request, response){
    response.render('hompage')

})

app.get('/game', function(request, response){
    response.render('game')

})

