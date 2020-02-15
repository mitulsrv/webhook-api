const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('./database/connection')
const app = express()
const WebHookModel = require('./database/WebHook.model')


MongoClient().then(
    () => {
        console.log('Connected to mongoDB')
    }
).catch(console.log)


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Welcome Mitul SRV, Have a nice day!") 
})

app.get('/api/webhook', (req, res) => {
    WebHookModel
    .find()
    .then(
        (wh) => {
            res.json({
                status: true,
                data: wh,
                message: "Data fetch successfully"
            })
        }
    ).catch(
        e => {
            res.json({
                status: false,
                data: null,
                message: "Something went wrong"
            })
        }
    )
})

app.post('/api/webhook', (req, res) => {
    let body = req.body

    WebHookModel
        .create(body)
        .then(
            (wh) => {
                res.json({
                    status: true,
                    data: wh,
                    message: "Data addedd successfully"
                })
            }
        ).catch(
            e => {
                res.json({
                    status: false,
                    data: null,
                    message: "Something went wrong"
                })
            }
        )
})

app.listen(3001, () => {
    console.log("Server is listning port 3000")
})
