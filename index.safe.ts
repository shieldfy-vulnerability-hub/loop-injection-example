import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
 
let app = express()

app.use(helmet())
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
  }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const port = 3000

app.post('/test', (req, res) => {
    var obj = req.body

    if (!(obj instanceof Array)) {
        res.end('error')
        return
    }

    for (let index = 0; index < obj.length; index++) {
        const element = obj.length[index];
        
    }
    res.end('finished')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))