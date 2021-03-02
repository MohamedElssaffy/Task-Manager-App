const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
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