const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ma7amad123410000@gmail.com',
        subject: 'Your Account Is Created',
        text: `your account is created successfully, ${name}.`
    })
}

const sendCancleEmail = async (email, name) => {
     sgMail.send({
         to: email,
         from: 'ma7amad123410000@gmail.com',
         subject: 'Your Account Is Removed Success',
         text: `your account is removed successfully, GoodBye ${name}. I hope to see you back soon`
     })
}


module.exports = {
    sendWelcomeEmail,
    sendCancleEmail
}