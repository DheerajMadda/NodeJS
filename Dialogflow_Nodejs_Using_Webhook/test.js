const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/getInfo', (req, res) => {

    var queryString = req.body.queryResult.queryText
    // var queryKey =  req.body.queryResult.parameters.key
    console.log(queryString)
    console.log("---------")
    console.log(queryKey)
    

    return res.json(
        {"payload": 
            {"google": 
                {"richResponse": 
                    {"items":[
                        {"simpleResponse": 
                            {"textToSpeech": "Hello from Nodejs"}
                        }]
                    }
                }
            }
        }
    )

});


app.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});