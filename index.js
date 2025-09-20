const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())



const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yukeshwaran2@gmail.com",
        pass: "gcpg bxhp khga nzwe",
    },
});



app.post("/sendemail", function (req, res) {


    var msg = req.body.msg
    var emailList = req.body.emailList

    new Promise( async function(resolve, reject){
        
        try {

        for (var i = 0; i < emailList.length; i++) {
            await transporter.sendMail(
                {
                    from: "yukeshwaran2@gmail.com",
                    to: emailList[i],
                    subject: "A message from bulk Mail App",
                    text: msg
                },


            )
            console.log("sent to :"+emailList[i]);
            
        }

        resolve("Success")
    }

    catch(error)
    {
        reject("Failed")
    }
    
    }).then(function(){
        res.send(true)
    }).catch(function(){
        res.send(false)
    })

    

})


app.listen(5000, function () {
    console.log("Server Started...");

})

