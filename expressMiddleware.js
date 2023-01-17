
const express = require('express')

const app  = express()
app.use(logger)

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/contact",(req,res) => {
    res.send("contact page")
})

app.get('/about', secure, (req, res) => {
    res.send('About page!')
  })

//dcalre middleware function
function logger( req,res,next) {
    console.log('i have received a request')
    next()
}

function secure(req,res,next){
    console.log("im the security dog !!!")
    next()
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})