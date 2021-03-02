const express = require('express')
require('./db/mongoose')
const usersRouters = require('./routers/users')
const tasksRouters = require('./routers/tasks')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(usersRouters)
app.use(tasksRouters)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// This is Bcrypt example to learn how you work with bcryptjs

//const bcrypt = require('bcryptjs')
// const testForLearnBcrypt = async () =>{
//     const password = 'mohamed@2'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(hashedPassword)
//     const isMatch = await bcrypt.compare('mohamed@2', hashedPassword)
//     console.log(isMatch)
// }
// testForLearnBcrypt()

// This is jsonwebtoken example to learn how you work with jwt
// const jwt = require('jsonwebtoken')

// const testforjwt = async () => {
//     const token = jwt.sign({ _id: 'asd321' }, 'example', { expiresIn: '10 days' })
//     console.log(token)
//     const data = jwt.verify(token, 'example')
//     console.log(data)
// }

// testforjwt()

// const User = require('./models/users')


// const main = async () => {
//     const user = await User.findOne({ email: 'mohamed@email.com' })
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()