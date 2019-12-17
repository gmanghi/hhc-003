const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const firebase = require('firebase');
// const randomstring = require('randomstring');
const nodemailer = require('nodemailer');
const moment = require('moment');
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

exports.createUser = functions.firestore.document('users/{userId}').onCreate((snap, context) => {

    return new Promise((resolve, reject) => {
        const userId = context.params.userId;

        const usersRef = admin.firestore().collection('users').doc(userId)

        const details = snap.data();

        if(details.status == 'Created'){
            const password = 'pass123';
            functions.auth.createUserWithEmailAndPassword(details.email, password).then(user => {
                details.status = 'Verified'
                usersRef.update(details)
            }).catch(error => {
                details.status = error
                usersRef.update(details)
            })      
        }
    })
    
});


exports.createContract = functions.firestore.document('client/{clientId}/contract/{contractId}').onCreate((snap, context) => {

    return new Promise((resolve, reject) => {
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        const clientId = context.params.clientId;

        const contractId = context.params.contractId;

        const contractRef = admin.firestore().collection('client/'+clientId+'/contract/').doc(contractId)

        const details = snap.data();

        if(details.status == 'Pending'){
            const mailOptions = {
                from: 'Online Raffle <0nline.raffl3@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
                to: details.recipient_email,
                subject: 'Home Health Care - Contract', // email subject
                html: moment(details.createdOn).format('LL')+'<br /><br /><b>Client Name:</b> '+details.recipient_name+'<br /><b>Address:</b> '+details.recipient_address+'<br /><b>Contact number:</b> '+details.recipient_contact_number+'<br /><b>Email:</b> '+details.recipient_email+'<br /><br /><br /><b>Dear Ms/Mr. '+details.recipient_name+',</b><p>Home Health Care Placements, Inc. can deploy healthcare professionals (HCPs) for homecare and hospice for your love one, through our CareNET Unit, (Caregiver/Nurse Sourcing).</p><p>A Nurse Case Manager will be your point of contact to coordinate the needs of your love one. We involve families in the Plan of Care in coordination with your Attending Physician.</p><p>Our staff are trained in long term care, are licensed HCPs with NBI and medical clearance.</p><p>Attached is the document of our deployment proposal.</p><p>Should you have any concerns, please feel free to get in touch with your Nurse Case Manager.</p><br /><br />Sincerely,<br /><br /><b>Nurse Case Manager:</b> '+details.nurse_case_manager+'<br /><b>Position:</b> '+details.position+'<br /><b>Contact Number:</b> '+details.contact_number+'',
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
