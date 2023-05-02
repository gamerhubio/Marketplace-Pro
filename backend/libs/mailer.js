const nodemailer = require("nodemailer")

  const sendConfirmationEmail = ({ toUser, hash }) => {
  
  //@ts-ignore
    return new Promise(( res, rej ) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_GMAIL_USER,
            pass: process.env.NEXT_PUBLIC_GMAIL_PWD
        }
    })
        
        const message = {
            from: process.env.NEXT_PUBLIC_GMAIL_USER,
           //production
            to: toUser.email,
            //dev
            //to: process.env.NEXT_PUBLIC_GMAIL_USER,
            subject: "Email verification - GAMER-HUB",
            html: `
                <h3>Hello ${toUser.username}</h3>
                <p>Welcome to the best online web3 game aggregator. Just one more step...</p>
                <p>to verify your email, please follow this link: <a target="_" href="${process.env.NEXT_PUBLIC_BASE_URL}/users/${toUser.email}?pointer=${hash}">Activate</a></p>
                <p>Thank you.</p>

                
            `
        }

        transporter.sendMail(message, (err, info) => {
            if (err) {
                rej(err)
            } else {
                res(info)
            }
        })
})
}

  const sendSubscriptionMail = ({ toUser}) => {
  
  //@ts-ignore
    return new Promise(( res, rej ) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_GMAIL_USER,
            pass: process.env.NEXT_PUBLIC_GMAIL_PWD
        }
    })
        
        const message = {
            from: process.env.NEXT_PUBLIC_GMAIL_USER,
           //production
            to: toUser.email,
            //dev
            //to: process.env.NEXT_PUBLIC_GMAIL_USER,
            subject: "Subscription - GAMER-HUB",
            html: `
                <h3>Hello ${toUser.username}</h3>
                <p>Your subscription has successfully been recorded, please enjoy the ride.</p>
                <p>Your subscription starts on ${new Date(toUser.startDate)}.</p>
                <p>Your subscription expires on ${new Date(toUser.endDate)}.</p>
                <p>Thank you.</p>
                
            `        }

        transporter.sendMail(message, (err, info) => {
            if (err) {
                rej(err)
            } else {
                res(info)
            }
        })
})
}

module.exports = {
    sendConfirmationEmail,
    sendSubscriptionMail
}