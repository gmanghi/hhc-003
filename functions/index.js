// const functions = require('firebase-functions');
// const admin = require('firebase-admin')
// admin.initializeApp(functions.config().firebase);
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });
// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//     host: 'smtp.sendgrid.net',
//     port: 465,
//     secure: true,
//     auth: {
//         user: '0nline.raffl3',
//         pass: 'dodgy.123'
//     }
// });

// exports.sendEmail = functions.firestore
//     .document('client/{clientId}/contract/{contractId}')
//     .onCreate((snap, context) => {
//         const clientId = context.params.clientId;

//         const db = admin.firestore()

//         return db.collection('client').doc(clientId)
//             .get()
//             .then(doc => {
//                 const client = doc.data()

//                 const mailOptions = {
//                     from: `0nline.raffl3@gmail.com`,
//                     to: snap.data().client_email,
//                     subject: 'contact form message',
//                     html: `<h1>Order Confirmation</h1>
//                      <p> <b>Email: </b>${snap.data().client_email} </p>`
//                 };
                
//                 return transporter.sendMail(mailOptions, (error, data) => {
//                     if (error) {
//                         console.log(error)
//                         return
//                     }
//                     console.log("Sent!",mailOptions)
//                 });
//             })
//             .then(() => console.log('email sent!'))
//             .catch(err => console.log(err))
//     })



// const SENDGRID_API_KEY = functions.config().sendgrid.key

// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(SENDGRID_API_KEY);

// exports.firestoreEmail = functions.firestore
//     .document('client/{clientId}/contract/{contractId}')
//         .onCreate((snapshot, context) => {
//             const clientId = context.params.clientId;

//             const db = admin.firestore()

//             return db.collection('client').doc(clientId)
//                 .get()
//                 .then(doc => {
//                     const client = doc.data()

//                     const msg = {
//                         to: client.client_email,
//                         from: 'hello@angularfirebase.com',
//                         subject: 'New Contract',
//                         templateId: 'd-38fdb774943d4fe5b3db840f50288a57',
//                         substitutionWrappers: ['{{','}}'],
//                         substitution: {
//                             name: client.client_account_name
//                         }
//                     };

//                     return sgMail.send(msg)
//                 })
//                 .then(() => console.log('email sent!'))
//                 .catch(err => console.log(err))
//         })

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
        user: '0nline.raffl3',
        pass: 'dodgy.123'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: '0nline Raffl3 <0nline.raffl3@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'I\'M A PICKLE!!!', // email subject
            html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                <br />
                <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});