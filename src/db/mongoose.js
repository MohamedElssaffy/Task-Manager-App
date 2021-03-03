const mongoose = require('mongoose')
const PRODUCTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zlo5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const url = process.env.NODE_ENV === 'production'?PRODUCTION_URL : process.env.LOCAL_URL 

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
})






// const me = new User({
//     name: 'Mohamed',
//     email: 'Mohamed@Email.com',
//     password: 'anything123',
//     age: 22
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((e) => {
//     console.log(e)
// })