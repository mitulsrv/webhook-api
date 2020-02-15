const mongoose = require('mongoose')
const URL = "mongodb://webhook:webhook@139.59.5.96:27017/webhook"      //Database://Username:password@ipaddress_remote:port/database
mongoose.Promise = global.Promise

module.exports = () =>{
    return mongoose.connect(URL, {
        useNewUrlParser: true
    }).then(
        ()=>{
            console.log("Database connection is established")
        }
    ).catch(err => {
        console.log("Database connection error", err)
        process.exit()
    })
}
