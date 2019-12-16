const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin:true});
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '0nline.raffl3@gmail.com',
        pass: 'dodgy.123'
    }
});

exports.createContract = functions.firestore.document('client/{clientId}/contract/{contractId}').onCreate((snap, context) => {

    return new Promise((resolve, reject) => {
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        const clientId = context.params.clientId;

        const contractId = context.params.contractId;

        const contractRef = admin.firestore().collection('client/'+clientId+'/contract/').doc(contractId)

        const details = snap.data();

        if(details.status == 'pending'){
            const mailOptions = {
                from: 'Online Raffle <0nline.raffl3@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
                to: details.sentto,
                subject: 'Home Health Care - Contract', // email subject
                html: 'Testing email sending and functionality.',
                attachments: [ 
                    {   // use URL as an attachment
                        filename: 'contract.pdf',
                        path: details.url
                    }
                ]
            };
    
            return transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    details.status = error
                    
                    console.log('this is an error',error);

                    contractRef.update(details)

                    reject(error)
                } 
                else {
                    details.status = 'Sent'

                    console.log('Email sent: ' + info.response);

                    resolve(contractRef.update(details))
                }
            });
        }

        // access a particular field as you would any JS property
        // const status = details.status;

        // perform desired operations ...
        // return 0;
        
    })
    
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'Online Raffle <0nline.raffl3@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
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
