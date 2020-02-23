var express = require('express');
var app = express();
const port = 3000
const helmet = require('helmet')

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(helmet())
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
  }))
  
app.post('/test', (req, res) => {
    var obj = req.body

    for (let index = 0; index < obj.length; index++) {
        const element = obj.length[index];
        
    }
    res.end('finished')

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
